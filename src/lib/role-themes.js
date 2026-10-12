// Per-role visual theme. Keep class strings as literal, un-interpolated Tailwind
// so the compiler can see every utility and generate it. Themes map to the
// role.accent token in roles.js.

const THEMES = {
  cyan: {
    key: 'cyan',
    // ambient background glows / orbs
    glow: 'bg-cyan-400/20',
    glowSoft: 'bg-cyan-400/10',
    gradient: 'from-cyan-400/30 via-sky-500/15 to-transparent',
    gradientHard: 'from-cyan-400/40 via-sky-500/25 to-transparent',
    // text accents
    text: 'text-cyan-300',
    textSoft: 'text-cyan-200/90',
    // interactive surfaces
    chip: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200 ring-cyan-400/20',
    chipHover: 'hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-cyan-100',
    pillarIcon: 'bg-cyan-400/15 text-cyan-200 ring-cyan-400/30',
    pillarIconGlow: 'group-hover:bg-cyan-400/25 group-hover:shadow-[0_0_30px_-6px_oklch(0.78_0.14_220/0.5)]',
    cardHoverBorder: 'hover:border-cyan-400/50',
    timelineDot: 'border-cyan-400/50 bg-slate-950 text-cyan-300',
    featuredStar: 'fill-cyan-300 text-cyan-300',
    chipRingGlow: 'ring-1 ring-cyan-400/40 shadow-[0_0_40px_-8px_oklch(0.78_0.14_220/0.6)]',
    // photo frame
    photoRing: 'ring-cyan-400/40',
    photoShadow: 'shadow-[0_30px_80px_-20px_oklch(0.72_0.17_220/0.5)]',
    photoBorder: 'border-cyan-400/30',
    // hero decoration style
    heroStyle: 'tech',
  },
  emerald: {
    key: 'emerald',
    glow: 'bg-emerald-400/20',
    glowSoft: 'bg-emerald-400/10',
    gradient: 'from-emerald-400/30 via-teal-500/15 to-transparent',
    gradientHard: 'from-emerald-400/40 via-teal-500/25 to-transparent',
    text: 'text-emerald-300',
    textSoft: 'text-emerald-200/90',
    chip: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200 ring-emerald-400/20',
    chipHover: 'hover:border-emerald-400/60 hover:bg-emerald-400/20 hover:text-emerald-100',
    pillarIcon: 'bg-emerald-400/15 text-emerald-200 ring-emerald-400/30',
    pillarIconGlow: 'group-hover:bg-emerald-400/25 group-hover:shadow-[0_0_30px_-6px_oklch(0.80_0.14_160/0.5)]',
    cardHoverBorder: 'hover:border-emerald-400/50',
    timelineDot: 'border-emerald-400/50 bg-slate-950 text-emerald-300',
    featuredStar: 'fill-emerald-300 text-emerald-300',
    chipRingGlow: 'ring-1 ring-emerald-400/40 shadow-[0_0_40px_-8px_oklch(0.80_0.14_160/0.6)]',
    photoRing: 'ring-emerald-400/40',
    photoShadow: 'shadow-[0_30px_80px_-20px_oklch(0.72_0.14_160/0.5)]',
    photoBorder: 'border-emerald-400/30',
    heroStyle: 'notebook',
  },
  amber: {
    key: 'amber',
    glow: 'bg-amber-400/20',
    glowSoft: 'bg-amber-400/10',
    gradient: 'from-amber-400/35 via-orange-500/18 to-transparent',
    gradientHard: 'from-amber-400/45 via-orange-500/28 to-transparent',
    text: 'text-amber-300',
    textSoft: 'text-amber-200/90',
    chip: 'border-amber-400/30 bg-amber-400/10 text-amber-200 ring-amber-400/20',
    chipHover: 'hover:border-amber-400/60 hover:bg-amber-400/20 hover:text-amber-100',
    pillarIcon: 'bg-amber-400/15 text-amber-200 ring-amber-400/30',
    pillarIconGlow: 'group-hover:bg-amber-400/25 group-hover:shadow-[0_0_30px_-6px_oklch(0.82_0.15_80/0.5)]',
    cardHoverBorder: 'hover:border-amber-400/50',
    timelineDot: 'border-amber-400/50 bg-slate-950 text-amber-300',
    featuredStar: 'fill-amber-300 text-amber-300',
    chipRingGlow: 'ring-1 ring-amber-400/40 shadow-[0_0_40px_-8px_oklch(0.82_0.15_80/0.6)]',
    photoRing: 'ring-amber-400/40',
    photoShadow: 'shadow-[0_30px_80px_-20px_oklch(0.78_0.15_80/0.5)]',
    photoBorder: 'border-amber-400/30',
    heroStyle: 'warm',
  },
  violet: {
    key: 'violet',
    glow: 'bg-violet-400/20',
    glowSoft: 'bg-violet-400/10',
    gradient: 'from-violet-400/30 via-fuchsia-500/15 to-transparent',
    gradientHard: 'from-violet-400/40 via-fuchsia-500/25 to-transparent',
    text: 'text-violet-300',
    textSoft: 'text-violet-200/90',
    chip: 'border-violet-400/30 bg-violet-400/10 text-violet-200 ring-violet-400/20',
    chipHover: 'hover:border-violet-400/60 hover:bg-violet-400/20 hover:text-violet-100',
    pillarIcon: 'bg-violet-400/15 text-violet-200 ring-violet-400/30',
    pillarIconGlow: 'group-hover:bg-violet-400/25 group-hover:shadow-[0_0_30px_-6px_oklch(0.70_0.17_300/0.5)]',
    cardHoverBorder: 'hover:border-violet-400/50',
    timelineDot: 'border-violet-400/50 bg-slate-950 text-violet-300',
    featuredStar: 'fill-violet-300 text-violet-300',
    chipRingGlow: 'ring-1 ring-violet-400/40 shadow-[0_0_40px_-8px_oklch(0.70_0.17_300/0.6)]',
    photoRing: 'ring-violet-400/40',
    photoShadow: 'shadow-[0_30px_80px_-20px_oklch(0.68_0.17_300/0.5)]',
    photoBorder: 'border-violet-400/30',
    heroStyle: 'editorial',
  },
}

export function getTheme(accent) {
  return THEMES[accent] ?? THEMES.cyan
}

export function useTheme(role) {
  return getTheme(role?.accent)
}
