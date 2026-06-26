import { useState, useRef, useEffect, type ReactNode } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!show) return
    const handle = setTimeout(() => setShow(false), 3000)
    return () => clearTimeout(handle)
  }, [show])

  return (
    <div ref={ref} className="relative inline-flex">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        {children}
      </div>
      {show && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2">
          <div className="whitespace-nowrap rounded-md border border-[var(--line-strong)] bg-[var(--paper-strong)] px-2.5 py-1.5 text-[0.7rem] font-medium text-[var(--parchment)] shadow-lg backdrop-blur-sm">
            {content}
          </div>
          <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[var(--line-strong)]" />
        </div>
      )}
    </div>
  )
}
