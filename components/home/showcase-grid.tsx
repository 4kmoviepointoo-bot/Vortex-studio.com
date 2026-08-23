'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ShinyText from '@/components/ui/ShinyText'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const techTags = [
  'Next.js App Router',
  'Tailwind CSS',
  'Framer Motion',
  'TypeScript',
]

export default function ShowcaseGrid() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-sm mb-4 inline-block">
          Capabilities & Expertise
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto text-center">
          <ShinyText
            text="Engineered for high-scale digital impact"
            speed={4}
            color="#0F172A"
            shineColor="#10b981"
            spread={100}
            direction="right"
          />
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto text-center mt-4 mb-16">
          End-to-end design and engineering tailored for ambitious tech companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0 }}
          className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="mb-6 h-32 rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center group-hover:border-slate-200 transition-colors">
            <div className="flex gap-3">
              <div className="w-16 h-20 rounded-lg border-2 border-slate-200 group-hover:border-slate-300 transition-colors" />
              <div className="flex flex-col gap-2">
                <div className="w-24 h-3 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                <div className="w-20 h-3 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors" />
                <div className="w-28 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors mt-4" />
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-950 mb-2">Enterprise UI/UX Design Systems</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Crafting scalable, high-conversion visual design systems and interactive interfaces.
          </p>
          <Link href="/services#ui-ux">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Learn more
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                →
              </span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="mb-6 h-32 rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-400 group-hover:bg-slate-800 transition-colors overflow-hidden">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-amber-500/60" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
              <span className="ml-2 text-slate-500">app/page.tsx</span>
            </div>
            <div className="text-emerald-400">export default function <span className="text-amber-300">Home</span>() {'{'}</div>
            <div className="pl-4 text-slate-500">return (</div>
            <div className="pl-8 text-blue-400">{'<'}<span className="text-amber-300">main</span>{'>'}</div>
            <div className="pl-12 text-slate-500">...</div>
            <div className="pl-8 text-blue-400">{'</'}<span className="text-amber-300">main</span>{'>'}</div>
            <div className="pl-4 text-slate-500">)</div>
            <div>{'}'}</div>
          </div>
          <h3 className="text-lg font-bold text-slate-950 mb-2">Full-Stack Web Applications</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Modern Next.js, React, and API architectures built for security, speed, and scale.
          </p>
          <Link href="/services#fullstack">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Learn more
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                →
              </span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
          className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="mb-6 h-32 rounded-xl bg-emerald-50 border border-emerald-100 p-4 flex items-center justify-center group-hover:border-emerald-200 transition-colors">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">100</span>
              </div>
              <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Lighthouse Score</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-950 mb-2">Performance & Core Web Vitals</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Sub-second load times, dynamic server rendering, and zero-latency user experiences.
          </p>
          <Link href="/services#performance">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Learn more
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                →
              </span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.3 }}
          className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="mb-6 h-32 rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center group-hover:border-slate-200 transition-colors">
            <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
              <circle cx="20" cy="50" r="8" fill="#0F172A" fillOpacity="0.1" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="50" cy="25" r="8" fill="#0F172A" fillOpacity="0.1" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="80" cy="50" r="8" fill="#0F172A" fillOpacity="0.1" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="50" cy="75" r="8" fill="#0F172A" fillOpacity="0.1" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="28" y1="46" x2="42" y2="30" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="58" y1="30" x2="72" y2="46" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="42" y1="70" x2="28" y2="54" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="58" y1="70" x2="72" y2="54" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.3" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-950 mb-2">AI & Product Automation</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Custom LLM integrations, automated workflows, and intelligent product features.
          </p>
          <Link href="/services#ai-automation">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Learn more
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                →
              </span>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}