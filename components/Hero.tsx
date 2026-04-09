import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Product Manager<br />
              <span className="gradient-text">& Builder</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Product Manager based in Scotland. Passionate about solving meaningful customer problems, renewable energy, fitness, and creative expression through music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn-primary text-center">
                View My Work
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Get In Touch
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-4 font-semibold">Featured Skills</p>
              <div className="flex flex-wrap gap-3">
                {['Product Strategy', 'Data Analysis', 'User Research', 'Software Delivery', 'Agile Leadership', 'AI'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 border border-orange-500/30 rounded-full text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-96 md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <p className="text-slate-400 text-lg">Professional Headshot</p>
                <p className="text-slate-500 text-sm mt-2">Add: public/images/headshot.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
