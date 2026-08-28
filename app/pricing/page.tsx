'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import HeroHeader from '@/components/ui/hero-header'
import { useState } from 'react'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2196F3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

const tiers = [
  {
    id: 'sprint',
    name: 'Design Sprint',
    price: '$4,500',
    period: '/ fixed',
    tag: 'MVPs & Rapid Launches',
    features: [
      'Full UI/UX design system',
      'Interactive prototype',
      'Next.js frontend codebase',
      '2-week delivery',
    ],
    highlighted: false,
    buttonText: 'Get Started',
  },
  {
    id: 'retainer',
    name: 'Growth Retainer',
    price: '$8,500',
    period: '/ month',
    tag: 'Dedicated Tech Team',
    badge: 'Most Popular',
    features: [
      'Full-stack web application',
      'Priority Slack access',
      'Continuous speed optimization',
      'Custom AI integrations',
    ],
    highlighted: true,
    buttonText: 'Claim Partnership',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Architecture',
    price: 'Custom',
    period: '',
    tag: 'High-Scale Systems',
    features: [
      'Multi-region deployment',
      'Custom SLA & security',
      'Legacy system migration',
      'Dedicated technical lead',
    ],
    highlighted: false,
    buttonText: 'Contact Sales',
  },
]

export default function PricingPage() {
  const router = useRouter()
  const [loadingTier, setLoadingTier] = useState<string | null>(null)

  const handleSelect = (tierId: string) => {
    if (loadingTier) return
    setLoadingTier(tierId)
    setTimeout(() => {
      router.push('/signup')
    }, 800)
  }

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Header */}
      <div className="w-full bg-[#E3F2FD]">
        <HeroHeader
          badge="Investment & Plans"
          title="Transparent models for every ambition"
          subtitle="Choose between flexible project sprints or dedicated engineering partnerships."
          primaryButton={{ label: 'Choose Plan', href: '#pricing' }}
          secondaryButton={{ label: 'Talk to Sales', href: '/contact' }}
        />
      </div>

      {/* Section 2: High-Conversion Tier Comparison */}
      <div className="w-full bg-[#E3F2FD]">
        <div className="max-w-6xl mx-auto px-4">
          <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 py-16 items-start">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative flex flex-col p-8 rounded-[2rem] border border-[#90CAF9]/30 bg-white shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0D47A1]/60 mb-2">MVPs & Rapid Launches</p>
              <h3 className="text-xl font-bold text-[#0D47A1] mb-4">Design Sprint</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-[#0D47A1]">$4,500</span>
                <span className="text-sm text-[#0D47A1]/60">/ fixed</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['Full UI/UX design system', 'Interactive prototype', 'Next.js frontend codebase', '2-week delivery'].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-[#0D47A1]/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => handleSelect('sprint')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="w-full py-3 text-sm font-medium text-center rounded-full border border-[#90CAF9]/30 text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white hover:border-[#0D47A1] transition-all duration-300"
              >
                Get Started →
              </motion.button>
            </motion.div>

            {/* Pro Tier - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 1.0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              animate={{ y: [0, -4, 0] }}
              className="relative flex flex-col p-8 rounded-[2rem] border border-[#0D47A1] bg-[#0D47A1] text-white shadow-2xl shadow-[#2196F3]/20 animate-[pulse_3s_ease-in-out_infinite] will-change-transform z-10"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Animated Glow Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#2196F3] to-[#1565C0] shadow-lg shadow-[#2196F3]/30">
                  Most Popular
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#90CAF9] mb-2 mt-2">Dedicated Tech Team</p>
              <h3 className="text-xl font-bold text-white mb-4">Growth Retainer</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-white">$8,500</span>
                <span className="text-sm text-[#90CAF9]">/ month</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['Full-stack web application', 'Priority Slack access', 'Continuous speed optimization', 'Custom AI integrations'].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-[#E3F2FD]">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => handleSelect('retainer')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="w-full py-3 text-sm font-medium text-center rounded-full bg-white text-[#0D47A1] hover:bg-[#E3F2FD] hover:text-[#0D47A1] transition-all duration-300 shadow-lg"
              >
                Claim Partnership →
              </motion.button>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative flex flex-col p-8 rounded-[2rem] border border-[#90CAF9]/30 bg-white shadow-sm hover:shadow-lg hover:border-[#2196F3]/30 will-change-transform"
              style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0D47A1]/60 mb-2">High-Scale Systems</p>
              <h3 className="text-xl font-bold text-[#0D47A1] mb-4">Enterprise Architecture</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-[#0D47A1]">Custom</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['Multi-region deployment', 'Custom SLA & security', 'Legacy system migration', 'Dedicated technical lead'].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-[#0D47A1]/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => handleSelect('enterprise')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="w-full py-3 text-sm font-medium text-center rounded-full border border-[#90CAF9]/30 text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white hover:border-[#0D47A1] transition-all duration-300"
              >
                Contact Sales →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 3: Bottom CTA */}
      <div className="w-full bg-[#90CAF9]/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-12">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.94 }}
                transition={spring}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0D47A1] hover:bg-[#1565C0] rounded-lg transition-colors cursor-pointer"
              >
                Back to Home
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
