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
      {/* Section 1: Hero - Light Blue Base */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-center items-center pt-36 pb-20 px-4 max-w-5xl mx-auto text-center bg-[#E3F2FD]">
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
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#E3F2FD] via-[#E3F2FD]/70 to-transparent z-[1] pointer-events-none" />

        {/* Floating Status Pills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ...spring }}
          className="absolute top-28 left-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#90CAF9]/30 shadow-lg shadow-[#0D47A1]/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2196F3] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2196F3]" />
          </span>
          <span className="text-xs font-medium text-[#0D47A1]">LIVE 99.9% Optimal Speed</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6, ...spring }}
          className="absolute top-36 right-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#90CAF9]/30 shadow-lg shadow-[#0D47A1]/5"
        >
          <span className="text-xs font-medium text-[#2196F3] bg-[#E3F2FD] px-2 py-0.5 rounded-full">Active</span>
          <span className="text-xs font-medium text-[#0D47A1]">3 Projects Deployed</span>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#90CAF9]/30 bg-white/80 text-xs font-medium text-[#0D47A1]/80 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2196F3] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2196F3]" />
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
              color="#0D47A1"
              shineColor="#2196F3"
              spread={100}
              direction="left"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-[#0D47A1]/80 max-w-2xl font-normal leading-relaxed"
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
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-[#0D47A1] hover:bg-[#1565C0] rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Start a Project
              </motion.span>
            </Link>

            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#0D47A1]/80 border border-[#90CAF9]/30 hover:bg-[#E3F2FD] rounded-full transition-all cursor-pointer"
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
          className="mt-16 w-full max-w-5xl mx-auto rounded-2xl border border-[#90CAF9]/30 bg-white/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-[#0D47A1]/5 relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#90CAF9]/20">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 text-xs text-[#0D47A1]/60 bg-[#E3F2FD] rounded-full border border-[#90CAF9]/30">
                  vortex.studio/dashboard
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Live Speed Card - Glassmorphic */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={spring}
                className="p-5 rounded-2xl border border-[#90CAF9]/30 bg-white/50 backdrop-blur-md text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2196F3] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2196F3]" />
                  </span>
                  <span className="text-xs font-medium text-[#2196F3] uppercase tracking-wide">Live</span>
                </div>
                <p className="text-2xl font-bold text-[#0D47A1] mb-1">99.9%</p>
                <p className="text-sm text-[#0D47A1]/80 mb-4">Optimal Speed</p>
                <svg className="w-full h-12" viewBox="0 0 200 50" fill="none">
                  <motion.path
                    d="M0 40 Q25 35 50 30 T100 20 T150 15 T200 10"
                    stroke="#2196F3"
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
                      <stop offset="0%" stopColor="#2196F3" />
                      <stop offset="100%" stopColor="#2196F3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Tech Architecture Card - Glassmorphic */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={spring}
                className="p-5 rounded-2xl border border-[#90CAF9]/30 bg-white/50 backdrop-blur-md text-left"
              >
                <p className="text-xs font-medium text-[#0D47A1]/80 uppercase tracking-wide mb-3">Tech Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={spring}
                      className="px-3 py-1.5 text-xs font-medium text-[#0D47A1] bg-[#E3F2FD] border border-[#90CAF9]/30 rounded-full cursor-default"
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
                className="p-5 rounded-2xl border border-[#90CAF9]/30 bg-white/50 backdrop-blur-md text-left"
              >
                <p className="text-xs font-medium text-[#0D47A1]/80 uppercase tracking-wide mb-3">Client Impact</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-2xl font-bold text-[#0D47A1]">10x</p>
                    <p className="text-sm text-[#0D47A1]/80">Faster Deployment</p>
                  </div>
                  <div className="h-px bg-[#90CAF9]/20" />
                  <div>
                    <p className="text-2xl font-bold text-[#0D47A1]">0.2s</p>
                    <p className="text-sm text-[#0D47A1]/80">Page Load</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider accent />

      {/* Section 2: Services Preview */}
      <section className="w-full bg-[#E3F2FD]">
        <ClientLogos />
      </section>

      <SectionDivider />

      {/* Section 3: Featured Projects */}
      <section className="w-full bg-[#E3F2FD]">
        <ShowcaseGrid />
        <FeaturedWork />
      </section>

      <SectionDivider />

      {/* Section 4: CTA & Footer */}
      <section className="w-full bg-[#90CAF9]/20">
        <ContactCTA />
      </section>

      <Footer />
    </>
  )
}
