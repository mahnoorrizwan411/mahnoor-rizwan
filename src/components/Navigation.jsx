import React from 'react'

const Navigation = () => {
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
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              About
            </button>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Blog
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
            >
              Contact
            </button>
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

