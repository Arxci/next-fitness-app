import Image from 'next/image'

import { Button } from '@/components/ui/button'

export function HeroSection() {
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
