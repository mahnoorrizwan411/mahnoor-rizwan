import React from 'react'
import { Link } from 'react-router-dom'

const screenshotImages = [
  {
    id: 'light',
    src: '/assets/While/while-light.png',
    alt: 'While app light interface',
  },
  {
    id: 'teal',
    src: '/assets/While/while-dark.png',
    alt: 'While app teal wallpaper',
  },
  {
    id: 'super-dark',
    src: '/assets/While/while-super-dark.png',
    alt: 'While app dark mode',
  },
]

const galleryScreens = [
  {
    id: 'screen-0',
    src: '/assets/While/screens/while-light.png',
    alt: 'While screen - light',
  },
  {
    id: 'screen-1',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.27.45.png',
    alt: 'While screen - 19.27.45',
  },
  {
    id: 'screen-2',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.27.51.png',
    alt: 'While screen - 19.27.51',
  },
  {
    id: 'screen-3',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.28.01.png',
    alt: 'While screen - 19.28.01',
  },
  {
    id: 'screen-6',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.28.29.png',
    alt: 'While screen - 19.28.29',
  },
  // {
  //   id: 'screen-4',
  //   src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.28.08.png',
  //   alt: 'While screen - 19.28.08',
  // },
  {
    id: 'screen-5',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.28.19.png',
    alt: 'While screen - 19.28.19',
  },
  {
    id: 'screen-7',
    src: '/assets/While/screens/Simulator Screenshot - iPhone SE (3rd generation) - 2025-11-25 at 19.28.42.png',
    alt: 'While screen - 19.28.42',
  },
]

const whileVideoSrc = '/assets/While/While.mp4'

