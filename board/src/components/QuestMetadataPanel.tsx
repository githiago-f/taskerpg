import type { QuestScroll as QuestScrollType } from '../types'

interface QuestMetadataPanelProps {
  scroll: QuestScrollType
}

export default function QuestMetadataPanel({ scroll }: QuestMetadataPanelProps) {
  const priorityLabel: Record<string, string> = {
    low: 'F-Rank',
    medium: 'D-Rank',
    high: 'C-Rank',
    critical: 'S-Rank',
  }

  const priorityColor: Record<string, string> = {
    low: 'var(--parchment-dim)',
    medium: 'var(--gold)',
    high: 'var(--magic)',
    critical: 'var(--boss-red)',
  }

  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Details
      </h4>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] text-[var(--parchment-dim)]">Rank</span>
          <span
            className="text-[0.7rem] font-bold"
            style={{ color: priorityColor[scroll.priority] }}
          >
            {priorityLabel[scroll.priority]}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] text-[var(--parchment-dim)]">Estimate</span>
          <span className="text-[0.7rem] text-[var(--parchment)]">{scroll.estimate}</span>
        </div>
        {scroll.guild ? (
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] text-[var(--parchment-dim)]">Guild</span>
            <span className="text-[0.7rem] text-[var(--magic)]">{scroll.guild}</span>
          </div>
        ) : null}
        {scroll.dependencies && scroll.dependencies.length > 0 ? (
          <div className="border-t border-[var(--steel)] pt-2">
            <span className="text-[0.6rem] text-[var(--parchment-dim)]">Dependencies</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {scroll.dependencies.map((dep, i) => (
                <span
                  key={i}
                  className="rounded bg-[var(--night)] px-1.5 py-0.5 text-[0.55rem] text-[var(--parchment-dim)]"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {scroll.links && scroll.links.length > 0 ? (
          <div className="border-t border-[var(--steel)] pt-2">
            <span className="text-[0.6rem] text-[var(--parchment-dim)]">Links</span>
            <div className="mt-1 space-y-0.5">
              {scroll.links.map((link, i) => (
                <div key={i} className="text-[0.6rem] text-[var(--magic)] underline">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
