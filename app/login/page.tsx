'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function PasswordInput({
  value,
  onChange,
  id,
  label,
  autoComplete,
}: {
  value: string
  onChange: (v: string) => void
  id: string
  label: string
  autoComplete?: string
}) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#0F172A] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          autoComplete={autoComplete}
          className="w-full px-4 py-2.5 text-sm text-[#0F172A] bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-[#0F172A]/10 focus:border-[#0F172A]/30 transition-all duration-200"
          placeholder="••••••••"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          tabIndex={-1}
        >
          {show ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
              Welcome back!
            </h1>
            <p className="text-slate-600 mb-8">
              You&apos;ve been authenticated. Redirecting to your dashboard.
            </p>

            <Link href="/" className="inline-block">
              <motion.span
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0F172A] rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
              >
                Go to Dashboard
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
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#0F172A] mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-slate-200 p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">
              Welcome Back to Vortex Studio
            </h1>
            <p className="text-sm text-slate-500">
              Enter your credentials to access your agency dashboard
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

            <PasswordInput
              id="password"
              label="Password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#0F172A] border-slate-300 rounded focus:ring-[#0F172A]/10"
                />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-[#0F172A] hover:underline">
                Forgot password?
              </Link>
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
                Log In
              </span>
              {status === 'loading' && (
                <span className="absolute inset-0 flex items-center justify-center gap-2">
                  <motion.span
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Authenticating...
                </span>
              )}
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium text-[#0F172A] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}