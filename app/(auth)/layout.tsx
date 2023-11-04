import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { AuthHeader } from './components/layout/auth-header'

export default function AuthLayout({ children }: React.PropsWithChildren) {
	return (
		<div className="md:grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
			<div className="hidden md:block relative h-full overflow-hidden ">
				<Image
					src="/images/auth-layout.webp"
					alt="A person using a computer"
					fill
					className="absolute inset-0 object-cover"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
				<Link
					href="/"
					className="absolute left-4 md:left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight"
				>
					<Icons.logo
						className="mr-2 h-6 w-6"
						aria-hidden="true"
					/>
					<span>{siteConfig.name}</span>
				</Link>
				<div className="absolute bottom-6 px-8 z-20 text-center md:text-left text-base line-clamp-1">
					{siteConfig.description}
				</div>
			</div>

			<AuthHeader />
			<main className=" static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
				{children}
			</main>
		</div>
	)
}
