'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function ContactCTA() {
  return (
    <section className="my-20 px-4">
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 max-w-5xl mx-auto shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="bg-emerald-500/10 blur-3xl rounded-full absolute -top-20 -right-20 w-80 h-80 pointer-events-none" />
        <span className="px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-xs text-slate-300 font-medium mb-4 inline-block relative z-10">
          Ready to Start?
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl relative z-10">
          Let&apos;s build something extraordinary together.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-lg mt-4 mb-8 relative z-10">
          Schedule a discovery call or send us your project requirements to get an estimate within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 items-center relative z-10">
          <Link href="/contact#schedule">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer group/btn"
            >
              Book a Discovery Call
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
          <a href="mailto:asgah960@gmail.com">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
            >
              Send Email
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  )
}