import { Shell } from '@/components/shells/shell'
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'
import { Icons } from '@/components/icons'

export default function SSOCallbackPage() {
	return (
		<>
			<AuthenticateWithRedirectCallback />
			<Shell className="max-w-lg">
				<div
					role="status"
					aria-label="Loading"
					aria-describedby="loading-description"
					className="flex items-center justify-center gap-2"
				>
					<p className="text-muted-foreground">Redirecting</p>
					<Icons.spinner
						className="h-4 w-4 animate-spin"
						aria-hidden="true"
					/>
				</div>
			</Shell>
		</>
	)
}
