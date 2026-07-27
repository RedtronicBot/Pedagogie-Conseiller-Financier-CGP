import "@/app/ui/global.css"
import Navbar from "./ui/Navbar"
import { Plus_Jakarta_Sans } from "next/font/google"
import Footer from "./ui/Footer"

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-plus-jakarta",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={plusJakarta.variable}>
			<body className="font-sans">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
