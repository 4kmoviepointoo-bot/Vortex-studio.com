'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function AetherIllustration() {
  return (
    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 opacity-[0.08]" viewBox="0 0 112 112" fill="none">
      <rect x="8" y="16" width="40" height="80" rx="6" stroke="#8B7355" strokeWidth="1.2" />
      <rect x="14" y="24" width="28" height="6" rx="3" fill="#8B7355" fillOpacity="0.3" />
      <rect x="14" y="36" width="18" height="4" rx="2" fill="#8B7355" fillOpacity="0.2" />
      <rect x="14" y="46" width="28" height="20" rx="4" fill="#E8DCCB" fillOpacity="0.2" stroke="#E8DCCB" strokeWidth="0.6" />
      <polyline points="18,60 24,52 30,56 38,48" stroke="#E8DCCB" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <rect x="14" y="74" width="12" height="6" rx="3" fill="#8B7355" fillOpacity="0.25" />
      <rect x="30" y="74" width="12" height="6" rx="3" fill="#8B7355" fillOpacity="0.15" />
      <circle cx="80" cy="36" r="18" stroke="#E8DCCB" strokeWidth="1" />
      <path d="M80 24 L80 36 L88 42" stroke="#E8DCCB" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="80" cy="36" r="2.5" fill="#E8DCCB" fillOpacity="0.5" />
      <line x1="80" y1="18" x2="80" y2="14" stroke="#E8DCCB" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="98" y1="36" x2="102" y2="36" stroke="#E8DCCB" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="62" y1="36" x2="58" y2="36" stroke="#E8DCCB" strokeWidth="0.6" strokeOpacity="0.4" />
      <rect x="64" y="64" width="32" height="24" rx="4" stroke="#8B7355" strokeWidth="0.8" fill="#8B7355" fillOpacity="0.04" />
      <rect x="70" y="70" width="8" height="12" rx="1" fill="#E8DCCB" fillOpacity="0.2" />
      <rect x="82" y="74" width="8" height="8" rx="1" fill="#8B7355" fillOpacity="0.15" />
    </svg>
  )
}

