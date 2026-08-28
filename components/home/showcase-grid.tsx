'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ShinyText from '@/components/ui/ShinyText'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const tagColors = [
  'bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30',
  'bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30',
  'bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30',
  'bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30',
  'bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30',
]

const services = [
  {
    index: '01',
    title: 'Enterprise UI/UX Design Systems',
    description: 'Crafting scalable, high-conversion visual design systems and interactive interfaces.',
    tags: ['Design Systems', 'UI Components', 'User Research', 'Prototyping', 'Accessibility'],
    href: '/services#ui-ux',
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <rect x="20" y="30" width="80" height="116" rx="12" stroke="#2196F3" strokeWidth="1.5" fill="#2196F3" fillOpacity="0.05" />
        <rect x="30" y="50" width="60" height="8" rx="4" fill="#2196F3" fillOpacity="0.3" />
        <rect x="30" y="66" width="40" height="6" rx="3" fill="#2196F3" fillOpacity="0.2" />
        <rect x="30" y="80" width="60" height="30" rx="6" fill="#2196F3" fillOpacity="0.1" stroke="#2196F3" strokeWidth="0.75" />
        <rect x="30" y="118" width="26" height="8" rx="4" fill="#2196F3" fillOpacity="0.25" />
        <rect x="62" y="118" width="26" height="8" rx="4" fill="#2196F3" fillOpacity="0.15" />
        <circle cx="160" cy="60" r="28" stroke="#90CAF9" strokeWidth="1.5" fill="#90CAF9" fillOpacity="0.05" />
        <circle cx="160" cy="60" r="14" stroke="#90CAF9" strokeWidth="1" fill="#90CAF9" fillOpacity="0.1" />
        <circle cx="160" cy="60" r="4" fill="#90CAF9" fillOpacity="0.4" />
        <line x1="160" y1="32" x2="160" y2="16" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="204" y2="60" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="160" y1="88" x2="160" y2="104" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="132" y1="60" x2="116" y2="60" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="220" cy="100" r="22" stroke="#0D47A1" strokeWidth="1.5" fill="#0D47A1" fillOpacity="0.05" />
        <path d="M220 86 L220 114 M206 100 L234 100" stroke="#0D47A1" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="198" y2="82" stroke="#0D47A1" strokeWidth="0.75" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Full-Stack Web Applications',
    description: 'Modern Next.js, React, and API architectures built for security, speed, and scale.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST & GraphQL'],
    href: '/services#fullstack',
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <rect x="16" y="20" width="120" height="136" rx="10" stroke="#2196F3" strokeWidth="1.5" fill="#2196F3" fillOpacity="0.04" />
        <rect x="24" y="32" width="104" height="10" rx="5" fill="#2196F3" fillOpacity="0.2" />
        <rect x="24" y="50" width="50" height="6" rx="3" fill="#2196F3" fillOpacity="0.15" />
        <rect x="24" y="64" width="104" height="40" rx="6" fill="#2196F3" fillOpacity="0.08" stroke="#2196F3" strokeWidth="0.75" />
        <rect x="30" y="70" width="30" height="4" rx="2" fill="#2196F3" fillOpacity="0.25" />
        <rect x="30" y="80" width="50" height="4" rx="2" fill="#2196F3" fillOpacity="0.15" />
        <rect x="30" y="90" width="20" height="4" rx="2" fill="#2196F3" fillOpacity="0.2" />
        <rect x="24" y="114" width="104" height="30" rx="6" fill="#2196F3" fillOpacity="0.06" stroke="#2196F3" strokeWidth="0.75" />
        <circle cx="200" cy="60" r="30" stroke="#90CAF9" strokeWidth="1.5" fill="#90CAF9" fillOpacity="0.05" />
        <path d="M185 60 L195 50 L205 60 L215 50" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <circle cx="200" cy="120" r="20" stroke="#0D47A1" strokeWidth="1.5" fill="#0D47A1" fillOpacity="0.05" />
        <path d="M200 108 L200 132 M188 120 L212 120" stroke="#0D47A1" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="230" y1="60" x2="250" y2="60" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="200" y1="90" x2="200" y2="100" stroke="#0D47A1" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Performance & Core Web Vitals',
    description: 'Sub-second load times, dynamic server rendering, and zero-latency user experiences.',
    tags: ['Core Web Vitals', 'Lighthouse 100', 'Edge Rendering', 'CDN Optimization', 'Code Splitting'],
    href: '/services#performance',
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <circle cx="144" cy="88" r="50" stroke="#2196F3" strokeWidth="1.5" fill="#2196F3" fillOpacity="0.04" />
        <circle cx="144" cy="88" r="35" stroke="#2196F3" strokeWidth="1" fill="#2196F3" fillOpacity="0.06" />
        <circle cx="144" cy="88" r="20" stroke="#2196F3" strokeWidth="1" fill="#2196F3" fillOpacity="0.08" />
        <path d="M144 50 L144 88 L170 100" stroke="#90CAF9" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="144" cy="88" r="4" fill="#90CAF9" fillOpacity="0.5" />
        <line x1="144" y1="38" x2="144" y2="30" stroke="#2196F3" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="194" y1="88" x2="202" y2="88" stroke="#2196F3" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="94" y1="88" x2="86" y2="88" stroke="#2196F3" strokeWidth="1" strokeOpacity="0.3" />
        <text x="144" y="150" textAnchor="middle" fill="#0D47A1" fillOpacity="0.5" fontSize="10" fontWeight="600">100</text>
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#2196F3" fillOpacity="0.1" />
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#2196F3" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'AI & Product Automation',
    description: 'Custom LLM integrations, automated workflows, and intelligent product features.',
    tags: ['LLM Integration', 'RAG Systems', 'Workflow Automation', 'AI Agents', 'Prompt Engineering'],
    href: '/services#ai-automation',
    graphic: (
      <svg className="w-72 h-44 opacity-80" viewBox="0 0 288 176" fill="none">
        <circle cx="144" cy="88" r="40" stroke="#2196F3" strokeWidth="1.5" fill="#2196F3" fillOpacity="0.04" />
        <circle cx="144" cy="48" r="16" stroke="#90CAF9" strokeWidth="1.5" fill="#90CAF9" fillOpacity="0.06" />
        <circle cx="104" cy="108" r="16" stroke="#2196F3" strokeWidth="1.5" fill="#2196F3" fillOpacity="0.06" />
        <circle cx="184" cy="108" r="16" stroke="#0D47A1" strokeWidth="1.5" fill="#0D47A1" fillOpacity="0.06" />
        <line x1="144" y1="64" x2="144" y2="72" stroke="#90CAF9" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="98" x2="128" y2="90" stroke="#2196F3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="170" y1="90" x2="180" y2="98" stroke="#0D47A1" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="108" x2="170" y2="108" stroke="#2196F3" strokeWidth="0.75" strokeOpacity="0.2" />
        <circle cx="144" cy="88" r="8" fill="#2196F3" fillOpacity="0.15" stroke="#2196F3" strokeWidth="1" />
        <circle cx="144" cy="88" r="3" fill="#2196F3" fillOpacity="0.4" />
        <text x="144" y="160" textAnchor="middle" fill="#0D47A1" fillOpacity="0.4" fontSize="8" fontWeight="500">Neural Network</text>
      </svg>
    ),
  },
]

