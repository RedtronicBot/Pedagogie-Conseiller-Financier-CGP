import { GooglePlace } from "../types/google"
import { BusinessInformation } from "../types/review"

const API_KEY = process.env.GOOGLE_API_KEY!
const PLACE_ID = process.env.GOOGLE_PLACE_ID!

export async function getBusinessInformation(): Promise<BusinessInformation> {
	const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`, {
		headers: {
			"X-Goog-Api-Key": API_KEY,
			"X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews,formattedAddress,nationalPhoneNumber,googleMapsUri,websiteUri",
		},

		next: {
			revalidate: 86400,
		},
	})

	if (!response.ok) {
		throw new Error("Impossible de récupérer les informations Google.")
	}
	const place: GooglePlace = await response.json()
	return {
		name: place.displayName.text,
		address: place.formattedAddress,
		phone: place.nationalPhoneNumber,
		mapUrl: place.googleMapsUri,

		rating: place.rating,
		reviewCount: place.userRatingCount,

		reviews:
			place.reviews?.map((review) => ({
				author: review.authorAttribution.displayName,
				photo: review.authorAttribution.photoUri,
				rating: review.rating,
				text: review.originalText?.text ?? review.text.text,
				published: review.relativePublishTimeDescription,
			})) ?? [],
	}
}
