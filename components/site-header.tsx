import Link from 'next/link'

import { MainNav } from './main-nav'
import { Button } from './ui/button'
import { MainNavSearch } from './main-nav-search'

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<MainNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<MainNavSearch />
					</div>
					<nav className="flex items-center">
						<Button
							asChild
							size="sm"
						>
							<Link
								href="#"
								rel="noreferrer"
							>
								Sign In
							</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	)
}