'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const content = (
    <span className="group inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-emerald-500 transition-colors duration-200">
      {label}
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-emerald-500">
        →
      </span>
    </span>
  )

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.94, x: 2 }}
        transition={spring}
        className="cursor-pointer"
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.94, x: 2 }}
      transition={spring}
    >
      <Link href={href}>
        {content}
      </Link>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#cbd5e1] pt-16 pb-12 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold text-slate-950 mb-3">Vortex Studio <span className="text-slate-400 font-normal text-sm">v1</span></h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            A modern tech studio delivering premium digital products, from concept to launch.
          </p>
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Vortex Studio. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-950 mb-4">Capabilities</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'UI/UX Design', href: '/services#ui-ux' },
              { label: 'Full-Stack Development', href: '/services#fullstack' },
              { label: 'Performance Optimization', href: '/services#performance' },
              { label: 'AI Automation', href: '/services#ai-automation' },
            ].map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-950 mb-4">Portfolio & Work</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Aether SaaS Platform', href: '/work#aether-saas' },
              { label: 'Fin Pulse Engine', href: '/work#fin-pulse' },
              { label: 'Growth Retainer', href: '/pricing#retainer' },
            ].map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-950 mb-4">Company & Socials</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <FooterLink href="/about" label="About Us" />
            </li>
            <li>
              <FooterLink href="https://github.com" label="GitHub" external />
            </li>
            <li>
              <FooterLink href="https://x.com" label="X / Twitter" external />
            </li>
            <li>
              <FooterLink href="https://linkedin.com" label="LinkedIn" external />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-slate-100">
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Vortex Studio. Built with precision.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={spring}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-950 transition-colors cursor-pointer"
        >
          Back to top
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}