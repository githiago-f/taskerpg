import { useDroppable } from '@dnd-kit/core'
import { motion } from 'framer-motion'
import type { Lane } from '../types'
import LaneHeader from './LaneHeader'
import QuestScroll from './QuestScroll'

import type { QuestScroll as QuestScrollType } from '../types'

interface QuestLaneProps {
  lane: Lane
  onSelectScroll?: (scroll: QuestScrollType) => void
}

export default function QuestLane({ lane, onSelectScroll }: QuestLaneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: lane.id,
    data: { laneId: lane.id },
  })

  return (
    <div className="flex w-64 shrink-0 flex-col sm:w-72">
      <LaneHeader title={lane.title} count={lane.scrolls.length} />

      <motion.div
        ref={setNodeRef}
        animate={{
          borderColor: isOver
            ? 'rgba(74, 124, 255, 0.35)'
            : 'var(--line-strong)',
          backgroundColor: isOver
            ? 'rgba(74, 124, 255, 0.04)'
            : 'rgba(28, 32, 51, 0.3)',
        }}
        transition={{ duration: 0.15 }}
        className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto rounded-xl border p-2"
      >
        {lane.scrolls.map((scroll) => (
          <QuestScroll key={scroll.id} scroll={scroll} onSelect={onSelectScroll} />
        ))}
      </motion.div>
    </div>
  )
}
