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

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      {/* Section 1: Page Top - Very Light Mint */}
      <div className="relative overflow-hidden bg-[#EBF5EE] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)] py-8 -mx-4 -mt-24 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#0F172A] bg-slate-100 rounded-full mb-6">
              Investment & Plans
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-[linear-gradient(110deg,#0f172a,45%,#e11d48,55%,#0f172a)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              Transparent models for every ambition
            </h1>

            <p className="max-w-xl mx-auto text-slate-600 text-lg">
              Choose between flexible project sprints or dedicated engineering partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Pricing Cards - Soft Sage Green */}
      <div className="relative overflow-hidden bg-[#A6D8B5] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
            {tiers.map((tier) => {
              const isLoading = loadingTier === tier.id
              const isDisabled = loadingTier !== null && !isLoading

              return (
                <motion.div
                  key={tier.id}
                  id={tier.id}
                  whileHover={isDisabled ? {} : { y: -6 }}
                  transition={spring}
                  className={`relative flex flex-col p-8 rounded-2xl border transition-opacity duration-300 scroll-mt-24 ${
                    tier.highlighted
                      ? 'border-slate-800 shadow-lg shadow-black/5 bg-white'
                      : 'border-slate-200 bg-white'
                  } ${isDisabled ? 'opacity-50' : ''}`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-[#0F172A] rounded-full">
                      {tier.badge}
                    </span>
                  )}

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{tier.tag}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#0F172A]">
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
                          ? 'text-white bg-[#0F172A] hover:bg-slate-800 cursor-pointer'
                          : 'text-[#0F172A] bg-white border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 cursor-pointer'
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

      {/* Section 3: Bottom CTA - Medium Emerald Green */}
      <div className="relative overflow-hidden bg-[#54B074] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center py-12">
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
  )
}