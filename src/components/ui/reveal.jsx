import { motion } from 'motion/react'

/** Simple fade-in-on-scroll. Lazy, cheap, only animates once. */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

/** Stagger children when they enter viewport. */
export function RevealGroup({ children, className, delay = 0.08, as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}


