import { Separator } from '@/components/ui/separator'
import { DeleteAccount } from './components/delete-accounts'

export default async function SettingsProfilePage() {
	return (
		<main className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Settings</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings.
				</p>
			</div>
			<Separator />
			<DeleteAccount />
		</main>
	)
}
