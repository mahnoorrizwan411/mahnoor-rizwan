import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      title: "While",
      subtitle: "Minimalist Meditation Timer App",
      tags: ["Flutter", "Animation", "UX Optimization"],
      description: "A beautifully crafted meditation timer with intuitive animations and user-focused design.",
      color: "from-peach to-blush",
      caseStudyUrl: "/case-study/while"
    },
    {
      title: "Catalyst",
      subtitle: "React + Vite web app",
      tags: ["Performance", "Modular Design", "Animation"],
      description: "High-performance web application with modular architecture.",
      color: "from-blue to-sky",
      caseStudyUrl: "/case-study/catalyst"
    },
    // {
    //   title: "Cherrish",
    //   subtitle: "Audio-first matchmaking app",
    //   tags: ["Flutter", "Firebase", "User Experience"],
    //   description: "Revolutionizing connections through audio-first interactions.",
    //   color: "from-lavender to-lilac",
    //   caseStudyUrl: "/case-study/cherrish"
    // },
    // {
    //   title: "Progression Product",
    //   subtitle: "Django REST backend & Builder.io frontend",
    //   tags: ["Backend Architecture", "APIs", "Product Delivery", "AI"],
    //   description: "Robust backend architecture powering dynamic frontend experiences.",
    //   color: "from-teal to-sage",
    //   caseStudyUrl: "/case-study/progression-product"
    // }
    
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Featured Projects</h2>
        {/* <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of products where engineering meets impactful design
        </p> */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${project.color}`}></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.caseStudyUrl ? (
                  <Link
                    to={project.caseStudyUrl}
                    className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300 flex items-center gap-2"
                  >
                    View Case Study
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300 flex items-center gap-2">
                    View Case Study
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

