'use client'

import React, { useEffect, useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import axios from 'axios'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { profileFormSchema } from '@/lib/validations/auth'
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

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function UserProfileForm({
	user,
}: {
	user: {
		username: string
		firstName: string
		lastName: string
	}
}) {
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: useMemo(() => {
			return { ...user }
		}, [user]),
	})

	function onSubmit(data: ProfileFormValues) {
		console.log('hello')

		startTransition(async () => {
			try {
				await axios.post('/api/user/update', data)

				router.refresh()
				toast.success('Profile updated.')
			} catch (err: any) {
				toast.success('Whoops, failed to update profile,', {
					description: err.response.data,
				})
			}
		})
	}

	useEffect(() => {
		form.reset({ ...user })
	}, [user])

	return (
		<Form {...form}>
			<form
				id="profile-form"
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="username"
					disabled={isPending}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder="RodneyMullen123"
									autoComplete="username"
									type="text"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name. It can be your real name or a
								pseudonym.
							</FormDescription>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid lg:grid-cols-2 gap-2">
					<FormField
						control={form.control}
						name="firstName"
						disabled={isPending}
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Rodney"
										autoComplete="given-name"
										type="text"
										{...field}
									/>
								</FormControl>
								<FormDescription>This is your first name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						disabled={isPending}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Mullen"
										autoComplete="family-name"
										type="text"
										{...field}
									/>
								</FormControl>
								<FormDescription>This is your last name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="space-x-2">
					<AlertDialog>
						<AlertDialogTrigger disabled={isPending}>
							<Button
								type="button"
								disabled={isPending}
							>
								{isPending && (
									<Icons.spinner
										className="mr-2 h-4 w-4 animate-spin"
										aria-hidden="true"
									/>
								)}
								Save Changes
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will update your profile.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									form="profile-form"
									type="submit"
								>
									Continue
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
					{form.formState.isDirty && (
						<Button
							type="button"
							variant="ghost"
							disabled={isPending || !form.formState.isDirty}
							onClick={() => form.reset()}
						>
							Cancel
						</Button>
					)}
				</div>
			</form>
		</Form>
	)
}
