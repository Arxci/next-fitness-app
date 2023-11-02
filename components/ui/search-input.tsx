import { cn } from '@/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<InputProps> = ({ className, ...props }) => {
	return (
		<div
			className={cn(
				'flex h-10 w-full space-x-2 border border-input bg-background px-3 py-2 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:opacity-50 rounded-full',
				className
			)}
		>
			<div className="relative h-full aspect-square flex items-center justify-center">
				<FontAwesomeIcon
					className="h-4 w-4"
					icon={faMagnifyingGlass}
				/>
			</div>
			<input
				type="search"
				id="search"
				placeholder="Search..."
				className="flex h-full w-full rounded-md bg-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed "
				{...props}
			/>
		</div>
	)
}
SearchInput.displayName = 'SearchInput'

export { SearchInput }
