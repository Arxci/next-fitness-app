import { currentUser } from '@clerk/nextjs'

import { Separator } from '@/components/ui/separator'
import { UserProfileForm } from './components/forms/user-profile-form'

export default async function SettingsProfilePage() {
	const user = await currentUser()

	const userData = {
		username: user?.username ?? '',
		firstName: user?.firstName ?? '',
		lastName: user?.lastName ?? '',
	}

	return (
		<main className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Separator />
			<UserProfileForm user={userData} />
		</main>
	)
}
