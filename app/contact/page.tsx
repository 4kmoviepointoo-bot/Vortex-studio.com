'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const services = ['UI/UX Design', 'Full-Stack Web App', 'Performance Audit', 'AI Integration']
const budgets = ['$4.5k - $8.5k', '$8.5k - $15k', '$15k+']
const timeSlots = ['10:00 AM', '02:00 PM', '04:30 PM']

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('asgah960@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = () => {
    if (honeypot) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen px-4 pt-24 pb-16 bg-[#E3F2FD]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-[#0D47A1] text-white hover:bg-[#1565C0] transition-colors cursor-pointer group/btn"
            >
              <span className="transition-transform duration-300 group-hover/btn:-translate-x-1">←</span>
              Back to Home
            </motion.span>
          </Link>
        </div>

        <section className="text-center py-8">
          <span className="px-3.5 py-1.5 rounded-full border border-[#90CAF9]/30 bg-white text-xs font-medium text-[#0D47A1]/80 shadow-sm mb-4 inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D47A1] tracking-tight text-center">
            Let&apos;s start a conversation
          </h1>
          <p className="text-[#0D47A1]/80 text-base sm:text-lg max-w-xl mx-auto text-center mt-3 mb-12">
            Send us your project scope or pick a slot for a strategy call.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 my-8">
          <section id="inquiry" className="scroll-mt-24 bg-white border border-[#90CAF9]/30 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0D47A1] mb-6">Project Inquiry</h2>
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#0D47A1]/80 mb-1.5">Name</label>
                <input type="text" autoComplete="name" placeholder="Your full name" className="w-full border border-[#90CAF9]/30 focus:border-[#0D47A1] rounded-xl p-3.5 text-sm text-[#0D47A1] placeholder:text-[#0D47A1]/50 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0D47A1]/80 mb-1.5">Work Email</label>
                <input type="email" autoComplete="email" placeholder="you@company.com" className="w-full border border-[#90CAF9]/30 focus:border-[#0D47A1] rounded-xl p-3.5 text-sm text-[#0D47A1] placeholder:text-[#0D47A1]/50 outline-none transition-colors" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0D47A1]/80 mb-2">Services Interested In</label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <motion.button key={service} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.94 }} transition={spring} onClick={() => toggleService(service)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${selectedServices.includes(service) ? 'bg-[#0D47A1] text-white border-[#0D47A1]' : 'bg-white text-[#0D47A1]/80 border-[#90CAF9]/30 hover:border-[#2196F3]/30'}`}>
                    {service}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0D47A1]/80 mb-2">Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((budget) => (
                  <motion.button key={budget} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.94 }} transition={spring} onClick={() => setSelectedBudget(budget)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${selectedBudget === budget ? 'bg-[#0D47A1] text-white border-[#0D47A1]' : 'bg-white text-[#0D47A1]/80 border-[#90CAF9]/30 hover:border-[#2196F3]/30'}`}>
                    {budget}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0D47A1]/80 mb-1.5">Project Details</label>
              <textarea rows={4} placeholder="Tell us about your project scope, timeline, and goals..." className="w-full border border-[#90CAF9]/30 focus:border-[#0D47A1] rounded-xl p-3.5 text-sm text-[#0D47A1] placeholder:text-[#0D47A1]/50 outline-none transition-colors resize-none" />
            </div>

            <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this empty</label>
              <input
                type="text"
                id="contact-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <motion.button onClick={handleSubmit} whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.94 }} transition={spring}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#0D47A1] text-white hover:bg-[#1565C0] transition-colors cursor-pointer group/btn">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent Successfully
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">
                    Submit Inquiry
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </section>

          <section id="schedule" className="scroll-mt-24 flex flex-col gap-6">
            <div className="bg-white border border-[#90CAF9]/30 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0D47A1] mb-2">30-min Technical Strategy Call</h2>
              <p className="text-sm text-[#0D47A1]/80 mb-6">Pick a time that works for you. No commitment required.</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {timeSlots.map((slot) => (
                  <motion.button key={slot} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.94 }} transition={spring} onClick={() => setSelectedSlot(slot)}
                    className={`py-3 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${selectedSlot === slot ? 'bg-[#0D47A1] text-white border-[#0D47A1]' : 'bg-white text-[#0D47A1]/80 border-[#90CAF9]/30 hover:border-[#2196F3]/30'}`}>
                    {slot}
                  </motion.button>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.94 }} transition={spring}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#0D47A1] text-white hover:bg-[#1565C0] transition-colors cursor-pointer group/btn">
                Confirm Slot
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </motion.button>
            </div>

            <div className="bg-white border border-[#90CAF9]/30 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D47A1]">Direct Contact</p>
                  <motion.button onClick={handleCopy} whileTap={{ scale: 0.94 }} className="text-sm text-[#0D47A1]/80 hover:text-[#0D47A1] transition-colors cursor-pointer">
                    asgah960@gmail.com
                    <AnimatePresence>
                      {copied && (
                        <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} className="ml-2 text-[#2196F3] text-xs font-medium">
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#90CAF9]/30 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D47A1]">24-Hour Proposal Turnaround</p>
                  <p className="text-xs text-[#0D47A1]/80">We respond to all inquiries within one business day.</p>
                </div>
              </div>
            </div>

            <Link href="/pricing">
              <motion.span whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.94 }} transition={spring}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-[#E3F2FD] text-[#0D47A1] border border-[#90CAF9]/30 hover:bg-[#0D47A1] hover:text-white hover:border-[#0D47A1] shadow-sm transition-all duration-300 cursor-pointer group/btn">
                View Pricing Plans
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </motion.span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
