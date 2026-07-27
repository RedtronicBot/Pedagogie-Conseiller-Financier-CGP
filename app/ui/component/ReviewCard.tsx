import Image from "next/image"
import { Star } from "lucide-react"
import { Review } from "@/app/types/review"

type ReviewCardProps = {
	review: Review
}

const ReviewCard = ({ review }: ReviewCardProps) => {
	return (
		<article className="flex h-80 flex-col rounded-xl bg-creme p-6 shadow-md">
			{/* Header */}
			<div className="flex items-center gap-4">
				<div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
					{review.photo ? (
						<Image src={review.photo} alt={review.author} fill className="object-cover" />
					) : (
						<div className="flex h-full w-full items-center justify-center font-bold text-primary">{review.author.charAt(0)}</div>
					)}
				</div>

				<div className="flex-1">
					<p className="font-semibold text-primary">{review.author}</p>

					<p className="text-sm text-slate-500">{review.published}</p>
				</div>
			</div>

			{/* Étoiles */}
			<div className="mt-4 flex gap-1">
				{Array.from({ length: review.rating }).map((_, index) => (
					<Star key={index} size={18} fill="currentColor" className="text-or" />
				))}
			</div>

			{/* Texte */}
			<div className="mt-4 flex-1 overflow-y-auto pr-2">
				<p className="leading-7 text-slate-700">{review.text}</p>
			</div>
		</article>
	)
}

export default ReviewCard
