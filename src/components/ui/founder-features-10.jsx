import React from 'react'
import { BriefcaseBusiness, Layers3, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function FounderFeatures({
  eyebrow,
  title,
  description,
  highlights,
  signals,
}) {
  const [primarySignal, ...secondarySignals] = signals

  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <div className="grid gap-4 lg:grid-cols-2">
        <FeatureCard className="flex min-h-[760px] flex-col overflow-hidden lg:min-h-[860px]">
          <CardHeader className="p-8 pb-5 sm:p-10 sm:pb-6">
            <CardHeading
              icon={Sparkles}
              title={eyebrow}
              description={title}
              className="max-w-2xl"
              titleClassName="mt-6 text-[3rem] leading-[0.92] tracking-[-0.07em] sm:text-[4.2rem]"
            />
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/62">
              {description}
            </p>
          </CardHeader>

          <CardContent className="mt-auto px-8 pb-8 pt-0 sm:px-10 sm:pb-10">
            <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5">
              <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/38">
                Founder Lens
              </div>
              <div className="mt-4 text-xl leading-8 tracking-[-0.04em] text-white/82">
                Практический результат для меня это не цифры ради доверия, а
                система решений, которая помогает быстрее увидеть сильный путь.
              </div>
            </div>
          </CardContent>
        </FeatureCard>

        <FeatureCard className="flex min-h-[760px] flex-col overflow-hidden lg:min-h-[860px]">
          <CardHeader className="p-8 pb-4 sm:p-10 sm:pb-5">
            <CardHeading
              icon={BriefcaseBusiness}
              title="Proof Signals"
              description="Практика на рынке, фокус на США и системный end-to-end подход."
            />
          </CardHeader>

          <CardContent className="flex-1 p-0">
            <div className="relative flex h-full flex-col border-t border-white/8 p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_36%)]" />
              <div className="relative grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
                <SignalCard
                  label={primarySignal.label}
                  value={primarySignal.value}
                  supporting={primarySignal.supporting}
                  note={primarySignal.note}
                  featured
                />
                <div className="grid gap-4">
                  {secondarySignals.map((signal) => (
                    <SignalCard
                      key={signal.label}
                      label={signal.label}
                      value={signal.value}
                      supporting={signal.supporting}
                      note={signal.note}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </FeatureCard>

        <FeatureCard className="overflow-hidden lg:col-span-2">
          <CardHeader className="p-8 pb-3 sm:p-10 sm:pb-4">
            <div className="mx-auto max-w-3xl text-center">
              <CardHeading
                icon={Layers3}
                title="Core Signals"
                description="Что формирует мой практический подход"
                className="items-center"
                titleClassName="mt-5 text-[2rem] leading-[1.1] tracking-[-0.05em] sm:text-[2.4rem]"
                descriptionClassName="text-white/84"
              />
              <p className="mt-5 text-base leading-8 text-white/56 sm:text-lg">
                Вся практическая работа в этой теме для меня держится на трех
                вещах: реальном опыте, прикладном мышлении и системном взгляде на
                запуск.
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-8 pt-2 sm:p-10 sm:pt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.index}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[0.65rem] tracking-[0.24em] text-white/54">
                    {item.index}
                  </div>
                  <div className="mt-6 text-lg leading-8 tracking-[-0.03em] text-white/84">
                    {item.title}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/54">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </FeatureCard>
      </div>
    </div>
  )
}

function FeatureCard({ children, className }) {
  return (
    <Card className={cn('group relative rounded-[2rem] shadow-zinc-950/5', className)}>
      <CardDecorator />
      {children}
    </Card>
  )
}

function CardDecorator() {
  return (
    <>
      <span className="absolute -left-px -top-px block size-3 border-l-2 border-t-2 border-[#ff8a1c]/65" />
      <span className="absolute -right-px -top-px block size-3 border-r-2 border-t-2 border-[#ff8a1c]/65" />
      <span className="absolute -bottom-px -left-px block size-3 border-b-2 border-l-2 border-[#ff8a1c]/65" />
      <span className="absolute -bottom-px -right-px block size-3 border-b-2 border-r-2 border-[#ff8a1c]/65" />
    </>
  )
}

function CardHeading({
  icon,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
        {React.createElement(icon, { className: 'size-4' })}
        {title}
      </span>
      <p
        className={cn(
          'mt-8 text-2xl font-semibold tracking-[-0.04em] text-white',
          titleClassName,
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  )
}

function SignalCard({ label, value, supporting, note, featured = false }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.035] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]',
        featured ? 'min-h-[320px] sm:min-h-[360px]' : 'min-h-[172px]',
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_42%)]" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/40">
          {label}
        </div>
        <div
          className={cn(
            'mt-auto tracking-[-0.07em] text-white',
            featured ? 'text-[4.8rem] leading-[0.9]' : 'text-[2.7rem] leading-[0.95]',
          )}
        >
          {value}
        </div>
        <div
          className={cn(
            'mt-3 max-w-[18ch] tracking-[-0.03em] text-white/84',
            featured ? 'text-xl leading-8' : 'text-lg leading-8',
          )}
        >
          {supporting}
        </div>
        <div className="mt-3 max-w-[28ch] text-sm leading-7 text-white/52">
          {note}
        </div>
      </div>
    </div>
  )
}
