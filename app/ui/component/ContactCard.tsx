import Link from "next/link"
import { ReactNode } from "react"

type ContactCardProps = {
	icon: ReactNode
	title: string
	value: string
	href?: string
	valueClassName?: string
}

const ContactCard = ({ icon, title, value, href, valueClassName }: ContactCardProps) => {
	const content = (
		<div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-or text-primary">{icon}</div>

			<div>
				<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{title}</p>

				<p className={`font-semibold text-primary break-words ${valueClassName ?? "text-base"}`}>{value}</p>
			</div>
		</div>
	)

	if (!href) return content

	const isExternal = href.startsWith("http://") || href.startsWith("https://")

	return (
		<Link
			href={href}
			{...(isExternal && {
				target: "_blank",
				rel: "noopener noreferrer",
			})}
		>
			{content}
		</Link>
	)
}

export default ContactCard
