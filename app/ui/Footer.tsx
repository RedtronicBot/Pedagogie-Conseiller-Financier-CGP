import Link from "next/link"

const Footer = () => (
	<footer className="bg-slate-900 text-slate-300 py-8">
		<div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm">
			<p>© {new Date().getFullYear()} Grégoire Brunet. Tous droits réservés.</p>
			<div className="flex gap-6">
				<Link href="/mentions-legales" className="hover:text-or">
					Mentions légales
				</Link>
			</div>
		</div>
	</footer>
)

export default Footer
