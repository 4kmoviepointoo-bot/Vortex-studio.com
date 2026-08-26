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
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-center items-center pt-36 pb-20 px-4 max-w-5xl mx-auto text-center bg-[#F9F8F3] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]">
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
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent z-[1] pointer-events-none" />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 text-xs font-medium text-slate-700 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
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
              color="#0F172A"
              shineColor="#10b981"
              spread={100}
              direction="left"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
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
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Start a Project
              </motion.span>
            </Link>

            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
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
          className="mt-16 w-full max-w-5xl mx-auto rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-md p-4 sm:p-6 shadow-2xl shadow-slate-900/5 relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 text-xs text-slate-400 bg-slate-50 rounded-full border border-slate-100">
                  vortex.studio/dashboard
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -4 }}
                transition={spring}
                className="p-5 rounded-xl border border-slate-200/80 bg-white/80 text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Live</span>
                </div>
                <p className="text-2xl font-bold text-slate-950 mb-1">99.9%</p>
                <p className="text-sm text-slate-500 mb-4">Optimal Speed</p>
                <svg className="w-full h-12" viewBox="0 0 200 50" fill="none">
                  <motion.path
                    d="M0 40 Q25 35 50 30 T100 20 T150 15 T200 10"
                    stroke="#10b981"
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
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={spring}
                className="p-5 rounded-xl border border-slate-200/80 bg-white/80 text-left"
              >
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Tech Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={spring}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={spring}
                className="p-5 rounded-xl border border-slate-200/80 bg-white/80 text-left"
              >
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Client Impact</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-2xl font-bold text-slate-950">10x</p>
                    <p className="text-sm text-slate-500">Faster Deployment</p>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div>
                    <p className="text-2xl font-bold text-slate-950">0.2s</p>
                    <p className="text-sm text-slate-500">Page Load</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider accent />

      {/* Section 2: Services Preview - Light Beige Tint */}
      <section className="w-full bg-[#EDE8DC]">
        <ClientLogos />
      </section>

      <SectionDivider />

      {/* Section 3: Featured Projects - Muted Warm Taupe */}
      <section className="w-full bg-[#D8CDBC]">
        <ShowcaseGrid />
        <FeaturedWork />
      </section>

      <SectionDivider />

      {/* Section 4: CTA & Footer - Deep Warm Sand */}
      <section className="w-full bg-[#BBAE97]">
        <ContactCTA />
        <Footer />
      </section>
    </>
  )
}