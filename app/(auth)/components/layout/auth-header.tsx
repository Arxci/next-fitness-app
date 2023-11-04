import Link from 'next/link'

import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function AuthHeader() {
	return (
		<header className="md:hidden sticky top-0 z-50 w-full ">
			<div className="container flex h-14 items-center">
				<Link
					href="/"
					className=" flex items-center text-lg font-bold tracking-tight"
				>
					<Icons.logo
						className="mr-2 h-6 w-6"
						aria-hidden="true"
					/>
					<span>{siteConfig.name}</span>
				</Link>
			</div>
		</header>
	)
}
