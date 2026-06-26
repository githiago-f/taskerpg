import type { QuestScroll as QuestScrollType } from '../types'

interface QuestHistoryPanelProps {
  scroll: QuestScrollType
}

export default function QuestHistoryPanel({ scroll }: QuestHistoryPanelProps) {
  const history = scroll.history ?? []

  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Activity
      </h4>
      {history.length === 0 ? (
        <p className="text-[0.7rem] text-[var(--parchment-dim)] opacity-60">
          No activity yet
        </p>
      ) : (
        <div className="relative space-y-3">
          <div
            className="absolute left-[5px] top-2 h-[calc(100%-16px)] w-px"
            style={{ background: 'linear-gradient(180deg, var(--steel), transparent)' }}
          />
          {history.map((event, i) => (
            <div key={i} className="relative flex items-start gap-2.5 pl-4">
              <div
                className="absolute left-0 top-[5px] h-2.5 w-2.5 rounded-full border border-[var(--magic)]"
                style={{ backgroundColor: 'var(--stone)' }}
              />
              <div>
                <p className="text-[0.65rem] leading-snug text-[var(--parchment)]">
                  {event.event}
                </p>
                <span className="text-[0.55rem] text-[var(--parchment-dim)]">
                  {event.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
