import { Separator } from '@/components/ui/separator'
import { DeleteAccount } from './components/delete-accounts'

export default async function SettingsProfilePage() {
	return (
		<main className="space-y-6">
			<DeleteAccount />
		</main>
	)
}
