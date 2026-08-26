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

      {/* Section 2: Case Studies - Light Beige Tint */}
      <div className="w-full bg-[#EDE8DC]">
        <div className="px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <section id="aether-saas" className="mb-20 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring }}
              className="bg-white/95 border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm will-change-transform group"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-slate-900 to-slate-800 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div className="relative z-10 flex items-center gap-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                  <div className="h-24 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                  <div className="h-24 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                </div>
                <div className="relative z-10 mt-4 h-8 w-3/4 rounded bg-white/5 border border-white/10" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full">
                    UI/UX & Next.js App
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full">
                    300% Conversion Growth
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                  Aether SaaS Platform
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                  End-to-end product redesign and full-stack rebuild for a B2B analytics platform.
                  We transformed a legacy dashboard into a modern, high-conversion SaaS product
                  that scales with enterprise demand.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">300%</p>
                    <p className="text-xs text-slate-500">Conversion Growth</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">0.8s</p>
                    <p className="text-xs text-slate-500">Load Time</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">99.9%</p>
                    <p className="text-xs text-slate-500">Uptime</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">12wk</p>
                    <p className="text-xs text-slate-500">Delivery</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all duration-300">
                    View Case Study <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="fin-pulse" className="mb-20 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="bg-white/95 border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm will-change-transform group"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-emerald-900 to-slate-900 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900 group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div className="relative z-10 flex items-center gap-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
                <div className="relative z-10 flex gap-3">
                  <div className="w-1/3 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                    <div className="h-12 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full">
                    FinTech & Real-time Analytics
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full">
                    0.1s Latency Infrastructure
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                  Fin Pulse Engine
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                  High-performance real-time trading dashboard with sub-second data pipelines.
                  Built for institutional traders who demand zero-latency market data and instant execution feedback.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">0.1s</p>
                    <p className="text-xs text-slate-500">Data Latency</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">1M+</p>
                    <p className="text-xs text-slate-500">Events/Second</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">99.99%</p>
                    <p className="text-xs text-slate-500">Uptime SLA</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">8wk</p>
                    <p className="text-xs text-slate-500">Delivery</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'WebSocket', 'Go', 'Redis', 'Kubernetes'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

            <div className="text-center">
              <Link href="/">
                <motion.span
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
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