import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const professionalProjects = projects.filter(p => p.category === 'Professional')
  const personalProjects = projects.filter(p => p.category === 'Personal')

  return (
    <div>
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">Professional PM work and personal passion projects</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Professional Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {professionalProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Personal */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Personal Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {personalProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
