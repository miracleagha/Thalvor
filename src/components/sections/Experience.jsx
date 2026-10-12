import { motion } from 'motion/react'
import { Briefcase, MapPin, Sparkles, CalendarDays } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealGroup } from '@/components/ui/reveal'
import { revealItem } from '@/lib/motion-variants'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

export default function Experience() {
  const role = useRole()
  const theme = useTheme(role)

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', theme.text)}>// Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where I've been building
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className={cn(
              'absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b via-border to-transparent sm:left-6',
              theme.heroStyle === 'tech' && 'from-cyan-400/60',
              theme.heroStyle === 'notebook' && 'from-emerald-400/60',
              theme.heroStyle === 'warm' && 'from-amber-400/60',
              theme.heroStyle === 'editorial' && 'from-violet-400/60',
            )}
          />

          <RevealGroup className="space-y-8">
            {role.experience.map((e, i) => (
              <motion.div key={`${e.company}-${i}`} variants={revealItem} className="relative pl-12 sm:pl-16">
                <div
                  className={cn(
                    'absolute left-0 top-6 flex size-8 items-center justify-center rounded-full border sm:left-2',
                    theme.timelineDot,
                  )}
                >
                  <Briefcase className="size-4" />
                </div>

                <Card className={cn('group transition-colors', theme.cardHoverBorder)}>
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {e.role} <span className="text-muted-foreground">·</span>{' '}
                          <span className={theme.text}>{e.company}</span>
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-3.5" /> {e.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" /> {e.period}
                          </span>
                        </div>
                      </div>
                      {e.tags && e.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {e.tags.map((t) => (
                            <Badge key={t} variant="outline" className="font-mono">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {e.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            aria-hidden
                            className={cn('mt-2 inline-block size-1.5 shrink-0 rounded-full', theme.text, 'bg-current opacity-80')}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {e.achievement && (
                      <div
                        className={cn(
                          'mt-5 flex items-start gap-3 rounded-lg border p-4',
                          theme.heroStyle === 'tech' && 'border-cyan-400/20 bg-cyan-400/5',
                          theme.heroStyle === 'notebook' && 'border-emerald-400/20 bg-emerald-400/5',
                          theme.heroStyle === 'warm' && 'border-amber-400/20 bg-amber-400/5',
                          theme.heroStyle === 'editorial' && 'border-violet-400/20 bg-violet-400/5',
                        )}
                      >
                        <Sparkles className={cn('mt-0.5 size-4 shrink-0', theme.text)} />
                        <p className="text-sm text-foreground/90">
                          <span className={cn('font-semibold', theme.text)}>Key impact — </span>
                          {e.achievement}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
