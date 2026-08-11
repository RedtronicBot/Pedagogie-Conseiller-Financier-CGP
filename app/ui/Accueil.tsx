import Image from "next/image"

const Accueil = () => {
	return (
		<section className="bg-primary flex w-full scroll-mt-16" id="accueil">
			<div className="mx-auto max-w-6xl flex flex-col md:flex-row">
				<div className="flex-1 px-4">
					<p className="relative uppercase flex items-center gap-4 text-xl font-bold text-or my-8 before:content-[''] before:block before:w-[38px] before:h-px before:bg-or">
						Conseiller en gestion de patrimoine - Cravent - Yvelines (78)
					</p>
					<h1 className="text-4xl font-bold text-creme">Vos projets de vie méritent une stratégie patrimoniale</h1>
					<div className="flex gap-4">
						<a
							href="mailto:gregoirebrunet1971@gmail.com"
							className="flex justify-center items-center border border-or px-6 py-4 font-semibold mt-5 text-or"
						>
							Contacter
						</a>
						<a
							href="https://calendly.com/gregoire-brunet/1-er-echange-de-decouverte-client"
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-center items-center bg-or px-6 py-4 font-semibold mt-5 border border-or"
						>
							Prendre rendez-vous
						</a>
					</div>
					<div className="flex w-full my-5">
						<div className="flex flex-col p-2 md:p-5 border-r border-gris">
							<b className="font-bold text-creme text-xl">
								11 <em className="text-or font-bold">ans</em>
							</b>
							<span className="uppercase font-semibold text-gris">d'expérience</span>
						</div>
						<div className="flex flex-col p-2 md:p-5 border-r border-gris">
							<b className="font-bold text-creme text-xl">
								220 <em className="text-or font-bold"></em>
							</b>
							<span className="uppercase font-semibold text-gris">client</span>
						</div>
						<div className="flex flex-col justify-center p-2 md:p-5">
							<b className="font-bold text-creme text-xl"> Formateur de CGP </b>
						</div>
					</div>
				</div>
				<div className="flex-1 flex justify-center">
					<div className="w-[min(380px,100%)] py-8 px-8 md:px-0">
						<Image
							src="/ernestflowerss-man-8847063_1920.jpg"
							alt="Grégoire Brunet, conseiller en gestion de patrimoine à Caravent, Yvelines(78)"
							width={1920}
							height={1537}
						/>
						<div className="flex bg-creme p-2 font-semibold gap-1 justify-center">
							<p className="text-slate-800">
								<b className="text-or font-bold">Grégoire BRUNET ·</b> ORIAS 16003623
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Accueil
