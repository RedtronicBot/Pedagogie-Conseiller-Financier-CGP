type SectionProps = {
	title: string
	children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
	<section className="space-y-4">
		<h2 className="relative flex items-center gap-4 text-xl font-bold text-or before:content-[''] before:block before:w-[38px] before:h-px before:bg-or">
			{title}
		</h2>

		<p className="text-slate-700 text-lg leading-8">{children}</p>
	</section>
)

export default Section
