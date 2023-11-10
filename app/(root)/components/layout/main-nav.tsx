'use client'

import { forwardRef } from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Icons } from '@/components/icons'

export function MainNav() {
	return (
		<div className="mr-4 hidden lg:flex">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2"
			>
				<Icons.logo
					className="h-6 w-6"
					aria-hidden="true"
				/>
				<span className="hidden text-lg font-bold sm:inline-block">
					{siteConfig.name}
				</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Home</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Link
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md focus:shadow-md dark:focus-within:ring-2 dark:focus-within:ring-ring dark:ring-offset-background dark:focus-within:ring-offset-2 dark:hover:ring-2 dark:hover:ring-ring dark:hover:ring-offset-2"
											href="/"
										>
											<Icons.logo
												className="h-6 w-6"
												aria-hidden="true"
											/>
											<div className="mb-2 mt-4 text-lg font-medium">
												{siteConfig.name}
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												{siteConfig.description}
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="#"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
								<ListItem
									href="#"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
								<ListItem
									href="#"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					{siteConfig.navLinks.map((item) => (
						<NavigationMenuItem key={item.title}>
							<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
									{item.items.map((item) => (
										<ListItem
											key={item.title}
											title={item.title}
											href={item.href}
										>
											{item.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

const ListItem = forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					href={String(href)}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
