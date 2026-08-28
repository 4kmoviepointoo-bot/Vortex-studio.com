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
          <div className="bg-white border border-[#90CAF9]/30 rounded-2xl p-5 shadow-xl">
            <p className="text-sm text-[#0D47A1]/80 mb-4 leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="/privacy" className="text-[#2196F3] hover:text-[#1565C0] underline">
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
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#0D47A1] hover:bg-[#1565C0] rounded-full transition-all"
              >
                Accept
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                onClick={decline}
                aria-label="Decline cookies"
                className="flex-1 px-4 py-2.5 text-sm font-medium text-[#0D47A1]/60 border border-[#90CAF9]/30 hover:bg-[#E3F2FD] rounded-full transition-all"
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
