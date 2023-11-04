import Link from 'next/link'

import { SignInButton } from '@clerk/nextjs'

import { MainNav } from './main-nav'
import { Button } from '../../../../components/ui/button'
import { CartSheet } from '../cart/cart-sheet'
import { CourseSearch } from '../course-search'
import { User } from '@clerk/nextjs/server'
import { getUserEmail } from '@/lib/utils'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/components/icons'

interface SiteHeaderProps {
	user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
	const initials = `${user?.firstName?.charAt(0) ?? ''}${
		user?.lastName?.charAt(0) ?? ''
	}`
	const email = getUserEmail(user)

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
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="secondary"
										className="relative h-8 w-8 rounded-full"
									>
										<Avatar className="h-8 w-8">
											<AvatarImage
												src={user.imageUrl}
												alt={user.username ?? ''}
											/>
											<AvatarFallback>{initials}</AvatarFallback>
										</Avatar>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-56"
									align="end"
									forceMount
								>
									<DropdownMenuLabel className="font-normal flex space-x-2">
										<Avatar className="h-8 w-8">
											<AvatarImage
												src={user.imageUrl}
												alt={user.username ?? ''}
											/>
											<AvatarFallback>{initials}</AvatarFallback>
										</Avatar>
										<div className="flex flex-col space-y-1">
											<p className="text-sm font-medium leading-none">
												{user.firstName} {user.lastName}
											</p>
											<p className="text-xs leading-none text-muted-foreground">
												{email}
											</p>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem asChild>
											<Link href="#">
												<Icons.user
													className="mr-2 h-4 w-4"
													aria-hidden="true"
												/>
												Account
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href="#">
												<Icons.settings
													className="mr-2 h-4 w-4"
													aria-hidden="true"
												/>
												Settings
											</Link>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										asChild
										className="w-full"
									>
										<Link href="/sign-out">
											<Icons.exit
												className="mr-2 h-4 w-4"
												aria-hidden="true"
											/>
											Log out
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button asChild>
								<SignInButton>
									<Link href="/sign-in">Sign In</Link>
								</SignInButton>
							</Button>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}
