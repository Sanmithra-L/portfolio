import { useEffect, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function AvatarWithEyes() {
  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const cursor = { x: e.clientX, y: e.clientY }

      const eyes = [leftEyeRef.current, rightEyeRef.current]
      const centers = [
        { x: rect.left + rect.width * 0.4, y: rect.top + rect.height * 0.4 },
        { x: rect.left + rect.width * 0.6, y: rect.top + rect.height * 0.4 },
      ]

      eyes.forEach((eyeEl, idx) => {
        if (!eyeEl) return
        const center = centers[idx]
        const dx = cursor.x - center.x
        const dy = cursor.y - center.y
        const angle = Math.atan2(dy, dx)
        const radius = 6
        const offsetX = clamp(Math.cos(angle) * radius, -radius, radius)
        const offsetY = clamp(Math.sin(angle) * radius, -radius, radius)
        eyeEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-48 w-48 rounded-3xl bg-slate-900/90 shadow-[0_0_60px_rgba(56,189,248,0.4)] ring-1 ring-slate-800/90 md:h-56 md:w-56"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-400/60 via-purple-500/60 to-teal-400/60 opacity-60 blur-3xl" />

      {/* Doodle-style portrait container */}
      <div className="flex h-full flex-col items-center justify-center">
        {/* Hair, closer to face outline */}
        <div className="relative mb-1 h-14 w-22">
          <div className="absolute inset-x-1 top-0 h-9 rounded-t-[2.3rem] bg-slate-800" />
          <div className="absolute inset-x-3 top-3 h-8 rounded-t-[2.1rem] bg-slate-900" />
        </div>

        {/* Head with slightly stronger jawline */}
        <div className="relative flex h-20 w-24 items-center justify-center">
          <div className="h-20 w-24 rounded-[1.6rem] bg-slate-800" />

          {/* Eyes row */}
          <div className="absolute top-7 flex w-full items-center justify-center gap-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 shadow-inner shadow-slate-950/70">
              <div
                ref={leftEyeRef}
                className="h-3 w-3 rounded-full bg-slate-100 shadow-[0_0_8px_rgba(248,250,252,0.4)] transition-transform duration-75 will-change-transform"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 shadow-inner shadow-slate-950/70">
              <div
                ref={rightEyeRef}
                className="h-3 w-3 rounded-full bg-slate-100 shadow-[0_0_8px_rgba(248,250,252,0.4)] transition-transform duration-75 will-change-transform"
              />
            </div>
          </div>

          {/* Neutral mouth */}
          <div className="absolute bottom-4 h-[3px] w-9 rounded-full bg-slate-600" />
        </div>

        {/* Neck, slightly broader */}
        <div className="mt-1 h-4 w-10 rounded-b-md bg-slate-700" />

        {/* Shirt and shoulders */}
        <div className="mt-1 h-11 w-32 rounded-t-3xl bg-slate-700/95">
          <div className="flex h-full items-start justify-center gap-3 px-4 pt-1 text-[8px] text-slate-300/70">
            <span className="h-4 w-9 rounded-b-xl border border-slate-600/70 bg-slate-800/80" />
            <span className="h-4 w-9 rounded-b-xl border border-slate-600/70 bg-slate-800/80" />
          </div>
        </div>
      </div>
    </div>
  )
}
