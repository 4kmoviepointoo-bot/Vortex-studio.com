'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const principles = [
  {
    title: 'Velocity & Precision',
    description: 'Rapid deployment without breaking production. We ship fast, test rigorously, and maintain stability at every iteration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Motion as Function',
    description: 'Animations that guide user focus rather than distract. Every transition serves a purpose in the user journey.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    description: 'Clean codebases built for high-concurrency traffic. Modular systems that grow with your product without technical debt.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
      </svg>
    ),
  },
  {
    title: 'Conversion Focus',
    description: 'Design decisions backed by product metrics and performance data. Every pixel earns its place on the screen.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

const techStack = [
  'Next.js (App Router)',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'MongoDB',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer group/btn"
            >
              Back to Home
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </div>

        <section className="text-center py-16">
          <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-sm mb-4 inline-block">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-6">
            Crafting modern web software with engineering rigor
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Vortex Studio was built on a simple premise: enterprise web software should be as dynamic,
            fast, and visually arresting as high-end consumer products. We combine modern design systems
            with tight Next.js architectures.
          </p>
        </section>

        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{principle.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="my-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-8">
            Our Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="my-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.94 }}
                transition={spring}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer group/btn"
              >
                Get in Touch
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </motion.span>
            </Link>
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.94 }}
                transition={spring}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer group/btn"
              >
                Back to Home
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </motion.span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}