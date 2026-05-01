import React, { useEffect, useMemo, useState } from 'react'

import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react'

import { HeadlineFrame } from '@/components/ui/headline-frame'
import { cn } from '@/lib/utils'

export function Bucket({ eyebrow, title, description, chips }) {
  const [items, setItems] = useState(chips)
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setItems((prev) => {
        if (prev.length <= 1) return prev
        const [first, ...rest] = prev
        return [...rest, first]
      })
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  const activeChip = useMemo(() => items[0], [items])

  return (
    <section className="mx-auto w-[min(1320px,94vw)]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
          {eyebrow}
        </div>
        <HeadlineFrame className="mt-4">
          <h2 className="text-[2rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
            {title}
          </h2>
        </HeadlineFrame>
        <p className="mt-4 text-[0.98rem] leading-7 text-white/64 sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex w-full max-w-[980px] flex-col items-center justify-center sm:mt-14">
        <Motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 0,
                  y: 90,
                  scale: 0.88,
                  rotateX: 20,
                  rotateY: -10,
                  filter: 'blur(26px)',
                }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  filter: 'blur(0px)',
                }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative isolate h-[460px] w-full sm:h-[560px]"
          style={{ transformPerspective: 1800 }}
        >
          <Motion.div
            animate={
              shouldReduceMotion
                ? { opacity: 0.7 }
                : {
                    opacity: isHovered ? 0.95 : 0.68,
                    scale: isHovered ? 1.14 : 1,
                  }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-1/2 top-[44%] h-[76%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] bg-[radial-gradient(circle,rgba(255,138,28,0.12),rgba(255,138,28,0.04)_34%,transparent_72%)] blur-[104px]"
          />

          <Motion.div
            animate={
              shouldReduceMotion
                ? { y: 0, rotateX: 0, rotateY: 0, scale: 1 }
                : {
                    y: isHovered ? -10 : 0,
                    rotateX: isHovered ? 7 : 0,
                    rotateY: isHovered ? -4 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[47%] flex h-[88%] w-[min(360px,82vw)] min-w-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.018))] p-[9px] shadow-[0_40px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black_0%,black_78%,rgba(0,0,0,0.82)_90%,transparent_100%)] sm:h-[78%] sm:w-[min(430px,54vw)] sm:rounded-[4rem] sm:p-[11px] sm:shadow-[0_60px_140px_rgba(0,0,0,0.5)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#121316_0%,#0a0a0b_56%,#040404_100%)] sm:rounded-[3.45rem]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_22%,transparent_72%,rgba(0,0,0,0.42))]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(255,138,28,0.11),rgba(255,138,28,0.035)_24%,transparent_56%)] blur-[24px]" />
              <Motion.div
                initial={shouldReduceMotion ? false : { x: '-140%', opacity: 0 }}
                whileInView={shouldReduceMotion ? {} : { x: '160%', opacity: [0, 0.12, 0] }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute inset-y-0 w-24 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] blur-xl"
              />

              <div className="pointer-events-none absolute left-1/2 top-4 h-7 w-28 -translate-x-1/2 rounded-full bg-black/78 shadow-[0_1px_0_rgba(255,255,255,0.08)] sm:h-8 sm:w-36" />
              <div className="absolute inset-x-4 top-[18%] flex items-start justify-center sm:inset-x-5 sm:top-[19%]">
                <AnimatePresence mode="popLayout">
                  {activeChip ? (
                    <Motion.div
                      key={activeChip.id}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { y: -96, opacity: 0, scale: 0.8, filter: 'blur(14px)' }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : {
                              y: isHovered ? -8 : 0,
                              opacity: 1,
                              scale: isHovered ? 1.03 : 1,
                              filter: 'blur(0px)',
                            }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { y: 132, opacity: 0, scale: 0.84, filter: 'blur(10px)' }
                      }
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="pointer-events-none relative w-full max-w-[310px] overflow-hidden rounded-[1.55rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.13),rgba(255,255,255,0.04))] p-2.5 pr-4 shadow-[0_26px_64px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:max-w-[356px] sm:rounded-[2rem] sm:pr-5"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
                      <Motion.div
                        animate={
                          shouldReduceMotion
                            ? { opacity: 0.12 }
                            : { opacity: isHovered ? 0.17 : 0.1, scale: isHovered ? 1.12 : 1 }
                        }
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(255,138,28,0.12),rgba(255,138,28,0.04)_26%,transparent_64%)] blur-[18px]"
                      />
                      <div className="relative flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff8a1c]/18 text-[#ff8a1c] ring-1 ring-[#ff8a1c]/24 shadow-[0_0_36px_rgba(255,138,28,0.2)] sm:h-14 sm:w-14">
                          <activeChip.icon className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-[0.95rem] font-medium tracking-[-0.028em] text-white sm:text-[1.03rem]">
                            {activeChip.title}
                          </div>
                          <div className="truncate text-[0.82rem] text-white/52 sm:text-[0.94rem]">
                            {activeChip.description}
                          </div>
                        </div>
                      </div>
                    </Motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="pointer-events-none absolute inset-x-[35%] bottom-5 h-1.5 rounded-full bg-white/12" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.32)_38%,rgba(0,0,0,0.92)_100%)]" />
            </div>
          </Motion.div>

          <div className="pointer-events-none absolute left-1/2 top-[79%] h-24 w-[58%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle,rgba(255,138,28,0.11),rgba(255,138,28,0.03)_54%,transparent_82%)] blur-[82px]" />
          <div className="pointer-events-none absolute inset-x-[26%] bottom-[2%] h-[24%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.36)_28%,rgba(0,0,0,0.88)_76%,#000_100%)] blur-[18px]" />
        </Motion.div>

        <div className="relative z-20 mt-6 grid w-full max-w-[920px] gap-3 sm:-mt-[110px] sm:grid-cols-2">
          {chips.map((chip, index) => {
            const isActive = activeChip?.id === chip.id
            return (
              <div
                key={chip.id}
                className={cn(
                  'rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-4 py-4 transition-all duration-300',
                  isActive && 'border-[#ff8a1c]/28 bg-[#ff8a1c]/[0.06] shadow-[0_0_0_1px_rgba(255,138,28,0.08)]',
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition-colors duration-300',
                      isActive && 'border-[#ff8a1c]/24 bg-[#ff8a1c]/16 text-[#ff8a1c]',
                    )}
                  >
                    <chip.icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium tracking-[-0.02em] text-white">
                      {chip.title}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-white/54">
                      {chip.description}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[0.65rem] uppercase tracking-[0.24em] text-white/34">
                  0{index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
