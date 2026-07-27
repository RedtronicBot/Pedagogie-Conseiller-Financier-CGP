"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [
	{ href: "/#accueil", label: "Accueil" },
	{ href: "/#presentation", label: "Présentation" },
	{ href: "/#objectifs", label: "Vos Objectifs" },
	{ href: "/#solutions", label: "Solutions" },
	{ href: "/#faq", label: "F.A.Q" },
	{ href: "/#avis", label: "Avis" },
	{ href: "/#contact", label: "Contact" },
	{ href: "/blog", label: "Blog" },
]

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="w-full bg-navbar backdrop-blur-md border-b border-creme/20 sticky top-0 z-50">
			<nav className="relative flex items-center justify-between px-4 h-16 md:justify-center">
				{/* Nav desktop : toujours visible, horizontale */}
				<ul className="hidden md:flex md:items-center md:gap-6">
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href} className="text-gris hover:text-or transition-colors font-semibold">
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Bouton burger : visible seulement en mobile */}
				<button
					className="md:hidden text-creme ml-auto"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={isOpen}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Menu mobile déroulant */}
				<ul className={`absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-4 md:hidden ${isOpen ? "flex" : "hidden"}`}>
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href} className="text-gris hover:text-or transition-colors font-semibold" onClick={() => setIsOpen(false)}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
