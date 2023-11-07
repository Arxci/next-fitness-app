'use client'

import * as React from 'react'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

const CourseSearch = () => {
	const [value, setValue] = React.useState<string>('')

	const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const submitFormHandle = () => {}

	const clearInputHandle = () => {
		setValue('')
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<form onSubmit={submitFormHandle}>
					<div
						className="flex h-10 w-full space-x-2 border border-input bg-background px-3 py-2 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:opacity-50 rounded-full"
						role="search"
					>
						<div className="h-full aspect-square flex items-center justify-center">
							<Icons.search />
						</div>
						<label
							htmlFor="search"
							className="sr-only"
						>
							Search for a course
						</label>
						<TooltipTrigger asChild>
							<input
								type="text"
								name="search"
								id="search"
								placeholder="Search..."
								value={value}
								onChange={inputChangeHandle}
								className="w-full rounded-md bg-background  placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed "
							/>
						</TooltipTrigger>
						{value && (
							<div className="h-full aspect-square flex items-center justify-center">
								<Button
									onClick={clearInputHandle}
									type="button"
									variant="ghost"
									size="icon"
									className="hover:bg-transparent h-auto group"
								>
									<Icons.cross className="text-muted-foreground hover:text-foreground group-focus:text-foreground" />
									<span className="sr-only">Clear search</span>
								</Button>
							</div>
						)}
					</div>
				</form>
				<TooltipContent sideOffset={13}>
					<p>Search courses</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
CourseSearch.displayName = 'SearchInput'

export { CourseSearch }
