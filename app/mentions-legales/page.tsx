export const metadata = {
	title: "Mentions légales",
	description: "Mentions légales du site.",
}

export default function MentionsLegales() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
			<h1 className="text-3xl font-bold text-or">Mentions légales</h1>

			{/* ÉDITEUR */}
			<section className="space-y-2">
				<h2 className="text-xl font-semibold text-slate-800">Éditeur du site</h2>
				<p className="text-slate-700 leading-7">
					[Nom Prénom / Raison sociale]
					<br />
					[Forme juridique — ex : Entreprise Individuelle / SASU]
					<br />
					SIREN : [XXXXXXXXX]
					<br />
					Siège social : [adresse complète]
					<br />
					Email : [contact@domaine.fr]
					<br />
					Directeur de la publication : [Nom Prénom]
				</p>
			</section>

			{/* STATUT PROFESSIONNEL */}
			<section className="space-y-2">
				<h2 className="text-xl font-semibold text-slate-800">Statut professionnel</h2>
				<ul className="list-disc list-inside space-y-2 text-slate-700 leading-7">
					<li>
						Inscrit à l'ORIAS sous le n°16003623, consultable sur{" "}
						<a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-or underline underline-offset-2">
							{" "}
							www.orias.fr
						</a>
					</li>
					<li>
						Conseiller en Investissements Financiers (CIF), adhérent de la CNCEF Patrimoine sous le n°D018029, association agréée par l'Autorité des
						Marchés Financiers (AMF)
					</li>
					<li>Mandataire d'intermédiaires en opérations de banque et services de paiement (MIOBSP)</li>
					<li>
						Mandataire d'intermédiaire en assurance (MIA), sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) — 4 Place de
						Budapest, CS 92459, 75436 Paris Cedex 09
					</li>
					<li>Attestation d'habilitation délivrée par la CCI de Montpellier sous le n°831907167</li>
					<li>Assurance responsabilité civile professionnelle souscrite auprès de Gras Savoye</li>
				</ul>
			</section>

			{/* HÉBERGEMENT */}
			<section className="space-y-2">
				<h2 className="text-xl font-semibold text-slate-800">Hébergement</h2>
				<p className="text-slate-700 leading-7">
					Hostinger International Ltd.
					<br />
					61 Lordou Vironos Street, 6023 Larnaca, Chypre
				</p>
			</section>

			{/* PROPRIÉTÉ INTELLECTUELLE */}
			<section className="space-y-2">
				<h2 className="text-xl font-semibold text-slate-800">Propriété intellectuelle</h2>
				<p className="text-slate-700 leading-7">
					L'ensemble des contenus présents sur ce site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle,
					est interdite sans autorisation préalable.
				</p>
			</section>

			{/* MÉDIATION */}
			<section className="space-y-2">
				<h2 className="text-xl font-semibold text-slate-800">Médiation de la consommation</h2>
				<p className="text-slate-700 leading-7">
					En cas de litige, le client peut recourir gratuitement au service de médiation de [nom du médiateur — souvent la Médiation CNCEF ou l'AMF
					selon l'activité concernée].
				</p>
			</section>
		</main>
	)
}
