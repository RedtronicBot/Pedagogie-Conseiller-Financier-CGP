export interface Review {
	author: string
	photo?: string
	rating: number
	text: string
	published: string
}

export interface BusinessInformation {
	name: string
	address: string
	phone: string
	mapUrl: string

	rating: number
	reviewCount: number

	reviews: Review[]
}
