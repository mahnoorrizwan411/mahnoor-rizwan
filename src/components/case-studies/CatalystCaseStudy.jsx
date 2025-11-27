import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const trackScreens = [
  {
    id: 'main',
    src: '/assets/progression-product/wholeScreen.png',
    alt: 'Main Screen',
  },
  {
    id: 'builder',
    src: '/assets/progression-product/builderTrack.png',
    alt: 'Builder track CTA form',
  },
  {
    id: 'operator',
    src: '/assets/progression-product/operatorTrack.png',
    alt: 'Operator track CTA form',
  },
]

const CatalystCaseStudy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* SECTION 1 — Hero Block */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue to-sky">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Catalyst
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Landing Experience for Pakistan's Builders
              </p>
              <p className="text-lg text-gray-600 mb-8">
                React + Vite–powered landing application enabling structured onboarding for Builder & Operator tracks
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div>
                  <span className="font-semibold">Role:</span> Frontend Engineer
                </div>
                <div>
                  <span className="font-semibold">Stack:</span> React, Vite, Tailwind CSS
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> Web
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  View Live
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
                >
                  View Repo
                </a>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-0 h-[560px] flex flex-col border border-white/10">
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/70 pointer-events-none" />
                <div className="relative h-full overflow-y-auto p-4">
                  <img
                    src="/assets/progression-product/wholeScreen.png"
                    alt="Catalyst full page experience (scrollable)"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-3 bg-slate-900/80 border-t border-white/10 text-xs uppercase tracking-[0.4em] text-slate-200">
                <span>Desktop</span>
                <a
                  href="/assets/progression-product/wholeScreen.png"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 hover:text-white transition-colors"
                >
                  Open / Zoom ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Overview Snapshot */}
      <section className="py-16 px-6 bg-white mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Catalyst is a modular React + Vite landing experience that informs and converts two distinct user tracks — Builders & Operators. It uses scroll-based interaction, Lottie-powered animation, and Cloudflare serverless functions to capture leads and automate communications via Systeme.io + Mailgun.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dual user track funnel", desc: "Builder + Operator" },
              { title: "Modular, scalable structure", desc: "Component architecture" },
              { title: "Scroll-triggered animations", desc: "IntersectionObserver" },
              { title: "Lottie Hero animation", desc: "Engaging visual experience" },
              { title: "Systeme.io integration", desc: "Lead capture + CRM" },
              { title: "Mailgun integration", desc: "Transactional email delivery" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</div>
                <div className="text-sm text-gray-600">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TRACK APPLICATION SCREENS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Builder & Operator Track Forms</h2>

          <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-100 to-slate-50 p-6">

            <div className="mt-2 h-px bg-slate-200" />
            <div className="mt-5 flex flex-nowrap w-full gap-10 overflow-x-auto pb-6">
              {trackScreens.map((screen) => (
                <div key={screen.id} className="flex flex-col items-stretch gap-3 flex-none w-[320px]">
                  <div className="bg-black rounded-2xl border border-slate-900/70 overflow-hidden h-[560px]">
                    <div className="relative h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />
                      <div className="relative h-full overflow-y-auto p-4">
                        <img
                          src={screen.src}
                          alt={screen.alt}
                          className="h-[240%] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-slate-900/80 border border-slate-900/90 rounded-[16px] text-xs uppercase tracking-[0.4em] text-slate-200 flex items-center justify-between">
                    <span>{screen.id === 'builder' ? 'Builder Track' : 'Operator Track'}</span>
                    <a
                      href={screen.src}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 hover:text-white transition-colors"
                    >
                      Open / Zoom ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Feature Deep Dive */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Feature Deep Dive</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: 'Builder & Operator Track Flow',
                points: [
                  'Dynamic CTA → Form',
                  'Field validation + guidance',
                  'Systeme.io & Mailgun automation',
                  'Success state storytelling',
                ],
              },
              {
                title: 'Scroll-Driven Experience',
                points: [
                  'Section reveals with parallax fade',
                  'Progressive content layering',
                  'Smooth, eased transitions',
                  'Intentional typography hierarchy',
                ],
              },
              {
                title: 'Roadmap Animation',
                points: [
                  'SVG path traversal, timed cues',
                  'Sequential storytelling nodes',
                  'Resizable segments for each phase',
                  'Hover + focus states throughout',
                ],
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-lilac mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Key Challenges & Solutions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email automation</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Mailgun transactional pipeline</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Scroll performance w/ Lottie + Observers</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Lazy loading + rAF + intersection callbacks</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Maintainability of UI sections</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Modular architecture + reusable typography + animation wrappers</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">API normalization</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Dedicated Cloudflare functions + mapped tagging</p>
            </div>

            {/* <div className="bg-white rounded-lg p-8 shadow-md md:col-span-2">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email automation</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Mailgun transactional pipeline</p>
            </div> */}
          </div>
        </div>
      </section>


      {/* SECTION 8 — UX Highlights */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue to-sky">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">UX Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              "Purposeful scroll narrative",
              "Polished Lottie Hero",
              "Responsive Tailwind layout",
              "Clear dual-track CTA",
              "Accessible forms + messaging",
              "Smooth state transitions"
            ].map((highlight, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow-lg shadow-slate-900/30 backdrop-blur-xl"
              >
                <div className="text-lg font-semibold text-gray-100">{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Reflection / Conclusion */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reflection</h2>
          <div className="bg-gray-50 rounded-2xl p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Working on the Catalyst landing experience pushed me outside my comfort zone. I had never built something like this before, and honestly, React and web felt completely new to me — but I took it as a challenge and made it work. I actively used AI throughout the process, which helped me move faster, understand patterns, and write cleaner code, especially for complex animations and layout structures.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            This project really changed my perspective. It made me realize that in today’s era, languages and frameworks are just tools — what truly matters are strong fundamentals in mobile and web concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="inline-block px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default CatalystCaseStudy

