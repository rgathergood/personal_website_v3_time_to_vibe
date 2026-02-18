import { blogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="text-sm text-orange-400 font-semibold">
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {post.readTime} min read
            </span>
          </div>
          <h1 className="section-title">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none mb-12">
            <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
              {post.content}
            </div>
          </article>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="mt-12">
            <Link href="/blog" className="text-orange-400 hover:text-orange-300 transition font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
