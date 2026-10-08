import { useState } from 'react'
import { Download, Loader2, Check, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Lazy-loads jsPDF + the resume generator on click, so the bundle isn't paid for
 * on initial page load.
 */
export default function DownloadResumeButton({
  size = 'default',
  variant = 'secondary',
  className,
  label = 'Download Resume',
  loadingLabel = 'Building PDF…',
  successLabel = 'Downloaded',
}) {
  const [state, setState] = useState('idle') // idle | loading | success | error

  const onClick = async () => {
    if (state === 'loading') return
    setState('loading')
    try {
      const { downloadResume } = await import('@/lib/generate-resume')
      await downloadResume()
      setState('success')
      setTimeout(() => setState('idle'), 2200)
    } catch (err) {
      console.error('Resume generation failed:', err)
      setState('error')
      setTimeout(() => setState('idle'), 2800)
    }
  }

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={state === 'loading'}
      aria-label="Download ATS-friendly resume as PDF"
      className={cn(className)}
    >
      {state === 'loading' && (
        <>
          <Loader2 className="size-4 animate-spin" /> {loadingLabel}
        </>
      )}
      {state === 'success' && (
        <>
          <Check className="size-4" /> {successLabel}
        </>
      )}
      {state === 'error' && (
        <>
          <AlertCircle className="size-4" /> Try again
        </>
      )}
      {state === 'idle' && (
        <>
          <Download className="size-4" /> {label}
        </>
      )}
    </Button>
  )
}
