'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import WorkShowcase from '@/components/work'
import HeroHeader from '@/components/ui/hero-header'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <WorkShowcase />

      {/* Section 1: Hero Header - Off-White Base */}
      <div className="w-full bg-[#F9F8F3]">
        <HeroHeader
          badge="Case Studies"
          title="Crafted for market leaders"
          subtitle="Explore our latest digital product transformations and design systems."
          primaryButton={{ label: 'Start Your Project', href: '/signup' }}
          secondaryButton={{ label: 'View Tech Stack', href: '/services' }}
        />
      </div>

      {/* Section 2: Featured Case Study - Full-Width Split Layout */}
      <div className="w-full bg-[#EDE8DC]">
        <div className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Top Featured Project - Split Dark/Light */}
            <section id="aether-saas" className="mb-16 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring }}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg will-change-transform group"
              >
                {/* Dark Side - Preview */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-white min-h-[400px] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="relative z-10">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                      Featured Project
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4">Aether SaaS Platform</h2>
                    <p className="text-slate-400 text-lg max-w-md">
                      End-to-end product redesign and full-stack rebuild for a B2B analytics platform.
                    </p>
                  </div>
                  <div className="relative z-10 mt-8">
                    <div className="flex gap-3">
                      <div className="w-1/3 h-32 rounded-xl bg-white/5 border border-white/10" />
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="h-14 rounded-xl bg-white/5 border border-white/10" />
                        <div className="h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Light Side - Metrics */}
                <div className="bg-white p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full">
                        UI/UX & Next.js
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full">
                        300% Growth
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-stone-200/80 text-center">
                        <p className="text-4xl font-bold text-slate-900">300%</p>
                        <p className="text-sm text-slate-500 mt-1">Conversion Growth</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-stone-200/80 text-center">
                        <p className="text-4xl font-bold text-slate-900">0.8s</p>
                        <p className="text-sm text-slate-500 mt-1">Load Time</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-stone-200/80 text-center">
                        <p className="text-4xl font-bold text-slate-900">99.9%</p>
                        <p className="text-sm text-slate-500 mt-1">Uptime</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-stone-200/80 text-center">
                        <p className="text-4xl font-bold text-slate-900">12wk</p>
                        <p className="text-sm text-slate-500 mt-1">Delivery</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
                      View Case Study
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Secondary Projects - Asymmetric 2-Column */}
            <section id="fin-pulse" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6"
              >
                {/* Large Card */}
                <div className="lg:col-span-3 bg-white/95 border border-stone-200/80 rounded-3xl overflow-hidden shadow-sm group hover:shadow-lg hover:border-slate-300/80 transition-all duration-400" style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-emerald-900 to-slate-900 p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900 group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <div className="relative z-10 flex items-center gap-1.5 mb-4">
                      <span className="w-2 h-2 rounded-full bg-red-500/60" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    </div>
                    <div className="relative z-10 flex gap-3">
                      <div className="w-1/3 h-24 rounded-lg bg-white/10 border border-white/10" />
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="h-10 rounded-lg bg-white/10 border border-white/10" />
                        <div className="h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full">
                        FinTech
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full">
                        0.1s Latency
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Fin Pulse Engine</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      High-performance real-time trading dashboard with sub-second data pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'WebSocket', 'Go', 'Redis'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
                        View Case Study
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Small Metric Cards */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="bg-white/95 border border-stone-200/80 rounded-3xl p-8 shadow-sm flex-1 group hover:shadow-lg hover:border-slate-300/80 hover:-translate-y-1 transition-all duration-400" style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <p className="text-5xl font-bold text-slate-900 mb-2">3x</p>
                    <p className="text-lg font-medium text-slate-700 mb-1">Faster Load</p>
                    <p className="text-sm text-slate-500">Across all pages</p>
                  </div>
                  <div className="bg-white/95 border border-stone-200/80 rounded-3xl p-8 shadow-sm flex-1 group hover:shadow-lg hover:border-slate-300/80 hover:-translate-y-1 transition-all duration-400" style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <p className="text-5xl font-bold text-slate-900 mb-2">100k+</p>
                    <p className="text-lg font-medium text-slate-700 mb-1">Events/sec</p>
                    <p className="text-sm text-slate-500">Real-time processing</p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="text-center mt-16">
              <Link href="/">
                <motion.span
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Back to Home
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}