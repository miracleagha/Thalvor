import { Briefcase, MapPin, Sparkles, CalendarDays } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I've been building
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-6"
          />

          <div className="space-y-8">
            {experience.map((e, i) => (
              <div key={`${e.company}-${i}`} className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-6 flex size-8 items-center justify-center rounded-full border border-primary/40 bg-card sm:left-2">
                  <Briefcase className="size-4 text-primary" />
                </div>

                <Card className="group transition hover:border-primary/40">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {e.role} <span className="text-muted-foreground">·</span>{' '}
                          <span className="text-primary">{e.company}</span>
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
                      <div className="flex flex-wrap gap-1.5">
                        {e.tags.map((t) => (
                          <Badge key={t} variant="outline" className="font-mono">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {e.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary/70"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {e.achievement && (
                      <div className="mt-5 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                        <p className="text-sm text-foreground/90">
                          <span className="font-semibold text-primary">Key impact — </span>
                          {e.achievement}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
