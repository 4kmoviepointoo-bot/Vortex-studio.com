'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ShinyText from '@/components/ui/ShinyText'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const projects = [
  {
    id: 'nexus-ai',
    title: 'Nexus AI Dashboard',
    category: 'AI & Machine Learning',
    badge: '40% Time Saved',
    description: 'Enterprise AI model monitoring dashboard with real-time inference tracking, cost optimization, and team collaboration tools.',
    tags: ['Python', 'FastAPI', 'React', 'D3.js'],
    metrics: [
      { label: 'Models Tracked', value: '50+' },
      { label: 'Cost Reduction', value: '40%' },
    ],
    href: '/work#nexus-ai',
  },
  {
    id: 'aether-saas',
    title: 'Aether SaaS Platform',
    category: 'UI/UX & Next.js App',
    badge: '300% Conversion Growth',
    description: 'End-to-end product redesign and full-stack rebuild for a B2B analytics platform. Migrated from legacy monolith to modern microservices.',
    tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    metrics: [
      { label: 'Faster Load', value: '3x' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
    href: '/work#aether-saas',
  },
  {
    id: 'fin-pulse',
    title: 'Fin Pulse Engine',
    category: 'FinTech & Real-time Analytics',
    badge: '0.1s Latency Infrastructure',
    description: 'High-performance real-time trading dashboard with sub-second data pipelines and custom WebSocket architecture.',
    tags: ['React', 'Node.js', 'Redis', 'WebSocket'],
    metrics: [
      { label: 'Events/sec', value: '100k+' },
      { label: 'Latency', value: '<1ms' },
    ],
    href: '/work#fin-pulse',
  },
  {
    id: 'pulse-health',
    title: 'Pulse Health',
    category: 'HealthTech & Mobile',
    badge: '10k+ Active Users',
    description: 'Patient engagement platform with appointment scheduling, telehealth integration, and automated follow-up workflows.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Twilio'],
    metrics: [
      { label: 'Active Users', value: '10k+' },
      { label: 'NPS Score', value: '72' },
    ],
    href: '/work#pulse-health',
  },
]

function CardContent({ project }: { project: typeof projects[number] }) {
  return (
    <>
      <div>
        <div className="h-24 sm:h-32 bg-slate-100 rounded-xl p-3 mb-3 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 sm:h-12 rounded-lg bg-slate-200 border border-slate-300/60" />
            <div className="h-10 sm:h-12 rounded-lg bg-slate-200 border border-slate-300/60" />
            <div className="h-10 sm:h-12 rounded-lg bg-slate-200 border border-slate-300/60" />
          </div>
          <div className="mt-2 h-4 w-2/3 rounded bg-slate-300/60" />
        </div>

        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className="inline-flex items-center text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700 whitespace-nowrap">
            {project.category}
          </span>
          <span className="inline-flex items-center text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 whitespace-nowrap tracking-wide">
            {project.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 my-1.5">{project.title}</h3>
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 sm:px-2.5 py-1 text-[10px] font-medium text-slate-700 bg-slate-200/70 border border-slate-300/60 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex gap-4 sm:gap-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-base sm:text-lg font-bold text-slate-900">{m.value}</p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>

        <Link href={project.href}>
          <motion.span
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
          >
            View Case Study
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </>
  )
}

export default function WorkShowcase() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={targetRef} className="relative h-[300vh] w-full bg-[#f1f5f9]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="flex items-center justify-between px-6 sm:px-12 mb-4 z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <ShinyText
              text="FEATURED WORK"
              speed={3}
              color="#059669"
              shineColor="#ffffff"
              spread={100}
              direction="left"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
          <div className="w-20 sm:w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-emerald-500 rounded-full origin-left"
            />
          </div>
        </div>
        <p className="text-xs text-slate-500 mb-4 px-6 sm:px-12 z-10">Scroll to explore</p>

        <motion.div style={{ x }} className="flex gap-6 px-6 sm:px-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.1 }}
              className="w-[85vw] max-w-[320px] sm:max-w-[420px] h-[480px] shrink-0 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <CardContent project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-6 z-10">
          {[0, 1, 2, 3].map((i) => {
            const dotProgress = useTransform(
              scrollYProgress,
              [i * 0.25, i * 0.25 + 0.25],
              [0.3, 1]
            )
            return (
              <motion.div
                key={i}
                style={{ opacity: dotProgress }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}