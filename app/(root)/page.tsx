import { HeroSection } from './components/sections/hero-section'
import { CourseTabList } from './components/sections/course-tablist-section'

export default function Home() {
	return (
		<main className="min-h-screen ">
			<HeroSection />
			<CourseTabList />
		</main>
	)
}
