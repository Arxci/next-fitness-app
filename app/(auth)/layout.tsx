import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { AuthHeader } from './components/layout/auth-header'

export default function AuthLayout({ children }: React.PropsWithChildren) {
	return (
		<div className="min-h-screen flex-col flex lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
				<div className="absolute inset-0 bg-zinc-900" />
				<Link
					href="/"
					className="relative z-20 flex items-center text-lg font-medium"
				>
					<Icons.logo
						className="mr-2 h-10 w-10"
						aria-hidden="true"
					/>
					<span>{siteConfig.name}</span>
				</Link>
				<div className="relative z-20 mt-auto text-lg">
					{siteConfig.description}
				</div>
			</div>

			<AuthHeader />
			<main className=" flex items-center flex-1 lg:top-0  h-full lg:col-span-1">
				{children}
			</main>
		</div>
	)
}
