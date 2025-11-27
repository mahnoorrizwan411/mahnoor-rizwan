import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProgressionProductCaseStudy = () => {
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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-teal via-sage to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-800 mb-4">
              OTP Login • Weighted Scoring • Swagger-Documented API
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Evolve
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Component-Based Performance & 360° Feedback Platform
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Next.js + Django system for building custom evaluations, assigning components, and aggregating scores across teams.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div>
                  <span className="font-semibold">Role:</span> Full-stack Engineer
                </div>
                <div>
                  <span className="font-semibold">Timeline:</span> 2024
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> Web
                </div>
                <div>
                  <span className="font-semibold">Frontend:</span> Next.js 15 (App Router), Redux Toolkit, Tailwind
                </div>
                <div>
                  <span className="font-semibold">Backend:</span> Django 5 / DRF
                </div>
                <div>
                  <span className="font-semibold">DB:</span> PostgreSQL
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  View Demo ↗
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
                >
                  View Repo(s) ↗
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-2xl p-8 h-48 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Dashboard (scores + status)</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                  <p className="text-xs text-gray-400">Form Builder</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                  <p className="text-xs text-gray-400">Component Assignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Overview Snapshot */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Evolve centralizes performance evaluations with componentized scoring, custom form building, and 360° feedback. Admins model teams, assign components with weights and recurrences, and track completion in real time. Users authenticate via email OTP, complete assigned forms, and receive transparent scoring.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Platform</div>
              <div className="text-lg font-semibold text-gray-800">Web (Next.js + Django)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Auth</div>
              <div className="text-lg font-semibold text-gray-800">OTP Email + DRF Token</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Architecture</div>
              <div className="text-lg font-semibold text-gray-800">App Router + Redux + Service Layer / DRF ViewSets</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Data</div>
              <div className="text-lg font-semibold text-gray-800">PostgreSQL (UUID PKs), Django ORM</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Docs</div>
              <div className="text-lg font-semibold text-gray-800">Swagger / OpenAPI</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Hosting</div>
              <div className="text-lg font-semibold text-gray-800">Vercel/Netlify (FE), Render (BE)</div>
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
              { title: "Weighted components & sub-components", desc: "Component-based evaluation" },
              { title: "360° provider → recipient pairing", desc: "Feedback workflow" },
              { title: "Form builder (MCQ/Text) + option scores", desc: "Custom form creation" },
              { title: "Assignments with recurrence windows", desc: "Monthly/quarterly scheduling" },
              { title: "Real-time scoreboard & rankings", desc: "Aggregated scores" },
              { title: "Admin controls: teams, roles, bulk users", desc: "Organization management" }
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
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">Client (Next.js 15 + App Router)</div>
                  <div className="text-sm text-gray-600 ml-4 space-y-1">
                    <div>├─ Redux Toolkit (feature slices)</div>
                    <div>├─ Service Layer (Axios)</div>
                    <div>└─ UI: Tailwind + Radix + CVA</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">API (Django 5 + DRF)</div>
                  <div className="text-sm text-gray-600 ml-4 space-y-1">
                    <div>├─ ViewSets (CRUD + custom actions)</div>
                    <div>├─ Token Auth + OTP login</div>
                    <div>├─ Swagger (drf-yasg)</div>
                    <div>└─ Permission Classes (role-based)</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">Data (PostgreSQL)</div>
                  <div className="text-sm text-gray-600 ml-4 space-y-1">
                    <div>├─ UUID PKs + FKs</div>
                    <div>├─ Component/Form/UserForm/UserScore</div>
                    <div>└─ Indexing + migrations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Architecture Notes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span><strong>Service Layer</strong> abstracts API calls; normalized Redux state for performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span><strong>DRF ViewSets</strong> + router URLs keep endpoints consistent and documented</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span><strong>OTP → Token flow</strong> secures session without passwords</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A) Frontend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Next.js App Router, feature-based Redux slices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Tailwind + CVA variants, Radix primitives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Axios API factory, toast (sonner)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>DnD (react-beautiful-dnd)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">B) Backend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Django apps (users/components/evaluation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>DRF ViewSets, role permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Swagger docs, email OTP with custom SSL/TLS backend</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">C) Data & Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>PostgreSQL (UUID PKs), strict FKs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>CORS, CSRF, env-based config</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Token auth, OTP expiry validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">D) Performance & DX</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>SSR/streaming, code split/lazy routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Tailwind purge, select_related/prefetch_related</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Type-safe models/interfaces, HMR</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Component-Based Evaluation (Weighted)</h3>
              <p className="text-gray-700 mb-4">
                Admins compose components → sub-components → questions (weighted). Assign to users with recurrence and date windows. Scores aggregate to ComponentScore and UserScore.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">Component Evaluation UI</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64 order-2 md:order-1">
              <p className="text-gray-400">Form Builder UI</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Form Builder & Filling</h3>
              <p className="text-gray-700 mb-4">
                Create forms with MCQ + Text; options carry scores; allow per-question weights and leadership comments. UserForm links provider→recipient; statuses: Not Started / In Progress / Completed.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">360° Feedback Workflow</h3>
              <p className="text-gray-700 mb-4">
                Admin assigns forms to a provider/recipient pair; provider completes; system computes weighted score; dashboard shows progress & rankings.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">360° Feedback UI</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64 order-2 md:order-1">
              <p className="text-gray-400">Teams & Roles UI</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Teams & Roles</h3>
              <p className="text-gray-700 mb-4">
                Teams with colored tags; roles (Admin, Creator, User) govern permissions; bulk user creation to bootstrap organizations.
              </p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mapping complex weights across components/sub-components/questions</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Normalized schema + server-side score computation; tested aggregation pipeline</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Avoiding over-fetching lists and N+1 queries</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">DRF queryset optimization with select_related/prefetch_related</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consistent client state across many feature areas</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Redux Toolkit slices + typed hooks + API service factory</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Secure passwordless auth</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">OTP email flow → DRF Token; strict expiry + rate-limit guards</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md md:col-span-2">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clear admin visibility of progress</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Dashboard cards + scoreboard + assigned-forms views with status chips</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — UX Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">UX Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Clean dashboard with completion, due windows, and scores",
              "Form builder with drag-drop and weighted options",
              "Assigned forms view with clear status chips",
              "Team tags with color accents; quick member retrieval",
              "Consistent Poppins / Inter typography + Tailwind spacing scale"
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
      <section className="py-16 px-6 bg-gradient-to-br from-teal to-sage">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Structured Reviews</h3>
              <p className="text-gray-700">Makes performance reviews structured and repeatable</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Reduced Overhead</h3>
              <p className="text-gray-700">Reduces admin overhead with assignments & recurrence</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">360° Feedback</h3>
              <p className="text-gray-700">Encourages peer + manager feedback (360°)</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparent Scoring</h3>
              <p className="text-gray-700">Produces transparent, auditable scoring for decisions</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Scalable Platform</h3>
              <p className="text-gray-700">Scales via modular schema and documented API</p>
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
              Designing Evolve meant balancing clear UX for non-technical admins with a rigorous scoring model. App Router + Redux slices provided a maintainable FE foundation, while DRF ViewSets and UUID-based models kept the backend clean, secure, and scalable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result is a pragmatic platform that organizations can adopt quickly and expand as their evaluation needs grow.
            </p>
          </div>
        </div>
      </section>

      {/* APPENDIX — Quick Specs */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Specs</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold text-gray-800 mb-2">Frontend</div>
              <div className="text-gray-600">Next.js 15 (App Router), React 18, TypeScript, Redux Toolkit, Tailwind, Radix</div>
            </div>
            <div>
              <div className="font-semibold text-gray-800 mb-2">Backend</div>
              <div className="text-gray-600">Django 5, DRF, Swagger, Token Auth, OTP Email</div>
            </div>
            <div>
              <div className="font-semibold text-gray-800 mb-2">Database</div>
              <div className="text-gray-600">PostgreSQL (prod), SQLite (dev) • UUID PKs • Migrations</div>
            </div>
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

export default ProgressionProductCaseStudy

