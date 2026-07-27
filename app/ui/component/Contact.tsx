import { BusinessInformation } from "@/app/types/review"
import GoogleMap from "./GoogleMap"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import ContactCard from "./ContactCard"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

type ContactProps = {
	business: BusinessInformation
}
const Contact = ({ business }: ContactProps) => {
	return (
		<section className="bg-creme flex justify-center py-6 scroll-mt-16" id="contact">
			<div className="mx-auto max-w-6xl p-6 space-y-12 w-full">
				<h2 className="relative flex items-center gap-4 text-2xl font-bold text-or before:content-[''] before:block before:w-[38px] before:h-px before:bg-or">
					Contact
				</h2>
				<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
					Vous souhaitez faire le point sur votre patrimoine ou préparer un projet ? Je suis disponible pour échanger avec vous en toute
					confidentialité.
				</p>

				<div className="mt-12 grid gap-10 lg:grid-cols-2 justify-center">
					{/* Colonne gauche */}
					<div className="space-y-5 flex flex-col gap-2 w-full max-w-[400px]">
						<ContactCard icon={<Phone size={22} />} title="Téléphone" value={business.phone} href={`tel:${business.phone}`} />

						<ContactCard
							icon={<Mail size={22} />}
							title="Email"
							value="gregoirebrunet1971@gmail.com"
							href="mailto:gregoirebrunet1971@gmail.com"
							valueClassName="text-sm"
						/>

						<ContactCard
							icon={<FaLinkedinIn size={20} />}
							title="LinkedIn"
							value="Grégoire Brunet"
							href="https://www.linkedin.com/in/gr%C3%A9goire-brunet/?originalSubdomain=fr"
						/>

						<ContactCard
							icon={<FaFacebookF size={20} />}
							title="Facebook"
							value="SCPI,la pierre papier"
							href="https://www.facebook.com/groups/3040985495929566?locale=fr_FR"
						/>

						<ContactCard icon={<MapPin size={22} />} title="Adresse" value={business.address} href={business.mapUrl} />

						<a
							href="https://calendly.com/gregoire-brunet/1-er-echange-de-decouverte-client"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-or px-6 py-5 font-semibold text-primary transition hover:opacity-90"
						>
							<Calendar size={20} />
							Prendre rendez-vous
						</a>
					</div>

					{/* Colonne droite */}
					<div className="w-full h-full">
						<GoogleMap address={business.address} business={business} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
