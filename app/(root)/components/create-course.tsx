import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
	TooltipTrigger,
	TooltipProvider,
	Tooltip,
	TooltipContent,
} from '@/components/ui/tooltip'
import Link from 'next/link'

export function CreateCourse() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						className="rounded-full "
						size="icon"
						asChild
					>
						<Link
							href="#"
							aria-label="Create a course"
						>
							<Icons.plus aria-hidden="true" />
						</Link>
					</Button>
				</TooltipTrigger>
				<TooltipContent>Create a course</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
