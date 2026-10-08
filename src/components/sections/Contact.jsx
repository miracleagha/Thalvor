import { useState } from 'react'
import { Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/portfolio'

const WEB3FORMS_KEY = 'a816cdef-a1dd-4aa7-948c-bb7f2d021e12'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('subject', `Portfolio contact from ${formData.get('name') || 'visitor'}`)
    setStatus({ state: 'loading', message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus({ state: 'success', message: "Message sent. I'll be in touch shortly." })
        event.target.reset()
      } else {
        setStatus({ state: 'error', message: data.message || 'Something went wrong.' })
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something solid
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to backend / full-stack roles, contract work, and interesting collaborations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Reach me directly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
                  <GithubIcon className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    github.com/{profile.githubHandle}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">{profile.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@domain.com" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows="6" placeholder="Tell me about the role or project…" required />
                </div>

                <input type="hidden" name="from_name" value="Thalvor Portfolio" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="flex items-center gap-3">
                  <Button type="submit" size="lg" disabled={status.state === 'loading'}>
                    {status.state === 'loading' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="size-4" /> Send message
                      </>
                    )}
                  </Button>

                  {status.state === 'success' && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-emerald-300">
                      <CheckCircle2 className="size-4" /> {status.message}
                    </span>
                  )}
                  {status.state === 'error' && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-amber-300">
                      <AlertCircle className="size-4" /> {status.message}
                    </span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
