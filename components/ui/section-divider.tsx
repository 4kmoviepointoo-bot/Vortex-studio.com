export function SectionDivider({ accent = false }: { accent?: boolean }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 my-0">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
      {accent && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent blur-[0.5px]" />
      )}
    </div>
  )
}