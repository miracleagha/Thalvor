import { Card, CardContent } from '@/components/ui/card'
import DynamicIcon from '@/components/ui/dynamic-icon'
import { useRole } from '@/contexts/role-context'

export default function About() {
  const role = useRole()

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {role.cardTitle}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{role.cardDescription}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardContent className="space-y-4 p-6 sm:p-8 text-base leading-relaxed text-muted-foreground">
              <p>{role.summary}</p>
              {role.focus && <p>{role.focus}</p>}
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {role.stats.map((s) => (
              <Card key={s.label} className="relative overflow-hidden">
                <CardContent className="p-5">
                  <div className="font-mono text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {role.pillars.map((p) => (
            <Card key={p.title} className="group transition hover:border-primary/40">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/15">
                  <DynamicIcon name={p.icon} className="size-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
