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
		<TooltipProvider>
			<Tooltip>
				<Sheet>
					<SheetTrigger asChild>
						<TooltipTrigger asChild>
							<Button
								aria-label="Open cart"
								variant="ghost"
								className="rounded-full "
								size="icon"
							>
								<Icons.cart aria-hidden="true" />
							</Button>
						</TooltipTrigger>
					</SheetTrigger>

					<SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
						<SheetHeader className="space-y-2.5 pr-6">
							<SheetTitle>Cart (0)</SheetTitle>
						</SheetHeader>
						<Separator />
						<div className="flex h-full flex-col items-center justify-center space-y-1">
							<Icons.cart
								className="mb-4 h-16 w-16 text-muted-foreground"
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
				<TooltipContent className="hidden md:block">View cart</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
