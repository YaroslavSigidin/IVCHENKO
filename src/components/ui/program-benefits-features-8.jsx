import React from 'react'
import { CheckCircle2, Pencil, Shield, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { HeadlineFrame } from '@/components/ui/headline-frame'
import { MobileReveal } from '@/components/ui/mobile-reveal'

const cardMeta = [
  { key: 'primary', label: 'Full Model', icon: Sparkles },
  { key: 'logistics', label: 'Operations', icon: Shield },
  { key: 'marketing', label: 'Creators', icon: Pencil },
]

export function ProgramBenefitsSection({
  eyebrow,
  title,
  description,
  benefits,
}) {
  return (
    <section className="py-2 sm:py-4">
      <div className="mx-auto max-w-3xl px-0 lg:max-w-[78rem]">
        <div className="text-center">
          <MobileReveal delay={0.02} y={18} blur={8} variant="fade">
            <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
              {eyebrow}
            </div>
          </MobileReveal>
          <MobileReveal delay={0.08} y={24} blur={10} variant="pop">
            <HeadlineFrame className="mx-auto mt-4 max-w-4xl">
              <h2 className="text-[2rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
                {title}
              </h2>
            </HeadlineFrame>
          </MobileReveal>
          <MobileReveal delay={0.14} y={20} blur={10} variant="rise">
            <p className="mx-auto mt-4 max-w-3xl text-[0.98rem] leading-7 text-white/62 sm:mt-5 sm:text-lg sm:leading-8">
              {description}
            </p>
          </MobileReveal>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 xl:grid-cols-3">
          {cardMeta.map((item, index) => {
            const data = benefits[item.key]
            const Icon = item.icon

            return (
              <MobileReveal
                key={item.key}
                delay={0.05 * index}
                y={24}
                blur={10}
                variant={index === 0 ? 'drift-left' : index === 1 ? 'pop' : 'drift-right'}
              >
                <FeaturePanel>
                  <CardContent className="flex h-full min-h-[860px] flex-col p-0">
                    <ProgramPreview image={data.preview} label={data.previewLabel} />

                    <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/48 sm:text-[0.64rem]">
                      <Icon className="size-4" />
                      {item.label}
                    </div>

                    <h3 className="mt-4 max-w-[13ch] text-[1.24rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[1.42rem] lg:text-[1.6rem]">
                      {data.title}
                    </h3>

                    <p className="mt-4 max-w-[31ch] text-[0.9rem] leading-[1.72] text-white/58 sm:text-[0.93rem] sm:leading-[1.76]">
                      {data.supporting}
                    </p>

                    <BenefitBulletList items={data.items} className="mt-5" />
                    </div>
                  </CardContent>
                </FeaturePanel>
              </MobileReveal>
            )
          })}
        </div>

        <MobileReveal delay={0.2} y={26} blur={10} variant="reveal">
          <FeaturePanel className="mt-4 sm:mt-5">
            <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
              <div className="space-y-4 text-left">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/48 sm:text-[0.64rem]">
                  <CheckCircle2 className="size-4" />
                  Toolkit
                </div>
                <h3 className="max-w-[16ch] text-[1.56rem] font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-[1.9rem] lg:text-[2.15rem]">
                  Готовую структуру действий,
                  <br />
                  контакты и рабочие материалы
                </h3>
                <p className="max-w-[39ch] text-[0.92rem] leading-[1.8] text-white/58 sm:text-[0.95rem]">
                  Не просто теория, а база, к которой вы возвращаетесь в работе:
                  контакты, сервисы, шаблоны, логистика, AI-инструменты и ориентиры
                  для запуска без хаоса.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {benefits.structure.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-left text-[0.86rem] leading-[1.65] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:text-[0.9rem]"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8a1c]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </FeaturePanel>
        </MobileReveal>
      </div>
    </section>
  )
}

function BenefitBulletList({ items = [], className = '' }) {
  if (!items.length) return null

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-2.5 text-left text-[0.84rem] leading-[1.7] text-white/66 sm:text-[0.9rem]"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8a1c]" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function ProgramPreview({ image, label }) {
  if (!image) return null

  return (
    <div className="overflow-hidden rounded-t-[1.75rem] border-b border-white/8 bg-black/20 sm:rounded-t-[2rem]">
      <img
        src={image}
        alt={label}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  )
}

function FeaturePanel({ children, className = '' }) {
  return (
    <Card
      className={[
        'group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:rounded-[2rem]',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_36%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-70" />
      {children}
    </Card>
  )
}
