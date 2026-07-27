"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ReviewCard from "./ReviewCard"
import { Review } from "@/app/types/review"

type ReviewCarouselProps = {
	reviews: Review[]
}

const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
	})

	return (
		<div className="relative">
			{/* Fenêtre du carousel */}
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{reviews.map((review, index) => (
						<div key={index} className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
							<ReviewCard review={review} />
						</div>
					))}
				</div>
			</div>

			{/* Boutons */}
			<button
				onClick={() => emblaApi?.scrollPrev()}
				className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-creme shadow"
			>
				<ChevronLeft />
			</button>

			<button
				onClick={() => emblaApi?.scrollNext()}
				className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-creme shadow"
			>
				<ChevronRight />
			</button>
		</div>
	)
}

export default ReviewCarousel
