import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rob-gathergood/' },
    { label: 'Email', url: 'mailto:rgathergood@gmail.com' },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Rob Gathergood</h3>
            <p className="text-slate-400">Product Manager | Musician | Builder</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-orange-400 transition">About</Link></li>
              <li><Link href="/projects" className="hover:text-orange-400 transition">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-slate-400 hover:text-orange-400 transition text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Rob Gathergood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
