import Image from 'next/image'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CourseCard(course: {
	image: string
	title: string
	author: string
	rating: number
	price: number
}) {
	return (
		<Card className="w-[300px] shadow-sm rounded-md overflow-hidden ">
			<CardHeader className="aspect-video bg-neutral-500 relative">
				<Image
					src="/images/home-banner.png"
					alt="A student learning on a computer"
					fill
					className="object-cover "
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
				/>
			</CardHeader>
			<CardContent className="p-4 space-y-2">
				<div className="whitespace-normal ">
					<h3 className="line-clamp-2 ">{course.title}</h3>
					<p className="text-muted-foreground text-sm">{course.author}</p>
				</div>
				<div className="flex justify-between w-full items-center">
					<p className="text-muted-foreground font-bold">${course.price}</p>
					<div className="text-sm font-bold flex items-center">
						<span className="mr-1">{course.rating}</span>
						<Icons.star className="text-yellow-500 " />
					</div>
				</div>
			</CardContent>
			<CardFooter className="px-4 pb-4 flex flex-col space-y-2">
				<Button
					className="space-x-2 w-full"
					variant="outline"
					asChild
				>
					<Link href="#">
						<span>Preview</span>
						<Icons.eye aria-hidden="true" />
					</Link>
				</Button>
				<Button className="space-x-2 w-full">
					<span>Add to cart</span>
					<Icons.cart aria-hidden="true" />
				</Button>
			</CardFooter>
		</Card>
	)
}
