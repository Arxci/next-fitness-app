import Link from 'next/link'

import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function AuthHeader() {
	return (
		<header className="lg:hidden border-b">
			<div className="container flex h-14 items-center">
				<Link
					href="/"
					className=" flex items-center text-lg font-bold tracking-tight"
				>
					<Icons.logo
						className="mr-2 h-6 w-6"
						aria-hidden="true"
					/>
					<span className="text-lg font-bold ">{siteConfig.name}</span>
				</Link>
			</div>
		</header>
	)
}
