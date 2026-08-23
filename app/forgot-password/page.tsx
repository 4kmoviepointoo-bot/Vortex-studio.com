'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={spring}
          className="w-full max-w-md text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-slate-200 p-8 sm:p-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
              Reset link sent!
            </h1>
            <p className="text-slate-600 mb-8">
              Check your inbox. We&apos;ve sent a password reset link to{' '}
              <span className="font-medium text-[#0F172A]">{email}</span>.
            </p>

            <Link href="/login" className="inline-block">
              <motion.span
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0F172A] rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
              >
                Back to Log In
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="w-full max-w-md"
      >
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#0F172A] mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Log In
        </Link>

        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-slate-200 p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">
              Reset your password
            </h1>
            <p className="text-sm text-slate-500">
              Enter the email associated with your Vortex Studio account and we will send you a reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-2.5 text-sm text-[#0F172A] bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-[#0F172A]/10 focus:border-[#0F172A]/30 transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="relative w-full py-2.5 text-sm font-medium text-white bg-[#0F172A] rounded-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={status === 'loading' ? {} : { scale: 1.02 }}
              whileTap={status === 'loading' ? {} : { scale: 0.98 }}
              transition={spring}
            >
              <span className={status === 'loading' ? 'opacity-0' : ''}>
                Send Reset Link
              </span>
              {status === 'loading' && (
                <span className="absolute inset-0 flex items-center justify-center gap-2">
                  <motion.span
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending link...
                </span>
              )}
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-[#0F172A] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}