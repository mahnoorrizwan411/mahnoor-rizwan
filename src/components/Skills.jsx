import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "Dart", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Django", "Flutter", "Vite", "Tailwind CSS"]
    },
    {
      title: "Concepts",
      skills: ["REST APIs", "Responsive Design", "State Management", "Animation", "UI/UX Design",]
    },
    {
      title: "Tools",
      skills: ["Figma", "Builder.io", "Cursor", "GitHub", "ChatGPT"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">Skills & Tools</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-br from-peach to-lavender text-gray-800 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        {/* <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-700 italic font-light leading-relaxed">
            "I believe good engineering is a mix of <span className="font-semibold text-gray-800">clarity</span>, <span className="font-semibold text-gray-800">curiosity</span>, and <span className="font-semibold text-gray-800">care</span>."
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default Skills

