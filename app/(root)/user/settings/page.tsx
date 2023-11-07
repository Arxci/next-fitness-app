import { Separator } from '@/components/ui/separator'
import { DeleteAccount } from './components/delete-accounts'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function SettingsProfilePage() {
	return (
		<main className="space-y-6">
			<div>
				<h3 className="text-lg font-medium ">Settings</h3>
				<p className="text-sm text-muted-foreground">
					Manage your account settings.
				</p>
			</div>
			<Separator />
			<div className="w-full flex justify-between space-x-2 items-center">
				<p className="text-sm text-muted-foreground">
					Change your password at anytime
				</p>
				<Button
					asChild
					variant="link"
					className="text-md"
				>
					<Link href={'/sign-in/reset-password'}>Change </Link>
				</Button>
			</div>

			<DeleteAccount />
		</main>
	)
}
