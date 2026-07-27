import { BusinessInformation } from "@/app/types/review"

type GoogleMapProps = {
	address: string
	business: BusinessInformation
}

const GoogleMap = ({ address, business }: GoogleMapProps) => {
	const query = encodeURIComponent(`${business.name} ${business.address}`)

	const src = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${query}`

	return (
		<div className="h-full overflow-hidden rounded-xl shadow-sm">
			<iframe src={src} className="aspect-square w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={address} />
		</div>
	)
}

export default GoogleMap
