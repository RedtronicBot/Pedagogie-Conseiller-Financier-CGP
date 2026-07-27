import FAQCard from "./component/FAQCard"

const FAQ = () => {
	return (
		<section className="bg-primary flex justify-center py-6 scroll-mt-16" id="faq">
			<div className="mx-auto max-w-6xl px-6">
				<h2 className="relative flex items-center gap-4 text-2xl font-bold text-or before:content-[''] before:block before:w-[38px] before:h-px before:bg-or">
					F.A.Q
				</h2>

				<p className="mt-4 max-w-2xl text-gris">Retrouvez les réponses aux questions les plus fréquentes.</p>

				<div className="mt-12 grid gap-8">
					<FAQCard question="Mon patrimoine est-il suffisant pour bénéficier de vos conseils ?">
						<p>Oui. Mon accompagnement s'adresse à toutes les personnes souhaitant construire, développer ou optimiser leur patrimoine.</p>
						<p>
							Une capacité d'épargne de <strong>50 € par mois</strong> peut déjà permettre de mettre en place une stratégie adaptée.
						</p>
						<p>L'objectif est de construire progressivement votre patrimoine, à votre rythme.</p>
					</FAQCard>
					<FAQCard question="Comment se déroule un accompagnement ?">
						<div>
							<h4 className="font-semibold text-primary">1. Découverte</h4>
							<p>
								Nous échangeons sur votre situation personnelle, familiale, professionnelle et patrimoniale. Ensemble, nous identifions vos objectifs
								et les p rojets qui comptent pour vous.
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-primary">2. Analyse et recommandations</h4>
							<p>
								Après un audit patrimonial complet, je vous présente une stratégie personnalisée. Chaque solution est expliquée de manière
								pédagogique, avec ses avantages, ses limites et des simulations pour vous aider à prendre une décision éclairée.
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-primary">3. Mise en œuvre</h4>
							<p>
								Vous prenez le temps de la réflexion. Si vous décidez de mettre en place tout ou partie des solutions proposées, je vous accompagne
								dans l'ensemble des démarches administratives jusqu'à leur réalisation.
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-primary">3. Suivi dans le temps</h4>
							<p>
								Votre situation évolue, votre stratégie aussi. Un suivi régulier permet d'adapter les solutions retenues afin qu'elles restent
								cohérentes avec vos objectifs et les évolutions de votre vie.
							</p>
						</div>
					</FAQCard>
					<FAQCard question="Combien coûte votre accompagnement ?">
						<p>Le premier rendez-vous est gratuit et sans engagement.</p>
						<p>J'ai choisi de ne pas facturer d'honoraires afin de rendre le conseil en gestion de patrimoine accessible au plus grand nombre.</p>
						<p>
							Si vous décidez de mettre en place une solution, ma rémunération est versée directement par le partenaire sélectionné (compagnie
							d'assurance, société de gestion, promoteur immobilier...).
						</p>
						<p>
							Les conditions financières sont identiques à celles d'une souscription en direct. Vous bénéficiez simplement d'un accompagnement
							personnalisé, d'une analyse indépendante et d'un suivi dans la durée.
						</p>
					</FAQCard>
				</div>
			</div>
		</section>
	)
}

export default FAQ
