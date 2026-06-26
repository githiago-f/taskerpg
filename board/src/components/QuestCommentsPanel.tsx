import type { QuestScroll as QuestScrollType } from '../types'

interface QuestCommentsPanelProps {
  scroll: QuestScrollType
}

export default function QuestCommentsPanel({ scroll }: QuestCommentsPanelProps) {
  const comments = scroll.comments ?? []

  return (
    <div className="rounded-xl border border-[var(--steel)] bg-[var(--stone)] p-4">
      <h4 className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--parchment-dim)]">
        Comments
      </h4>
      {comments.length === 0 ? (
        <p className="text-[0.7rem] text-[var(--parchment-dim)] opacity-60">
          No comments yet
        </p>
      ) : (
        <div className="space-y-3">
          {comments.map((comment, i) => (
            <div key={i} className="rounded-lg bg-[var(--night)] p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[0.6rem] font-bold text-[var(--magic)]">
                  {comment.author}
                </span>
                <span className="text-[0.5rem] text-[var(--parchment-dim)]">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-[0.7rem] leading-snug text-[var(--parchment)]">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
