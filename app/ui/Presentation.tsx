import Section from "./component/Section"

const Presentation = () => {
	const sections: { title: string; text: string }[] = [
		{
			title: "Qui suis-je ?",
			text: "Passionné par l'investissement financier et immobilier depuis plus de 25 ans, j'ai consacré 23 années à la recherche pharmaceutique avant de faire de cette passion mon métier. Depuis 2017, j'accompagne particuliers et familles en tant que Conseiller en Investissements Financiers indépendant, en mettant mon expérience et mes certifications au service de leurs projets.",
		},
		{
			title: "Pourquoi ce métier ?",
			text: "Parce que chaque décision financière a un impact sur votre avenir. Ma vocation est de vous aider à protéger votre patrimoine, préparer vos projets de vie et construire l'avenir de votre famille avec des solutions durables et adaptées.",
		},
		{
			title: "Mon rôle ?",
			text: "Vous rendre la gestion de patrimoine accessible, compréhensible et concrète. Je vous aide à définir vos objectifs, à élaborer une stratégie adaptée à votre situation et je vous accompagne dans le temps afin que vos décisions restent pertinentes à chaque étape de votre vie.",
		},
		{
			title: "Comment ?",
			text: "Tout commence par un bilan patrimonial complet de votre situation familiale, professionnelle, immobilière et financière. Cette analyse me permet de vous proposer une stratégie personnalisée, construite uniquement dans votre intérêt. En tant que conseiller indépendant, je sélectionne les solutions les plus adaptées à vos objectifs, sans contrainte commerciale, et je reste à vos côtés pour faire évoluer votre stratégie au fil du temps.",
		},
	]
	return (
		<section className="bg-creme flex justify-center py-6 scroll-mt-16" id="presentation">
			<div className="mx-auto max-w-6xl px-6 space-y-12">
				{sections.map((section) => (
					<Section key={section.title} title={section.title}>
						{section.text}
					</Section>
				))}
			</div>
		</section>
	)
}

export default Presentation
