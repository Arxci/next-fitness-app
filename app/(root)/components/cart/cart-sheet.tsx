'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { Icons } from '@/components/icons'

export function CartSheet() {
	return (
		<Sheet>
			<TooltipProvider>
				<Tooltip>
					<SheetTrigger asChild>
						<TooltipTrigger asChild>
							<Button
								aria-label="Open cart"
								variant="ghost"
								className="rounded-full h-9 w-9"
								size="icon"
							>
								<Icons.cart aria-hidden="true" />
							</Button>
						</TooltipTrigger>
					</SheetTrigger>
					<TooltipContent sideOffset={13}>View Cart</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<SheetContent className="flex w-full gap-0 py-0 flex-col px-0 sm:max-w-lg">
				<SheetHeader className=" items-center h-14 flex w-full flex-row px-4 justify-between">
					<SheetTitle>Cart (0) </SheetTitle>

					<SheetClose />
				</SheetHeader>
				<Separator />
				<div className="flex h-full flex-col items-center justify-center space-y-1">
					<Icons.cart
						className="mb-4 h-16 w-16 text-muted-foreground "
						aria-hidden="true"
					/>
					<div className="text-xl font-medium text-muted-foreground">
						Your cart is empty
					</div>
					<SheetTrigger asChild>
						<Button
							variant="link"
							size="sm"
							className="text-sm text-muted-foreground"
							asChild
						>
							<Link
								aria-label="Add items to your cart to checkout"
								href="/products"
							>
								Add items to your cart to checkout
							</Link>
						</Button>
					</SheetTrigger>
				</div>
			</SheetContent>
		</Sheet>
	)
}
