interface LaneHeaderProps {
  title: string
  count: number
}

export default function LaneHeader({ title, count }: LaneHeaderProps) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--parchment-dim)]">
        {title}
      </h2>
      <span className="inline-flex h-4 min-w-4 items-center justify-center rounded border border-[var(--steel)] bg-[var(--stone)] px-1 text-[0.5rem] font-bold text-[var(--parchment-dim)]">
        {count}
      </span>
    </div>
  )
}
