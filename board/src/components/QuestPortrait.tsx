interface QuestPortraitProps {
  priority?: 'low' | 'medium' | 'high' | 'critical'
}

const crystalVariants: Record<string, string> = {
  low: 'from-[var(--steel)]/40 to-[var(--steel)]/10',
  medium: 'from-[var(--gold)]/30 to-[var(--gold)]/5',
  high: 'from-[var(--magic)]/30 to-[var(--magic)]/5',
  critical: 'from-[var(--boss-red)]/30 to-[var(--boss-red)]/5',
}

const crystalGlowVariants: Record<string, string> = {
  low: 'rgba(59,63,84,0.15)',
  medium: 'rgba(245,158,11,0.15)',
  high: 'rgba(74,124,255,0.2)',
  critical: 'rgba(239,68,68,0.2)',
}

export default function QuestPortrait({ priority }: QuestPortraitProps) {
  const gradient = priority ? crystalVariants[priority] : crystalVariants.low
  const glow = priority ? crystalGlowVariants[priority] : crystalGlowVariants.low

  return (
    <div
      className="relative flex h-16 shrink-0 items-center justify-center overflow-hidden rounded-t-md"
      style={{
        background: `linear-gradient(135deg, ${gradient.replace('/40', '').replace('/10', '').replace('/30', '').replace('/5', '').replace('/20', '')})`,
        backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--stone-light) 60%, transparent), color-mix(in oklab, var(--night) 80%, transparent))`,
      }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center"
        style={{
          filter: `drop-shadow(0 0 6px ${glow})`,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
          <path
            d="M12 2l4 3.5-1 5.5 1 5.5-4 3.5-4-3.5 1-5.5-1-5.5L12 2z"
            fill="rgba(74,124,255,0.12)"
            stroke="rgba(74,124,255,0.35)"
            strokeWidth="1.2"
          />
          <path
            d="M12 5l2 2-.5 4 .5 4-2 2-2-2 .5-4-.5-4 2-2z"
            fill="rgba(74,124,255,0.06)"
            stroke="rgba(74,124,255,0.2)"
            strokeWidth="0.8"
          />
          <circle cx="12" cy="12" r="1.5" fill="rgba(74,124,255,0.25)" />
        </svg>
      </div>
    </div>
  )
}
