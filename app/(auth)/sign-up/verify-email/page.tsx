import { type Metadata } from 'next'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { VerifyEmailForm } from '../../components/forms/verify-email-form'
import { Shell } from '@/components/shells/shell'

export const metadata: Metadata = {
	title: 'Verify Email',
	description: 'Verify your email address to continue with your sign up',
}

export default function VerifyEmailPage() {
	return (
		<Shell className="max-w-lg">
			<Card className="border-none shadow-none">
				<CardHeader className="space-y-1 px-0">
					<CardTitle className="text-2xl">Verify email</CardTitle>
					<CardDescription>
						Verify your email address to complete your account creation
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4 px-0">
					<VerifyEmailForm />
				</CardContent>
			</Card>
		</Shell>
	)
}
