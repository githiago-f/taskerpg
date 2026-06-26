import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors, type DragEndEvent, type DragStartEvent } from '@dnd-kit/core'
import { useState, useCallback } from 'react'
import type { Lane, QuestScroll as QuestScrollType } from '../types'
import QuestLane from './QuestLane'

interface QuestBoardProps {
  lanes: Lane[]
  onMoveScroll: (
    scrollId: string,
    sourceLaneId: string,
    destLaneId: string,
    destIndex: number,
    sourceIndex: number,
  ) => void
  onSelectScroll?: (scroll: QuestScrollType) => void
}

export default function QuestBoard({ lanes, onMoveScroll, onSelectScroll }: QuestBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(String(event.active.id))
  }, [])

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveId(null)

      const { active, over } = event
      if (!over) return

      const activeId = String(active.id)
      const overId = String(over.id)

      const activeLane = lanes.find((l) =>
        l.scrolls.some((s) => s.id === activeId),
      )
      const destLane = lanes.find((l) => l.id === overId)
      const destLaneViaScroll = lanes.find((l) =>
        l.scrolls.some((s) => s.id === overId),
      )

      const targetLaneId = destLane?.id ?? destLaneViaScroll?.id
      if (!activeLane || !targetLaneId) return

      const destScrollIndex = (() => {
        const targetLane = lanes.find((l) => l.id === targetLaneId)
        if (!targetLane) return 0
        const overScrollIndex = targetLane.scrolls.findIndex(
          (s) => s.id === overId,
        )
        if (overScrollIndex >= 0) return overScrollIndex
        return targetLane.scrolls.length
      })()

      const sourceScrollIndex = activeLane.scrolls.findIndex(
        (s) => s.id === activeId,
      )

      onMoveScroll(activeId, activeLane.id, targetLaneId, destScrollIndex, sourceScrollIndex)
    },
    [lanes, onMoveScroll],
  )

  const activeScroll =
    lanes.flatMap((l) => l.scrolls).find((s) => s.id === activeId) ?? null

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-0 flex-1 gap-4 overflow-x-auto px-6 pb-6">
        {lanes.map((lane) => (
          <QuestLane key={lane.id} lane={lane} onSelectScroll={onSelectScroll} />
        ))}
      </div>
      <DragOverlay>
        {activeScroll ? (
          <div className="w-64 sm:w-72">
            <QuestScrollOverlay scroll={activeScroll} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

const priorityBorderOverlay: Record<string, string> = {
  low: 'rgba(59,63,84,0.25)',
  medium: 'rgba(245,158,11,0.2)',
  high: 'rgba(74,124,255,0.2)',
  critical: 'rgba(239,68,68,0.25)',
}

const priorityGlowOverlay: Record<string, string> = {
  low: 'rgba(59,63,84,0.15)',
  medium: 'rgba(245,158,11,0.2)',
  high: 'rgba(74,124,255,0.25)',
  critical: 'rgba(239,68,68,0.3)',
}

function QuestScrollOverlay({ scroll }: { scroll: QuestScrollType }) {
  const border = priorityBorderOverlay[scroll.priority]
  const glow = priorityGlowOverlay[scroll.priority]
  const pointsByPriority: Record<string, number> = {
    low: 1, medium: 3, high: 5, critical: 8,
  }

  return (
    <div
      className="rounded-[0.5rem] bg-[var(--paper-bg)] shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
      style={{
        transform: 'rotate(-4deg) scale(1.06)',
        border: `1px solid ${border}`,
        boxShadow: `0 16px 48px ${glow}, 0 4px 16px rgba(0,0,0,0.4)`,
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

      <div
        className="flex h-16 items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, color-mix(in oklab, var(--stone-light) 60%, transparent), color-mix(in oklab, var(--night) 80%, transparent))',
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center">
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

      <div className="px-3 pt-2.5">
        <h3 className="text-sm font-black leading-tight text-[var(--parchment)]">
          {scroll.title}
        </h3>
      </div>

      <div className="flex items-center justify-center gap-3 py-2">
        <span className="flex items-center text-xs text-[var(--parchment-dim)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </span>
        <span className="flex items-center text-xs text-[var(--forest)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-2 w-2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <span className="flex items-center text-xs text-[var(--parchment-dim)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <span className="flex items-center text-xs text-[var(--gold-soft)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-2.5 w-2.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </span>
      </div>

      <div className="mx-3 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="flex items-center gap-1.5 px-3 pb-2.5 pt-2">
        <div className="flex -space-x-1">
          {scroll.assignees.slice(0, 3).map((name, i) => (
            <div
              key={i}
              className="flex h-4 w-4 items-center justify-center rounded-full border border-[var(--steel)] bg-[var(--night)] text-[0.4rem] font-bold text-[var(--parchment-dim)]"
            >
              {name[0].toUpperCase()}
            </div>
          ))}
        </div>
        <span className="ml-auto text-[0.5rem] font-bold text-[var(--parchment-dim)]">
          {pointsByPriority[scroll.priority]} pts
        </span>
        <span className="flex h-3.5 min-w-3.5 items-center justify-center rounded-[2px] text-[0.4rem] font-bold leading-none text-[var(--parchment-dim)]">
          {scroll.priority === 'critical' ? 'S' : scroll.priority === 'high' ? 'C' : scroll.priority === 'medium' ? 'D' : 'F'}
        </span>
      </div>
    </div>
  )
}
