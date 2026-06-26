import type { QuestScroll as QuestScrollType } from '../types'

interface QuestObjectivesPanelProps {
  scroll: QuestScrollType
}

export default function QuestObjectivesPanel({ scroll }: QuestObjectivesPanelProps) {
  const objectives = scroll.objectives ?? []

  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Objectives
      </h4>
      {objectives.length === 0 ? (
        <p className="text-[0.7rem] text-[var(--parchment-dim)] opacity-60">
          No objectives listed
        </p>
      ) : (
        <ul className="space-y-1.5">
          {objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={`mt-[2px] h-3.5 w-3.5 shrink-0 rounded-sm border ${
                  obj.done
                    ? 'border-[var(--forest)] bg-[var(--forest)]'
                    : 'border-[var(--steel)]'
                }`}
              >
                {obj.done && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0b0e17" strokeWidth="3" className="h-full w-full">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span
                className={`text-[0.7rem] leading-snug ${
                  obj.done
                    ? 'text-[var(--parchment-dim)] line-through opacity-60'
                    : 'text-[var(--parchment)]'
                }`}
              >
                {obj.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
