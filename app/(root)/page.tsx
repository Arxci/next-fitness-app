import Image from 'next/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className="min-h-screen ">
			<HeroSection />
			<CourseTabList />
		</main>
	)
}

function HeroSection() {
	return (
		<section>
			<div className="container !px-0 md:px-4">
				<div className="bg-zinc-900 w-full h-[450px] relative">
					<Image
						src="/images/home-banner.png"
						alt="A student learning on a computer"
						fill
						className="object-cover "
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
					/>
					<div className="absolute w-full h-full bg-black/40" />
					<div className="absolute container top-1/2 left-0 transform -translate-y-1/2 text-white space-y-4">
						<div className="space-y-2">
							<h2 className="text-4xl font-bold">
								Empower Your Journey with SkillJet
							</h2>
							<p className="text-white/80 text-lg max-w-[800px]">
								Empower yourself with in-depth courses, expert support, and a
								network that propels your journey to mastery and beyond.
							</p>
						</div>
						<Button
							size="lg"
							className="w-full max-w-[200px]"
						>
							Register Now
						</Button>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-1 my-10 ">
					<h2 className="text-5xl font-semibold  uppercase">
						All the skills you need in one place
					</h2>
					<p className="text-lg text-muted-foreground max-w-[800px]">
						Access a vast library of courses, expert insights, and tools
						designed to drive your personal and professional development. Skills
						for your present (and your future). Get started with us.
					</p>
				</div>
			</div>
		</section>
	)
}

function CourseTabList() {
	return (
		<section className="">
			<Tabs defaultValue="featured">
				<div className="container space-y-2">
					<TabsList className="bg-transparent h-[50px] space-x-6">
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
				<div className="bg-muted-foreground/10 h-[300px]">
					<div className="container">
						<CourseTabContent value="featured">Featured</CourseTabContent>
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
			className="data-[state=active]:text-foreground text-md h-[50px]  relative after:content:[''] data-[state=active]:after:w-full after:bg-foreground after:h-[1px] text-xl after:bottom-0 after:absolute p-0"
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
