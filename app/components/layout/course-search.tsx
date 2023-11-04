'use client'

import { useState } from 'react'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

const CourseSearch = () => {
	const [value, setValue] = useState<string>('')

	const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const submitFormHandle = () => {}

	const clearInputHandle = () => {
		setValue('')
	}

	return (
		<form onSubmit={submitFormHandle}>
			<div
				className="flex h-10 w-[300px] space-x-2 border border-input bg-background px-3 py-2 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:opacity-50 rounded-full"
				role="search"
			>
				<div className="h-full aspect-square flex items-center justify-center">
					<Icons.search />
					<label
						htmlFor="search"
						className="sr-only"
					>
						Search for a course
					</label>
				</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<input
								type="text"
								name="search"
								id="search"
								placeholder="Search..."
								value={value}
								onChange={inputChangeHandle}
								className=" flex w-full rounded-md bg-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed "
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Search courses</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				{value && (
					<div className="h-full aspect-square flex items-center justify-center">
						<Button
							onClick={clearInputHandle}
							type="button"
							aria-label="Clear search"
							variant="ghost"
							size="icon"
							className="hover:bg-transparent h-auto"
						>
							<Icons.cross />
						</Button>
					</div>
				)}
			</div>
		</form>
	)
}
CourseSearch.displayName = 'SearchInput'

export { CourseSearch }
