import { Separator } from '@/components/ui/separator'
import { UserProfileForm } from './components/layout/forms/user-profile-form'

export default function SettingsProfilePage() {
	return (
		<main className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Separator />
			<UserProfileForm />
		</main>
	)
}
