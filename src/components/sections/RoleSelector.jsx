import { useMemo } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GithubIcon, WhatsappIcon } from '@/components/ui/icons'
import DynamicIcon from '@/components/ui/dynamic-icon'
import { useRoleContext } from '@/contexts/role-context'
import { profile } from '@/data/roles'
import { getTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

function RoleCard({ role, onSelect, index }) {
  const theme = getTheme(role.accent)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        className={cn(
          'group relative h-full overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-500',
          'hover:-translate-y-1 hover:bg-card/70',
          theme.cardHoverBorder,
        )}
      >
        {/* Soft glow */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80',
            theme.gradient,
          )}
        />

        <CardContent className="relative flex h-full flex-col gap-5 p-7">
          <div className="flex items-start justify-between">
            <div
              className={cn(
                'flex size-12 items-center justify-center rounded-xl ring-1 transition-transform duration-500 group-hover:scale-110',
                theme.pillarIcon,
              )}
            >
              <DynamicIcon name={role.icon} className="size-6" />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Enter</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground">
              {role.cardTitle}
            </h3>
            <p className={cn('mt-1.5 font-mono text-xs uppercase tracking-[0.14em]', theme.textSoft)}>
              {role.cardSubtitle}
            </p>
          </div>

          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            {role.cardDescription}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {role.cardChips.map((chip) => (
              <span
                key={chip}
                className={cn(
                  'rounded-full px-2.5 py-0.5 font-mono text-[11px] ring-1 transition-colors',
                  theme.chip,
                )}
              >
                {chip}
              </span>
            ))}
          </div>

          <Button
            onClick={() => onSelect(role.id)}
            variant="secondary"
            className="mt-2 w-full border-border/60 bg-background/50 backdrop-blur hover:bg-background/80"
            aria-label={`Open portfolio as ${role.cardTitle}`}
          >
            Explore as {role.cardTitle} <ArrowRight className="size-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function RoleSelector() {
  const { roles, selectRole } = useRoleContext()
  const hour = useMemo(() => new Date().getHours(), [])
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="relative min-h-screen overflow-hidden bg-[oklch(0.14_0.012_265)]">
      {/* Calm backdrop: soft radial washes + floating orbs + noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(900px 500px at 20% 10%, oklch(0.30 0.09 240 / 0.35), transparent 60%), radial-gradient(700px 400px at 85% 85%, oklch(0.30 0.09 170 / 0.25), transparent 60%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise-bg opacity-30" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[18%] size-72 rounded-full bg-sky-400/15 blur-3xl animate-drift-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[8%] size-64 rounded-full bg-violet-400/15 blur-3xl animate-drift-rev"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[40%] bottom-[6%] size-80 rounded-full bg-emerald-400/12 blur-3xl animate-drift"
      />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Top bar */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <span className="font-mono text-sm font-bold text-primary">M</span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-foreground/90">
              miracle<span className="text-primary">.agha</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="size-4" />
            </a>
          </div>
        </motion.header>

        {/* Hero + photo */}
        <section className="mt-14 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="inline-flex size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
              Welcome · {greeting}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Hi — I'm <span className="text-gradient italic">Miracle</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              It's really nice to have you here. I work across a few different roles —
              take a breath, and pick the one you're hiring for. I'll show you the
              version of me that matters.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary/80"
            >
              <Sparkles className="size-3.5" /> Select a role to continue
            </motion.p>
          </div>

          {/* Welcome photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto lg:ml-auto"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-sky-400/20 blur-3xl animate-slow-pulse"
            />
            <div className="relative size-56 overflow-hidden rounded-full ring-1 ring-border/60 shadow-2xl shadow-black/40 sm:size-64">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                draggable={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-background/10 mix-blend-overlay"
              />
            </div>
            {/* Soft rotating ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-border/50"
            />
          </motion.div>
        </section>

        {/* Role grid */}
        <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {roles.map((role, i) => (
            <RoleCard key={role.id} role={role} onSelect={selectRole} index={i} />
          ))}
        </section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-auto pt-16 text-center text-xs text-muted-foreground/70"
        >
          Your choice persists until you switch roles · Switch any time from the top-right of the portfolio.
        </motion.footer>
      </main>
    </div>
  )
}
