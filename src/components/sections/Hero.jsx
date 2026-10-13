import { Link } from 'react-scroll'
import { motion } from 'motion/react'
import { ArrowRight, Mail, MapPin, Sparkles, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GithubIcon, WhatsappIcon } from '@/components/ui/icons'
import DownloadResumeButton from '@/components/ui/download-resume-button'
import ProfilePhoto from '@/components/ui/profile-photo'
import SwitchRolePrompt from '@/components/sections/SwitchRolePrompt'
import { useRole } from '@/contexts/role-context'
import { useTheme } from '@/lib/role-themes'
import { profile } from '@/data/roles'
import { cn } from '@/lib/utils'

// Role-specific background decoration (behind everything).
function HeroBackdrop({ theme }) {
  if (theme.heroStyle === 'tech') {
    return (
      <>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)] scanline"
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-1/2 top-10 -z-10 size-[640px] -translate-x-1/2 rounded-full blur-3xl',
            theme.glow,
          )}
        />
      </>
    )
  }
  if (theme.heroStyle === 'notebook') {
    return (
      <>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 notebook-lines opacity-70" />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-[12%] top-20 -z-10 size-[520px] rounded-full blur-3xl',
            theme.glow,
          )}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute right-[8%] top-40 -z-10 size-[420px] rounded-full blur-3xl',
            theme.glowSoft,
          )}
        />
      </>
    )
  }
  if (theme.heroStyle === 'warm') {
    return (
      <>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 sunlit" />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute right-[6%] top-10 -z-10 size-[620px] rounded-full blur-3xl animate-slow-pulse',
            theme.glow,
          )}
        />
      </>
    )
  }
  // editorial / admin
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-pattern opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-[15%] top-16 -z-10 size-[520px] rounded-full blur-3xl',
          theme.glow,
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute right-[8%] top-10 -z-10 size-[380px] rounded-full blur-3xl',
          theme.glowSoft,
        )}
      />
    </>
  )
}

export default function Hero() {
  const role = useRole()
  const theme = useTheme(role)
  const hasProjects = role.projects && role.projects.length > 0

  // Pick a hero intro byline per style
  const styleLabel = {
    tech: '// init portfolio',
    notebook: '// chapter 01',
    warm: '— welcome',
    editorial: '— file: hero.md',
  }[theme.heroStyle]

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <HeroBackdrop theme={theme} />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-5 flex justify-center lg:justify-start"
            >
              <SwitchRolePrompt variant="compact" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="success" className="mb-5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Available for new opportunities
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={cn('mb-3 font-mono text-xs uppercase tracking-[0.22em]', theme.text)}
            >
              {styleLabel}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'text-balance leading-[1.02] tracking-tight',
                theme.heroStyle === 'tech' || theme.heroStyle === 'notebook'
                  ? 'text-5xl font-semibold sm:text-6xl md:text-7xl'
                  : 'font-serif text-5xl font-light sm:text-6xl md:text-7xl',
              )}
            >
              Hi, I'm <span className={cn('text-gradient', theme.heroStyle === 'warm' && 'italic')}>
                {profile.name}
              </span>
              {theme.heroStyle === 'tech' && (
                <span className={cn('ml-2 inline-block w-[3px] h-[0.85em] translate-y-1 animate-caret', theme.text)}>
                  &nbsp;
                </span>
              )}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg lg:justify-start"
            >
              <Terminal className={cn('size-4', theme.text)} />
              <span className="font-mono text-foreground/90">{role.heroTitle}</span>
              <span className="text-muted-foreground/60">|</span>
              <span>{role.heroSubtitle}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              {role.heroTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button asChild size="lg">
                <Link to={hasProjects ? 'projects' : 'experience'} smooth offset={-80} duration={500}>
                  {hasProjects ? 'View Projects' : 'View Experience'} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <DownloadResumeButton size="lg" variant="secondary" />
              <Button asChild variant="outline" size="lg">
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                  <WhatsappIcon className="size-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> Email
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground lg:justify-start"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {role.location}
              </div>
              <span className="text-muted-foreground/40">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className={cn('size-3.5', theme.text)} /> {role.heroShort}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              {role.heroChips.map((t) => (
                <span
                  key={t}
                  className={cn(
                    'rounded-full px-3 py-1 font-mono text-xs backdrop-blur-sm transition-colors',
                    'border border-border/70 bg-card/60 text-muted-foreground',
                    theme.chipHover,
                  )}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <div className="flex items-center justify-center lg:justify-end">
            <ProfilePhoto role={role} />
          </div>
        </div>
      </div>
    </section>
  )
}
