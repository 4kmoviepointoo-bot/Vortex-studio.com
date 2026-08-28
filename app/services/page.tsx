'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroHeader from '@/components/ui/hero-header'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const tagColors = [
  'bg-[#F3F1EC] text-[#8B7355] border border-[#E5E7EB]',
  'bg-[#F3F1EC] text-[#8B7355] border border-[#E5E7EB]',
  'bg-[#F3F1EC] text-[#8B7355] border border-[#E5E7EB]',
  'bg-[#F3F1EC] text-[#8B7355] border border-[#E5E7EB]',
  'bg-[#F3F1EC] text-[#8B7355] border border-[#E5E7EB]',
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
        <rect x="20" y="30" width="80" height="116" rx="12" stroke="#8B7355" strokeWidth="1.5" fill="#8B7355" fillOpacity="0.05" />
        <rect x="30" y="50" width="60" height="8" rx="4" fill="#8B7355" fillOpacity="0.3" />
        <rect x="30" y="66" width="40" height="6" rx="3" fill="#8B7355" fillOpacity="0.2" />
        <rect x="30" y="80" width="60" height="30" rx="6" fill="#8B7355" fillOpacity="0.1" stroke="#8B7355" strokeWidth="0.75" />
        <rect x="30" y="118" width="26" height="8" rx="4" fill="#8B7355" fillOpacity="0.25" />
        <rect x="62" y="118" width="26" height="8" rx="4" fill="#8B7355" fillOpacity="0.15" />
        <circle cx="160" cy="60" r="28" stroke="#E8DCCB" strokeWidth="1.5" fill="#E8DCCB" fillOpacity="0.05" />
        <circle cx="160" cy="60" r="14" stroke="#E8DCCB" strokeWidth="1" fill="#E8DCCB" fillOpacity="0.1" />
        <circle cx="160" cy="60" r="4" fill="#E8DCCB" fillOpacity="0.4" />
        <line x1="160" y1="32" x2="160" y2="16" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="204" y2="60" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="160" y1="88" x2="160" y2="104" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="132" y1="60" x2="116" y2="60" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="220" cy="100" r="22" stroke="#3D3026" strokeWidth="1.5" fill="#3D3026" fillOpacity="0.05" />
        <path d="M220 86 L220 114 M206 100 L234 100" stroke="#3D3026" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="188" y1="60" x2="198" y2="82" stroke="#3D3026" strokeWidth="0.75" strokeOpacity="0.3" />
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
        <rect x="16" y="20" width="120" height="136" rx="10" stroke="#8B7355" strokeWidth="1.5" fill="#8B7355" fillOpacity="0.04" />
        <rect x="24" y="32" width="104" height="10" rx="5" fill="#8B7355" fillOpacity="0.2" />
        <rect x="24" y="50" width="50" height="6" rx="3" fill="#8B7355" fillOpacity="0.15" />
        <rect x="24" y="64" width="104" height="40" rx="6" fill="#8B7355" fillOpacity="0.08" stroke="#8B7355" strokeWidth="0.75" />
        <rect x="30" y="70" width="30" height="4" rx="2" fill="#8B7355" fillOpacity="0.25" />
        <rect x="30" y="80" width="50" height="4" rx="2" fill="#8B7355" fillOpacity="0.15" />
        <rect x="30" y="90" width="20" height="4" rx="2" fill="#8B7355" fillOpacity="0.2" />
        <rect x="24" y="114" width="104" height="30" rx="6" fill="#8B7355" fillOpacity="0.06" stroke="#8B7355" strokeWidth="0.75" />
        <circle cx="200" cy="60" r="30" stroke="#E8DCCB" strokeWidth="1.5" fill="#E8DCCB" fillOpacity="0.05" />
        <path d="M185 60 L195 50 L205 60 L215 50" stroke="#E8DCCB" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <circle cx="200" cy="120" r="20" stroke="#3D3026" strokeWidth="1.5" fill="#3D3026" fillOpacity="0.05" />
        <path d="M200 108 L200 132 M188 120 L212 120" stroke="#3D3026" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="230" y1="60" x2="250" y2="60" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="200" y1="90" x2="200" y2="100" stroke="#3D3026" strokeWidth="1" strokeOpacity="0.3" />
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
        <circle cx="144" cy="88" r="50" stroke="#8B7355" strokeWidth="1.5" fill="#8B7355" fillOpacity="0.04" />
        <circle cx="144" cy="88" r="35" stroke="#8B7355" strokeWidth="1" fill="#8B7355" fillOpacity="0.06" />
        <circle cx="144" cy="88" r="20" stroke="#8B7355" strokeWidth="1" fill="#8B7355" fillOpacity="0.08" />
        <path d="M144 50 L144 88 L170 100" stroke="#E8DCCB" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="144" cy="88" r="4" fill="#E8DCCB" fillOpacity="0.5" />
        <line x1="144" y1="38" x2="144" y2="30" stroke="#8B7355" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="194" y1="88" x2="202" y2="88" stroke="#8B7355" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="94" y1="88" x2="86" y2="88" stroke="#8B7355" strokeWidth="1" strokeOpacity="0.3" />
        <text x="144" y="150" textAnchor="middle" fill="#3D3026" fillOpacity="0.5" fontSize="10" fontWeight="600">100</text>
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#8B7355" fillOpacity="0.1" />
        <rect x="40" y="155" width="208" height="6" rx="3" fill="#8B7355" fillOpacity="0.3" />
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
        <circle cx="144" cy="88" r="40" stroke="#8B7355" strokeWidth="1.5" fill="#8B7355" fillOpacity="0.04" />
        <circle cx="144" cy="48" r="16" stroke="#E8DCCB" strokeWidth="1.5" fill="#E8DCCB" fillOpacity="0.06" />
        <circle cx="104" cy="108" r="16" stroke="#8B7355" strokeWidth="1.5" fill="#8B7355" fillOpacity="0.06" />
        <circle cx="184" cy="108" r="16" stroke="#3D3026" strokeWidth="1.5" fill="#3D3026" fillOpacity="0.06" />
        <line x1="144" y1="64" x2="144" y2="72" stroke="#E8DCCB" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="98" x2="128" y2="90" stroke="#8B7355" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="170" y1="90" x2="180" y2="98" stroke="#3D3026" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="118" y1="108" x2="170" y2="108" stroke="#8B7355" strokeWidth="0.75" strokeOpacity="0.2" />
        <circle cx="144" cy="88" r="8" fill="#8B7355" fillOpacity="0.15" stroke="#8B7355" strokeWidth="1" />
        <circle cx="144" cy="88" r="3" fill="#8B7355" fillOpacity="0.4" />
        <text x="144" y="160" textAnchor="middle" fill="#3D3026" fillOpacity="0.4" fontSize="8" fontWeight="500">Neural Network</text>
      </svg>
    ),
  },
]

