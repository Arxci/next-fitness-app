import Link from 'next/link'

import { MainNav } from './main-nav'
import { Button } from '../../../../components/ui/button'
import { CartSheet } from '../cart/cart-sheet'
import { CourseSearch } from '../course-search'
import { User } from '@clerk/nextjs/server'
import { UserButton } from '../user-button'
import { CreateCourse } from '../create-course'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from '@/app/(root)/components/theme-toggle'

interface SiteHeaderProps {
	user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background ">
			<div className="container flex h-14 items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center space-x-2 justify-end">
					<div className="hidden lg:block w-[300px] h-9 ">
						<CourseSearch />
					</div>

					<nav className="flex items-center space-x-2">
						<ModeToggle />
						{user && <CreateCourse />}
						<CartSheet />
						{user ? (
							<UserButton user={user} />
						) : (
							<Button
								asChild
								size="sm"
							>
								<Link href="/sign-in">Sign In</Link>
							</Button>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}
