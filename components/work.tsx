'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 400, damping: 17 } as const

const projects = [
  {
    name: 'NovaPay',
    category: 'FinTech · Payments',
    year: '2026',
    description: 'Next-gen payment processing platform with real-time fraud detection and multi-currency support.',
    metrics: ['40% faster checkout', '$2.1B processed', '99.99% uptime'],
    status: 'Live',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: '#2196F3',
  },
  {
    name: 'HealthSync',
    category: 'HealthTech · SaaS',
    year: '2025',
    description: 'Unified health records platform connecting 500+ clinics with patient-controlled data sharing.',
    metrics: ['500+ clinics', '2M patients', 'HIPAA compliant'],
    status: 'Live',
    tech: ['React', 'Go', 'MongoDB'],
    color: '#1565C0',
  },
  {
    name: 'UrbanFlow',
    category: 'PropTech · Marketplace',
    year: '2025',
    description: 'AI-powered commercial real estate marketplace with predictive analytics and virtual tours.',
    metrics: ['12K listings', '35% conversion', '8s load time'],
    status: 'Live',
    tech: ['Next.js', 'Python', 'Redis'],
    color: '#90CAF9',
  },
  {
    name: 'FleetOS',
    category: 'Logistics · IoT',
    year: '2024',
    description: 'Real-time fleet management system with route optimization and predictive maintenance.',
    metrics: ['10K vehicles', '22% fuel savings', 'Real-time GPS'],
    status: 'Live',
    tech: ['Vue.js', 'Rust', 'TimescaleDB'],
    color: '#2196F3',
  },
]

const metrics = [
  { value: '47+', label: 'Projects Shipped', description: 'Across 12 industries' },
  { value: '99.9%', label: 'Uptime Average', description: 'Last 12 months' },
  { value: '<200ms', label: 'Response Time', description: 'P95 globally' },
  { value: '4.9/5', label: 'Client Rating', description: 'On Clutch & Google' },
]

export default function WorkShowcase() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  return (
    <div ref={targetRef} className="relative h-[300vh] w-full bg-[#E3F2FD]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y }} className="h-full">
          <div className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative bg-white rounded-2xl border border-[#90CAF9]/30 p-6 shadow-sm hover:shadow-xl hover:border-[#2196F3]/30 transition-all duration-500 will-change-transform"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0D47A1] group-hover:text-[#2196F3] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-xs font-medium text-[#0D47A1]/60 mt-1 tracking-wide uppercase">
                        {project.category}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2196F3] bg-[#E3F2FD] border border-[#90CAF9]/30 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-[#0D47A1]/80 mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex items-center gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-medium text-[#0D47A1]/60 bg-[#E3F2FD] px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Status + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#90CAF9]/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium text-[#0D47A1]/60">{project.status}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#2196F3] group-hover:text-[#1565C0] transition-colors cursor-pointer">
                      View Case Study →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function WorkMetrics() {
  return (
    <div className="w-full bg-[#90CAF9]/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-2">{metric.value}</div>
              <div className="text-sm font-semibold text-[#0D47A1] mb-1">{metric.label}</div>
              <div className="text-xs text-[#0D47A1]/80">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
