'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const tagColors = [
  'bg-blue-100/70 text-blue-900 border border-blue-200/80',
  'bg-emerald-100/70 text-emerald-900 border border-emerald-200/80',
  'bg-purple-100/70 text-purple-900 border border-purple-200/80',
  'bg-amber-100/70 text-amber-900 border border-amber-200/80',
  'bg-pink-100/70 text-pink-900 border border-pink-200/80',
]

const services = [
  {
    index: '01',
    id: 'ui-ux',
    title: 'Enterprise UI/UX Design Systems',
    description: 'Crafting scalable, high-conversion visual design systems and interactive interfaces. We create cohesive design languages that grow with your product and resonate with your users.',
    tags: ['Design Systems', 'UI Components', 'User Research', 'Prototyping', 'Accessibility'],
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <rect x="20" y="30" width="80" height="116" rx="12" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.05" />
        <rect x="30" y="50" width="60" height="8" rx="4" fill="#10b981" fillOpacity="0.3" />
        <rect x="30" y="66" width="40" height="6" rx="3" fill="#10b981" fillOpacity="0.2" />
        <rect x="30" y="80" width="60" height="30" rx="6" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="0.75" />
        <rect x="30" y="118" width="26" height="8" rx="4" fill="#10b981" fillOpacity="0.25" />
        <rect x="62" y="118" width="26" height="8" rx="4" fill="#10b981" fillOpacity="0.15" />
        <circle cx="160" cy="60" r="28" stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" fillOpacity="0.05" />
        <circle cx="160" cy="60" r="14" stroke="#14b8a6" strokeWidth="1" fill="#14b8a6" fillOpacity="0.1" />
        <circle cx="160" cy="60" r="4" fill="#14b8a6" fillOpacity="0.4" />
        <line x1="160" y1="32" x2="160" y2="16" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="204" y2="60" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="160" y1="88" x2="160" y2="104" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="132" y1="60" x2="116" y2="60" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="220" cy="100" r="22" stroke="#a78bfa" strokeWidth="1.5" fill="#a78bfa" fillOpacity="0.05" />
        <path d="M220 86 L220 114 M206 100 L234 100" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="198" y2="82" stroke="#a78bfa" strokeWidth="0.75" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '02',
    id: 'fullstack',
    title: 'Full-Stack Web Applications',
    description: 'Modern Next.js, React, and API architectures built for security, speed, and scale. From MVPs to enterprise platforms, we build systems that perform under pressure.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST & GraphQL'],
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <rect x="16" y="20" width="120" height="136" rx="10" stroke="#3b82f6" strokeWidth="1.5" fill="#3b82f6" fillOpacity="0.04" />
        <rect x="24" y="32" width="104" height="10" rx="5" fill="#3b82f6" fillOpacity="0.2" />
        <rect x="24" y="50" width="50" height="6" rx="3" fill="#3b82f6" fillOpacity="0.15" />
        <rect x="24" y="64" width="104" height="40" rx="6" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="0.75" />
        <rect x="30" y="70" width="30" height="4" rx="2" fill="#3b82f6" fillOpacity="0.25" />
        <rect x="30" y="80" width="50" height="4" rx="2" fill="#3b82f6" fillOpacity="0.15" />
        <rect x="30" y="90" width="20" height="4" rx="2" fill="#3b82f6" fillOpacity="0.2" />
        <rect x="24" y="114" width="104" height="30" rx="6" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeWidth="0.75" />
        <circle cx="200" cy="60" r="30" stroke="#6366f1" strokeWidth="1.5" fill="#6366f1" fillOpacity="0.05" />
        <path d="M185 60 L195 50 L205 60 L215 50" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <circle cx="200" cy="120" r="20" stroke="#8b5cf6" strokeWidth="1.5" fill="#8b5cf6" fillOpacity="0.05" />
        <path d="M200 108 L200 132 M188 120 L212 120" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="230" y1="60" x2="250" y2="60" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="200" y1="90" x2="200" y2="100" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '03',
    id: 'performance',
    title: 'Performance & Core Web Vitals',
    description: 'Sub-second load times, dynamic server rendering, and zero-latency user experiences. We optimize every layer of the stack for maximum performance.',
    tags: ['Core Web Vitals', 'Lighthouse 100', 'Edge Rendering', 'CDN Optimization', 'Code Splitting'],
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <circle cx="144" cy="88" r="50" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.04" />
        <circle cx="144" cy="88" r="35" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.06" />
        <circle cx="144" cy="88" r="20" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
        <path d="M144 50 L144 88 L170 100" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="144" cy="88" r="4" fill="#10b981" fillOpacity="0.5" />
        <line x1="144" y1="38" x2="144" y2="30" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="194" y1="88" x2="202" y2="88" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="94" y1="88" x2="86" y2="88" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
        <text x="144" y="150" textAnchor="middle" fill="#10b981" fillOpacity="0.5" fontSize="10" fontWeight="600">100</text>
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#10b981" fillOpacity="0.1" />
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#10b981" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '04',
    id: 'ai-automation',
    title: 'AI & Product Automation',
    description: 'Custom LLM integrations, automated workflows, and intelligent product features. We embed AI where it creates real value, not just novelty.',
    tags: ['LLM Integration', 'RAG Systems', 'Workflow Automation', 'AI Agents', 'Prompt Engineering'],
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <circle cx="144" cy="88" r="40" stroke="#a78bfa" strokeWidth="1.5" fill="#a78bfa" fillOpacity="0.04" />
        <circle cx="144" cy="48" r="16" stroke="#c084fc" strokeWidth="1.5" fill="#c084fc" fillOpacity="0.06" />
        <circle cx="104" cy="108" r="16" stroke="#a78bfa" strokeWidth="1.5" fill="#a78bfa" fillOpacity="0.06" />
        <circle cx="184" cy="108" r="16" stroke="#818cf8" strokeWidth="1.5" fill="#818cf8" fillOpacity="0.06" />
        <line x1="144" y1="64" x2="144" y2="72" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="98" x2="128" y2="90" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="170" y1="90" x2="180" y2="98" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="108" x2="170" y2="108" stroke="#a78bfa" strokeWidth="0.75" strokeOpacity="0.2" />
        <circle cx="144" cy="88" r="8" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeWidth="1" />
        <circle cx="144" cy="88" r="3" fill="#a78bfa" fillOpacity="0.4" />
        <text x="144" y="160" textAnchor="middle" fill="#a78bfa" fillOpacity="0.4" fontSize="8" fontWeight="500">Neural Network</text>
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Section 1: Page Top - Very Light Mint */}
      <div className="w-full bg-[#EBF5EE] py-12">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="text-center pt-8">
            <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-sm mb-6 inline-block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
              What We Do
            </h1>
            <p className="max-w-xl text-slate-600 text-lg mx-auto">
              We design and build digital products that scale. From brand identity to full-stack applications,
              our team delivers end-to-end solutions for ambitious companies.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Main Grid - Soft Sage Green */}
      <div className="w-full bg-[#A6D8B5]">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 py-16">
            {services.map((service, i) => (
              <motion.div
                key={service.index}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.1 }}
                className="scroll-mt-24 bg-white/95 border border-stone-200/80 rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block border border-emerald-200/60">
                      {service.index}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed max-w-2xl mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                      {service.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className={`${tagColors[ti % tagColors.length]} text-xs font-medium px-3.5 py-1.5 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:block shrink-0 pointer-events-none">
                    {service.graphic}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Bottom CTA - Medium Emerald Green */}
      <div className="w-full bg-[#54B074]">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="text-center py-16">
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