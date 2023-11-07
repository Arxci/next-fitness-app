'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import axios from 'axios'
import { toast } from 'sonner'
import { useClerk } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Icons } from '@/components/icons'
import { Separator } from '@/components/ui/separator'

export function DeleteAccount() {
	const [isPending, startTransition] = React.useTransition()
	const { signOut } = useClerk()
	const router = useRouter()

	const onDeleteAccount = () => {
		startTransition(async () => {
			try {
				await axios.patch('/api/user/delete')

				await signOut(() =>
					router.push(`${window.location.origin}/?redirect=false`)
				)

				toast.success('Account deleted.')
			} catch (err: any) {
				toast.success('Whoops, failed to delete account.,', {
					description: err.response.data,
				})
			}
		})
	}

	return (
		<div className="w-full space-y-6">
			<div>
				<h3 className="text-lg font-medium text-destructive">Delete Account</h3>
				<p className="text-sm text-muted-foreground">
					Once you delete your account, there is no going back.
				</p>
			</div>
			<Separator />

			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button
						variant="destructive"
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className="mr-2 h-4 w-4 animate-spin"
								aria-hidden="true"
							/>
						)}
						Delete your account
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={onDeleteAccount}>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
