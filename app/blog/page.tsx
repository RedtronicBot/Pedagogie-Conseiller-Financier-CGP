// app/blog/page.tsx
import { getPosts } from "@/app/lib/wordpress"

export const metadata = { title: "Blog" }

export default async function BlogPage() {
	const posts = await getPosts()

	return (
		<main className="mx-auto w-full min-h-screen px-6 py-16 bg-creme">
			<h1 className="text-3xl font-bold text-or mb-12">Blog</h1>
			<div className="grid gap-8 sm:grid-cols-2">
				{posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`} className="rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition">
						{post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
							<img
								src={post._embedded["wp:featuredmedia"][0].source_url}
								alt={post.title.rendered}
								className="rounded-lg mb-4 aspect-video object-cover w-full"
							/>
						)}
						<h2 className="font-semibold text-primary" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
						<div className="text-sm text-slate-600 mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
					</a>
				))}
			</div>
		</main>
	)
}
