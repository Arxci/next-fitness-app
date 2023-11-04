import { Shell } from '@/components/shells/shell'
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'
import { Icons } from '@/components/icons'

export default function SSOCallbackPage() {
	return (
		<Shell className="max-w-lg">
			<div
				role="status"
				aria-label="Loading"
				aria-describedby="loading-description"
				className="flex items-center justify-center"
			>
				<AuthenticateWithRedirectCallback />
				<Icons.spinner
					className="h-8 w-8 animate-spin"
					aria-hidden="true"
				/>
			</div>
		</Shell>
	)
}
