interface QuestScrollFooterProps {
  assignees: string[]
  points: number
  priority: 'low' | 'medium' | 'high' | 'critical'
}

const priorityIcons: Record<string, string> = {
  low: 'M5 12h14',
  medium: 'M5 12h8',
  high: 'M5 12h4',
  critical: 'M5 12h2',
}

const priorityColors: Record<string, string> = {
  low: 'text-[var(--parchment-dim)]',
  medium: 'text-[var(--gold)]',
  high: 'text-[var(--magic)]',
  critical: 'text-[var(--boss-red)]',
}

const priorityLabels: Record<string, string> = {
  low: 'F',
  medium: 'D',
  high: 'C',
  critical: 'S',
}

export default function QuestScrollFooter({ assignees, points, priority }: QuestScrollFooterProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 pb-2.5">
      <div className="flex -space-x-1">
        {assignees.slice(0, 3).map((name, i) => (
          <div
            key={i}
            className="flex h-4 w-4 items-center justify-center rounded-full border border-[var(--steel)] bg-[var(--night)] text-[0.4rem] font-bold text-[var(--parchment-dim)]"
          >
            {name[0].toUpperCase()}
          </div>
        ))}
      </div>

      <span className="ml-auto text-[0.5rem] font-bold text-[var(--parchment-dim)]">
        {points} pts
      </span>

      <span
        className={`flex h-3.5 min-w-3.5 items-center justify-center rounded-[2px] text-[0.4rem] font-bold leading-none ${priorityColors[priority]}`}
        style={{
          backgroundColor: `color-mix(in oklab, ${priorityColors[priority].includes('boss-red') ? 'var(--boss-red)' : priorityColors[priority].includes('gold') ? 'var(--gold)' : priorityColors[priority].includes('magic') ? 'var(--magic)' : 'var(--parchment-dim)'} 15%, transparent)`,
        }}
      >
        {priorityLabels[priority]}
      </span>
    </div>
  )
}
