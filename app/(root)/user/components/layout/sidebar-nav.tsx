'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string
		title: string
	}[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
	const pathname = usePathname()

	return (
		<nav
			className={cn(
				'hidden lg:flex lg:flex-col lg:space-x-0 lg:space-y-1',
				className
			)}
			{...props}
		>
			<ul>
				{items.map((item) => (
					<li className="key={item.href}">
						<Link
							href={item.href}
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								pathname === item.href
									? 'bg-muted hover:bg-muted'
									: 'hover:bg-transparent hover:underline',
								'justify-start'
							)}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
