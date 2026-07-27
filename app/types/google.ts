export interface GoogleAuthor {
	displayName: string
	photoUri?: string
}

export interface GoogleReview {
	name: string
	relativePublishTimeDescription: string
	rating: number

	text: {
		text: string
		languageCode: string
	}

	originalText?: {
		text: string
		languageCode: string
	}

	authorAttribution: GoogleAuthor
}

export interface GooglePlace {
	displayName: {
		text: string
		languageCode: string
	}
	formattedAddress: string
	nationalPhoneNumber: string
	googleMapsUri: string
	websiteUri?: string
	rating: number
	userRatingCount: number
	reviews?: GoogleReview[]
}
