import Link from 'next/link'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Product Manager, Musician, and Builder</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Professional Background</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I'm a Scrum-certified Product Manager with 7+ years of experience driving product strategy and delivery across multiple industries. My journey started at Raytheon in project management, evolved through roles at Criton and Condatis, and now I lead product strategy at Payscale.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I focus on solving meaningful customer problems by working closely with developers, designers, and stakeholders to design, build, and deliver scalable, value-driven products.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Product Management Philosophy</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I believe in data-driven decision making, continuous customer discovery, and balancing customer needs with business goals. My approach emphasizes clear communication, ownership, and influence across teams to ensure consistent product delivery and measurable outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Personal Interests</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Beyond product management, I'm passionate about:
              </p>
              <ul className="text-lg text-slate-300 space-y-2 ml-4">
                <li>🥁 Playing drums in bands and learning piano</li>
                <li>⚡ Renewable energy and sustainable living (2025: became gas-free with solar, battery, heat pump, EV)</li>
                <li>🧱 Building with Lego and exploring creative projects</li>
                <li>💪 Weightlifting and staying active with dog walks</li>
                <li>📚 Science fiction books and films</li>
                <li>🎮 Single-player RPGs and immersive storytelling</li>
                <li>💰 Personal finance and investing</li>
              </ul>
            </div>

            {/* Skills Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Core Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold text-orange-400 mb-4">Product Management</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>✓ Product Strategy & Roadmapping</li>
                    <li>✓ Customer Discovery & UX Research</li>
                    <li>✓ Data Analysis & Metrics (AERM)</li>
                    <li>✓ Agile Leadership & Scrum</li>
                    <li>✓ Requirements Gathering</li>
                    <li>✓ Stakeholder Management</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold text-orange-400 mb-4">Technical & Tools</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>✓ Full-Stack Development (Angular, React)</li>
                    <li>✓ Cloud Platforms (Azure)</li>
                    <li>✓ Data Tools (Snowflake, Pendo)</li>
                    <li>✓ Design & Prototyping (Figma)</li>
                    <li>✓ Project Management (Jira, Aha!)</li>
                    <li>✓ Analytics & Dashboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-8">Want to Work Together?</h3>
            <p className="text-lg text-slate-300 mb-8">
              I'm always open to discussing interesting projects, product challenges, or creative collaborations.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
