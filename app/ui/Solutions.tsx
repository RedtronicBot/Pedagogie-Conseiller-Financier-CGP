const Solutions = () => {
	return (
		<section className="bg-creme flex justify-center py-6 scroll-mt-16" id="solutions">
			<div className="mx-auto max-w-6xl px-6 space-y-12">
				<h2 className="relative flex items-center gap-4 text-2xl font-bold text-or before:content-[''] before:block before:w-[38px] before:h-px before:bg-or">
					Les solutions
				</h2>

				<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
					Parce que chaque situation est unique, je sélectionne les solutions les plus adaptées à vos objectifs parmi un large réseau de partenaires
					reconnus.
				</p>

				<div className="mt-6 grid gap-8 lg:grid-cols-2">
					{/* Carte 1 */}
					<article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
						<h3 className="mt-4 text-2xl font-bold text-or">Placements financiers</h3>
						<p className="mt-2 font-semibold text-slate-500">Plus de 40 partenaires financiers</p>
						<div className="mt-6 flex flex-wrap gap-3">
							{[
								"Assurance vie",
								"PER",
								"Capitalisation",
								"SCPI",
								"Prévoyance",
								"Private Equity",
								"Épargne salariale",
								"Épargne solidaire",
								"Girardin",
								"FIP / FCPI",
								"Groupements forestiers",
								"Vins",
							].map((item) => (
								<span key={item} className="rounded-full border border-or/30 bg-or/10 px-4 py-2 text-sm font-medium text-slate-700">
									{item}
								</span>
							))}
						</div>
					</article>

					{/* Carte 2 */}
					<article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
						<h3 className="mt-4 text-2xl font-bold text-or">Investissements immobiliers</h3>
						<p className="mt-2 font-semibold text-slate-500">Plus de 60 partenaires immobiliers</p>
						<div className="mt-6 flex flex-wrap gap-3">
							{["Pinel", "Denormandie", "Malraux", "Déficit foncier", "Monuments historiques", "LMNP", "Nue-propriété", "Colocation", "Coliving"].map(
								(item) => (
									<span key={item} className="rounded-full border border-or/30 bg-or/10 px-4 py-2 text-sm font-medium text-slate-700">
										{item}
									</span>
								),
							)}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Solutions
