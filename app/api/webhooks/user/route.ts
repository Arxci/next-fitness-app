import { IncomingHttpHeaders } from 'http'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { WebhookEvent } from '@clerk/nextjs/server'
import { Webhook, WebhookRequiredHeaders } from 'svix'
import prismaDB from '@/lib/prisma'

const webhookSecret = process.env.USER_WEBHOOK_SECRET || ''

export const POST = async (req: Request) => {
	const payload = await req.json()
	const headersList = headers()
	const heads = {
		'svix-id': headersList.get('svix-id'),
		'svix-timestamp': headersList.get('svix-timestamp'),
		'svix-signature': headersList.get('svix-signature'),
	}

	const wh = new Webhook(webhookSecret)

	let evt: WebhookEvent

	try {
		evt = wh.verify(
			JSON.stringify(payload),
			heads as IncomingHttpHeaders & WebhookRequiredHeaders
		) as WebhookEvent
	} catch (err) {
		console.log('WEBHOOKS_USER ', err)
		return new NextResponse('Internal error', { status: 400 })
	}

	const eventType = evt.type

	if (eventType === 'user.created') {
		const { id, image_url, first_name, last_name, username, email_addresses } =
			evt.data

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
	} else if (eventType === 'user.deleted') {
		const { id } = evt.data

		const user = await prismaDB.user.delete({
			where: {
				id,
			},
		})

		return NextResponse.json(user)
	}

	return new NextResponse('Internal error', { status: 400 })
}
