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

export function MobileNav({ className, items, ...props }: SidebarNavProps) {
	const pathname = usePathname()

	return (
		<nav
			className={cn(
				'flex space-x-2 bg-muted w-full max-w-[300px] p-1 rounded-lg lg:hidden',
				className
			)}
			{...props}
		>
			{items.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						pathname === item.href
							? 'bg-background shadow-sm hover:bg-background'
							: 'hover:bg-transparent hover:underline',
						' w-full  '
					)}
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}
