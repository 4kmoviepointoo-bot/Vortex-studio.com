'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import WorkShowcase, { WorkMetrics } from '@/components/work'
import HeroHeader from '@/components/ui/hero-header'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-[#E3F2FD]">
        <HeroHeader
          badge="Selected Work"
          title="Case studies from real client engagements"
          subtitle="High-conversion web platforms built for funded startups and enterprise teams."
          primaryButton={{ label: 'Start a Project', href: '/contact' }}
          secondaryButton={{ label: 'View Pricing', href: '/pricing' }}
        />
      </div>

      {/* Scrollytelling showcase */}
      <WorkShowcase />

      {/* Metrics strip */}
      <WorkMetrics />

      {/* CTA Section */}
      <div className="w-full bg-[#E3F2FD]">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-4">
              Ready to build something exceptional?
            </h2>
            <p className="text-[#0D47A1]/80 mb-8 max-w-xl mx-auto">
              We partner with ambitious teams to ship high-performance digital products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-[#0D47A1] text-white hover:bg-[#1565C0] transition-colors cursor-pointer group/btn"
                >
                  Start a Project
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </motion.span>
              </Link>
              <Link href="/pricing">
                <motion.span
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-white border border-[#90CAF9]/30 text-[#0D47A1]/80 hover:bg-[#E3F2FD] transition-colors cursor-pointer group/btn"
                >
                  View Pricing
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
