import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"13": "repeat(13, minmax(0, 1fr))",
			},
			fontFamily: {
				sans: ["var(--font-plus-jakarta)", "sans-serif"],
			},
			colors: {
				primary: "#1d3461",
				secondary: "#1f487e",
				creme: "#faf5e5",
				or: "#c8a96e",
				gris: "#9AA3B2",
				navbar: "#0b1120d1",
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
export default config
