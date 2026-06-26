import type { ReactNode } from 'react'

interface QuestInspectionLayoutProps {
  questPreview: ReactNode
  objectives: ReactNode
  rewards: ReactNode
  party: ReactNode
  history: ReactNode
  comments: ReactNode
  metadata: ReactNode
}

export default function QuestInspectionLayout({
  questPreview,
  objectives,
  rewards,
  party,
  history,
  comments,
  metadata,
}: QuestInspectionLayoutProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-sm">{questPreview}</div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="animate-[fade-in_500ms_ease-out_200ms_both]">{objectives}</div>
        <div className="animate-[fade-in_500ms_ease-out_300ms_both]">{rewards}</div>
        <div className="animate-[fade-in_500ms_ease-out_400ms_both]">{party}</div>
        <div className="animate-[fade-in_500ms_ease-out_400ms_both]">{history}</div>
        <div className="animate-[fade-in_500ms_ease-out_500ms_both] md:col-span-2">{comments}</div>
        <div className="animate-[fade-in_500ms_ease-out_500ms_both]">{metadata}</div>
      </div>
    </div>
  )
}
