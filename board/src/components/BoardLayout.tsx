import type { ReactNode } from 'react'

interface BoardLayoutProps {
  header: ReactNode
  bossArea: ReactNode
  board: ReactNode
  hud: ReactNode
}

export default function BoardLayout({ header, bossArea, board, hud }: BoardLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[var(--night)]">
      {header}
      {bossArea}
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 flex-col pt-5">
          {board}
        </div>
        {hud}
      </div>
    </div>
  )
}
