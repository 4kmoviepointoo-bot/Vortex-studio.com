'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={spring}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 sm:max-w-md z-50"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl">
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="/privacy" className="text-amber-700 hover:text-amber-800 underline">
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                onClick={accept}
                aria-label="Accept cookies"
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all"
              >
                Accept
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                onClick={decline}
                aria-label="Decline cookies"
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 rounded-full transition-all"
              >
                Decline
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}