import { User } from '@clerk/nextjs/server'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as z from 'zod'
import { isClerkAPIResponseError } from '@clerk/nextjs'
import { toast } from 'sonner'

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
		return toast.error(err.errors[0]?.longMessage ?? unknownErr)
	} else {
		return toast.error(unknownErr)
	}
}

export function formatBytes(
	bytes: number,
	decimals = 0,
	sizeType: 'accurate' | 'normal' = 'normal'
) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB']
	if (bytes === 0) return '0 Byte'
	const i = Math.floor(Math.log(bytes) / Math.log(1024))
	return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
		sizeType === 'accurate' ? accurateSizes[i] ?? 'Bytest' : sizes[i] ?? 'Bytes'
	}`
}
