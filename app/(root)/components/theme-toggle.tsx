'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	TooltipTrigger,
	TooltipProvider,
	Tooltip,
	TooltipContent,
} from '@/components/ui/tooltip'
import { Icons } from '../../../components/icons'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<TooltipProvider>
				<Tooltip>
					<DropdownMenuTrigger asChild>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="h-9 w-9 rounded-full"
							>
								<Icons.sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<Icons.moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</TooltipTrigger>
					</DropdownMenuTrigger>

					<TooltipContent>Toggle theme</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}