const WhileCaseStudy = () => {
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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-peach via-blush to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="mx-auto max-w-xl md:mx-0">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                  While
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                  Animated Meditation Timer for Focus
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  A Flutter meditation timer with a minamilistic interface, advanced animations, and optional biometric integration.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-6">
                <div>
                  <span className="font-semibold">Role:</span> Flutter Engineer • Product Designer
                </div>
                <div>
                  <span className="font-semibold">Timeline:</span> 2024
                </div>
                <div>
                  <span className="font-semibold">Platforms:</span> iOS / Android
                </div>
                <div>
                  <span className="font-semibold">Stack:</span> Flutter, Dart, Hive, BLoC, RevenueCat, Mixpanel, Polar SDK
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  View App ↗
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
                >
                  View Repo ↗
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid w-full max-w-4xl grid-cols-3 gap-4">
                {screenshotImages.map((screen) => (
                  <div
                    key={screen.id}
                    className="relative h-[360px] w-full rounded-[15px] border border-slate-800/10 overflow-hidden"
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
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
            While is a minimal, animation-driven meditation timer emphasizing visual calm and simplicity. Its circular timer interface reacts to scrolling, enabling users to intuitively select durations. With polar heart-rate integration, session history, interval chimes, and theme personalization, While delivers an immersive, distraction-free meditation experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Platform</div>
              <div className="text-lg font-semibold text-gray-800">Mobile</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Role</div>
              <div className="text-lg font-semibold text-gray-800">Full-stack Flutter Engineer</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Architecture</div>
              <div className="text-lg font-semibold text-gray-800">Clean Architecture + BLoC</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Data</div>
              <div className="text-lg font-semibold text-gray-800">Hive, Secure Storage</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Monetization</div>
              <div className="text-lg font-semibold text-gray-800">RevenueCat</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Analytics</div>
              <div className="text-lg font-semibold text-gray-800">Mixpanel</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">Integrations</div>
              <div className="text-lg font-semibold text-gray-800">Polar SDK</div>
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
              { title: "Scroll based timer", desc: "Intuitive scroll interaction" },
              { title: "Advanced custom animations", desc: "Smooth transitions" },
              { title: "Deep theme customization", desc: "Time-aware themes" },
              { title: "Polar heart-rate integration", desc: "Heart-rate + accelerometer" },
              { title: "Session history calendar", desc: "Track your progress" },
              { title: "Premium model", desc: "RevenueCat subscriptions" }
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
                  <div className="text-lg font-bold text-gray-800 mb-2">Presentation Layer (Flutter UI)</div>
                  <div className="text-sm text-gray-600 ml-4">└── Screens / Widgets / Misc</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">Logic Layer (BLoC)</div>
                  <div className="text-sm text-gray-600 ml-4 space-y-1">
                    <div>├── TimerBloc</div>
                    <div>├── SessionBloc</div>
                    <div>├── SettingsBloc</div>
                    <div>└── HistoryBloc</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">Data Layer</div>
                  <div className="text-sm text-gray-600 ml-4 space-y-1">
                    <div>├── Hive Repositories</div>
                    <div>├── RevenueCat Service</div>
                    <div>├── Polar Integration</div>
                    <div>└── Analytics Service</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Architecture Principles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span><strong>Clean Architecture</strong> + Repository Pattern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span><strong>Predictable state management</strong> with BLoC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span><strong>Mixpanel event wrapper</strong> for analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Data Flow</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>UI → Bloc → Repo → Service → External API</div>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A) UI & Interaction</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Circle painter rendering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Snap-scroll behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>TweenSequence transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Immersive UI mode</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">B) Audio & Timer Engine</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Multi-chime system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Custom sequencing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Warm-up + interval layers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">C) Data & Integration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Hive storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Secure storage for premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Polar heart rate + accelerometer streaming</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">D) Monetization & Analytics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>RevenueCat subscription tiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Mixpanel event tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-2">•</span>
                  <span>Session metrics + retention behavior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Feature Deep Dive */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Feature Deep Dive</h2>
          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-stretch">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Scrollable Circular Timer</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Scroll → calculate → snap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Circle opacity + depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Smooth time selection</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Animation System</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Multi-controller sequencing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>State-driven</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Pause → resume → fade</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Heartrate Integration</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Polar heart rate + ECG + accelerometer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Live session recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach mr-2">•</span>
                    <span>Export & share data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg p-8 flex items-center justify-center min-h-[420px] h-full">
              <video
                src={whileVideoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full rounded-[35px] object-cover"
              />
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Coordinating multi-stage animations</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">State-driven controllers + TweenSequence</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mapping scroll offset to time</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Gravity-like snapping + math-based offset</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Background timer reliability</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Local notifications + wakelock</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cross-Bloc synchronization</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">Event→state pipeline + repository</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-red-600 font-semibold mb-2">Challenge</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Secure premium logic</h3>
              <div className="text-teal-600 font-semibold mb-2 mt-6">Solution</div>
              <p className="text-gray-700">RevenueCat + secure storage</p>
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
              "Circular meditation selector with physics feel",
              "Minimal, silent-forward interface",
              "Automatic day/night & colored themes",
              "Clear session history calendar",
              "Beautiful audio cue timing"
            ].map((highlight, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-lg font-semibold text-gray-800">{highlight}</div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/80 p-6">
            <div className="text-center text-xs uppercase tracking-[0.45em] text-slate-400">
              Fullscreen Gallery
            </div>
            <div className="mt-2 h-px bg-slate-200" />
            <div className="mt-5 flex flex-nowrap w-full gap-4 overflow-x-auto pb-6">
              {galleryScreens.map((screen) => (
                <div
                  key={screen.id}
                  className="relative flex-none h-[360px] w-[180px] rounded-[15px] border border-slate-200/70 overflow-hidden"
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Business Value */}
      <section className="py-16 px-6 bg-gradient-to-br from-peach to-blush">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Meditation Routine</h3>
              <p className="text-gray-700">Enables lightweight daily meditation routine</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Unique Differentiation</h3>
              <p className="text-gray-700">Differentiates via animation + biometrics</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Revenue Model</h3>
              <p className="text-gray-700">Subscription-driven revenue model</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Health Data Collection</h3>
              <p className="text-gray-700">Streamlines health data collection for advanced users</p>
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
              Building While was a balanced exercise in animation-driven product design and robust engineering. Managing complex state, scroll physics, and coordinated animation sequences required a thoughtful foundational architecture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Integrations like Polar and RevenueCat expanded the product's value and reinforced scalability, while Mixpanel enabled insights into retention and session behavior.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result is a polished meditation experience that feels natural, calm, and deeply personal.
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

export default WhileCaseStudy

