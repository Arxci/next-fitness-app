import { CourseSearch } from '../course-search'

export function LowerNav() {
	return (
		<nav className="lg:hidden sticky top-[57px] z-45 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<div className="h-9 w-full">
					<CourseSearch />
				</div>
			</div>
		</nav>
	)
}
