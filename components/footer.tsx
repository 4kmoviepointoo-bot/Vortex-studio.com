'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const content = (
    <span className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-500 transition-colors duration-200 py-1">
      {label}
    </span>
  )

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4 }}
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
      whileHover={{ x: 4 }}
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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Vortex Studio <span className="text-amber-500 font-normal text-xs bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">v1</span></h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A modern tech studio delivering premium digital products, from concept to launch.
            </p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Capabilities</h4>
            <ul className="flex flex-col gap-1">
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
            <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Portfolio</h4>
            <ul className="flex flex-col gap-1">
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
            <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-1">
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

        <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-slate-900">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Vortex Studio. Built with precision.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={spring}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors cursor-pointer"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}