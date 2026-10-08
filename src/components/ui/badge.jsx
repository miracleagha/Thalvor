import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/15 text-primary ring-1 ring-primary/25',
        secondary: 'border-border bg-muted text-foreground',
        outline: 'border-border text-muted-foreground',
        success: 'border-transparent bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30',
        warn: 'border-transparent bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
