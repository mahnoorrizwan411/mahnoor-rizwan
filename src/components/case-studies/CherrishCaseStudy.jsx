import React from 'react'
import { Link } from 'react-router-dom'

const CherrishCaseStudy = () => {
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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-lavender via-lilac to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Cherrish
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Audio-First Matchmaking for Ambitious Professionals
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A cross-platform Flutter application enabling audio-driven personal connections
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Role:</span> Mobile Engineer / Architect
                </div>
                <div>
                  <span className="font-semibold">Stack:</span> Flutter, Redux, Firebase, FFmpeg
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> iOS / Android
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-400">App Mockups / UI Screens</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Overview Snapshot */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Cherrish is a premium matchmaking platform emphasizing curated, audio-based introductions. Built in Flutter, it integrates a robust invitation system, advanced audio processing, and Firebase-powered backend.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Platform</div>
              <div className="text-lg font-semibold text-gray-800">iOS / Android</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">My Role</div>
              <div className="text-lg font-semibold text-gray-800">Mobile Engineer / Architect</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Stack</div>
              <div className="text-lg font-semibold text-gray-800">Flutter, Redux, Firebase, FFmpeg</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Highlights</div>
              <div className="text-lg font-semibold text-gray-800">Audio onboarding, Wing-woman invites</div>
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
              "Audio-first onboarding",
              "Wing woman invite system",
              "Curated user base",
              "AI chatbot support",
              "Background playback",
              "A/B tested feature flags (GrowthBook/Mixpanel)"
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-gray-800">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Architecture Diagram */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Architecture</h2>
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Flutter App</div>
                  <div className="text-gray-600">Cross-platform mobile application</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Redux</div>
                  <div className="text-gray-600">State management</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Audio Processing</div>
                  <div className="text-gray-600">FFmpeg compression & waveform visualization</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Firebase Authentication</div>
                  <div className="text-gray-600">User authentication</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Firestore</div>
                  <div className="text-gray-600">Real-time database</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-xl font-bold text-gray-800 mb-2">Storage + Messaging</div>
                  <div className="text-gray-600">File storage & push notifications</div>
                </div>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A) Mobile Architecture</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Flutter + Redux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>95% shared code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Flavor-based builds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Persistent redux state</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">B) Audio Stack</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>just_audio + audio_service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>FFmpeg compression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Waveform visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>20–120s audio invites & responses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">C) Backend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Firebase Auth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Firestore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Remote Config, Crashlytics, App Check</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">D) Growth + Analytics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Mixpanel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>GrowthBook</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Funnel tracking</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Audio Onboarding</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Record prompts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Waveform previews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Sequential audio playback</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">Audio Onboarding UI</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64 order-2 md:order-1">
              <p className="text-gray-400">Invitation System UI</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Invitation System</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>6-digit secure codes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Wing-woman audio invites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Firestore tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Chat & Profiles</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Audio messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Audio queue system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender mr-2">•</span>
                  <span>Location-based matching</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-64">
              <p className="text-gray-400">Chat & Profiles UI</p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Streaming large files</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">FFmpeg compression + caching</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Complex onboarding</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Redux persistence + dynamic routing</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Invite validation</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Indexed Firestore queries</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Queue playback</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Concatenating audio source management</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — UX Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">UX Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "Voice-driven profile creation",
              "Progressive onboarding",
              "Personalized wing-woman intros",
              "Local + push notifications"
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
      <section className="py-16 px-6 bg-gradient-to-br from-lavender to-lilac">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Value</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Higher Trust</h3>
              <p className="text-gray-700">Through curated invites and verified user base</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Differentiation</h3>
              <p className="text-gray-700">Via audio-first interaction model</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Scalability</h3>
              <p className="text-gray-700">Flutter + Firebase architecture enables rapid iteration</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Data-Driven</h3>
              <p className="text-gray-700">Mixpanel + GrowthBook drive continuous improvements</p>
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
              Building Cherrish underscored the complexity of designing frictionless audio flows and invitation pathways while maintaining state persistence. Leveraging Firebase allowed fast iteration, while Mixpanel + GrowthBook drove data-backed improvements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The audio-first approach created unique technical challenges around compression, streaming, and queue management, but ultimately resulted in a more authentic and engaging user experience that differentiated Cherrish in the crowded matchmaking space.
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

export default CherrishCaseStudy

