'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { SectionDivider } from '@/components/ui/section-divider'
import Footer from '@/components/footer'
import ShinyText from '@/components/ui/ShinyText'

const ClientLogos = dynamic(() => import('@/components/home/client-logos'), { ssr: false })
const ShowcaseGrid = dynamic(() => import('@/components/home/showcase-grid'), { ssr: false })
const FeaturedWork = dynamic(() => import('@/components/home/featured-work'), { ssr: false })
const PricingPreview = dynamic(() => import('@/components/home/pricing-preview'), { ssr: false })
const ContactCTA = dynamic(() => import('@/components/home/contact-cta'), { ssr: false })

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
}

const techTags = [
  'Next.js App Router',
  'Tailwind CSS',
  'Framer Motion',
  'TypeScript',
]

export default function Home() {
  return (
    <>
      {/* Section 1: Hero - Off-White Base */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-center items-center pt-36 pb-20 px-4 max-w-5xl mx-auto text-center bg-[#FAF9F6]">
        <div className="hero-pulse" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hero-cable"
            style={{
              left: `${12 + i * 12}%`,
              height: `${40 + (i * 3.7 % 30)}%`,
              top: `${10 + (i * 2.7 % 20)}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.2 + (i * 0.04 % 0.3),
            }}
          />
        ))}
        <div className="hero-radial" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#F3F1EC] via-[#FAF9F6]/70 to-transparent z-[1] pointer-events-none" />

        {/* Floating Status Pills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ...spring }}
          className="absolute top-28 left-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E7EB]/60 shadow-lg shadow-slate-900/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7355] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7355]" />
          </span>
          <span className="text-xs font-medium text-[#171A1F]">LIVE 99.9% Optimal Speed</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6, ...spring }}
          className="absolute top-36 right-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E7EB]/60 shadow-lg shadow-slate-900/5"
        >
          <span className="text-xs font-medium text-[#8B7355] bg-[#F3F1EC] px-2 py-0.5 rounded-full">Active</span>
          <span className="text-xs font-medium text-[#171A1F]">3 Projects Deployed</span>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E7EB] bg-white/80 text-xs font-medium text-[#667085] shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7355] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7355]" />
            </span>
            Digital Product & Tech Agency
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          >
            <ShinyText
              text="Crafting digital systems that scale your ambition."
              speed={3}
              color="#171A1F"
              shineColor="#8B7355"
              spread={100}
              direction="left"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-[#667085] max-w-2xl font-normal leading-relaxed"
          >
            We partner with ambitious teams to design, build, and launch enterprise-grade web applications with precision.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <Link href="/signup">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-[#3D3026] hover:bg-[#6F5A43] rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Start a Project
              </motion.span>
            </Link>

            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#667085] border border-[#E5E7EB] hover:bg-[#F3F1EC] rounded-full transition-all cursor-pointer"
              >
                Explore Services
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 w-full max-w-5xl mx-auto rounded-2xl border border-[#E5E7EB]/60 bg-white/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-slate-900/5 relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F3F1EC]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 text-xs text-[#667085] bg-[#F3F1EC] rounded-full border border-[#E5E7EB]">
                  vortex.studio/dashboard
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Live Speed Card - Glassmorphic */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={spring}
                className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white/50 backdrop-blur-md text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7355] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7355]" />
                  </span>
                  <span className="text-xs font-medium text-[#8B7355] uppercase tracking-wide">Live</span>
                </div>
                <p className="text-2xl font-bold text-[#171A1F] mb-1">99.9%</p>
                <p className="text-sm text-[#667085] mb-4">Optimal Speed</p>
                <svg className="w-full h-12" viewBox="0 0 200 50" fill="none">
                  <motion.path
                    d="M0 40 Q25 35 50 30 T100 20 T150 15 T200 10"
                    stroke="#8B7355"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                  <motion.path
                    d="M0 40 Q25 35 50 30 T100 20 T150 15 T200 10 V50 H0 Z"
                    fill="url(#waveGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B7355" />
                      <stop offset="100%" stopColor="#8B7355" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Tech Architecture Card - Glassmorphic */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={spring}
                className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white/50 backdrop-blur-md text-left"
              >
                <p className="text-xs font-medium text-[#667085] uppercase tracking-wide mb-3">Tech Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={spring}
                      className="px-3 py-1.5 text-xs font-medium text-[#171A1F] bg-[#F3F1EC] border border-[#E5E7EB] rounded-full cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Client Impact Card - Glassmorphic */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={spring}
                className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white/50 backdrop-blur-md text-left"
              >
                <p className="text-xs font-medium text-[#667085] uppercase tracking-wide mb-3">Client Impact</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-2xl font-bold text-[#171A1F]">10x</p>
                    <p className="text-sm text-[#667085]">Faster Deployment</p>
                  </div>
                  <div className="h-px bg-[#F3F1EC]" />
                  <div>
                    <p className="text-2xl font-bold text-[#171A1F]">0.2s</p>
                    <p className="text-sm text-[#667085]">Page Load</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider accent />

      {/* Section 2: Services Preview - Light Beige */}
      <section className="w-full bg-[#F3F1EC]">
        <ClientLogos />
      </section>

      <SectionDivider />

      {/* Section 3: Featured Projects - Light Beige */}
      <section className="w-full bg-[#F3F1EC]">
        <ShowcaseGrid />
        <FeaturedWork />
      </section>

      <SectionDivider />

      {/* Section 4: CTA & Footer */}
      <section className="w-full bg-[#E8DCCB]">
        <ContactCTA />
      </section>

      <Footer />
    </>
  )
}
