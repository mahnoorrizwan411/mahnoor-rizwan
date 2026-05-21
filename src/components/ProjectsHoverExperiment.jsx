import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    title: 'While',
    category: 'Minimalistic Meditation Timer',
    description:
      'A calm timer experience with thoughtful motion, warm visual feedback, and a focused interaction model.',
    tags: ['Flutter', 'Animation', 'UX Optimization'],
    caseStudyUrl: '/case-study/while',
    accent: 'bg-peach',
    preview: {
      eyebrow: 'Mobile Product',
      headline: 'Animated Timer',
      image: null,
    },
  },
  {
    number: '02',
    title: 'Catalyst',
    category: 'React + Vite Web App',
    description:
      'A modular web product focused on performance, polished UI transitions, and scalable front-end structure.',
    tags: ['Performance', 'Modular Design', 'Animation'],
    caseStudyUrl: '/case-study/catalyst',
    accent: 'bg-sky',
    preview: {
      eyebrow: 'Web Product',
      headline: 'AI Driven Development',
      image: null,
    },
  },
]

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)


const BigArrowIcon = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 220 120">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M146 32l56 28-56 28" />
  </svg>
)

const ProjectsHoverExperiment = () => {
  return (
    <section id="projects-hover-experiment" className="bg-[#f7f7f5] py-16 md:py-20">
      <div>
        <div className="mx-auto mb-12 w-full max-w-[1400px] px-6 lg:px-10 2xl:px-12">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.15em] text-gray-400">
            Here's a selection of my work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Products I've built
          </h2>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 divide-y divide-gray-200 border-y border-gray-200">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative min-h-[170px] overflow-hidden py-8 md:min-h-[190px]"
            >
              <div className="relative mx-auto w-full max-w-[1400px] pl-6 pr-6 md:pr-64 lg:pl-10 lg:pr-80 2xl:pl-12 2xl:pr-80">
                <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-center lg:grid-cols-[1fr_420px]">
                  <div className="relative z-10">
                    <div className="relative pl-10 md:pl-12">
                      <div className="absolute right-full top-4 mr-6 flex w-32 items-center justify-end gap-4 text-gray-300 transition-all duration-500 group-hover:w-40 group-hover:translate-x-5 group-hover:text-gray-500 group-focus-within:w-40 group-focus-within:translate-x-5 group-focus-within:text-gray-500 md:mr-10 md:group-hover:translate-x-8 md:group-focus-within:translate-x-8">
                        <span className="absolute right-8 top-1/2 h-px w-screen -translate-y-1/2 bg-current" />
                        <span className="relative text-sm font-medium">{project.number}</span>
                      </div>

                      <div className="transition-all duration-500 md:group-hover:translate-x-8 md:group-focus-within:translate-x-8">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-950 transition-colors duration-500 md:text-4xl md:text-gray-400 md:group-hover:text-gray-950 md:group-focus-within:text-gray-950">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
                          {project.category}
                        </p>

                        <div className="mt-6 max-w-xl translate-y-0 opacity-100 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                          <p className="text-sm leading-6 text-gray-600 md:text-base">{project.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`rounded-full ${project.accent} px-3 py-1 text-xs font-semibold text-gray-600  shadow-sm`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none relative z-0 mx-auto mt-6 h-36 w-56 translate-x-0 opacity-100 transition-all duration-500 md:mt-0 md:h-44 md:w-auto md:translate-x-14 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100">
                    <div className={`absolute bottom-0 right-[-18.25rem] h-28 w-56 ${project.accent} md:h-32 md:w-72 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2`} />
                    <div className="absolute bottom-5 right-[-24.25rem] w-56 rotate-3 overflow-hidden rounded-2xl bg-gray-950 p-4 text-white shadow-2xl transition-transform duration-500 md:w-72 md:group-hover:rotate-0 md:group-focus-within:rotate-0 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2">

                        <div className="flex h-28 flex-col justify-between rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 md:h-36">
                          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                            {project.preview.eyebrow}
                          </span>
                          <span className="max-w-[12rem] text-xl font-semibold leading-tight">
                            {project.preview.headline}
                          </span>
                        </div>
                    </div>
                  </div>
                  
                </div>

                <div className="relative mt-8 flex items-center justify-end md:absolute md:right-6 md:top-1/2 md:z-20 md:mt-0 md:-translate-y-1/2 md:transition-transform md:duration-500 md:group-hover:translate-x-2 md:group-focus-within:translate-x-2 lg:right-10 2xl:right-12">
                  <Link
                    to={project.caseStudyUrl}
                    className="relative isolate inline-flex items-center gap-3 rounded-full bg-transparent px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-950 transition-all duration-500 before:absolute before:left-2 before:top-1/2 before:z-0 before:h-16 before:w-16 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-br before:from-peach before:via-lavender before:to-teal before:opacity-90 before:transition-all before:duration-500 before:ease-out before:content-[''] hover:shadow-lg hover:before:left-0 hover:before:h-full hover:before:w-full focus-visible:shadow-lg focus-visible:before:left-0 focus-visible:before:h-full focus-visible:before:w-full group-hover:shadow-lg group-hover:before:left-0 group-hover:before:h-full group-hover:before:w-full group-focus-within:shadow-lg group-focus-within:before:left-0 group-focus-within:before:h-full group-focus-within:before:w-full"
                  >
                    <span className="relative z-10">View Project</span>
                    <span className="relative z-10">
                      <ArrowIcon />
                    </span>
                  </Link>
                  {/* <Link
                    to={project.caseStudyUrl}
                    aria-label={`Open ${project.title} project`}
                    className="-ml-5 inline-flex text-gray-900 transition-transform duration-500 hover:translate-x-1 focus-visible:translate-x-1"
                  >
                    <BigArrowIcon className="h-12 w-24 md:h-16 md:w-36 lg:h-20 lg:w-44" />
                  </Link> */}
                </div>
                
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsHoverExperiment
