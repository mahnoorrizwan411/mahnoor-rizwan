import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'Dart', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Django', 'Flutter', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Concepts',
      skills: ['REST APIs', 'Responsive Design', 'State Management', 'Animation', 'UI/UX Design'],
    },
    {
      title: 'Tools',
      skills: ['Figma', 'Builder.io', 'Cursor', 'GitHub', 'ChatGPT'],
    },
  ]

  return (
    <section id="skills" className="bg-white py-16 md:py-20">
      <div className="mx-auto mb-10 w-full max-w-[1400px] px-6 lg:px-10 2xl:px-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Skills & Tools</h2>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        {skillCategories.map((category) => (
          <article key={category.title} className="relative py-7">
            <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 2xl:px-12">
              <div className="relative pl-10 md:pl-12">
                <div className="grid gap-3 md:grid-cols-[220px_1fr] md:items-start md:gap-8">
                  <div className="relative">
                    <span className="pointer-events-none absolute right-[calc(100%+1.75rem)] top-1/2 h-px w-screen -translate-y-1/2 bg-gray-500 md:right-[calc(100%+3.5rem)]" />
                    <h3 className="text-lg font-semibold tracking-tight text-gray-800 md:text-xl">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-base leading-7 text-gray-600 md:text-lg">
                    {category.skills.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills

