import React from 'react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-lavender to-teal opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lilac rounded-full opacity-20 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blush rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-sage rounded-full opacity-15 blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* SVG in the middle */}
      <div className="relative z-10 flex items-center justify-center h-[33.333vh]">
        <img 
          src="/mahnoor-square-kufic.svg" 
          alt="Mahnoor Rizwan - Kufic Art" 
          className="w-full h-full max-w-2xl object-contain"
        />
      </div>

      {/* Content - Commented out */}
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          Mahnoor Rizwan
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
        Creating Impact - where code meets empathy
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-12 mt-8 max-w-6xl mx-auto">
          Full-Stack Product Engineer | Mother driven by curiosity and creation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <a
            href="https://www.linkedin.com/in/mahnoor-rizwan-pe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-200"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

