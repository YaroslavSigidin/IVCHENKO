'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)
  const shouldReduceMotion = useReducedMotion()

  const links = [
    { label: 'Программа', href: '#program' },
    { label: 'Результаты', href: '#results' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  React.useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header
      className={cn('fixed inset-x-0 top-0 z-50 w-full border-b border-transparent', {
        'border-white/10 bg-black/72 backdrop-blur-xl': scrolled || open,
      })}
    >
      <nav className="mx-auto flex h-[4.75rem] w-full max-w-[1320px] items-center justify-between px-5 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="/"
          className="rounded-md py-2 text-[1.05rem] font-medium tracking-[-0.05em] text-white sm:p-2 sm:text-lg"
        >
          Vladislav
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full text-white/62 hover:bg-white/[0.05] hover:text-white',
              )}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/12 bg-transparent text-white hover:bg-white/[0.05]"
          >
            <a href="#program">Посмотреть программу</a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-white !text-black hover:bg-white/90 hover:!text-black [&_*]:!text-black"
          >
            <a href="#pricing" className="!text-black">
              Выбрать формат
            </a>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="h-11 w-11 rounded-full border-white/10 bg-white/[0.035] text-white shadow-[0_16px_30px_rgba(0,0,0,0.2)] hover:bg-white/[0.08] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        reduceMotion={shouldReduceMotion}
        className="flex h-full flex-col justify-between gap-3"
      >
        <Motion.div variants={mobileMenuStackVariants} className="space-y-3">
          <Motion.div
            variants={mobileMenuItemVariants}
            className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <div className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
              Navigation
            </div>
            <div className="mt-2 text-sm leading-6 text-white/56">
              Быстрый переход по ключевым разделам программы.
            </div>
          </Motion.div>

          <div className="grid gap-y-2">
          {links.map((link) => (
            <Motion.div key={link.label} variants={mobileMenuItemVariants}>
              <a
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-13 justify-start rounded-[1.1rem] border border-white/8 bg-white/[0.025] px-4 text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:bg-white/[0.06] hover:text-white',
                )}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </Motion.div>
          ))}
          </div>
        </Motion.div>

        <Motion.div variants={mobileMenuStackVariants} className="flex flex-col gap-2">
          <Motion.div variants={mobileMenuItemVariants}>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full border-white/12 bg-transparent text-white hover:bg-white/[0.05]"
          >
            <a href="#program" onClick={() => setOpen(false)}>
              Посмотреть программу
            </a>
          </Button>
          </Motion.div>
          <Motion.div variants={mobileMenuItemVariants}>
          <Button className="h-12 w-full rounded-full bg-white !text-black hover:bg-white/90 hover:!text-black [&_*]:!text-black" asChild>
            <a href="#pricing" onClick={() => setOpen(false)} className="!text-black">
              Выбрать формат
            </a>
          </Button>
          </Motion.div>
        </Motion.div>
      </MobileMenu>
    </header>
  )
}

function MobileMenu({ open, onClose, reduceMotion, children, className, ...props }) {
  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div id="mobile-menu" className="md:hidden">
          <Motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.52),rgba(0,0,0,0.82))] backdrop-blur-[10px]"
          />

          <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[4.75rem] z-40 p-4 sm:top-16">
            <Motion.div
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -18, scale: 0.985, filter: 'blur(12px)' }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
              }
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, scale: 0.985, filter: 'blur(10px)' }
              }
              transition={{ duration: reduceMotion ? 0.16 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'pointer-events-auto relative size-full overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,18,0.92),rgba(8,8,9,0.98))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]',
                className,
              )}
              {...props}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_bottom,rgba(255,138,28,0.08),transparent_28%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
              <div className="pointer-events-none absolute right-[-4rem] top-[-3rem] h-28 w-28 rounded-full bg-[#ff8a1c]/10 blur-3xl" />

              <Motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={reduceMotion ? undefined : mobileMenuContainerVariants}
                className="relative z-10 size-full"
              >
                {children}
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

const mobileMenuContainerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.065,
    },
  },
}

const mobileMenuStackVariants = {
  closed: {
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.055,
    },
  },
}

const mobileMenuItemVariants = {
  closed: {
    opacity: 0,
    y: 14,
    scale: 0.985,
    filter: 'blur(8px)',
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
