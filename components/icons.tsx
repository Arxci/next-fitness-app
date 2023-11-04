import {
	faArrowRightFromBracket,
	faCartShopping,
	faGear,
	faGraduationCap,
	faMagnifyingGlass,
	faUser,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
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
}
