import { NextResponse } from 'next/server'

import { isValidUser } from '@/lib/utils'
import { User } from '@prisma/client'
import { profileFormSchema } from '@/lib/validations/auth'
import { clerkClient } from '@clerk/nextjs'

export const POST = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) {
			return validUser
		}

		const user: User = await validUser.json()

		// parse the data sent to the API with the zod schema
		const body: { username: string; firstName: string; lastName: string } =
			await req.json()

		try {
			await profileFormSchema.parseAsync(body)
		} catch (err) {
			return new NextResponse('Please verify the information is correct.', {
				status: 400,
			})
		}

		const updatedUser = await clerkClient.users.updateUser(user.id, { ...body })

		return NextResponse.json(updatedUser)
	} catch (err) {
		console.log('USER_UPDATE_PATCH ', err)
		return new NextResponse('Internal error', { status: 400 })
	}
}
