import { useDraggable } from '@dnd-kit/core'
import { motion } from 'framer-motion'
import type { QuestScroll as QuestScrollType } from '../types'
import QuestPortrait from './QuestPortrait'
import QuestAttributes from './QuestAttributes'
import QuestScrollFooter from './QuestScrollFooter'

interface QuestScrollProps {
  scroll: QuestScrollType
  onSelect?: (scroll: QuestScrollType) => void
}

const pointsByPriority: Record<string, number> = {
  low: 1,
  medium: 3,
  high: 5,
  critical: 8,
}

const priorityGlow: Record<string, string> = {
  low: 'rgba(59,63,84,0.15)',
  medium: 'rgba(245,158,11,0.2)',
  high: 'rgba(74,124,255,0.25)',
  critical: 'rgba(239,68,68,0.3)',
}

const priorityBorder: Record<string, string> = {
  low: 'rgba(59,63,84,0.25)',
  medium: 'rgba(245,158,11,0.2)',
  high: 'rgba(74,124,255,0.2)',
  critical: 'rgba(239,68,68,0.25)',
}

export default function QuestScroll({ scroll, onSelect }: QuestScrollProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: scroll.id,
      data: { lane: scroll.id, priority: scroll.priority },
    })

  const glow = priorityGlow[scroll.priority]
  const border = priorityBorder[scroll.priority]

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(-4deg) scale(1.06)`,
        zIndex: 50,
        boxShadow: `0 16px 48px ${glow}, 0 4px 16px rgba(0,0,0,0.4)`,
      }
    : undefined

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: isDragging ? 0.92 : 1,
        scale: isDragging ? 1.06 : 1,
      }}
      whileHover={{ y: -3, boxShadow: `0 8px 24px ${glow}` }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={() => onSelect?.(scroll)}
      className="group cursor-grab rounded-[0.5rem] active:cursor-grabbing"
      style={{
        background: `linear-gradient(165deg, var(--paper-bg), color-mix(in oklab, var(--night) 70%, var(--paper-bg)))`,
        boxShadow: `0 1px 0 rgba(255,255,255,0.03) inset, 0 2px 4px rgba(0,0,0,0.2)`,
        border: `1px solid ${border}`,
        clipPath: `polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)`,
        ...dragStyle,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[0.35rem]"
        style={{
          margin: '3px',
          border: `1px solid rgba(255,255,255,0.04)`,
        }}
      />

      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          top: '-1px',
          left: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          top: '-1px',
          right: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          bottom: '-1px',
          left: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rotate-45"
        style={{
          bottom: '-1px',
          right: '-1px',
          border: '1px solid var(--steel)',
          backgroundColor: 'var(--stone-light)',
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-6 -translate-x-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--steel), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--steel), transparent)',
        }}
      />

      <QuestPortrait priority={scroll.priority} />

      <div className="px-3 pt-2.5">
        <h3 className="text-sm font-black leading-tight text-[var(--parchment)]">
          {scroll.title}
        </h3>
        {scroll.description ? (
          <p className="mt-1 line-clamp-2 text-[0.6rem] leading-relaxed text-[var(--parchment-dim)] opacity-60">
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
        className="mx-3 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />

      <QuestScrollFooter
        assignees={scroll.assignees}
        points={pointsByPriority[scroll.priority]}
        priority={scroll.priority}
      />
    </motion.div>
  )
}
