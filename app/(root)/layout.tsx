import { currentUser } from '@clerk/nextjs'

import { SiteHeader } from './components/layout/site-header'
import { MobileSearch } from './components/layout/mobile-search'

interface RootLayoutProps {
	children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
	const user = await currentUser()

	return (
		<div className="relative flex min-h-screen flex-col">
			<SiteHeader user={user} />
			<MobileSearch />
			{children}
		</div>
	)
}
