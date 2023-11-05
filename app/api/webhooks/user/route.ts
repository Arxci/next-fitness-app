import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { WebhookEvent } from '@clerk/nextjs/server'
import { Webhook } from 'svix'
import prismaDB from '@/lib/prisma'

export const POST = async (req: Request) => {
	const WEBHOOK_SECRET = process.env.USER_WEBHOOK_SECRET

	if (!WEBHOOK_SECRET) {
		throw new Error(
			'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
		)
	}

	// Get the headers
	const headerPayload = headers()
	const svix_id = headerPayload.get('svix-id')
	const svix_timestamp = headerPayload.get('svix-timestamp')
	const svix_signature = headerPayload.get('svix-signature')

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response('Error occured -- no svix headers', {
			status: 400,
		})
	}

	// Get the body
	const payload = await req.json()
	const body = JSON.stringify(payload)

	// Create a new SVIX instance with your secret.
	const wh = new Webhook(WEBHOOK_SECRET)

	let evt: WebhookEvent

	// Verify the payload with the headers
	try {
		evt = wh.verify(body, {
			'svix-id': svix_id,
			'svix-timestamp': svix_timestamp,
			'svix-signature': svix_signature,
		}) as WebhookEvent
	} catch (err) {
		console.error('Error verifying webhook:', err)
		return new Response('Error occured', {
			status: 400,
		})
	}

	const eventType = evt.type

	switch (eventType) {
		case 'user.created': {
			const {
				id,
				image_url,
				first_name,
				last_name,
				username,
				email_addresses,
			} = evt.data

			const email = email_addresses[0].email_address

			const data = {
				id,
				username,
				firstName: first_name,
				lastName: last_name,
				email,
				image: image_url,
			}

			const user = await prismaDB.user.create({
				data,
			})

			return NextResponse.json(user)
		}
		case 'user.deleted': {
			const { id } = evt.data

			const user = await prismaDB.user.delete({
				where: {
					id,
				},
			})

			return NextResponse.json(user)
		}
		default: {
			return new NextResponse('Internal error', { status: 400 })
		}
	}
}
