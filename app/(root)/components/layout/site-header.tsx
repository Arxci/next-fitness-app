import Link from 'next/link'

import { MainNav } from './main-nav'
import { Button } from '../../../../components/ui/button'
import { CartSheet } from '../cart/cart-sheet'
import { CourseSearch } from '../course-search'
import { User } from '@clerk/nextjs/server'
import { UserButton } from '../user-button'

interface SiteHeaderProps {
	user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<MainNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-[300px] ">
						<CourseSearch />
					</div>
					<nav className="flex items-center space-x-2">
						<CartSheet />

						{user ? (
							<UserButton user={user} />
						) : (
							<Button asChild>
								<Link href="/sign-in">Sign In</Link>
							</Button>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}
