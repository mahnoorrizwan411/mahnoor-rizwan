import React from 'react'
import { Link } from 'react-router-dom'

const CatalystCaseStudy = () => {
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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-300 via-sky-200 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Catalyst
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                High-Performance Landing Experience for Pakistan's Builders
              </p>
              <p className="text-lg text-gray-600 mb-8">
                React + Vite–powered landing application enabling structured onboarding for Builder & Operator tracks
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div>
                  <span className="font-semibold">Role:</span> Frontend Engineer / System Integrator
                </div>
                <div>
                  <span className="font-semibold">Stack:</span> React, Vite, Tailwind, Cloudflare Functions
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
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-400">Desktop + Mobile Screens (Hero + Track forms + animations)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Overview Snapshot */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Catalyst is a modular React + Vite landing experience that informs and converts two distinct user tracks — Builders & Operators. It leverages scroll-based interaction, Lottie-powered animation, and Cloudflare serverless functions to capture leads and automate communications via Systeme.io + Mailgun.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Platform</div>
              <div className="text-lg font-semibold text-gray-800">Web</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Role</div>
              <div className="text-lg font-semibold text-gray-800">Frontend Engineer / System Integrator</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Stack</div>
              <div className="text-lg font-semibold text-gray-800">React, Vite, Tailwind, Cloudflare Functions</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Highlights</div>
              <div className="text-lg font-semibold text-gray-800">Modular sections, Lottie animation, Systeme.io + Mailgun</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Key Differentiators */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Differentiators</h2>
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

      {/* SECTION 4 — Architecture Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Architecture Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800">Browser (React 19)</div>
                </div>
                <div className="text-center text-gray-600">↓</div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800">Client-side Routing</div>
                  <div className="text-sm text-gray-600 mt-1">React Router</div>
                </div>
                <div className="text-center text-gray-600">↓</div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800">Cloudflare Functions</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold text-gray-800">Systeme.io API</div>
                    <div className="text-xs text-gray-600 mt-1">Lead capture + CRM</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold text-gray-800">Mailgun API</div>
                    <div className="text-xs text-gray-600 mt-1">Email delivery</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Component Breakdown</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span><strong>Page-level:</strong> /, /builder-track, /operator-track</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span><strong>Sectional:</strong> Hero, Features, CTA sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span><strong>Reusable:</strong> Buttons, Forms, Animation wrappers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Routing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>/ (Home)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>/builder-track</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>/operator-track</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Technical Highlights */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A) Frontend Architecture</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>React 19 + Vite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Modular component tree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Page → Section → Reusable breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Tailwind utility styling + typography system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Client-side routing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">B) Animation & Interactivity</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Lottie React</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Intersection Observer scroll reveal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Custom hooks (useFadeInOnScroll)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Mouse tracking + SVG roadmap animation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">C) Backend / API</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Cloudflare Pages + Functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Systeme.io integration for lead capture + tagging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Mailgun transactional emails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Environment-based config</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">D) Build + DX</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Vite bundling + HMR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>ESLint config</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>TypeScript typings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Code splitting + lazy loading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Feature Deep Dive */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Feature Deep Dive</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Builder & Operator Track Flow</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Dynamic CTA → Form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Field validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Systeme.io + Mailgun sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Confirmation + success states</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">Track Flow UI</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64 order-2 md:order-1">
              <p className="text-gray-400">Scroll Experience UI</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Scroll-Driven Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Section reveals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Progressive content reveal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Smooth transitions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Roadmap Animation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>SVG path traversal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Sequential reveal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lilac mr-2">•</span>
                  <span>Resizable path recalculations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">Roadmap Animation UI</p>
            </div>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Multi-role onboarding complexity</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Two dedicated tracks w/ separate UI + APIs</p>
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

            <div className="bg-white rounded-lg p-8 shadow-md md:col-span-2">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email automation</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Mailgun transactional pipeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — UX Highlights */}
      <section className="py-16 px-6 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-lg font-semibold text-gray-800">{highlight}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg p-12">
            <p className="text-center text-gray-400">UX Screenshots Gallery</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Business Value */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-300 to-sky-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lead Capture & Segmentation</h3>
              <p className="text-gray-700">Captures and segments qualified leads (Builders vs Operators)</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Communication Funnel</h3>
              <p className="text-gray-700">Enables communications funnel via Mailgun</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clear Learning Paths</h3>
              <p className="text-gray-700">Provides clear learning + enablement paths</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Scalable Architecture</h3>
              <p className="text-gray-700">Uses scalable + modular FE architecture</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instant Deployment</h3>
              <p className="text-gray-700">Deployable instantly via Cloudflare Pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Reflection / Conclusion */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reflection</h2>
          <div className="bg-gray-50 rounded-2xl p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Building the Catalyst landing experience emphasized balancing modular architecture with high-impact animations and multi-track onboarding. Designing reusable section components and animated wrappers allowed scalable growth, while Cloudflare Functions enabled secure API orchestration with Systeme.io + Mailgun.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result is a fast, visually engaging, and production-ready landing system that scales with program needs. The dual-track approach required careful UX consideration to ensure each user type felt their path was purposefully designed, while the technical implementation prioritized performance and maintainability.
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

