import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'

const STEP_COPY = {
  'Товар': {
    kicker: 'Entry Point',
    title: 'Товар задает правильную точку входа',
    body:
      'Сначала вы понимаете, какой продукт вообще имеет смысл тестировать под TikTok Shop, как смотреть на спрос, формат входа и юнит-экономику до первых вложений.',
    preview: 'Спрос, модель входа и экономика до первых вложений.',
    bullets: ['Спрос и ниша', 'Модель захода', 'Юнит-экономика'],
  },
  'Логистика': {
    kicker: 'Operations',
    title: 'Логистика удерживает запуск от хаоса',
    body:
      'Дальше собирается операционная схема: поставщик, prep center, склады, движение товара и контроль точек, где чаще всего теряют скорость, деньги и устойчивость.',
    preview: 'Поставщик, prep center и контроль движения без срывов.',
    bullets: ['Поставщик', '3PL / Prep', 'Контроль потерь'],
  },
  Creators: {
    kicker: 'Distribution',
    title: 'Creators превращают продукт в рабочий тест',
    body:
      'Когда база собрана, подключаются контент-связки и creators: становится понятно, какой формат роликов, коммуникации и упаковки быстрее дает живой отклик и первые сигналы.',
    preview: 'Контент, creators и связки, которые дают живой отклик.',
    bullets: ['UGC-форматы', 'Creators', 'Контент-связки'],
  },
  'Продажи': {
    kicker: 'Execution',
    title: 'Продажи собирают все решения в результат',
    body:
      'Последний блок не существует отдельно: он подтверждает, что предыдущие шаги собраны правильно. Вы видите реальные сигналы запуска и быстрее переходите к действиям, а не к догадкам.',
    preview: 'Фиксация сигналов и переход к понятным следующим шагам.',
    bullets: ['Сигналы роста', 'Решения по цифрам', 'Следующий шаг'],
  },
}

