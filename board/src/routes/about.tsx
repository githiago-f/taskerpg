import { createFileRoute } from '@tanstack/react-router'
import BoardHeader from '../components/BoardHeader'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--night)]">
      <BoardHeader guildName="Code Weavers" boardName="About" avatarName="Adventurer" />
      <main className="mx-auto flex max-w-2xl flex-1 items-center px-4">
        <div className="animate-[fade-in_500ms_ease-out]">
          <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-[var(--parchment-dim)]">
            About
          </p>
          <h1 className="mb-4 text-3xl font-black tracking-tight text-[var(--parchment)]">
            Your adventure starts here.
          </h1>
          <p className="text-sm leading-relaxed text-[var(--parchment-dim)]">
            TaskeRPG turns your project management into a guild campaign.
            Organize quests, defeat bosses, and level up your team — one
            completed task at a time.
          </p>
        </div>
      </main>
    </div>
  )
}
