import * as React from 'react'
import { cn } from '@/lib/utils'

// GitHub mark — lucide-react dropped brand icons for trademark reasons, so we ship our own.
export const GithubIcon = React.forwardRef(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={cn('shrink-0', className)}
    {...props}
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
))
GithubIcon.displayName = 'GithubIcon'

// WhatsApp mark — also a brand icon, so we ship it ourselves.
export const WhatsappIcon = React.forwardRef(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={cn('shrink-0', className)}
    {...props}
  >
    <path d="M19.11 4.87A10.14 10.14 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.33 5L2 22l5.14-1.35A9.98 9.98 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.89-7.13ZM12 20.27a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.05.8.82-2.97-.2-.31A8.27 8.27 0 1 1 20.27 12 8.28 8.28 0 0 1 12 20.27Zm4.57-6.18c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.52.11-.11.25-.3.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.43 1.03 2.6.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.6.19 1.15.16 1.59.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3Z" />
  </svg>
))
WhatsappIcon.displayName = 'WhatsappIcon'
