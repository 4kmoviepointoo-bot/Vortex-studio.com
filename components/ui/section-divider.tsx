export function SectionDivider({ accent = false }: { accent?: boolean }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 my-0">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#90CAF9]/30 to-transparent" />
      {accent && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#2196F3]/40 to-transparent blur-[0.5px]" />
      )}
    </div>
  )
}
