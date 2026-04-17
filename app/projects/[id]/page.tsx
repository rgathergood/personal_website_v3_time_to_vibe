import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="section-title">{project.title}</h1>
          <p className="section-subtitle">{project.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Placeholder */}
          <div className="mb-12 aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl border border-slate-700 flex items-center justify-center">
            <p className="text-slate-400 text-center">{project.image}<br /><span className="text-sm">1200x675px</span></p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-lg text-slate-300">{project.problem}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-lg text-slate-300">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Impact</h2>
              <ul className="space-y-3">
                {project.impact.map((item, idx) => (
                  <li key={idx} className="text-lg text-slate-300 flex items-start">
                    <span className="text-orange-400 mr-4 mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Tools */}
            <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-slate-700">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Skills Demonstrated</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back & CTA */}
          <div className="mt-16 pt-8 border-t border-slate-700 flex justify-between items-center">
            <Link href="/projects" className="text-orange-400 hover:text-orange-300 transition font-semibold">
              ← Back to Projects
            </Link>
            <Link href="/contact" className="btn-primary">
              Discuss This Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