const serviceAccents = [
  'hover:shadow-[#8B7355]/10 hover:border-[#8B7355]/30',
  'hover:shadow-[#8B7355]/10 hover:border-[#8B7355]/30',
  'hover:shadow-[#8B7355]/10 hover:border-[#8B7355]/30',
  'hover:shadow-[#8B7355]/10 hover:border-[#8B7355]/30',
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Header - Off-White Base */}
      <div className="w-full bg-[#FAF9F6]">
        <HeroHeader
          badge="Services"
          title="Engineered for high-scale digital impact"
          subtitle="End-to-end design and engineering tailored for ambitious tech companies."
          primaryButton={{ label: 'Book a Discovery Call', href: '/contact' }}
          secondaryButton={{ label: 'View Case Studies', href: '/work' }}
        />
      </div>

      {/* Section 2: Interactive Capability Matrix - Light Beige Tint */}
      <div className="w-full bg-[#F3F1EC]">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-8 py-16">
            {services.map((service, i) => (
              <motion.div
                key={service.index}
                id={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.003 }}
                className={`scroll-mt-24 bg-white border border-[#E5E7EB] rounded-[28px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] will-change-transform group relative overflow-hidden ${serviceAccents[i % serviceAccents.length]}`}
                style={{ transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {/* Subtle decorative corner glows */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8B7355]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#E8DCCB]/10 rounded-full blur-2xl pointer-events-none" />
                {/* Tiny dots */}
                <div className="absolute top-6 right-8 w-1 h-1 bg-[#8B7355]/20 rounded-full" />
                <div className="absolute top-10 right-12 w-0.5 h-0.5 bg-[#E8DCCB]/30 rounded-full" />
                <div className="absolute bottom-8 left-10 w-0.5 h-0.5 bg-[#8B7355]/15 rounded-full" />
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#3D3026] text-white text-xs font-bold px-3 py-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {service.index}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#E5E7EB] to-transparent" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1F] mb-3">
                      {service.title}
                    </h2>

                    <p className="text-[#667085] text-base leading-relaxed max-w-2xl mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                      {service.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className={`${tagColors[ti % tagColors.length]} text-xs font-medium px-3.5 py-1.5 rounded-full group-hover:translate-y-[-2px] transition-transform duration-300`}
                          style={{ transitionDelay: `${ti * 30}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Micro-Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {i === 0 && ['Figma', 'Storybook', 'Radix UI'].map((b) => (
                        <span key={b} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-md">
                          {b}
                        </span>
                      ))}
                      {i === 1 && ['Next.js', 'Prisma', 'Tailwind'].map((b) => (
                        <span key={b} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-md">
                          {b}
                        </span>
                      ))}
                      {i === 2 && ['Lighthouse', 'Edge', 'CDN'].map((b) => (
                        <span key={b} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-md">
                          {b}
                        </span>
                      ))}
                      {i === 3 && ['GPT-4', 'RAG', 'Agents'].map((b) => (
                        <span key={b} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-md">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:block shrink-0 pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out">
                    {service.graphic}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Bottom CTA */}
      <div className="w-full bg-[#E8DCCB]">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="text-center py-16">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.94 }}
                transition={spring}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#3D3026] hover:bg-[#6F5A43] rounded-lg transition-colors cursor-pointer"
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
