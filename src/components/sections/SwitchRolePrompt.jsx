import { ArrowRight, Repeat, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DynamicIcon from '@/components/ui/dynamic-icon'
import { Reveal } from '@/components/ui/reveal'
import { useRoleContext } from '@/contexts/role-context'
import { getTheme, useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

/**
 * Lets a visitor hop to a different role without going back through the welcome
 * screen. Comes in two shapes: a small inline "nudge" (compact) and a full
 * section card with the other roles pre-listed (full).
 */
export default function SwitchRolePrompt({ variant = 'compact' }) {
  const { role, roles, selectRole, clearRole } = useRoleContext()
  const theme = useTheme(role)

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={clearRole}
        className={cn(
          'group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors',
          'hover:border-border hover:bg-card/80 hover:text-foreground',
        )}
      >
        <Repeat className={cn('size-3.5 transition-transform duration-300 group-hover:rotate-180', theme.text)} />
        <span>Not the role you're looking for?</span>
        <span className={cn('inline-flex items-center gap-1 font-medium', theme.text)}>
          Switch roles
          <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </button>
    )
  }

  // Full card: show every OTHER role as a mini chip-card.
  const others = roles.filter((r) => r.id !== role.id)

  return (
    <section id="switch-role" className="relative py-20 sm:py-24">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-1/2 top-10 -z-10 size-[520px] -translate-x-1/2 rounded-full blur-3xl',
          theme.glowSoft,
        )}
      />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            <div
              aria-hidden
              className={cn(
                'pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br opacity-50 blur-3xl',
                theme.gradient,
              )}
            />
            <div
              aria-hidden
              className={cn(
                'pointer-events-none absolute -left-24 -bottom-24 size-72 rounded-full bg-gradient-to-br opacity-30 blur-3xl',
                theme.gradient,
              )}
            />

            <CardContent className="relative p-8 sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <p className={cn('inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.22em]', theme.text)}>
                  <Sparkles className="size-3.5" />
                  // Still browsing?
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                  Not the role you're looking for?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I wear a few different hats. Pick a different one and the whole site reshapes to show the version of me that fits.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {others.map((r) => {
                  const t = getTheme(r.accent)
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRole(r.id)}
                      className={cn(
                        'group relative overflow-hidden rounded-xl border border-border/50 bg-background/40 p-4 text-left transition-all duration-300',
                        'hover:-translate-y-0.5 hover:bg-background/70',
                        t.cardHoverBorder,
                      )}
                    >
                      <div
                        aria-hidden
                        className={cn(
                          'pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity duration-300 group-hover:opacity-80',
                          t.gradient,
                        )}
                      />
                      <div className="relative flex items-start gap-3">
                        <div
                          className={cn(
                            'flex size-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-transform duration-300 group-hover:scale-110',
                            t.pillarIcon,
                          )}
                        >
                          <DynamicIcon name={r.icon} className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-foreground">{r.cardTitle}</div>
                          <div className="truncate text-xs text-muted-foreground">
                            {r.cardSubtitle}
                          </div>
                        </div>
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="ghost" onClick={clearRole}>
                  <Repeat className="size-4" /> Browse all roles
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