export function LaunchSystemFeatures({
  eyebrow,
  title,
  description,
  orchestration,
}) {
  const shouldReduceMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)

  useEffect(() => {
    if (shouldReduceMotion || hoveredStep !== null || orchestration.steps.length <= 1) {
      return undefined
    }

    const intervalId = setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % orchestration.steps.length)
    }, 2400)

    return () => clearInterval(intervalId)
  }, [hoveredStep, orchestration.steps.length, shouldReduceMotion])

  const currentStep = hoveredStep ?? activeStep
  const activeItem = orchestration.steps[currentStep]
  const activeCopy = useMemo(() => {
    return (
      STEP_COPY[activeItem?.label] ?? {
        kicker: 'Launch',
        title: activeItem?.label ?? '',
        body: '',
        preview: '',
        bullets: [],
      }
    )
  }, [activeItem])

  return (
    <section className="mx-auto w-[min(1320px,94vw)]">
      <div className="mx-auto max-w-4xl text-center">
        <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-[2rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-[0.98rem] leading-7 text-white/64 sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>

      <div className="mt-10 space-y-6 sm:mt-12">
        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr] xl:gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {orchestration.steps.map((step, index) => {
              const detail = STEP_COPY[step.label] ?? activeCopy
              const isActive = index === currentStep

              return (
                <Motion.button
                  key={step.label}
                  type="button"
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                  onFocus={() => setHoveredStep(index)}
                  onBlur={() => setHoveredStep(null)}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 22, filter: 'blur(8px)' }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -6, scale: 1.01 }
                  }
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.58,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  animate={{
                    borderColor: isActive
                      ? 'rgba(255,138,28,0.24)'
                      : 'rgba(255,255,255,0.08)',
                    backgroundColor: isActive
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(255,255,255,0.025)',
                    boxShadow: isActive
                      ? '0 22px 60px rgba(255,138,28,0.08)'
                      : '0 10px 30px rgba(0,0,0,0.28)',
                  }}
                  className="group relative overflow-hidden rounded-[1.9rem] border p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:min-h-[220px] sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_44%)] opacity-80" />
                    <div
                      className={cn(
                        'absolute inset-0 opacity-0 transition duration-500',
                        isActive && 'opacity-100',
                      )}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,28,0.14),transparent_34%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,138,28,0.04))]" />
                    </div>
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[0.7rem] uppercase tracking-[0.28em] text-white/34">
                        {`0${index + 1}`}
                      </span>
                      <div
                        className={cn(
                          'rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] transition duration-300',
                          isActive
                            ? 'border-[#ff8a1c]/20 bg-[#ff8a1c]/8 text-[#ffb466]'
                            : 'border-white/10 bg-white/[0.03] text-white/42',
                        )}
                      >
                        {detail.kicker}
                      </div>
                    </div>

                    <div className="mt-8 flex items-start gap-4">
                      <StepBadge
                        circles={step.circles}
                        isActive={isActive}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                      <div className="min-w-0">
                        <div className="text-[1.45rem] font-medium leading-[1.06] tracking-[-0.04em] text-white">
                          {step.label}
                        </div>
                        <p className="mt-3 max-w-[28ch] text-[0.96rem] leading-7 text-white/54">
                          {detail.preview}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent)]" />
                    </div>
                  </div>
                </Motion.button>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2.1rem] border border-white/8 bg-white/[0.03] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-7">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="absolute right-[-4rem] top-[-5rem] h-44 w-44 rounded-full bg-[#ff8a1c]/8 blur-3xl" />
              <div className="absolute left-[-2rem] bottom-[-4rem] h-36 w-36 rounded-full bg-sky-400/8 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                  <Sparkles className="size-4" />
                  {orchestration.eyebrow}
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-white/46">
                  {`0${currentStep + 1} / 04`}
                </div>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeItem.label}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 18, filter: 'blur(8px)' }
                    }
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: -12, filter: 'blur(8px)' }
                    }
                    transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5"
                  >
                    <div className="text-[0.72rem] uppercase tracking-[0.28em] text-white/34">
                      {activeCopy.kicker}
                    </div>
                    <h3 className="max-w-[16ch] text-[2rem] font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.4rem]">
                      {activeCopy.title}
                    </h3>
                    <p className="max-w-[34ch] text-[0.98rem] leading-8 text-white/58 sm:text-[1.02rem]">
                      {activeCopy.body}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {activeCopy.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/54"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </Motion.div>
                </AnimatePresence>

                <SystemPulseVisual
                  step={activeItem}
                  stepIndex={currentStep}
                  steps={orchestration.steps}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {orchestration.highlights.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 22, filter: 'blur(8px)' }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, filter: 'blur(0px)' }
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      borderColor: 'rgba(255,138,28,0.18)',
                      backgroundColor: 'rgba(255,255,255,0.045)',
                    }
              }
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.58,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[1.7rem] border border-white/8 bg-white/[0.025] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:min-h-[238px] sm:p-6"
            >
              <div className="text-[0.68rem] uppercase tracking-[0.34em] text-white/34">
                {item.eyebrow}
              </div>
              <div className="mt-5 text-[1.34rem] font-medium leading-[1.14] tracking-[-0.03em] text-white">
                {item.title}
              </div>
              <p className="mt-4 text-[0.98rem] leading-8 text-white/54">
                {item.text}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepBadge({ circles, isActive, shouldReduceMotion }) {
  return (
    <Motion.div
      animate={{
        y: isActive && !shouldReduceMotion ? -2 : 0,
        scale: isActive ? 1.03 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]"
    >
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition duration-500',
          isActive && 'opacity-100',
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,28,0.18),transparent_70%)]" />
      </div>
      <div className="relative flex -space-x-3">
        {circles.map((circle, index) => (
          <Motion.div
            key={index}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: isActive ? [1, 1.06, 1] : 1,
                    rotate: isActive && circle.pattern === 'primary' ? [0, 2, -2, 0] : 0,
                  }
            }
            transition={{
              duration: 1.4,
              delay: index * 0.08,
              repeat: isActive && !shouldReduceMotion ? Infinity : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn('size-8 rounded-full border', {
              'border-white/16': circle.pattern === 'none',
              'border-[#ff8a1c]/68 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.16),rgba(255,255,255,0.16)_1px,transparent_1px,transparent_4px)]':
                circle.pattern === 'border',
              'border-[#ff8a1c]/78 bg-[repeating-linear-gradient(-45deg,rgba(255,138,28,0.8),rgba(255,138,28,0.8)_1px,transparent_1px,transparent_4px)]':
                circle.pattern === 'primary',
              'border-sky-400/84 bg-[repeating-linear-gradient(-45deg,rgba(56,189,248,0.82),rgba(56,189,248,0.82)_1px,transparent_1px,transparent_4px)]':
                circle.pattern === 'blue',
            })}
          />
        ))}
      </div>
    </Motion.div>
  )
}

