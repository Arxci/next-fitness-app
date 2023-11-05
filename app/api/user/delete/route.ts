import { NextResponse } from 'next/server'

import { isValidUser } from '@/lib/utils'
import { User } from '@prisma/client'
import { clerkClient } from '@clerk/nextjs'

export const PATCH = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) {
			return validUser
		}

		const user: User = await validUser.json()

		const updatedUser = await clerkClient.users.deleteUser(user.id)

		return NextResponse.json(updatedUser)
	} catch (err) {
		console.log('USER_UPDATE_PATCH ', err)
		return new NextResponse('Internal error', { status: 400 })
	}
}
