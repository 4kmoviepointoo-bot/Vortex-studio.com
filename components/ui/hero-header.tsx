'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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

interface HeroHeaderProps {
  badge?: string
  title: string
  subtitle: string
  primaryButton: {
    label: string
    href: string
  }
  secondaryButton: {
    label: string
    href: string
  }
  shimmer?: boolean
}

export default function HeroHeader({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  shimmer = false,
}: HeroHeaderProps) {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex flex-col justify-center items-center pt-32 pb-20 px-4 w-full">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {badge && (
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 text-xs font-medium text-slate-700 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {badge}
          </motion.div>
        )}

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Link href={primaryButton.href}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-sm cursor-pointer"
            >
              {primaryButton.label}
            </motion.span>
          </Link>

          <Link href={secondaryButton.href}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              {secondaryButton.label}
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
