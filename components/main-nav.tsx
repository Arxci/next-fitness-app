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
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const support: { title: string; href: string; description: string }[] = [
	{
		title: 'FAQ',
		href: '#',
		description: `Quick answers for navigating ${siteConfig.name}. Support your fitness journey seamlessly.`,
	},
	{
		title: 'Customer Service',
		href: '#',
		description: 'Get in contact with one of our representatives today.',
	},
]

export function MainNav() {
	return (
		<div className="mr-4 hidden md:flex">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2"
			>
				<span className="hidden font-bold sm:inline-block">
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
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/"
										>
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
									href="/docs"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
								<ListItem
									href="/docs/installation"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
								<ListItem
									href="/docs/primitives/typography"
									title="Work in progress"
								>
									Work in progress...
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/docs"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Newsfeed
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Support</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{support.map((item) => (
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
