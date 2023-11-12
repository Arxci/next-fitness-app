'use client'

import { MouseEvent, UIEvent, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function CoursesScroller({ children }: { children: React.ReactNode }) {
	const [showLeftButton, setShowLeftButton] = useState(false)
	const [showRightButton, setShowRightButton] = useState(true)
	const scroller = useRef<HTMLUListElement>(null)

	const scrollRightHandle = (e: MouseEvent<HTMLButtonElement>) => {
		if (scroller?.current?.scrollLeft !== undefined) {
			scroller.current.scrollLeft += 300
		}
	}

	const scrollLeftHandle = (e: MouseEvent<HTMLButtonElement>) => {
		if (scroller?.current?.scrollLeft !== undefined) {
			scroller.current.scrollLeft -= 300
		}
	}

	const scrollHandle = (e: UIEvent<HTMLElement>) => {
		if (e.currentTarget.scrollLeft === 0) {
			setShowLeftButton(false)
		} else if (
			e.currentTarget.scrollLeft + e.currentTarget.clientWidth >=
			e.currentTarget.scrollWidth
		) {
			setShowRightButton(false)
		} else {
			setShowLeftButton(true)
			setShowRightButton(true)
		}
	}

	return (
		<div className="relative">
			{showLeftButton && (
				<Button
					onClick={scrollLeftHandle}
					className="z-10 rounded-full absolute shadow-md w-10 h-10 left-1 md:-left-5 top-1/2 transform -translate-y-1/2"
				>
					<span className="sr-only">Scroll right</span>
					<Icons.chevronLeft className="text-background " />
				</Button>
			)}

			<ul
				ref={scroller}
				onScroll={scrollHandle}
				className="space-x-2 py-2 scroll-smooth flex overflow-x-auto no-scrollbar whitespace-nowrap"
			>
				{children}
			</ul>
			{showRightButton && (
				<Button
					onClick={scrollRightHandle}
					className="z-10 rounded-full shadow-md absolute w-10 h-10 right-1 md:-right-5 top-1/2 transform -translate-y-1/2"
				>
					<span className="sr-only">Scroll right</span>
					<Icons.chevronRight className="text-background " />
				</Button>
			)}
		</div>
	)
}
