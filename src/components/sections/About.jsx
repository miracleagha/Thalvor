import { Card, CardContent } from '@/components/ui/card'
import DynamicIcon from '@/components/ui/dynamic-icon'
import { Reveal, RevealGroup } from '@/components/ui/reveal'
import { revealItem } from '@/lib/motion-variants'
import { motion } from 'motion/react'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

export default function About() {
  const role = useRole()
  const theme = useTheme(role)

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-0 top-20 -z-10 size-[520px] rounded-full blur-3xl',
          theme.glowSoft,
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', theme.text)}>// About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {role.cardTitle}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{role.cardDescription}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal delay={0.08} className="lg:col-span-3">
            <Card className={cn('h-full transition-colors', theme.cardHoverBorder)}>
              <CardContent className="space-y-4 p-6 sm:p-8 text-base leading-relaxed text-muted-foreground">
                <p>{role.summary}</p>
                {role.focus && <p>{role.focus}</p>}
              </CardContent>
            </Card>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2">
            {role.stats.map((s) => (
              <motion.div key={s.label} variants={revealItem}>
                <Card className="relative h-full overflow-hidden">
                  <div
                    aria-hidden
                    className={cn('pointer-events-none absolute -right-10 -top-10 size-28 rounded-full blur-2xl', theme.glow)}
                  />
                  <CardContent className="p-5">
                    <div className="font-mono text-3xl font-bold text-gradient">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {role.pillars.map((p) => (
            <motion.div key={p.title} variants={revealItem}>
              <Card className={cn('group h-full transition-all duration-300 hover:-translate-y-0.5', theme.cardHoverBorder)}>
                <CardContent className="flex items-start gap-4 p-5">
                  <div
                    className={cn(
                      'flex size-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300',
                      theme.pillarIcon,
                      theme.pillarIconGlow,
                    )}
                  >
                    <DynamicIcon name={p.icon} className="size-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{p.title}</div>
                    <div className="text-sm text-muted-foreground">{p.desc}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
