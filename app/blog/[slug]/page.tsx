import { getPostBySlug } from "@/app/lib/wordpress"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Props = {
	params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params
	const post = await getPostBySlug(slug)
	if (!post) notFound()

	return (
		<main className="w-full min-h-screen bg-creme py-16">
			<article className="mx-auto max-w-3xl px-6">
				<Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-or transition">
					<ArrowLeft size={18} />
					Retour au blog
				</Link>

				<h1 className="text-3xl font-bold text-or mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
				<div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
			</article>
		</main>
	)
}
