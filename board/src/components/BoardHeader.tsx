import { useState } from 'react'

interface BoardHeaderProps {
  guildName: string
  boardName: string
  avatarName: string
}

export default function BoardHeader({ guildName, boardName, avatarName }: BoardHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="relative z-40 flex h-11 items-center gap-3 border-b border-[var(--line)] px-4"
      style={{
        background: 'linear-gradient(180deg, var(--wood) 0%, var(--wood-light) 100%)',
      }}
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-7 w-7 items-center justify-center rounded border border-[var(--line-strong)] bg-[var(--stone)]/50 text-[var(--parchment-dim)] transition hover:bg-[var(--stone)] hover:text-[var(--parchment)]"
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex items-center gap-2 text-xs">
        <span className="font-semibold text-[var(--gold)]">{guildName}</span>
        <span className="text-[var(--parchment-dim)]">/</span>
        <span className="font-medium text-[var(--parchment)]">{boardName}</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          className="flex h-7 w-7 items-center justify-center rounded text-[var(--parchment-dim)] transition hover:bg-[var(--stone)]/50 hover:text-[var(--parchment)]"
          aria-label="Settings"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--steel)] bg-[var(--stone)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-[var(--parchment-dim)]">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
          <nav className="absolute left-2 top-full z-50 mt-1 min-w-40 rounded-lg border border-[var(--line-strong)] bg-[var(--stone)] p-1 shadow-2xl">
            <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--parchment-dim)] transition hover:bg-[var(--stone-light)] hover:text-[var(--parchment)]">
              Dashboard
            </button>
            <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--parchment-dim)] transition hover:bg-[var(--stone-light)] hover:text-[var(--parchment)]">
              Campaign Log
            </button>
            <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--parchment-dim)] transition hover:bg-[var(--stone-light)] hover:text-[var(--parchment)]">
              Settings
            </button>
          </nav>
        </>
      )}
    </header>
  )
}
