'use client'

const logos = [
  { name: 'Vercel', icon: '▲' },
  { name: 'Stripe', icon: '◈' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Linear', icon: '▬' },
  { name: 'OpenAI', icon: '◎' },
  { name: 'Tailwind CSS', icon: '≈' },
  { name: 'Figma', icon: '◇' },
]

const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

export default function ClientLogos() {
  return (
    <section className="bg-white/80 border-y border-[#90CAF9]/30 shadow-md shadow-[#0D47A1]/5 my-16 py-8 relative overflow-hidden backdrop-blur-sm">
      <p className="text-xs font-semibold text-[#0D47A1]/60 tracking-widest uppercase text-center mb-8">
        Trusted by ambitious teams & industry leaders
      </p>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E3F2FD] via-transparent to-[#E3F2FD] z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E3F2FD] via-transparent to-[#E3F2FD] z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 min-w-full items-center justify-around gap-12 animate-marquee">
            {marqueeLogos.map((logo, i) => (
              <div
                key={`a-${i}-${logo.name}`}
                className="flex items-center gap-2 text-[#0D47A1]/60 font-semibold text-sm sm:text-base tracking-tight shrink-0 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="text-2xl">{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 min-w-full items-center justify-around gap-12 animate-marquee">
            {marqueeLogos.map((logo, i) => (
              <div
                key={`b-${i}-${logo.name}`}
                className="flex items-center gap-2 text-[#0D47A1]/60 font-semibold text-sm sm:text-base tracking-tight shrink-0 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="text-2xl">{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
