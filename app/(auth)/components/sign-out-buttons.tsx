'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useClerk } from '@clerk/clerk-react'

import { catchClerkError } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function SignOutButtons() {
	const router = useRouter()
	const { signOut } = useClerk()
	const [isPending, startTransition] = React.useTransition()

	function onSignOut() {
		startTransition(async () => {
			try {
				await signOut(() =>
					router.push(`${window.location.origin}/?redirect=false`)
				)
			} catch (err) {
				catchClerkError(err)
			}
		})
	}

	return (
		<div className="flex w-full items-center space-x-2">
			<Button
				aria-label="Log out"
				size="sm"
				className="w-full"
				onClick={onSignOut}
				disabled={isPending}
			>
				{isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
				Sign out
			</Button>

			<Button
				aria-label="Go back to the previous page"
				variant="outline"
				size="sm"
				className="w-full"
				onClick={() => router.back()}
				disabled={isPending}
			>
				Go back
			</Button>
		</div>
	)
}
