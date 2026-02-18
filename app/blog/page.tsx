import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/blog'

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div>
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">Insights on product management, technology, and renewable energy</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sortedPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
