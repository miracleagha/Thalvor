import { Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'
import { GithubIcon, WhatsappIcon } from '@/components/ui/icons'
import { profile } from '@/data/roles'
import { useRole } from '@/contexts/role-context'

export default function Footer() {
  const role = useRole()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <span className="font-mono text-sm font-bold text-primary">M</span>
            </span>
            <span className="font-semibold">
              miracle<span className="text-primary">.agha</span>
            </span>
            {role && (
              <span className="ml-1 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {role.cardTitle}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © {year} {profile.name} · Built with React, Vite, Tailwind &amp; shadcn-style components.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            <WhatsappIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <Link
            to="hero"
            smooth
            duration={500}
            className="inline-flex cursor-pointer size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
