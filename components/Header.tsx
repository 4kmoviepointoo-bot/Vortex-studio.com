'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import ShinyText from '@/components/ui/ShinyText'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const searchItems = [
  { label: 'Services Overview', href: '/services' },
  { label: 'Selected Case Studies & Work', href: '/work' },
  { label: 'Agency Story & Team', href: '/about' },
  { label: 'Pricing & Flexible Plans', href: '/pricing' },
  { label: 'Create an Account', href: '/signup' },
  { label: 'Client Portal Login', href: '/login' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      className="relative text-sm font-medium text-slate-600 hover:text-[#0F172A] py-1"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-px bg-[#0F172A] origin-center"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={spring}
      />
    </motion.a>
  )
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-4 relative flex flex-col justify-between">
      <motion.span
        className="block h-px bg-[#0F172A]"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 7 : 0,
        }}
        transition={spring}
      />
      <motion.span
        className="block h-px bg-[#0F172A]"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-px bg-[#0F172A]"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -7 : 0,
        }}
        transition={spring}
      />
    </div>
  )
}

function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = searchItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSelect = (href: string) => {
    onClose()
    router.push(href)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-md flex items-start justify-center pt-[20vh] px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={spring}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 text-sm text-[#0F172A] outline-none placeholder:text-slate-400"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200 transition-colors"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-slate-400">
                  No results found.
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 rounded-xl transition-colors text-left"
                  >
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          borderRadius: scrolled ? '9999px' : '0px',
          top: scrolled ? '16px' : '0px',
          left: scrolled ? '5%' : '0px',
          right: scrolled ? '5%' : '0px',
          maxWidth: scrolled ? '80rem' : '100%',
          boxShadow: scrolled
            ? '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)'
            : '0 0px 0px 0px rgba(0,0,0,0)',
          borderBottomWidth: scrolled ? '0px' : '1px',
          borderLeftWidth: scrolled ? '1px' : '0px',
          borderRightWidth: scrolled ? '1px' : '0px',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        className="fixed z-50 border border-slate-200/80 overflow-hidden"
        style={{
          background: scrolled
            ? 'rgba(250, 250, 249, 0.8)'
            : '#FAFAF9',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <ShinyText
              text="Vortex Studio"
              speed={4}
              color="#0F172A"
              shineColor="#10b981"
              spread={90}
              direction="right"
            />
            <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-[#0F172A] text-white rounded">
              v1
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => setSearchOpen(true)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full hover:border-slate-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search...
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-medium bg-white border border-slate-200 rounded">
                ⌘K
              </span>
            </motion.button>

            <motion.a
              href="/login"
              className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] rounded-lg overflow-hidden whitespace-nowrap"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.span
                className="absolute inset-0 bg-slate-100 rounded-lg"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={spring}
              >
                Log In
              </motion.span>
            </motion.a>

            <motion.a
              href="/signup"
              className="relative px-4 py-2 text-sm font-medium text-white bg-[#0F172A] rounded-lg overflow-hidden whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                whileHover={{ translateX: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute inset-0 bg-slate-800 rounded-lg"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.15 }}
              />
              <span className="relative z-10">Sign Up</span>
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center justify-center w-10 h-10 -mr-2 rounded-lg hover:bg-slate-100"
            >
              <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <motion.button
              className="flex items-center justify-center w-10 h-10 -mr-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              transition={spring}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={spring}
              className="fixed inset-0 z-50 md:hidden overflow-y-auto overflow-x-hidden"
            >
              <div className="min-h-full bg-[#FAFAF9] flex flex-col">
                <div className="flex items-center justify-between h-14 sm:h-16 px-6 border-b border-slate-100">
                  <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-[#0F172A] text-xl font-semibold tracking-tight">
                      Vortex Studio
                    </span>
                    <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-[#0F172A] text-white rounded">
                      v1
                    </span>
                  </Link>

                  <motion.button
                    className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.90 }}
                    transition={spring}
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="px-6 py-8 flex flex-col gap-2 flex-1">
                  {[
                    { label: 'Services', href: '/services' },
                    { label: 'Work', href: '/work' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                  ].map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...spring, delay: i * 0.05 }}
                      className="py-3 text-lg font-medium text-slate-600 hover:text-[#0F172A] border-b border-slate-100"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-slate-100">
                    {[
                      { label: 'UI/UX Design', href: '/services#ui-ux' },
                      { label: 'Aether SaaS', href: '/work#aether-saas' },
                      { label: 'Design Sprint', href: '/pricing#sprint' },
                    ].map((pill, i) => (
                      <motion.a
                        key={pill.href}
                        href={pill.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...spring, delay: 0.25 + i * 0.05 }}
                        whileTap={{ scale: 0.94 }}
                        className="px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-200 transition-colors"
                      >
                        {pill.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-8 pt-4 border-t border-slate-100">
                  <motion.a
                    href="/contact#schedule"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring, delay: 0.35 }}
                    whileTap={{ scale: 0.94 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white rounded-full font-semibold text-center group/btn"
                  >
                    Book a Call
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}