'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#FAFAF9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <span className="text-8xl font-bold text-slate-200">404</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
          Page not found
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Back to Home
            </motion.span>
          </Link>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              Contact Support
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}