type ServiceCardProps = {
	number: number
	title: string
	description: string
}

const ServiceCard = ({ number, title, description }: ServiceCardProps) => {
	return (
		<article className="flex flex-col md:flex-row gap-6">
			<div className="flex-1 space-y-4">
				<div className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-4">
					<span className="flex h-10 w-10 items-center justify-center rounded-full bg-or text-white font-bold">{number}</span>

					<h2 className="text-2xl font-bold text-slate-800">{title}</h2>
				</div>

				<p className="text-slate-700 leading-7">{description}</p>
			</div>
		</article>
	)
}

export default ServiceCard
