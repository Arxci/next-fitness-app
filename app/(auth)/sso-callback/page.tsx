import { type HandleOAuthCallbackParams } from '@clerk/types'

import { Shell } from '@/components/shells/shell'
import SSOCallback from '../components/sso-callback'

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export interface SSOCallbackPageProps {
	searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({
	searchParams,
}: SSOCallbackPageProps) {
	return (
		<Shell className="max-w-lg">
			<SSOCallback searchParams={searchParams} />
		</Shell>
	)
}