function FinPulseIllustration() {
  return (
    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 opacity-[0.08]" viewBox="0 0 112 112" fill="none">
      <rect x="12" y="12" width="88" height="56" rx="6" stroke="#8B7355" strokeWidth="1.2" fill="#8B7355" fillOpacity="0.03" />
      <rect x="18" y="18" width="36" height="6" rx="3" fill="#E8DCCB" fillOpacity="0.25" />
      <rect x="18" y="30" width="20" height="4" rx="2" fill="#8B7355" fillOpacity="0.15" />
      <polyline points="18,50 28,40 38,46 48,34 58,42" stroke="#E8DCCB" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="50" r="2" fill="#E8DCCB" fillOpacity="0.4" />
      <circle cx="28" cy="40" r="2" fill="#E8DCCB" fillOpacity="0.4" />
      <circle cx="38" cy="46" r="2" fill="#E8DCCB" fillOpacity="0.4" />
      <circle cx="48" cy="34" r="2" fill="#E8DCCB" fillOpacity="0.4" />
      <circle cx="58" cy="42" r="2" fill="#E8DCCB" fillOpacity="0.4" />
      <rect x="64" y="20" width="28" height="40" rx="4" stroke="#E8DCCB" strokeWidth="0.8" fill="#E8DCCB" fillOpacity="0.05" />
      <rect x="70" y="26" width="16" height="4" rx="2" fill="#8B7355" fillOpacity="0.2" />
      <rect x="70" y="34" width="10" height="3" rx="1.5" fill="#E8DCCB" fillOpacity="0.2" />
      <rect x="70" y="41" width="16" height="3" rx="1.5" fill="#8B7355" fillOpacity="0.12" />
      <rect x="70" y="48" width="12" height="3" rx="1.5" fill="#E8DCCB" fillOpacity="0.15" />
      <circle cx="32" cy="88" r="14" stroke="#E8DCCB" strokeWidth="0.8" fill="#E8DCCB" fillOpacity="0.04" />
      <path d="M32 80 L32 96 M24 88 L40 88" stroke="#8B7355" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="32" cy="88" r="4" fill="#E8DCCB" fillOpacity="0.15" stroke="#E8DCCB" strokeWidth="0.6" />
      <circle cx="72" cy="88" r="10" stroke="#8B7355" strokeWidth="0.8" fill="#8B7355" fillOpacity="0.04" />
      <path d="M68 84 L72 80 L76 84 L80 80" stroke="#8B7355" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function FeaturedWork() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <span className="px-3.5 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-xs font-medium text-[#667085] shadow-sm mb-4 inline-block">
          Selected Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#171A1F] tracking-tight text-center">
          Crafted for market leaders
        </h2>
        <p className="text-[#667085] text-base sm:text-lg max-w-xl mx-auto text-center mt-4 mb-16">
          Explore our latest digital product transformations, enterprise web apps, and design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 relative z-10">
        {/* Aether SaaS Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0 }}
          whileHover={{ y: -4 }}
          className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#8B7355]/30 transition-all duration-300 flex flex-col overflow-hidden"
        >
          {/* Subtle corner glows */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8B7355]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#E8DCCB]/10 rounded-full blur-2xl pointer-events-none" />
          {/* Tiny dots */}
          <div className="absolute top-6 right-8 w-1 h-1 bg-[#8B7355]/20 rounded-full" />
          <div className="absolute top-10 right-14 w-0.5 h-0.5 bg-[#E8DCCB]/30 rounded-full" />
          <div className="absolute bottom-12 left-10 w-0.5 h-0.5 bg-[#8B7355]/15 rounded-full" />

          {/* Top Visual Area */}
          <div className="relative h-48 rounded-xl bg-[#F3F1EC] border border-[#E5E7EB]/60 mb-6 flex items-center justify-center overflow-hidden">
            {/* Subtle wave decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,120 Q100,80 200,120 T400,120" stroke="#8B7355" strokeWidth="1.5" fill="none" />
              <path d="M0,140 Q100,100 200,140 T400,140" stroke="#E8DCCB" strokeWidth="1" fill="none" />
            </svg>
            {/* Dotted pattern */}
            <svg className="absolute top-3 right-3 w-16 h-16 opacity-[0.06]" viewBox="0 0 64 64">
              {[...Array(16)].map((_, i) => (
                <circle key={i} cx={(i % 4) * 16 + 8} cy={Math.floor(i / 4) * 16 + 8} r="1.2" fill="#8B7355" />
              ))}
            </svg>
            <AetherIllustration />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#3D3026] flex items-center justify-center mx-auto mb-3 shadow-[0_4px_16px_rgba(61,48,38,0.3)]">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <p className="text-sm font-medium text-[#8B7355]">Aether SaaS</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#171A1F] mb-2">Aether SaaS Platform</h3>

          {/* Description */}
          <p className="text-sm text-[#667085] leading-relaxed mb-6 flex-1">
            Enterprise B2B analytics dashboard with real-time data pipelines, custom reporting, and multi-tenant architecture.
          </p>

          {/* Metrics */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-2xl font-bold text-[#8B7355]">3x</p>
              <p className="text-xs text-[#667085]">Faster Load</p>
            </div>
            <div className="w-px bg-[#E5E7EB]" />
            <div>
              <p className="text-2xl font-bold text-[#8B7355]">99.9%</p>
              <p className="text-xs text-[#667085]">Uptime SLA</p>
            </div>
          </div>

          {/* Button */}
          <Link href="/work#aether-saas">
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#3D3026] text-white shadow-md hover:shadow-lg hover:bg-[#6F5A43] transition-all duration-300 cursor-pointer group/btn w-full justify-center"
            >
              View Case Study
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Fin Pulse Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#8B7355]/30 transition-all duration-300 flex flex-col overflow-hidden"
        >
          {/* Subtle corner glows */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8B7355]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#E8DCCB]/10 rounded-full blur-2xl pointer-events-none" />
          {/* Tiny dots */}
          <div className="absolute top-6 right-8 w-1 h-1 bg-[#8B7355]/20 rounded-full" />
          <div className="absolute top-10 right-14 w-0.5 h-0.5 bg-[#E8DCCB]/30 rounded-full" />
          <div className="absolute bottom-12 left-10 w-0.5 h-0.5 bg-[#8B7355]/15 rounded-full" />

          {/* Top Visual Area */}
          <div className="relative h-48 rounded-xl bg-[#F3F1EC] border border-[#E5E7EB]/60 mb-6 flex items-center justify-center overflow-hidden">
            {/* Subtle wave decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,100 Q80,60 160,100 T320,100 T400,100" stroke="#8B7355" strokeWidth="1.5" fill="none" />
              <path d="M0,130 Q80,90 160,130 T320,130 T400,130" stroke="#E8DCCB" strokeWidth="1" fill="none" />
            </svg>
            {/* Dotted pattern */}
            <svg className="absolute bottom-3 left-3 w-16 h-16 opacity-[0.06]" viewBox="0 0 64 64">
              {[...Array(16)].map((_, i) => (
                <circle key={i} cx={(i % 4) * 16 + 8} cy={Math.floor(i / 4) * 16 + 8} r="1.2" fill="#8B7355" />
              ))}
            </svg>
            <FinPulseIllustration />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#3D3026] flex items-center justify-center mx-auto mb-3 shadow-[0_4px_16px_rgba(61,48,38,0.3)]">
                <span className="text-2xl font-bold text-white">FP</span>
              </div>
              <p className="text-sm font-medium text-[#8B7355]">FinPulse</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'Node.js', 'Redis', 'WebSocket'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[#8B7355] bg-[#F3F1EC] border border-[#E5E7EB] rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#171A1F] mb-2">Fin Pulse Engine</h3>

          {/* Description */}
          <p className="text-sm text-[#667085] leading-relaxed mb-6 flex-1">
            Real-time financial data aggregation engine processing 100k+ events/sec with sub-millisecond latency.
          </p>

          {/* Metrics */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-2xl font-bold text-[#8B7355]">100k+</p>
              <p className="text-xs text-[#667085]">Events/sec</p>
            </div>
            <div className="w-px bg-[#E5E7EB]" />
            <div>
              <p className="text-2xl font-bold text-[#8B7355]">&lt;1ms</p>
              <p className="text-xs text-[#667085]">Latency</p>
            </div>
          </div>

          {/* Button */}
          <Link href="/work#fin-pulse">
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#3D3026] text-white shadow-md hover:shadow-lg hover:bg-[#6F5A43] transition-all duration-300 cursor-pointer group/btn w-full justify-center"
            >
              View Case Study
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <div className="text-center mt-16 relative z-10">
        <Link href="/work">
          <motion.span
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-[#3D3026] text-white hover:bg-[#6F5A43] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group/btn"
          >
            Explore All Work
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
              →
            </span>
          </motion.span>
        </Link>
      </div>
    </section>
  )
}
