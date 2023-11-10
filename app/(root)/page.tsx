import Image from 'next/image'

export default function Home() {
	return (
		<main className="min-h-screen ">
			<div className="container px-0  md:px-4">
				<div className="bg-zinc-900 w-full h-[450px] relative">
					<Image
						src="/images/home-banner.png"
						alt="A student learning on a computer"
						fill
						className="object-cover "
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
					/>
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-8 ">
					<h1 className="p-4 text-5xl font-semibold line uppercase">
						Empower Your Journey with SkillJet
					</h1>
					<p className="p-4 text-lg text-muted-foreground">
						Access a vast library of courses, expert insights, and tools
						designed to drive your personal and professional development. Skills
						for your present (and your future). Get started with us.
					</p>
				</div>
			</div>
		</main>
	)
}
