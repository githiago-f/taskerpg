import type { QuestScroll as QuestScrollType } from '../types'
import QuestPortrait from './QuestPortrait'
import QuestAttributes from './QuestAttributes'
import QuestScrollFooter from './QuestScrollFooter'

interface QuestPreviewProps {
  scroll: QuestScrollType
}

const pointsByPriority: Record<string, number> = {
  low: 1, medium: 3, high: 5, critical: 8,
}

const priorityBorder: Record<string, string> = {
  low: 'rgba(59,63,84,0.25)',
  medium: 'rgba(245,158,11,0.2)',
  high: 'rgba(74,124,255,0.2)',
  critical: 'rgba(239,68,68,0.25)',
}

export default function QuestPreview({ scroll }: QuestPreviewProps) {
  const border = priorityBorder[scroll.priority]

  return (
    <div
      className="rounded-[0.5rem] bg-[var(--paper-bg)] shadow-[0_16px_48px_rgba(74,124,255,0.12),0_4px_16px_rgba(0,0,0,0.3)]"
      style={{
        border: `1px solid ${border}`,
        clipPath: `polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)`,
      }}
    >
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          top: '-1px', left: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          top: '-1px', right: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          bottom: '-1px', left: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          bottom: '-1px', right: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />

      <QuestPortrait priority={scroll.priority} />

      <div className="px-4 pt-3">
        <h3 className="text-base font-black leading-tight text-[var(--parchment)]">
          {scroll.title}
        </h3>
        {scroll.description ? (
          <p className="mt-1.5 text-[0.7rem] leading-relaxed text-[var(--parchment-dim)]">
            {scroll.description}
          </p>
        ) : null}
      </div>

      <QuestAttributes
        xp={scroll.xp}
        hp={scroll.hp}
        estimate={scroll.estimate}
        loot={scroll.loot}
        combo={scroll.combo}
      />

      <div
        className="mx-4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      <div className="px-4 pb-3">
        <QuestScrollFooter
          assignees={scroll.assignees}
          points={pointsByPriority[scroll.priority]}
          priority={scroll.priority}
        />
      </div>
    </div>
  )
}
