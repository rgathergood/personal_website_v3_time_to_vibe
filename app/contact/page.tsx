'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add form submission logic (Formspree, SendGrid, etc.)
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">Let's discuss projects, ideas, or anything else</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-orange-400 mb-2">Email</h3>
                  <a href="mailto:rgathergood@gmail.com" className="text-lg text-slate-300 hover:text-orange-400 transition">
                    rgathergood@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-orange-400 mb-2">Phone</h3>
                  <a href="tel:+447854558449" className="text-lg text-slate-300 hover:text-orange-400 transition">
                    +44 (0) 7854 558 449
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-orange-400 mb-2">Social</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://www.linkedin.com/in/rob-gathergood/" 
                      className="block text-slate-300 hover:text-orange-400 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none transition" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none transition" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none transition resize-none" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
