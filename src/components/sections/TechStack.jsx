import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Reveal, RevealGroup } from '@/components/ui/reveal'
import { revealItem } from '@/lib/motion-variants'
import { motion } from 'motion/react'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

export default function TechStack() {
  const role = useRole()
  const theme = useTheme(role)

  return (
    <section id="stack" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', theme.text)}>
              // {role.stackEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {role.stackHeading}
            </h2>
            {role.stackBody && <p className="mt-4 text-muted-foreground">{role.stackBody}</p>}
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {role.stack.map((group) => (
            <motion.div key={group.title} variants={revealItem}>
              <Card className={cn('h-full transition-colors', theme.cardHoverBorder)}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground">
                    <span className={cn('inline-block size-1.5 rounded-full', theme.text, 'bg-current')} />
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        'rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-foreground/90 transition-all duration-200',
                        theme.chipHover,
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
