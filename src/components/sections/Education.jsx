import { GraduationCap, Award, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { education, certifications, interests } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // Education &amp; Certifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Foundations &amp; continuous learning
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {education.map((e) => (
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

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Certifications &amp; Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3"
                  >
                    <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.title}</p>
                      <p className="text-xs text-muted-foreground">{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="size-5 text-primary" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {i}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
