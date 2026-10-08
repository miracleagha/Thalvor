import { useEffect, useState } from 'react'

export default function Loader() {
  const [dots, setDots] = useState('')
  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? '' : d + '.')), 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
          <div className="size-16 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 size-16 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs font-bold text-primary">
            M.A
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Booting portfolio{dots}
        </div>
      </div>
    </div>
  )
}
