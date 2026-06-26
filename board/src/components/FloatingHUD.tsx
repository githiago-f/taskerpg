export default function FloatingHUD() {
  return (
    <div className="pointer-events-none absolute bottom-4 right-4 flex flex-col items-end gap-2">
      <div className="rounded-lg border border-[var(--line-strong)] bg-[var(--stone)]/60 px-3 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-[0.55rem] font-bold uppercase tracking-wider text-[var(--parchment-dim)]">
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-[var(--magic)]">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Combo
          </span>
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-[var(--gold)]">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            Loot
          </span>
        </div>
      </div>
    </div>
  )
}
