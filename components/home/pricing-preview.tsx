'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function PricingPreview() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <span className="px-3.5 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-xs font-medium text-[#667085] shadow-sm mb-4 inline-block">
          Investment & Plans
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#171A1F] tracking-tight text-center">
          Transparent models for every ambition
        </h2>
        <p className="text-[#667085] text-base sm:text-lg max-w-xl mx-auto text-center mt-4 mb-16">
          Choose between flexible project sprints or dedicated engineering partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0 }}
          whileHover={{ y: -6 }}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8B7355]/30 transition-all duration-300 flex flex-col"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-2">MVPs & Rapid Launches</p>
          <p className="text-sm text-[#667085] mb-6">For MVPs, redesigns, and rapid brand launches.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-[#171A1F]">$4,500</span>
            <span className="text-sm text-[#667085] ml-1">/ fixed</span>
          </div>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {['Full UI/UX design system', 'Interactive prototype', 'Next.js frontend codebase', '2-week delivery'].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#8B7355] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#667085]">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/pricing#sprint">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-full font-medium text-sm bg-[#F3F1EC] text-[#171A1F] border border-[#E5E7EB] hover:bg-[#3D3026] hover:text-white hover:border-[#3D3026] shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Get Started
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
          className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative overflow-hidden"
        >
          <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#3D3026] bg-[#E8DCCB] rounded-full">
            Most Popular
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Dedicated Tech Team</p>
          <p className="text-sm text-slate-400 mb-6">For scaling companies needing dedicated engineering power.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$8,500</span>
            <span className="text-sm text-slate-400 ml-1">/ month</span>
          </div>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {['Full-stack web application', 'Priority Slack access', 'Continuous speed optimization', 'Custom AI integrations'].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#E8DCCB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/pricing#retainer">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-full font-medium text-sm bg-white text-slate-900 hover:bg-[#F3F1EC] shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Claim Partnership
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
          whileHover={{ y: -6 }}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8B7355]/30 transition-all duration-300 flex flex-col"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-2">High-Scale Systems</p>
          <p className="text-sm text-[#667085] mb-6">For large-scale platforms requiring complex architecture.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-[#171A1F]">Custom</span>
          </div>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {['Multi-region deployment', 'Custom SLA & security', 'Legacy system migration', 'Dedicated technical lead'].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#8B7355] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#667085]">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/pricing#enterprise">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-full font-medium text-sm bg-[#F3F1EC] text-[#171A1F] border border-[#E5E7EB] hover:bg-[#3D3026] hover:text-white hover:border-[#3D3026] shadow-sm transition-all duration-300 cursor-pointer group/btn"
            >
              Contact Sales
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Smooth Bottom Fade Transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F3F1EC] via-[#F3F1EC]/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
