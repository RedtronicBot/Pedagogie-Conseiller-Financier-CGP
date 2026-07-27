type FAQCardProps = {
	question: string
	children: React.ReactNode
}

const FAQCard = ({ question, children }: FAQCardProps) => (
	<article className="rounded-xl bg-creme p-8 shadow-sm border border-creme/20">
		<div className="flex items-center gap-3">
			<h3 className="text-lg font-bold text-primary">{question}</h3>
		</div>

		<div className="mt-5 space-y-4 text-slate-700 leading-7">{children}</div>
	</article>
)
export default FAQCard
