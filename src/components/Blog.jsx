import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const topicIndex = [
  {
    title: 'Product signal sketches',
    description:
      'Short notes on how research, teams, and data inform the paths I pick while designing scalable products.',
  },
  {
    title: 'House of habits',
    description:
      'A place for the cadence, rituals, and tools that keep a growing engineering practice aligned with care.',
  },
  {
    title: 'People + process',
    description:
      'How I translate messy stakeholder needs into purposeful roadmaps and collaborative rituals.',
  },
  {
    title: 'Side-project log',
    description:
      'Working notes around independent experiments—what is working, what is still just an idea, and why.',
  },
]

const upcomingPosts = [
  {
    title: 'Designing trust for mission-critical tooling',
    summary:
      'How I balance optics and orchestration when instrumenting enterprise products for new teams.',
    date: 'Jan 2026',
    status: 'Drafting',
    tags: ['design systems', 'trust', 'onboarding'],
  },
  {
    title: 'Building collaborative rituals for async teams',
    summary:
      'Reflections on the playbooks, templates, and guardrails that keep cross-functional cadences connected.',
    date: 'Dec 2025',
    status: 'Outline ready',
    tags: ['teamwork', 'process', 'product'],
  },
  {
    title: 'From case study to practice: What I carry forward',
    summary:
      'A short collection of lessons from each month of case studies and how they change my design choices.',
    date: 'Nov 2025',
    status: 'Published soon',
    tags: ['case study', 'practice', 'reflection'],
  },
]

const BlogCard = ({ post }) => (
  <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex items-center justify-between text-sm text-slate-300">
      <span>{post.date}</span>
      <span className="uppercase tracking-widest text-xs font-semibold text-cyan-300">
        {post.status}
      </span>
    </div>
    <h3 className="text-2xl font-semibold text-white mt-4">{post.title}</h3>
    <p className="text-slate-200 mt-3 leading-relaxed">{post.summary}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {post.tags.map((tag) => (
        <span
          key={`${post.title}-${tag}`}
          className="text-xs uppercase tracking-wide text-slate-300 border border-white/20 rounded-full px-3 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
      <Link
        to="/"
        className="text-cyan-300 hover:text-white font-semibold transition-colors duration-200"
      >
        Home
      </Link>
      <span className="text-slate-500">—</span>
      <a
        href="mailto:mahnoorrizwan411@gmail.com?subject=Blog idea"
        className="text-white/60 hover:text-white transition-colors duration-200"
      >
        Pitch me this idea
      </a>
    </div>
  </article>
)

const Blog = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navigation />
      <main className="pt-32 px-6 pb-16">
        <div className="max-w-5xl mx-auto space-y-16">
          <section className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Notebook</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
              A live sketch of the ideas I keep returning to and the posts I plan to ship.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Expect thoughtful breakdowns of product work, process experiments, and the tiny rituals that
              help me stay curious. Everything is tagged, indexed, and ready for the next update.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white hover:text-white/80 transition"
              >
                Back to portfolio
              </Link>
              <a
                href="mailto:mahnoorrizwan411@gmail.com?subject=Blog Subscription"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition"
              >
                Subscribe for drafts
              </a>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Index of things</p>
                <h2 className="text-3xl font-semibold mt-1">Topics I keep coming back to</h2>
              </div>
              <span className="text-xs text-slate-500">Updated weekly</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {topicIndex.map((topic) => (
                <article
                  key={topic.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 leading-relaxed text-slate-200"
                >
                  <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{topic.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Draft & planned posts</p>
                <h2 className="text-3xl font-semibold mt-1">What’s coming up</h2>
              </div>
              <span className="text-xs text-slate-500">Open for collaboration</span>
            </div>
            <div className="grid gap-8">
              {upcomingPosts.map((post) => (
                <BlogCard post={post} key={post.title} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Blog
