import React from 'react'
import {
  CheckCircle2,
  PackageCheck,
  Pencil,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { HeadlineFrame } from '@/components/ui/headline-frame'
import { MobileReveal } from '@/components/ui/mobile-reveal'
import { cn } from '@/lib/utils'

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

        <div className="relative mt-8 sm:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-5 top-10 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,138,28,0.08),transparent_68%)] blur-3xl"
          />
          <div className="relative z-10 grid grid-cols-6 items-stretch gap-4 sm:gap-5 lg:gap-5">
            <MobileReveal delay={0.04} y={24} blur={10} variant="drift-left" className="col-span-full h-full lg:col-span-2">
            <FeaturePanel className="col-span-full h-full overflow-hidden lg:col-span-2">
              <CardContent className="relative flex h-full min-h-[320px] flex-col p-5 sm:min-h-[400px] sm:p-7 lg:h-[560px] xl:h-[590px]">
                <div className="relative flex h-[160px] items-center justify-center sm:h-[208px] lg:h-[178px]">
                  <div className="pointer-events-none absolute inset-x-[18%] top-[24%] bottom-[22%] rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                  <div className="pointer-events-none absolute inset-x-[18%] top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />
                  <div className="absolute inset-x-0 flex justify-center">
                    <LaunchUserFlow />
                  </div>
                </div>

                <div className="mt-auto space-y-3 text-left">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/48 sm:text-[0.64rem]">
                    <Sparkles className="size-4" />
                    Full Model
                  </div>
                  <h3 className="text-[1.55rem] font-medium leading-[1.06] tracking-[-0.055em] text-white sm:text-[1.85rem] lg:text-[2rem]">
                    {benefits.primary.title}
                  </h3>
                  <p className="text-[0.95rem] leading-7 text-white/60">
                    {benefits.primary.supporting}
                  </p>
                </div>
              </CardContent>
            </FeaturePanel>
            </MobileReveal>

            <MobileReveal delay={0.1} y={24} blur={10} variant="pop" className="col-span-full h-full sm:col-span-3 lg:col-span-2">
            <FeaturePanel className="col-span-full h-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="flex h-full min-h-[320px] flex-col p-5 sm:min-h-[400px] sm:p-7 lg:h-[560px] xl:h-[590px]">
	                <div className="relative flex h-[190px] items-center justify-center sm:h-[240px] lg:h-[230px]">
	                  <div className="relative flex aspect-square size-[8rem] rounded-full border border-white/10 before:absolute before:-inset-4 before:rounded-full before:border before:border-white/6 after:absolute after:-inset-8 after:rounded-full after:border after:border-white/5 sm:size-[10rem] sm:before:-inset-5 sm:after:-inset-10">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]" />
                    <div className="absolute inset-[1.25rem] rounded-full border border-dashed border-white/12 sm:inset-[1.65rem]" />
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[#ff8a1c] shadow-[0_0_24px_rgba(255,138,28,0.28)] sm:h-5 sm:w-5" />
                    <div className="absolute bottom-5 left-3 h-3.5 w-3.5 rounded-full bg-white/55 shadow-[0_0_18px_rgba(255,255,255,0.08)] sm:bottom-6 sm:left-4 sm:h-4 sm:w-4" />
                    <div className="absolute bottom-8 right-2.5 h-3 w-3 rounded-full bg-white/28 sm:bottom-10 sm:right-3 sm:h-3.5 sm:w-3.5" />
                    <PackageCheck className="m-auto size-8 text-white/72 sm:size-10" strokeWidth={1.15} />
                  </div>
                </div>

                <div className="relative z-10 mt-auto space-y-3 text-left">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/48 sm:text-[0.64rem]">
                    <Shield className="size-4" />
                    Operations
                  </div>
                  <h3 className="text-[1.5rem] font-medium leading-[1.06] tracking-[-0.055em] text-white sm:text-[1.75rem] lg:text-[1.9rem]">
                    {benefits.logistics.title}
                  </h3>
                  <p className="text-[0.95rem] leading-7 text-white/60">
                    {benefits.logistics.supporting}
                  </p>
                </div>
              </CardContent>
            </FeaturePanel>
            </MobileReveal>

            <MobileReveal delay={0.16} y={24} blur={10} variant="drift-right" className="col-span-full h-full lg:col-span-2">
            <FeaturePanel className="col-span-full h-full overflow-hidden lg:col-span-2">
              <CardContent className="flex h-full min-h-[320px] flex-col p-5 sm:min-h-[400px] sm:p-7 lg:h-[560px] xl:h-[590px]">
                <AppleHealthChart />

                <div className="relative z-10 mt-auto space-y-3 pt-5 text-left sm:pt-6">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/48 sm:text-[0.64rem]">
                    <Pencil className="size-4" />
                    Distribution
                  </div>
                  <h3 className="whitespace-pre-line text-[1.55rem] font-medium leading-[1.06] tracking-[-0.055em] text-white sm:text-[1.8rem] lg:text-[1.95rem]">
                    {benefits.marketing.title}
                  </h3>
                  <p className="text-[0.95rem] leading-7 text-white/60">
                    {benefits.marketing.supporting}
                  </p>
                </div>
              </CardContent>
            </FeaturePanel>
            </MobileReveal>

            <MobileReveal delay={0.22} y={26} blur={12} variant="reveal" className="col-span-full">
            <FeaturePanel className="col-span-full overflow-hidden">
              <CardContent className="grid h-full gap-6 p-5 sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 lg:p-8">
                <div className="relative z-10 flex flex-col justify-between space-y-8 lg:max-w-xl">
                  <div className="relative flex aspect-square size-12 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/6">
                    <CheckCircle2 className="m-auto size-5 text-white/74" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    <div className="text-[0.68rem] uppercase tracking-[0.32em] text-white/42">
                      System
                    </div>
                    <h3 className="text-2xl font-medium tracking-[-0.05em] text-white sm:text-3xl">
                      <span className="block">Готовую структуру действий</span>
                      <span className="relative mt-1 block w-fit text-white/88">
                        <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/38" />
                        <span className="relative">вместо хаоса</span>
                      </span>
                    </h3>
                    <p className="text-sm leading-7 text-white/56">
                      {benefits.structure.supporting}
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-4 pb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-6 sm:p-5">
                  <div className="relative grid gap-4 sm:grid-cols-3">
                    {benefits.structure.items.map((item, index) => (
                      <div
                        key={item}
                        className="group relative flex min-h-[112px] flex-col rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] px-4 py-4 transition-all duration-300 hover:border-[#ff8a1c]/30 hover:bg-white/[0.055] sm:min-h-[132px] sm:px-5 sm:py-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[0.68rem] uppercase tracking-[0.3em] text-white/34">
                            {`0${index + 1}`}
                          </span>
                          <Users
                            className="size-4 text-[#ff8a1c] transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="text-xl font-medium tracking-[-0.04em] text-white">
                            {item}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </FeaturePanel>
            </MobileReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturePanel({ children, className }) {
  return (
    <Card
      className={[
        'group relative overflow-hidden rounded-[1.75rem] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[#ff8a1c]/24 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.085),rgba(255,255,255,0.03))] sm:rounded-[2rem]',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_34%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)] opacity-60" />
      <div className="absolute inset-x-8 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(255,138,28,0.08),transparent_72%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      {children}
    </Card>
  )
}

function LaunchUserFlow() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[132px] w-[min(210px,68vw)] sm:h-[170px] sm:w-[232px]"
    >
      <div className="relative z-10 flex h-full translate-y-[22px] flex-col items-center justify-center gap-1.5 sm:translate-y-[30px] sm:gap-2">
        <LaunchFlowButton>Выбор</LaunchFlowButton>
        <LaunchFlowArrow />
        <LaunchFlowButton>Оценка</LaunchFlowButton>
        <LaunchFlowArrow />
        <LaunchFlowButton accent>Реализация</LaunchFlowButton>
      </div>
    </div>
  )
}

function LaunchFlowButton({ children, accent = false }) {
  return (
    <div
      className={cn(
        'flex h-9 w-[140px] items-center justify-center rounded-[0.9rem] border text-[0.68rem] font-medium tracking-[0.08em] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out sm:h-11 sm:w-[164px] sm:text-[0.78rem]',
        accent
          ? 'border-[#ffb56a]/54 bg-[linear-gradient(180deg,#ffac45_0%,#ff8d12_54%,#ff6f00_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_28px_rgba(255,122,12,0.2)]'
          : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-white/78',
      )}
    >
      {children}
    </div>
  )
}

function LaunchFlowArrow() {
  return (
    <div
      className="relative flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5"
    >
      <span className="absolute top-0 h-2.5 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06))] sm:h-3" />
      <span className="absolute bottom-[1px] h-1.5 w-1.5 rotate-45 border-b border-r border-[#ff8a1c]/72 sm:h-2 sm:w-2" />
    </div>
  )
}

function AppleHealthChart() {
  const labels = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] px-4 pb-4 pt-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.12)] sm:rounded-[1.6rem] sm:px-5 sm:pb-5 sm:pt-5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="absolute inset-x-5 bottom-[3.45rem] h-px bg-white/[0.05]" />
        <div className="absolute inset-x-5 top-[42%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-x-5 top-[63%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute bottom-[3.45rem] left-[28%] top-[5.4rem] w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute bottom-[3.45rem] left-[54%] top-[5.4rem] w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.025),transparent)]" />
        <div className="absolute bottom-[3.45rem] left-[80%] top-[5.4rem] w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.03),transparent)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.56rem] uppercase tracking-[0.26em] text-white/34 sm:text-[0.62rem] sm:tracking-[0.3em]">
            Просмотры
          </div>
          <div className="mt-2 text-[2.05rem] font-medium tracking-[-0.065em] text-white sm:text-3xl">
            83K
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.22em] text-white/54 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:text-[0.65rem] sm:tracking-[0.28em]">
          7D
        </div>
      </div>

      <div className="relative mt-5 h-[152px] sm:mt-6 sm:h-[176px]">
        <svg
          aria-hidden="true"
          viewBox="0 0 360 190"
          className="absolute inset-0 h-full w-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="health-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="35%" stopColor="#ff9b3d" />
              <stop offset="60%" stopColor="#ff7a00" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.22)" />
            </linearGradient>
            <linearGradient id="health-area" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,138,28,0.16)" />
              <stop offset="70%" stopColor="rgba(255,138,28,0.04)" />
              <stop offset="100%" stopColor="rgba(255,138,28,0)" />
            </linearGradient>
          </defs>
          <path
            d="M20 128 C 52 118, 70 94, 104 86 C 132 80, 150 34, 180 30 C 214 24, 238 102, 270 92 C 300 84, 326 56, 340 50 L 340 166 L 20 166 Z"
            fill="url(#health-area)"
          />
          <path
            d="M20 128 C 52 118, 70 94, 104 86 C 132 80, 150 34, 180 30 C 214 24, 238 102, 270 92 C 300 84, 326 56, 340 50"
            fill="none"
            stroke="rgba(255,138,28,0.12)"
            strokeWidth="10"
            strokeLinecap="round"
            filter="blur(10px)"
          />
          <path
            d="M20 128 C 52 118, 70 94, 104 86 C 132 80, 150 34, 180 30 C 214 24, 238 102, 270 92 C 300 84, 326 56, 340 50"
            fill="none"
            stroke="url(#health-line)"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <circle cx="180" cy="30" r="16" fill="rgba(255,138,28,0.14)" />
          <circle cx="180" cy="30" r="7" fill="#ff8a1c" />
          <circle cx="180" cy="30" r="3" fill="#ffd4a6" />
        </svg>

        <div className="absolute inset-x-1.5 bottom-0 flex items-center justify-between gap-1.5 sm:inset-x-2 sm:gap-2">
          {labels.map((label) => (
            <div
              key={label}
              className="flex flex-1 items-center justify-center text-[0.52rem] uppercase tracking-[0.2em] text-white/34 sm:text-[0.62rem] sm:tracking-[0.24em]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
