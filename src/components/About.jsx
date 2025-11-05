import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm <span className="font-semibold">Mahnoor Rizwan</span>, a full-stack product engineer who loves turning thoughtful ideas into scalable, human-centered products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With roots in electrical engineering and hands-on experience across React, Django, and Flutter, I bridge design, development, and product strategy to deliver clean, performant, and delightful experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-gray-600">
              When I'm not engineering products, I'm exploring motherhood — it's my greatest challenge yet.
            </p>
            <a
              href="/Mahnoor Rizwan CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-peach to-lavender text-gray-800 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View CV
            </a>
          </div>

          {/* Photo */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-peach via-lavender to-teal p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/mahnoor.jpeg" 
                    alt="Mahnoor Rizwan - Product Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lilac rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

