import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Lock, Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Reveal, RevealGroup } from '@/components/ui/reveal'
import { revealItem } from '@/lib/motion-variants'
import { GithubIcon } from '@/components/ui/icons'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { cn } from '@/lib/utils'

const DEFAULT_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'featured', label: 'Featured' },
]

function ProjectCard({ p, theme }) {
  return (
    <Card
      className={cn(
        'group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1',
        theme.cardHoverBorder,
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="flex items-center gap-2 text-base">
            {p.featured && <Star className={cn('size-4 shrink-0', theme.featuredStar)} />}
            <span>{p.name}</span>
          </CardTitle>
          {p.private && (
            <Badge variant="warn">
              <Lock className="size-3" /> Private
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{p.tagline}</p>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground/90">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border/80 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        {p.github && (
          <Button asChild variant="secondary" size="sm" className="flex-1">
            <a href={p.github} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" /> Code
            </a>
          </Button>
        )}
        {p.demo && (
          <Button asChild size="sm" className="flex-1">
            <a href={p.demo} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" /> Live
            </a>
          </Button>
        )}
        {!p.github && !p.demo && (
          <span className="w-full text-center text-xs text-muted-foreground/80">
            Source available on request
          </span>
        )}
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  const role = useRole()
  const theme = useTheme(role)
  const filters = role.projectCategories ?? DEFAULT_FILTERS
  const [filter, setFilter] = useState(filters[0]?.value ?? 'all')

  const filtered = useMemo(() => {
    const list = role.projects ?? []
    if (filter === 'all') return list
    if (filter === 'featured') return list.filter((p) => p.featured)
    return list.filter((p) => p.categories && p.categories.includes(filter))
  }, [filter, role.projects])

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', theme.text)}>
              // {role.projectsEyebrow ?? 'Projects'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {role.projectsHeading ?? 'Selected work'}
            </h2>
            {role.projectsBody && (
              <p className="mt-4 text-muted-foreground">{role.projectsBody}</p>
            )}
          </div>
        </Reveal>

        <Tabs value={filter} onValueChange={setFilter} className="mt-10">
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-2">
            <TabsList className="mx-auto flex w-max">
              {filters.map((f) => (
                <TabsTrigger key={f.value} value={f.value}>
                  {f.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={filter}>
            <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <motion.div key={p.name} variants={revealItem}>
                  <ProjectCard p={p} theme={theme} />
                </motion.div>
              ))}
            </RevealGroup>

            {filtered.length === 0 && (
              <p className="mt-10 text-center text-sm text-muted-foreground">
                No projects in this category yet.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
