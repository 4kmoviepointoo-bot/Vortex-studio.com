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

import HeroHeader from '@/components/ui/hero-header'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Header */}
      <div className="w-full bg-[#E3F2FD]">
        <HeroHeader
          badge="Who We Are"
          title="Crafting modern web software with engineering rigor"
          subtitle="Enterprise web software built with speed, precision, and tight Next.js architectures."
          primaryButton={{ label: 'Get in Touch', href: '/contact' }}
          secondaryButton={{ label: 'View Open Roles', href: '/about#team' }}
        />
      </div>

      {/* Section 2: Engineering Philosophy & Metrics Grid */}
      <div className="w-full bg-[#E3F2FD]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D47A1] tracking-tight mb-8 text-center">
            Our Philosophy
          </h2>
          {/* Minimalist 4-Box Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Box - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="md:col-span-2 bg-white/70 backdrop-blur-sm border border-[#90CAF9]/30 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform group"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E3F2FD] border border-[#90CAF9]/30 flex items-center justify-center text-[#2196F3] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {principles[0]?.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{principles[0]?.title}</h3>
                  <p className="text-sm text-[#0D47A1]/80 leading-relaxed">{principles[0]?.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Small Square Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white/70 backdrop-blur-sm border border-[#90CAF9]/30 rounded-[2rem] p-6 shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform group flex flex-col items-center text-center"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E3F2FD] border border-[#90CAF9]/30 flex items-center justify-center text-[#2196F3] mb-4 group-hover:scale-110 transition-transform duration-300">
                {principles[1]?.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0D47A1] mb-2">{principles[1]?.title}</h3>
              <p className="text-xs text-[#0D47A1]/80 leading-relaxed">{principles[1]?.description}</p>
            </motion.div>

            {/* Medium Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white/70 backdrop-blur-sm border border-[#90CAF9]/30 rounded-[2rem] p-6 shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform group"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] border border-[#90CAF9]/30 flex items-center justify-center text-[#2196F3] mb-4 group-hover:scale-110 transition-transform duration-300">
                {principles[2]?.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0D47A1] mb-2">{principles[2]?.title}</h3>
              <p className="text-sm text-[#0D47A1]/80 leading-relaxed">{principles[2]?.description}</p>
            </motion.div>

            {/* Wide Box - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.3 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="md:col-span-2 bg-white/70 backdrop-blur-sm border border-[#90CAF9]/30 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform group"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E3F2FD] border border-[#90CAF9]/30 flex items-center justify-center text-[#2196F3] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {principles[3]?.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{principles[3]?.title}</h3>
                  <p className="text-sm text-[#0D47A1]/80 leading-relaxed">{principles[3]?.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Tech Stack */}
      <div className="w-full bg-[#90CAF9]/20">
        <div className="max-w-4xl mx-auto px-4">
          <section className="py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D47A1] tracking-tight mb-8">
              Our Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-4 py-3 rounded-xl text-sm font-medium bg-white/70 backdrop-blur-sm border border-[#90CAF9]/30 text-[#0D47A1]/80 hover:bg-[#0D47A1] hover:text-white hover:border-[#0D47A1] hover:shadow-lg will-change-transform cursor-default text-center"
                  style={{ transition: 'background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Section 4: CTA */}
      <div className="w-full bg-[#90CAF9]/20">
        <div className="max-w-4xl mx-auto px-4">
          <section className="py-16 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-[#0D47A1] text-white hover:bg-[#1565C0] transition-colors cursor-pointer group/btn"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-white/90 border border-[#90CAF9]/30 text-[#0D47A1]/80 hover:bg-[#E3F2FD] transition-colors cursor-pointer group/btn"
                >
                  Back to Home
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </motion.span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
