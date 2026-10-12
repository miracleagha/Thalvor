import { motion } from 'motion/react'
import { GraduationCap, Award, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealGroup } from '@/components/ui/reveal'
import { revealItem } from '@/lib/motion-variants'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

export default function Education() {
  const role = useRole()
  const theme = useTheme(role)

  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', theme.text)}>
              // Education &amp; Certifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Foundations &amp; continuous learning
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div variants={revealItem} className="lg:col-span-1">
            <Card className={cn('h-full transition-colors', theme.cardHoverBorder)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className={cn('size-5', theme.text)} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {role.education.map((e) => (
                  <div key={e.degree}>
                    <h4 className="font-semibold text-foreground">{e.degree}</h4>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                    <p className="text-xs text-muted-foreground/80">
                      {e.location} · {e.period}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={revealItem} className="lg:col-span-2">
            <Card className={cn('h-full transition-colors', theme.cardHoverBorder)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className={cn('size-5', theme.text)} />
                  Certifications &amp; Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {role.certifications.map((c) => (
                    <li
                      key={c.title}
                      className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-border/80 hover:bg-muted/50"
                    >
                      <span className={cn('mt-1.5 inline-block size-1.5 shrink-0 rounded-full', theme.text, 'bg-current')} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.title}</p>
                        <p className="text-xs text-muted-foreground">{c.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {role.interests && role.interests.length > 0 && (
            <motion.div variants={revealItem} className="lg:col-span-3">
              <Card className={cn('transition-colors', theme.cardHoverBorder)}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className={cn('size-5', theme.text)} />
                    Interests &amp; Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {role.interests.map((i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {i}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </RevealGroup>
      </div>
    </section>
  )
}
