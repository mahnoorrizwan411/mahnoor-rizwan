import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Dart', 'JavaScript', 'Python',  'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      skills: ['Flutter', 'Django', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Concepts',
      skills: [ 'Responsive Design', 'State Management', 'Animation', 'UI/UX Design', 'REST APIs', 'Authentication', 'Swagger', 'DRF', 'Native iOS'],
    },
    {
      title: 'Tools',
      skills: ['Figma', 'Builder.io', 'GitHub', 'Linear', 'Figma', 'Postman', 'Firebase', 'ChatGPT', 'Cursor', 'Claude'],
    },
  ]

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return undefined
    const scrollRoot = document.getElementById('home-scroll-container')
    let revealTimer

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTimer = setTimeout(() => {
            setIsInView(true)
          }, 120)
          observer.disconnect()
        }
      },
      { root: scrollRoot, threshold: 0.2 }
    )

    observer.observe(sectionEl)
    return () => {
      observer.disconnect()
      if (revealTimer) clearTimeout(revealTimer)
    }
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="bg-white py-16 md:py-20">
      <div className="mx-auto mb-10 w-full max-w-[1400px] px-6 lg:px-10 2xl:px-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Skills & Tools</h2>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        {skillCategories.map((category, index) => (
          <article
            key={category.title}
            className={`relative py-7 transition-all duration-[900ms] ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay: isInView ? `${index * 1000}ms` : '0ms' }}
          >
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

