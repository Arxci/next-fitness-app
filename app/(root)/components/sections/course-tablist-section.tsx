import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Separator } from '@/components/ui/separator'

import { CoursesScroller } from '../tab-content/courses-scroller'
import { CourseCard } from '../tab-content/course-card'

export function CourseTabList() {
	const featuredCourse = [
		{
			id: 0,
			image: '',
			title: 'The Complete 2023 Web Development Bootcamp',
			author: 'Dr. Angela Yu',
			rating: 4.7,
			price: 109.99,
		},
		{
			id: 1,
			image: '',
			title: 'The Complete 2023 Web Development Bootcamp',
			author: 'Dr. Angela Yu',
			rating: 4.7,
			price: 109.99,
		},
		{
			id: 2,
			image: '',
			title: 'The Complete 2023 Web Development Bootcamp',
			author: 'Dr. Angela Yu',
			rating: 4.7,

			price: 109.99,
		},
		{
			id: 3,
			image: '',
			title: 'The Complete 2023 Web Development Bootcamp',
			author: 'Dr. Angela Yu',
			rating: 4.7,
			price: 109.99,
		},
		{
			id: 4,
			image: '',
			title: 'The Complete 2023 Web Development Bootcamp',
			author: 'Dr. Angela Yu',
			rating: 4.7,
			price: 109.99,
		},
	]

	return (
		<section>
			<Tabs defaultValue="featured">
				<div className="container space-y-2">
					<TabsList className="bg-transparent h-[50px] space-x-4 sm:space-x-6">
						<CourseTabTrigger
							value="featured"
							label="Featured"
						/>
						<CourseTabTrigger
							value="trending"
							label="Trending"
						/>
						<CourseTabTrigger
							value="new"
							label="New & Hot"
						/>
					</TabsList>
				</div>
				<Separator />
				<div className="bg-muted-foreground/10 py-2">
					<div className="container">
						<CourseTabContent value="featured">
							<CoursesScroller>
								{featuredCourse.map((course) => (
									<li key={course.id}>
										<CourseCard
											key={course.id}
											{...course}
										/>
									</li>
								))}
							</CoursesScroller>
						</CourseTabContent>
						<CourseTabContent value="trending">Trending</CourseTabContent>
						<CourseTabContent value="new">New & Hot</CourseTabContent>
					</div>
				</div>
			</Tabs>
		</section>
	)
}

function CourseTabTrigger({ value, label }: { value: string; label: string }) {
	return (
		<TabsTrigger
			value={value}
			className="data-[state=active]:text-foreground text-md h-[50px] relative after:content:[''] data-[state=active]:after:w-full after:bg-foreground after:h-[1px] text-md sm:text-xl after:left-0 after:bottom-0 after:absolute p-0 "
		>
			{label}
		</TabsTrigger>
	)
}

function CourseTabContent({
	value,
	children,
}: {
	value: string
	children: React.ReactNode
}) {
	return (
		<TabsContent
			value={value}
			className="!m-0"
		>
			<div className="py-6">{children}</div>
		</TabsContent>
	)
}
