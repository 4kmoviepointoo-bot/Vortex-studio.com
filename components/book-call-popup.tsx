'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const services = ['UI/UX Design', 'Full-Stack Dev', 'AI Automation']

export default function BookCallPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', note: '', website: '' })

  useEffect(() => {
    const dismissed = sessionStorage.getItem('bookCallDismissed')
    if (dismissed) return

    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('bookCallDismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.website) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(handleClose, 4000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={spring}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white/95 backdrop-blur-xl border border-[#90CAF9]/30 shadow-2xl rounded-2xl p-6"
        >
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-[#E3F2FD] hover:bg-[#90CAF9]/20 text-[#0D47A1]/60 hover:text-[#0D47A1] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center py-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0D47A1] mb-2">Request Received!</h3>
                <p className="text-sm text-[#0D47A1]/80 max-w-xs">
                  We will send you a calendar invite shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2196F3] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2196F3]" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0D47A1] leading-tight">Schedule a Strategy Call</h3>
                    <p className="text-xs text-[#0D47A1]/80">Book a 15-min discovery call with our tech lead.</p>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#90CAF9]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2196F3]/20 focus:border-[#2196F3] transition-all placeholder:text-[#0D47A1]/50"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#90CAF9]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2196F3]/20 focus:border-[#2196F3] transition-all placeholder:text-[#0D47A1]/50"
                />

                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(selectedService === service ? null : service)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                        selectedService === service
                          ? 'bg-[#2196F3] text-white border-[#2196F3]'
                          : 'bg-[#E3F2FD] text-[#0D47A1]/60 border-[#90CAF9]/30 hover:border-[#2196F3]/30'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                <textarea
                  placeholder="Preferred time or brief note (optional)"
                  rows={2}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#90CAF9]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2196F3]/20 focus:border-[#2196F3] transition-all placeholder:text-[#0D47A1]/50 resize-none"
                />

                <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this empty</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.95 }}
                  transition={spring}
                  className="w-full py-3 rounded-full bg-[#0D47A1] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#1565C0] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book My Call
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
