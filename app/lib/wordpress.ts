// app/lib/wordpress.ts
export type WPPost = {
	id: number
	slug: string
	date: string
	title: { rendered: string }
	excerpt: { rendered: string }
	content: { rendered: string }
	_embedded?: {
		"wp:featuredmedia"?: { source_url: string }[]
	}
}

const WP_URL = "https://blog.pedagogieetconseilfinanciercgp.fr"

export async function getPosts(): Promise<WPPost[]> {
	const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=20`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error("Impossible de charger les articles")
	return res.json()
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
	const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error("Impossible de charger l'article")
	const data = await res.json()
	return data[0] ?? null
}
