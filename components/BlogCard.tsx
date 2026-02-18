import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer h-full">
        <div className="mb-4">
          <span className="text-sm text-orange-400 font-semibold">
            {new Date(post.date).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • {post.readTime} min read
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-400 transition">
          {post.title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center text-orange-400 font-semibold text-sm">
          Read More →
        </div>
      </article>
    </Link>
  )
}
