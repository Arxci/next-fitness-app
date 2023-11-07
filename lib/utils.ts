import { NextResponse } from 'next/server'

import { User } from '@clerk/nextjs/server'
import { auth, isClerkAPIResponseError } from '@clerk/nextjs'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as z from 'zod'
import { toast } from 'sonner'

import prismaDB from './prisma'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getUserEmail(user: User | null) {
	const email =
		user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
			?.emailAddress ?? ''

	return email
}

export function catchError(err: unknown) {
	if (err instanceof z.ZodError) {
		const errors = err.issues.map((issue) => {
			return issue.message
		})
		return toast(errors.join('\n'))
	} else if (err instanceof Error) {
		return toast(err.message)
	} else {
		return toast('Something went wrong, please try again later.')
	}
}

export function catchClerkError(err: unknown) {
	const unknownErr = 'Something went wrong, please try again later.'

	if (err instanceof z.ZodError) {
		const errors = err.issues.map((issue) => {
			return issue.message
		})
		return toast(errors.join('\n'))
	} else if (isClerkAPIResponseError(err)) {
		if (
			err.errors[0]?.longMessage ===
			"`reset_password_email_code` isn't allowed for `strategy` when user's password is not set."
		) {
			return toast.error('Account is registered under a separate provider.', {
				description: ' Password cannot be changed.',
			})
		} else {
			return toast.error(err.errors[0]?.longMessage ?? unknownErr)
		}
	} else {
		return toast.error(unknownErr)
	}
}

export async function isValidUser(): Promise<NextResponse> {
	const { userId: id } = auth()

	if (!id) {
		return new NextResponse('User not authorized.', { status: 401 })
	}

	const user = await prismaDB.user.findFirst({
		where: {
			id,
		},
	})

	// Validate that session user is valid
	if (!user) {
		return new NextResponse('User not authenticated.', {
			status: 401,
		})
	}

	return NextResponse.json(user)
}
