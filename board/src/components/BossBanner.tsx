import { motion } from 'framer-motion'
import type { Boss } from '../types'

interface BossBannerProps {
  boss: Boss | null
}

export default function BossBanner({ boss }: BossBannerProps) {
  if (!boss || !boss.unlocked) {
    return (
      <section
        className="border-b border-[var(--line)] px-4 py-3"
        style={{ background: 'linear-gradient(180deg, var(--stone) 0%, transparent 100%)' }}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 opacity-40">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[var(--steel)] bg-[var(--stone)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-[var(--parchment-dim)]">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.55rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
              No Active Boss
            </span>
            <span className="text-[0.65rem] text-[var(--parchment-dim)]">
              Complete quests to summon a new challenge
            </span>
          </div>
        </div>
      </section>
    )
  }

  const hpPct = Math.max(0, Math.min(100, Math.round((boss.currentHp / boss.maxHp) * 100)))

  return (
    <motion.section
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="border-b border-[var(--line)] px-4 py-3"
      style={{
        background: 'linear-gradient(180deg, color-mix(in oklab, var(--stone) 90%, transparent) 0%, transparent 100%)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--gold)]/30 bg-[var(--stone)] shadow-[0_0_16px_rgba(245,158,11,0.1)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-[var(--gold)]">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-sm font-black tracking-tight text-[var(--parchment)]">
                {boss.name}
              </h2>
              <p className="text-[0.6rem] font-medium text-[var(--parchment-dim)]">
                {boss.subtitle}
              </p>
            </div>
            <span className="ml-auto text-[0.55rem] font-bold uppercase tracking-widest text-[var(--gold)]">
              {boss.campaign}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.5rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
                  HP
                </span>
                <span className="text-[0.6rem] font-bold tabular-nums text-[var(--parchment)]">
                  {boss.currentHp} / {boss.maxHp}
                </span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full border border-[var(--forest-glow)] bg-[rgba(34,197,94,0.08)]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${hpPct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-[var(--forest)]"
                  style={{
                    boxShadow: '0 0 6px var(--forest-glow), 0 0 12px var(--forest-glow)',
                    animation: 'hp-pulse 2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-md border border-[var(--gold)]/20 bg-[rgba(245,158,11,0.06)] px-2.5 py-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-[var(--gold)]">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span className="text-[0.55rem] font-bold uppercase tracking-wider text-[var(--gold-soft)]">
                {boss.reward}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
