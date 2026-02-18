import Link from 'next/link'
import { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer h-full">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
            <p className="text-slate-500 text-sm text-center px-4">{project.image}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3 inline-block">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition">
            {project.title}
          </h3>
          <p className="text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
            {project.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="text-xs text-slate-400 px-2 py-1">
                +{project.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
