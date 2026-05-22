import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const resumeHref = '/Mahnoor Rizwan CV.pdf'

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo placeholder */}
          <div className="flex-shrink-0">
            {/* You can add a logo here if needed */}
          </div>

          {/* Right side - Navigation items */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              About
            </button>
            {/* Blog is currently disabled */}
            {/* <Link
              to="/blog"
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Blog
            </Link> */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Contact
            </button>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-black bg-white px-6 py-2.5 text-sm font-normal uppercase tracking-[0.03em] text-black shadow-[0_4px_12px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
            >
              Resume
            </a>
            {/* <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Substack
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

