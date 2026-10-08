import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/icons'
import DownloadResumeButton from '@/components/ui/download-resume-button'
import { navLinks, profile } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        sticky ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border px-4 py-2 transition-all',
            sticky
              ? 'glass border-border/60 shadow-lg shadow-black/20'
              : 'border-transparent bg-transparent',
          )}
        >
          <Link
            to="hero"
            smooth
            duration={500}
            className="flex cursor-pointer items-center gap-2 pl-2"
          >
            <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <span className="font-mono text-sm font-bold text-primary">M</span>
            </span>
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              miracle<span className="text-primary">.agha</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  smooth
                  spy
                  offset={-80}
                  duration={500}
                  activeClass="!text-foreground !bg-muted/70"
                  className="cursor-pointer rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
            >
              <GithubIcon className="size-4" />
            </a>
            <DownloadResumeButton
              size="sm"
              variant="outline"
              className="hidden lg:inline-flex"
              label="Resume"
              loadingLabel="Building…"
              successLabel="Done"
            />
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link to="contact" smooth offset={-80} duration={500}>
                Hire Me
              </Link>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-background/95 p-2 shadow-xl shadow-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="flex flex-col gap-2 px-2 pt-2">
                <DownloadResumeButton variant="secondary" className="w-full" />
                <Button asChild className="w-full">
                  <Link to="contact" smooth offset={-80} duration={500} onClick={() => setOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