function SystemPulseVisual({ step, stepIndex, steps, shouldReduceMotion }) {
  return (
    <div className="relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[320px] sm:p-5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 sm:h-64 sm:w-64" />
        <div className="absolute left-1/2 top-[38%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 sm:h-52 sm:w-52" />
        <div className="absolute left-1/2 top-[38%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-40 sm:w-40" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="relative flex h-[220px] w-full items-center justify-center sm:h-[250px]">
          <Motion.div
            aria-hidden="true"
            animate={{
              rotate: shouldReduceMotion ? 0 : 360,
            }}
            transition={{
              duration: 18,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-58 w-58 -translate-x-1/2 -translate-y-1/2 sm:h-66 sm:w-66"
          >
            <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-[#ff8a1c] shadow-[0_0_30px_rgba(255,138,28,0.26)]" />
          </Motion.div>

          <Motion.div
            aria-hidden="true"
            animate={{
              rotate: shouldReduceMotion ? 0 : -360,
            }}
            transition={{
              duration: 26,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-46 w-46 -translate-x-1/2 -translate-y-1/2 sm:h-54 sm:w-54"
          >
            <div className="absolute left-0 top-[68%] h-4 w-4 -translate-y-1/2 rounded-full bg-white/58" />
            <div className="absolute right-0 top-[32%] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white/28" />
          </Motion.div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 -space-x-4">
            {step.circles.map((circle, index) => (
              <Motion.div
                key={`${step.label}-${index}`}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                        scale: [1, 1.04, 1],
                      }
                }
                transition={{
                  duration: 1.8,
                  delay: index * 0.16,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn('size-14 rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] sm:size-16', {
                  'border-white/18 bg-white/[0.04]': circle.pattern === 'none',
                  'border-[#ff8a1c]/68 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.16),rgba(255,255,255,0.16)_1px,transparent_1px,transparent_4px)]':
                    circle.pattern === 'border',
                  'border-[#ff8a1c]/78 bg-[repeating-linear-gradient(-45deg,rgba(255,138,28,0.82),rgba(255,138,28,0.82)_1px,transparent_1px,transparent_4px)]':
                    circle.pattern === 'primary',
                  'border-sky-400/84 bg-[repeating-linear-gradient(-45deg,rgba(56,189,248,0.84),rgba(56,189,248,0.84)_1px,transparent_1px,transparent_4px)]':
                    circle.pattern === 'blue',
                })}
              />
            ))}
          </div>

          <Motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,28,0.16),transparent_70%)] blur-2xl"
            animate={{
              opacity: [0.48, 1, 0.48],
              scale: [0.96, 1.08, 0.96],
            }}
            transition={{
              duration: 2.4,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-start justify-center gap-4 sm:gap-5">
          {steps.map((item, index) => {
            const isActive = index === stepIndex
            return (
              <Motion.div
                key={`planet-${item.label}`}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: isActive ? [0, -5, 0] : [0, -2, 0],
                        rotate: [0, 360],
                        scale: isActive ? [1, 1.05, 1] : 1,
                      }
                }
                transition={{
                  duration: isActive ? 5.2 : 8,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: 'linear',
                  delay: index * 0.12,
                }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={cn(
                    'relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-16 sm:w-16',
                    isActive &&
                      'border-[#ff8a1c]/28 bg-[linear-gradient(180deg,rgba(255,138,28,0.14),rgba(255,138,28,0.04))] shadow-[0_0_28px_rgba(255,138,28,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]',
                  )}
                >
                  <div className="relative flex -space-x-2.5">
                    {item.circles.map((circle, circleIndex) => (
                      <div
                        key={`${item.label}-${circleIndex}`}
                        className={cn('size-5 rounded-full border sm:size-6', {
                          'border-white/18 bg-white/[0.04]': circle.pattern === 'none',
                          'border-[#ff8a1c]/68 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.16),rgba(255,255,255,0.16)_1px,transparent_1px,transparent_4px)]':
                            circle.pattern === 'border',
                          'border-[#ff8a1c]/78 bg-[repeating-linear-gradient(-45deg,rgba(255,138,28,0.82),rgba(255,138,28,0.82)_1px,transparent_1px,transparent_4px)]':
                            circle.pattern === 'primary',
                          'border-sky-400/84 bg-[repeating-linear-gradient(-45deg,rgba(56,189,248,0.84),rgba(56,189,248,0.84)_1px,transparent_1px,transparent_4px)]':
                            circle.pattern === 'blue',
                        })}
                      />
                    ))}
                  </div>
                  {isActive ? (
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,138,28,0.12),transparent_72%)]" />
                  ) : null}
                </div>
                <div
                  className={cn(
                    'text-[0.72rem] tracking-[0.01em] text-white/44 sm:text-[0.78rem]',
                    isActive && 'text-white/82',
                  )}
                >
                  {item.label}
                </div>
              </Motion.div>
            )
          })}
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-full border border-white/8 bg-black/20 px-4 py-2.5 backdrop-blur-sm">
          <div className="text-[0.62rem] uppercase tracking-[0.26em] text-white/36">
            Stage {`0${stepIndex + 1}`}
          </div>
          <div className="h-3.5 w-px bg-white/10" />
          <div className="text-[1rem] font-medium tracking-[-0.02em] text-white">
            {step.label}
          </div>
          <ArrowRight className="size-4 text-white/34" />
        </div>
      </div>
    </div>
  )
}
