import React from 'react'
import { motion as Motion, useReducedMotion } from 'motion/react'

function getRevealPreset({ variant, distance, scale, blur, duration }) {
  const softenedScale = Math.max(0.88, scale - 0.012)

  switch (variant) {
    case 'fade':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.34,
          scale: 0.992,
          filter: `blur(${Math.max(4, blur - 2)}px)`,
        },
        target: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: duration * 0.74, ease: [0.22, 1, 0.36, 1] },
      }
    case 'drift-left':
      return {
        initial: {
          opacity: 0,
          y: distance * 1.08,
          scale: softenedScale,
          filter: `blur(${blur}px)`,
        },
        target: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: duration * 1.04, ease: [0.16, 1, 0.3, 1] },
      }
    case 'drift-right':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.86,
          scale: Math.max(0.9, softenedScale + 0.01),
          filter: `blur(${blur}px)`,
        },
        target: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: duration * 0.9, ease: [0.16, 1, 0.3, 1] },
      }
    case 'pop':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.68,
          scale: 0.9,
          filter: `blur(${blur + 2}px)`,
        },
        target: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { type: 'spring', stiffness: 220, damping: 24, mass: 0.82 },
      }
    case 'tilt-left':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.92,
          rotate: -4,
          scale: 0.96,
          filter: `blur(${blur}px)`,
        },
        target: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: duration * 1.08, ease: [0.22, 1, 0.36, 1] },
      }
    case 'tilt-right':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.82,
          rotate: 4,
          scale: 0.96,
          filter: `blur(${blur}px)`,
        },
        target: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: duration * 0.9, ease: [0.22, 1, 0.36, 1] },
      }
    case 'reveal':
      return {
        initial: {
          opacity: 0,
          y: distance * 0.58,
          scale: 0.98,
          clipPath: 'inset(0 0 24% 0 round 28px)',
          filter: `blur(${blur}px)`,
        },
        target: {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: 'inset(0% 0 0% 0 round 28px)',
          filter: 'blur(0px)',
        },
        transition: { duration: duration * 1.12, ease: [0.22, 1, 0.36, 1] },
      }
    case 'rise':
    default:
      return {
        initial: { opacity: 0, y: distance, scale, filter: `blur(${blur}px)` },
        target: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration, ease: [0.22, 1, 0.36, 1] },
      }
  }
}

export function MobileReveal({
  children,
  className,
  delay = 0,
  y = 26,
  scale = 0.985,
  blur = 10,
  amount = 0.16,
  duration = 0.72,
  once = true,
  variant = 'rise',
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    if (className) {
      return <div className={className}>{children}</div>
    }

    return <>{children}</>
  }

  const preset = getRevealPreset({
    variant,
    distance: y,
    scale,
    blur,
    duration,
  })

  return (
    <Motion.div
      className={className}
      initial={preset.initial}
      whileInView={preset.target}
      viewport={{ once, amount }}
      transition={{
        ...preset.transition,
        delay,
      }}
    >
      {children}
    </Motion.div>
  )
}
