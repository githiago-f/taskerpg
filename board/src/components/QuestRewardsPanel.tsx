import type { QuestScroll as QuestScrollType } from '../types'

interface QuestRewardsPanelProps {
  scroll: QuestScrollType
}

export default function QuestRewardsPanel({ scroll }: QuestRewardsPanelProps) {
  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Rewards
      </h4>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-[var(--parchment-dim)]">Experience</span>
          <span className="text-[0.75rem] font-bold text-[var(--magic)]">+{scroll.xp} XP</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-[var(--parchment-dim)]">HP Reward</span>
          <span className="text-[0.75rem] font-bold text-[var(--forest)]">+{scroll.hp} HP</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-[var(--parchment-dim)]">Loot</span>
          <span className="text-[0.75rem] font-bold text-[var(--gold)]">{scroll.loot}</span>
        </div>
        {scroll.combo ? (
          <div className="flex items-center justify-between">
            <span className="text-[0.7rem] text-[var(--parchment-dim)]">Combo</span>
            <span className="text-[0.75rem] font-bold text-[var(--boss-red)]">x{scroll.combo}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
