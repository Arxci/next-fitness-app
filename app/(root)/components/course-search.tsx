'use client'

import React, {
	useState,
	ChangeEvent,
	KeyboardEvent,
	FormEvent,
	FocusEvent,
	useEffect,
} from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

export function CourseSearch() {
	const [searchItem, setSearchItem] = useState<string>('')
	const [cursor, setCursor] = useState<number>(0)
	const [displayResults, setDisplayResults] = useState<boolean>(false)
	const [hasFocus, setHasFocus] = useState<boolean>(false)
	const [items, setItems] = useState<{ id: number; name: string }[]>([
		{ id: 0, name: 'Item One' },
		{ id: 1, name: 'Item Two' },
		{ id: 2, name: 'Item Three' },
		{ id: 3, name: 'Item Four' },
		{ id: 4, name: 'Item Five' },
	])

	const submitFormHandle = (e: FormEvent) => {}

	const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchItem(e.target.value)
	}

	const inputClearHandle = () => {
		setSearchItem('')
	}

	const inputKeyDownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
		if (items.length && e.key === 'ArrowDown') {
			e.preventDefault()
			setCursor((prevState) => {
				const newCursor =
					prevState < items.length - 1 ? prevState + 1 : prevState
				setSearchItem(items[newCursor].name)
				return newCursor
			})
		}
		if (items.length && e.key === 'ArrowUp') {
			e.preventDefault()
			setCursor((prevState) => {
				const newCursor = prevState > 0 ? prevState - 1 : prevState
				setSearchItem(items[newCursor].name)
				return newCursor
			})
		}
	}

	const inputFocusHandle = (_: FocusEvent<HTMLInputElement>) => {
		setHasFocus(true)
		setDisplayResults(true)
	}

	const inputBlurHandle = (_: FocusEvent<HTMLInputElement>) => {
		setHasFocus(false)
	}

	const itemHoveredHandle = (id: number) => {
		setCursor(id)
	}

	const itemClickedHandle = (id: number) => {
		setCursor(id)
		setSearchItem(items[id].name)
	}

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout> | undefined

		if (!hasFocus && displayResults) {
			timer = setTimeout(() => {
				setDisplayResults(false)
			}, 100)
		}

		return () => {
			if (timer) {
				clearTimeout(timer)
			}
		}
	}, [hasFocus])

	return (
		<div className="relative h-full group">
			<form
				onSubmit={submitFormHandle}
				className="h-full"
			>
				<div
					className="flex items-center h-full w-full space-x-2 border border-input bg-background px-3 py-2 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:opacity-50 rounded-full "
					role="search"
				>
					<div className="h-full aspect-square flex items-center justify-center">
						<Icons.search className="text-muted-foreground group-focus-within:text-foreground" />
					</div>
					<label
						htmlFor="search"
						className="sr-only"
					>
						Search for a course
					</label>

					<input
						type="text"
						name="search"
						autoComplete="off"
						id="search"
						placeholder="Search..."
						value={searchItem}
						onChange={inputChangeHandle}
						onKeyDown={inputKeyDownHandle}
						onFocus={inputFocusHandle}
						onBlur={inputBlurHandle}
						className="w-full  
									placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed "
					/>

					{searchItem && (
						<div className="h-full aspect-square flex items-center justify-center">
							<Button
								onClick={inputClearHandle}
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
			{displayResults && (
				<div
					data-state={hasFocus ? 'open' : 'closed'}
					className="absolute w-full top-[40px] z-50 data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 border bg-background rounded-md"
				>
					<p className="p-2 text-xs text-muted-foreground">Suggestions</p>

					<ul className="px-1 pb-1">
						{items.map((item, i) => (
							<ListItem
								key={item.id}
								active={i === cursor}
								item={item}
								onHoverChange={itemHoveredHandle}
								onItemClicked={itemClickedHandle}
							/>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
CourseSearch.displayName = 'SearchInput'

type ListItemType = {
	item: { id: number; name: string }
	active: boolean
	onHoverChange: (id: number) => void
	onItemClicked: (id: number) => void
}

function ListItem({
	item,
	active,
	onHoverChange,
	onItemClicked,
}: ListItemType) {
	return (
		<li>
			<button
				onMouseMove={() => onHoverChange(item.id)}
				onClick={() => onItemClicked(item.id)}
				tabIndex={-1}
				className={`w-full text-start p-1 text-md rounded-sm ${
					active ? 'bg-muted' : ''
				}`}
			>
				{item.name}
			</button>
		</li>
	)
}
