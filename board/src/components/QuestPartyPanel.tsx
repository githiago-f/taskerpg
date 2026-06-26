import type { QuestScroll as QuestScrollType } from '../types'

interface QuestPartyPanelProps {
  scroll: QuestScrollType
}

export default function QuestPartyPanel({ scroll }: QuestPartyPanelProps) {
  const assignees = scroll.assignees

  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Party
      </h4>
      {assignees.length === 0 ? (
        <p className="text-[0.7rem] text-[var(--parchment-dim)] opacity-60">
          No assignees
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {assignees.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-md border border-[var(--steel)] bg-[var(--stone-light)] px-2 py-1"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--night)] text-[0.45rem] font-bold text-[var(--parchment-dim)]">
                {name[0].toUpperCase()}
              </div>
              <span className="text-[0.65rem] font-medium text-[var(--parchment)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      )}
      {scroll.reviewer ? (
        <div className="mt-3 border-t border-[var(--steel)] pt-2">
          <span className="text-[0.6rem] text-[var(--parchment-dim)]">Reviewer: </span>
          <span className="text-[0.65rem] font-medium text-[var(--magic)]">{scroll.reviewer}</span>
        </div>
      ) : null}
    </div>
  )
}
