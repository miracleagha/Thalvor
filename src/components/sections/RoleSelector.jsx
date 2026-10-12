import { useMemo } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/icons'
import DynamicIcon from '@/components/ui/dynamic-icon'
import { useRoleContext } from '@/contexts/role-context'
import { profile } from '@/data/roles'
import { cn } from '@/lib/utils'

const ACCENT = {
  cyan: {
    chip: 'bg-cyan-400/15 text-cyan-200 ring-cyan-400/30',
    glow: 'from-cyan-400/40 via-sky-500/20 to-transparent',
    icon: 'bg-cyan-400/15 text-cyan-200 ring-cyan-400/30',
    border: 'hover:border-cyan-400/50',
  },
  emerald: {
    chip: 'bg-emerald-400/15 text-emerald-200 ring-emerald-400/30',
    glow: 'from-emerald-400/40 via-teal-500/20 to-transparent',
    icon: 'bg-emerald-400/15 text-emerald-200 ring-emerald-400/30',
    border: 'hover:border-emerald-400/50',
  },
  amber: {
    chip: 'bg-amber-400/15 text-amber-200 ring-amber-400/30',
    glow: 'from-amber-400/40 via-orange-500/20 to-transparent',
    icon: 'bg-amber-400/15 text-amber-200 ring-amber-400/30',
    border: 'hover:border-amber-400/50',
  },
  violet: {
    chip: 'bg-violet-400/15 text-violet-200 ring-violet-400/30',
    glow: 'from-violet-400/40 via-fuchsia-500/20 to-transparent',
    icon: 'bg-violet-400/15 text-violet-200 ring-violet-400/30',
    border: 'hover:border-violet-400/50',
  },
}

function RoleCard({ role, onSelect, index }) {
  const theme = ACCENT[role.accent] ?? ACCENT.cyan

  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30',
        theme.border,
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100',
          theme.glow,
        )}
      />

      <CardContent className="relative flex h-full flex-col gap-5 p-6">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'flex size-12 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110',
              theme.icon,
            )}
          >
            <DynamicIcon name={role.icon} className="size-6" />
          </div>
          <ArrowRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {role.cardTitle}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {role.cardSubtitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {role.cardDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {role.cardChips.map((chip) => (
            <span
              key={chip}
              className={cn(
                'rounded-full px-2.5 py-0.5 font-mono text-[11px] ring-1',
                theme.chip,
              )}
            >
              {chip}
            </span>
          ))}
        </div>

        <Button
          onClick={() => onSelect(role.id)}
          className="mt-2 w-full"
          aria-label={`Open portfolio as ${role.cardTitle}`}
        >
          Select {role.cardTitle} <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function RoleSelector() {
  const { roles, selectRole } = useRoleContext()
  const hour = useMemo(() => new Date().getHours(), [])
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 size-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-10 -z-10 size-[380px] rounded-full bg-emerald-400/10 blur-3xl"
      />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <span className="font-mono text-sm font-bold text-primary">M</span>
            </span>
            <span className="text-sm font-semibold tracking-wide">
              miracle<span className="text-primary">.agha</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </header>

        {/* Hero copy */}
        <section className="mt-16 sm:mt-20">
          <Badge variant="success" className="mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Welcome · Available for new opportunities
          </Badge>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {greeting} — I'm <span className="text-gradient">Miracle</span>.
          </h1>
          <h2 className="mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            It's really nice to have you here. I work across a few different roles —
            pick the one you're hiring for and I'll show you the version of me that matters.
          </h2>

          <p className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" /> Select a role to continue
          </p>
        </section>

        {/* Role grid */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {roles.map((role, i) => (
            <RoleCard key={role.id} role={role} onSelect={selectRole} index={i} />
          ))}
        </section>

        <footer className="mt-auto pt-16 text-center text-xs text-muted-foreground/80">
          You can switch roles any time from the top-right of the portfolio.
        </footer>
      </main>
    </div>
  )
}
