import type { Metadata } from 'next'

import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { SignOutButtons } from '../components/sign-out-buttons'

export const metadata: Metadata = {
	title: 'Sign out',
	description: 'Sign out of your account',
}

export default function SignOutPage() {
	return (
		<Shell className="max-w-xs">
			<PageHeader
				id="sign-out-page-header"
				aria-labelledby="sign-out-page-header-heading"
				className="text-center"
			>
				<PageHeaderHeading size="sm">Sign out</PageHeaderHeading>
				<PageHeaderDescription size="sm">
					Are you sure you want to sign out?
				</PageHeaderDescription>
			</PageHeader>
			<SignOutButtons />
		</Shell>
	)
}