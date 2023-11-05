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
				toast.success('Whoops, failed to update profile,', {
					description: err.response.data,
				})
			}
		})
	}

	return (
		<div className="bg-destructive/20 p-6 w-full rounded-lg flex items-center justify-between">
			<div className="space-y-2 text-destructive">
				<h4 className="font-bold text-lg">Delete Account</h4>
				<p>Permanently delete your account</p>
			</div>

			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="destructive">
						{isPending && (
							<Icons.spinner
								className="mr-2 h-4 w-4 animate-spin"
								aria-hidden="true"
							/>
						)}
						Delete
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