import { motion } from 'motion/react'
import { profile } from '@/data/roles'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

/**
 * Role-aware photo frame. Shape and glow vary per role so each role has a
 * distinct visual signature while sharing a common component.
 */
export default function ProfilePhoto({ role, size = 'lg', className }) {
  const theme = useTheme(role)
  const sizeClass = {
    sm: 'size-20',
    md: 'size-32',
    lg: 'size-72 sm:size-80',
    xl: 'size-80 sm:size-96',
  }[size]

  // Frame shape per role
  const frameShape = {
    tech: 'rounded-[2rem] [clip-path:polygon(14%_0,100%_0,100%_86%,86%_100%,0_100%,0_14%)]',
    notebook: 'rounded-[2rem]',
    warm: 'rounded-full',
    editorial: 'rounded-2xl',
  }[theme.heroStyle] ?? 'rounded-2xl'

  const ringShape = frameShape

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative isolate', className)}
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-6 -z-10 blur-3xl',
          theme.glow,
          frameShape,
        )}
      />

      {/* Decorative outer ring */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-2 -z-10 border',
          ringShape,
          theme.photoBorder,
        )}
      />

      <div
        className={cn(
          'relative overflow-hidden ring-2',
          sizeClass,
          frameShape,
          theme.photoRing,
          theme.photoShadow,
        )}
      >
        <img
          src={profile.photo}
          alt={`${profile.name} — ${role?.cardTitle ?? ''}`}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        {/* Soft gradient wash to blend with the role vibe */}
        <div
          aria-hidden
          className={cn('pointer-events-none absolute inset-0 mix-blend-overlay opacity-40 bg-gradient-to-br', theme.gradient)}
        />
      </div>

      {/* Role-specific flourishes */}
      {theme.heroStyle === 'tech' && (
        <>
          <span className="absolute -right-3 top-6 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-2 py-1 font-mono text-[10px] text-cyan-200 shadow-lg shadow-cyan-500/20">
            miracle@thalvor:~$
          </span>
          <span className="absolute -left-4 bottom-10 rounded-full border border-cyan-400/30 bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] text-cyan-200">
            200 OK
          </span>
        </>
      )}
      {theme.heroStyle === 'notebook' && (
        <>
          <span className="absolute -right-4 top-6 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-2 py-1 font-mono text-[10px] text-emerald-200 shadow-lg shadow-emerald-500/20">
            // lesson_01.py
          </span>
          <span className="absolute -left-4 bottom-10 rounded-full border border-emerald-400/30 bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] text-emerald-200">
            ✓ debugged
          </span>
        </>
      )}
      {theme.heroStyle === 'warm' && (
        <>
          <span className="absolute -right-3 top-4 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-200 shadow-lg shadow-amber-500/20">
            ☀ Hi there!
          </span>
          <span className="absolute -left-3 bottom-10 rounded-full border border-amber-400/30 bg-slate-950/80 px-2 py-0.5 text-[10px] text-amber-200">
            Available · Remote
          </span>
        </>
      )}
      {theme.heroStyle === 'editorial' && (
        <>
          <span className="absolute -right-3 top-6 rounded-md border border-violet-400/40 bg-violet-400/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-200 shadow-lg shadow-violet-500/20">
            Row 01 · Updated
          </span>
          <span className="absolute -left-4 bottom-10 rounded-full border border-violet-400/30 bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-200">
            Status · Ready
          </span>
        </>
      )}
    </motion.div>
  )
}
