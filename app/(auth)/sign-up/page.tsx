import { type Metadata } from 'next'
import Link from 'next/link'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Shell } from '@/components/shells/shell'
import { OAuthSignIn } from '../components/oauth-signin'
import { SignUpForm } from '../components/forms/sign-up-form'

export const metadata: Metadata = {
	title: 'Sign Up',
	description: 'Sign up for an account',
}

export default async function SignUpPage() {
	return (
		<Shell className="max-w-xl">
			<Card className="border-none shadow-none">
				<CardHeader className="space-y-1 px-0 text-center">
					<CardTitle className="text-2xl">Sign up</CardTitle>
					<CardDescription>
						Choose your preferred sign up method
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4  px-0">
					<OAuthSignIn />
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>
					<SignUpForm />
				</CardContent>
				<CardFooter className=" px-0">
					<div className="text-sm text-muted-foreground">
						<span className="mr-1 hidden sm:inline-block">
							Already have an account?
						</span>
						<Link
							aria-label="Sign in"
							href="/sign-in"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign in
						</Link>
					</div>
				</CardFooter>
			</Card>
		</Shell>
	)
}
