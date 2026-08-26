'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Spinner() {
  return (
    <motion.span
      className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
    />
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

import HeroHeader from '@/components/ui/hero-header'

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
      {/* Section 1: Hero Header - Off-White Base */}
      <div className="w-full bg-[#F9F8F3]">
        <HeroHeader
          badge="Investment & Plans"
          title="Transparent models for every ambition"
          subtitle="Choose between flexible project sprints or dedicated engineering partnerships."
          primaryButton={{ label: 'Choose Plan', href: '#pricing' }}
          secondaryButton={{ label: 'Talk to Sales', href: '/contact' }}
        />
      </div>

      {/* Section 2: Pricing Cards - Light Beige Tint */}
      <div className="w-full bg-[#EDE8DC]">
        <div className="max-w-6xl mx-auto px-4">
          <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
            {tiers.map((tier, i) => {
              const isLoading = loadingTier === tier.id
              const isDisabled = loadingTier !== null && !isLoading

              return (
                <motion.div
                  key={tier.id}
                  id={tier.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  whileHover={isDisabled ? {} : { y: -8, scale: 1.02 }}
                  className={`relative flex flex-col p-8 rounded-2xl border will-change-transform scroll-mt-24 ${
                    tier.highlighted
                      ? 'border-slate-800 bg-white shadow-lg shadow-emerald-500/10 animate-pulse'
                      : 'border-stone-200/80 bg-white hover:border-slate-400/60 hover:shadow-lg'
                  } ${isDisabled ? 'opacity-50' : ''}`}
                  style={{ transition: 'border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-slate-900 rounded-full">
                      {tier.badge}
                    </span>
                  )}

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{tier.tag}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-sm text-slate-500">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => handleSelect(tier.id)}
                    whileHover={loadingTier ? {} : { scale: 1.03, y: -1 }}
                    whileTap={loadingTier ? {} : { scale: 0.94 }}
                    transition={spring}
                    disabled={loadingTier !== null}
                    className={`relative w-full py-2.5 text-sm font-medium text-center rounded-full overflow-hidden transition-all duration-300 group/btn ${
                      loadingTier !== null && !isLoading
                        ? 'pointer-events-none'
                        : ''
                    } ${
                      isLoading
                        ? 'opacity-80 cursor-wait'
                        : tier.highlighted
                          ? 'text-white bg-slate-900 hover:bg-slate-800 cursor-pointer'
                          : 'text-slate-900 bg-white border border-stone-200/80 hover:bg-slate-900 hover:text-white hover:border-slate-900 cursor-pointer'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Spinner />
                          Processing...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="inline-flex items-center gap-2"
                        >
                          {tier.buttonText}
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Section 3: Bottom CTA - Deep Warm Sand */}
      <div className="w-full bg-[#BBAE97]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-12">
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
  )
}