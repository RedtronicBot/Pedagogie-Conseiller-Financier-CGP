import { getBusinessInformation } from "./lib/googlePlaces"
import Accueil from "./ui/Accueil"
import Avis from "./ui/Avis"
import Contact from "./ui/component/Contact"
import FAQ from "./ui/FAQ"
import Objectif from "./ui/Objectif"
import Presentation from "./ui/Presentation"
import Solutions from "./ui/Solutions"

export default async function Page() {
	const business = await getBusinessInformation()
	return (
		<main>
			<Accueil />
			<Presentation />
			<Objectif />
			<Solutions />
			<FAQ />
			<Avis business={business} />
			<Contact business={business} />
		</main>
	)
}
