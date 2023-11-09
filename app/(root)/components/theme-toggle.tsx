'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import {
	TooltipTrigger,
	TooltipProvider,
	Tooltip,
	TooltipContent,
} from '@/components/ui/tooltip'
import { Icons } from '../../../components/icons'

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="h-9 w-9 rounded-full"
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>
						<Icons.sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Icons.moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</TooltipTrigger>

				<TooltipContent>Toggle theme</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
