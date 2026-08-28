'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function FeaturedWork() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-sm mb-4 inline-block">
          Selected Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight text-center">
          Crafted for market leaders
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto text-center mt-4 mb-16">
          Explore our latest digital product transformations, enterprise web apps, and design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0 }}
          whileHover={{ y: -6 }}
          className="group relative bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
        >
          <div className="h-48 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 mb-6 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Aether SaaS</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-950 mb-2">Aether SaaS Platform</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
            Enterprise B2B analytics dashboard with real-time data pipelines, custom reporting, and multi-tenant architecture.
          </p>
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-2xl font-bold text-slate-950">3x</p>
              <p className="text-xs text-slate-500">Faster Load</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">99.9%</p>
              <p className="text-xs text-slate-500">Uptime SLA</p>
            </div>
          </div>
          <Link href="/work#aether-saas">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn w-full justify-center"
            >
              View Case Study
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="group relative bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
        >
          <div className="h-48 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 mb-6 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-700 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">FP</span>
              </div>
              <p className="text-sm font-medium text-amber-800">FinPulse</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'Node.js', 'Redis', 'WebSocket'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-950 mb-2">Fin Pulse Engine</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
            Real-time financial data aggregation engine processing 100k+ events/sec with sub-millisecond latency.
          </p>
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-2xl font-bold text-slate-950">100k+</p>
              <p className="text-xs text-slate-500">Events/sec</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">&lt;1ms</p>
              <p className="text-xs text-slate-500">Latency</p>
            </div>
          </div>
          <Link href="/work#fin-pulse">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn w-full justify-center"
            >
              View Case Study
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <div className="text-center mt-16 relative z-10">
        <Link href="/work">
          <motion.span
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group/btn"
          >
            Explore All Work
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
              →
            </span>
          </motion.span>
        </Link>
      </div>
    </section>
  )
}