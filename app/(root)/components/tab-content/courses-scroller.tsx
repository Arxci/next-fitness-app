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
		<div className="flex flex-col">
			<ul
				ref={scroller}
				onScroll={scrollHandle}
				className="space-x-2 py-2 scroll-smooth flex overflow-x-auto no-scrollbar whitespace-nowrap"
			>
				{children}
			</ul>
			<div className="ml-auto space-x-2 ">
				<Button
					disabled={showRightButton}
					onClick={scrollLeftHandle}
					className="z-10 rounded-full shadow-md w-10 h-10 "
				>
					<span className="sr-only">Scroll right</span>
					<Icons.chevronLeft className="text-background " />
				</Button>
				<Button
					disabled={showLeftButton}
					onClick={scrollRightHandle}
					className="z-10 rounded-full shadow-md  w-10 h-10 "
				>
					<span className="sr-only">Scroll right</span>
					<Icons.chevronRight className="text-background " />
				</Button>
			</div>
		</div>
	)
}
