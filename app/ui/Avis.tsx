import { BusinessInformation } from "../types/review"
import ReviewCarousel from "./component/ReviewCarousel"

type AvisProps = {
	business: BusinessInformation
}
const Avis = async ({ business }: AvisProps) => {
	return (
		<section id="avis" className="mx-auto max-w-6xl px-6 py-16">
			<h2 className="relative flex items-center gap-4 text-2xl font-bold text-or before:block before:h-px before:w-[38px] before:bg-or before:content-['']">
				Avis clients
			</h2>

			<div className="mt-8">
				<p className="text-4xl font-bold text-primary">{business.rating.toFixed(1)} ★</p>

				<p className="text-slate-600">Basé sur {business.reviewCount} avis Google</p>
			</div>

			<div className="mt-10">
				<ReviewCarousel reviews={business.reviews} />
			</div>
		</section>
	)
}

export default Avis
