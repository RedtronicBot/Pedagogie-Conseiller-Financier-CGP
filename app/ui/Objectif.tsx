import ServiceCard from "./component/ServiceCard"

const Objectif = () => {
	const services: { number: number; title: string; description: string }[] = [
		{
			number: 1,
			title: "Sécuriser votre avenir et celui de votre famille",
			description:
				"Constituez un patrimoine solide, faites fructifier votre épargne et préparez sereinement les projets qui comptent pour vous et vos proches.",
		},
		{
			number: 2,
			title: "Préparer votre retraite",
			description:
				"Anticipez votre baisse de revenus et construisez dès aujourd'hui une retraite sereine, voire une indépendance financière avant l'âge légal.",
		},
		{
			number: 3,
			title: "Investir dans l'immobilier",
			description:
				"Développez votre patrimoine grâce à l'immobilier, qu'il s'agisse de votre résidence principale ou d'un investissement locatif rentable.",
		},
		{
			number: 4,
			title: "Optimiser votre fiscalité",
			description:
				"Réduisez votre pression fiscale grâce à des stratégies adaptées tout en développant votre patrimoine financier ou immobilier dans un cadre sécurisé.",
		},
		{
			number: 5,
			title: "Préparer les projets de demain",
			description:
				"Financez les études de vos enfants, constituez une épargne disponible ou anticipez les grandes étapes de votre vie grâce à une stratégie patrimoniale adaptée.",
		},
		{
			number: 6,
			title: "Accompagner les dirigeants et indépendants",
			description:
				"Optimisez la gestion de votre entreprise, protégez votre famille, valorisez votre trésorerie et préparez sereinement la transmission de votre patrimoine.",
		},
	]
	return (
		<section className="mx-auto max-w-6xl px-6 space-y-12 scroll-mt-16" id="objectifs">
			<h2 className="relative flex items-center gap-4 text-2xl font-bold text-or before:content-[''] before:block before:w-[38px] before:h-px before:bg-or mt-6">
				Vos Objectifs
			</h2>
			<div className="space-y-12 py-2">
				{services.map((service) => (
					<ServiceCard key={service.number} number={service.number} title={service.title} description={service.description} />
				))}
			</div>
		</section>
	)
}

export default Objectif