const serviceAccents = [
  'hover:shadow-[#2196F3]/10 hover:border-[#2196F3]/30',
  'hover:shadow-[#2196F3]/10 hover:border-[#2196F3]/30',
  'hover:shadow-[#2196F3]/10 hover:border-[#2196F3]/30',
  'hover:shadow-[#2196F3]/10 hover:border-[#2196F3]/30',
]

export default function ShowcaseGrid() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full border border-[#90CAF9]/30 bg-white text-xs font-medium text-[#0D47A1]/80 shadow-sm mb-4 inline-block">
          Capabilities & Expertise
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto text-center">
          <ShinyText
            text="Engineered for high-scale digital impact"
            speed={4}
            color="#0D47A1"
            shineColor="#2196F3"
            spread={100}
            direction="right"
          />
        </h2>
        <p className="text-[#0D47A1]/80 text-base sm:text-lg max-w-xl mx-auto text-center mt-4 mb-16">
          End-to-end design and engineering tailored for ambitious tech companies.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-5xl mx-auto px-4">
        {services.map((service, i) => (
          <motion.div
            key={service.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: i * 0.1 }}
            className={`bg-white border border-[#90CAF9]/30 rounded-[32px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] will-change-transform group relative overflow-hidden ${serviceAccents[i % serviceAccents.length]}`}
            style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Subtle decorative corner glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2196F3]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#90CAF9]/10 rounded-full blur-2xl pointer-events-none" />
            {/* Tiny dots */}
            <div className="absolute top-6 right-8 w-1 h-1 bg-[#2196F3]/20 rounded-full" />
            <div className="absolute top-10 right-12 w-0.5 h-0.5 bg-[#90CAF9]/30 rounded-full" />
            <div className="absolute bottom-8 left-10 w-0.5 h-0.5 bg-[#2196F3]/15 rounded-full" />

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex-1">
                <span className="bg-[#0D47A1] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.index}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D47A1] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#0D47A1]/80 text-base leading-relaxed max-w-2xl mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 items-center mb-6">
                  {service.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`${tagColors[ti % tagColors.length]} text-xs font-medium px-3.5 py-1.5 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={service.href}>
                  <motion.span
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#0D47A1] text-white hover:bg-[#1565C0] shadow-md cursor-pointer group/btn"
                  >
                    Learn more
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </motion.span>
                </Link>
              </div>

              <div className="hidden lg:block shrink-0 pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out">
                {service.graphic}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
