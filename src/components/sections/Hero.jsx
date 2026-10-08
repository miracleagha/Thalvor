import { Link } from 'react-scroll'
import { ArrowRight, Mail, MapPin, Sparkles, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/portfolio'

const HERO_CHIPS = ['Node.js', 'TypeScript', 'React', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker']

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge variant="success" className="mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </Badge>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2 className="mt-5 flex flex-wrap items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg">
            <Terminal className="size-4 text-primary" />
            <span className="font-mono text-foreground/90">Full-Stack Developer</span>
            <span className="text-muted-foreground/60">|</span>
            <span>Node.js, React, TypeScript &amp; APIs, Python</span>
          </h2>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="projects" smooth offset={-80} duration={500}>
                View Projects <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" /> Email
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {profile.location}
            </div>
            <span className="text-muted-foreground/40">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-primary" />
              {profile.shortTitle}
            </div>
          </div>

          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-2">
            {HERO_CHIPS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/70 bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
