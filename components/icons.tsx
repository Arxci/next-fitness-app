import {
	faArrowRightFromBracket,
	faCartShopping,
	faEye,
	faEyeSlash,
	faGear,
	faGraduationCap,
	faMagnifyingGlass,
	faUser,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@/lib/utils'

interface IconProps {
	className?: string
}

export const Icons = {
	logo: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faGraduationCap}
		/>
	),
	eye: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faEye}
		/>
	),
	eyeSlash: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faEyeSlash}
		/>
	),
	microsoft: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faMicrosoft}
		/>
	),
	google: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faGoogle}
		/>
	),
	cart: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faCartShopping}
		/>
	),
	search: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faMagnifyingGlass}
		/>
	),
	cross: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faXmark}
		/>
	),
	user: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faUser}
		/>
	),
	exit: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faArrowRightFromBracket}
		/>
	),
	settings: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4', props.className)}
			icon={faGear}
		/>
	),
	spinner: (props: IconProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	),
}
