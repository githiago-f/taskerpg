import Tooltip from './Tooltip'

interface QuestAttributesProps {
  xp: number
  hp: number
  estimate: string
  loot: string
  combo?: number
}

export default function QuestAttributes({ xp, hp, estimate, loot, combo }: QuestAttributesProps) {
  return (
    <div className="flex items-center justify-center gap-3 py-2 opacity-40 transition-opacity duration-150 group-hover:opacity-70">
      <Tooltip content={`${xp} XP`}>
        <span className="flex items-center text-xs text-[var(--parchment-dim)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </span>
      </Tooltip>

      <Tooltip content={`${hp} HP`}>
        <span className="flex items-center text-xs text-[var(--forest)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-2 w-2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
      </Tooltip>

      <Tooltip content={estimate}>
        <span className="flex items-center text-xs text-[var(--parchment-dim)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
      </Tooltip>

      <Tooltip content={`Loot: ${loot}`}>
        <span className="flex items-center text-xs text-[var(--gold-soft)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </span>
      </Tooltip>

      {combo && combo > 0 ? (
        <Tooltip content={`${combo}x Combo!`}>
          <span className="flex items-center text-xs text-[var(--magic)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
              <path d="M12 3l1.5 6 6 1.5-6 1.5L12 18l-1.5-6L4.5 10.5l6-1.5L12 3z" />
            </svg>
          </span>
        </Tooltip>
      ) : null}
    </div>
  )
}
