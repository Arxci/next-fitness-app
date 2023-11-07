import Link from 'next/link'

import { User } from '@clerk/nextjs/server'
import { Button } from '@/components/ui/button'
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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/components/icons'

interface UserButtonProps {
	user: User
}

export function UserButton({ user }: UserButtonProps) {
	const initials = `${user?.firstName?.charAt(0) ?? ''}${
		user?.lastName?.charAt(0) ?? ''
	}`
	const email = getUserEmail(user)

	return (
		<TooltipProvider>
			<Tooltip>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<TooltipTrigger asChild>
							<Button
								variant="secondary"
								className="relative h-10 w-10 rounded-full"
							>
								<Avatar className="h-10 w-10">
									<AvatarImage
										src={user.imageUrl}
										alt={user.username ?? ''}
									/>
									<AvatarFallback>{initials}</AvatarFallback>
								</Avatar>
							</Button>
						</TooltipTrigger>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-56"
						align="end"
						forceMount
					>
						<DropdownMenuLabel className="font-normal flex space-x-2 items-center">
							<Avatar className="h-10 w-10">
								<AvatarImage
									src={user.imageUrl}
									alt={user.username ?? ''}
								/>
								<AvatarFallback>{initials}</AvatarFallback>
							</Avatar>
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">
									{user.username ?? user.firstName + ' ' + user.lastName}
								</p>
								<p className="text-xs leading-none text-muted-foreground">
									{email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href="/user">
									<Icons.user
										className="mr-2 h-4 w-4"
										aria-hidden="true"
									/>
									Profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/user/settings">
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
				<TooltipContent>
					<p>User profile</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
