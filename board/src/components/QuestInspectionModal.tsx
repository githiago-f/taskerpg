import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { QuestScroll as QuestScrollType } from '../types'
import QuestInspectionLayout from './QuestInspectionLayout'
import QuestPreview from './QuestPreview'
import QuestObjectivesPanel from './QuestObjectivesPanel'
import QuestRewardsPanel from './QuestRewardsPanel'
import QuestPartyPanel from './QuestPartyPanel'
import QuestHistoryPanel from './QuestHistoryPanel'
import QuestCommentsPanel from './QuestCommentsPanel'
import QuestMetadataPanel from './QuestMetadataPanel'

interface QuestInspectionModalProps {
  scroll: QuestScrollType | null
  onClose: () => void
}

export default function QuestInspectionModal({ scroll, onClose }: QuestInspectionModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (scroll) {
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }
  }, [scroll, onClose])

  return (
    <AnimatePresence>
      {scroll ? (
        <motion.div
          key="inspection-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
          style={{
            background: 'rgba(11, 14, 23, 0.85)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={onClose}
        >
          <motion.div
            key="inspection-card"
            initial={{ opacity: 0, scale: 0.35, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.35, rotate: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative m-auto w-full max-w-5xl p-4"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--steel)] bg-[var(--stone)] text-[var(--parchment-dim)] transition-colors hover:border-[var(--parchment-dim)] hover:text-[var(--parchment)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <QuestInspectionLayout
              questPreview={
                <QuestPreview scroll={scroll} />
              }
              objectives={<QuestObjectivesPanel scroll={scroll} />}
              rewards={<QuestRewardsPanel scroll={scroll} />}
              party={<QuestPartyPanel scroll={scroll} />}
              history={<QuestHistoryPanel scroll={scroll} />}
              comments={<QuestCommentsPanel scroll={scroll} />}
              metadata={<QuestMetadataPanel scroll={scroll} />}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
