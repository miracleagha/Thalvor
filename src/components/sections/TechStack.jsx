import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { techStack } from '@/data/portfolio'

export default function TechStack() {
  return (
    <section id="stack" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Tech Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I ship production systems with
          </h2>
          <p className="mt-4 text-muted-foreground">
            A pragmatic toolkit tuned for backend-heavy, security-aware, cloud-deployed products.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <Card key={group.title} className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground">
                  <span className="inline-block size-1.5 rounded-full bg-primary" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-0">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
