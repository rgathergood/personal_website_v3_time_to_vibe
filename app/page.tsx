import Hero from '@/components/Hero'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of professional and personal work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-primary inline-block">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle mb-8">
            I'm always interested in discussing product, technology, and creative projects.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
