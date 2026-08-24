'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16 bg-[#e6f4ea]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#0F172A] bg-slate-100 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            What We Do
          </h1>
          <p className="max-w-xl text-slate-600 text-lg mx-auto">
            We design and build digital products that scale. From brand identity to full-stack applications,
            our team delivers end-to-end solutions for ambitious companies.
          </p>
        </div>

        <section id="ui-ux" className="mb-20 scroll-mt-24">
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
              01
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Enterprise UI/UX Design Systems
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Crafting scalable, high-conversion visual design systems and interactive interfaces.
              We create cohesive design languages that grow with your product and resonate with your users.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Design Systems', 'UI Components', 'User Research', 'Prototyping', 'Accessibility'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="fullstack" className="mb-20 scroll-mt-24">
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Full-Stack Web Applications
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Modern Next.js, React, and API architectures built for security, speed, and scale.
              From MVPs to enterprise platforms, we build systems that perform under pressure.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST & GraphQL'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="performance" className="mb-20 scroll-mt-24">
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
              03
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Performance & Core Web Vitals
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Sub-second load times, dynamic server rendering, and zero-latency user experiences.
              We optimize every layer of the stack for maximum performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Core Web Vitals', 'Lighthouse 100', 'Edge Rendering', 'CDN Optimization', 'Code Splitting'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-automation" className="mb-20 scroll-mt-24">
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
              04
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              AI & Product Automation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Custom LLM integrations, automated workflows, and intelligent product features.
              We embed AI where it creates real value, not just novelty.
            </p>
            <div className="flex flex-wrap gap-2">
              {['LLM Integration', 'RAG Systems', 'Workflow Automation', 'AI Agents', 'Prompt Engineering'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Back to Home
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  )
}