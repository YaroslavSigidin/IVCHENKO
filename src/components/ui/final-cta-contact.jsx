import React, { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import vladPhoto from '../../../VLAD.png'

import { Button } from '@/components/ui/button'
import { HeadlineFrame } from '@/components/ui/headline-frame'
import { MobileReveal } from '@/components/ui/mobile-reveal'
import { cn } from '@/lib/utils'

function InputShell({ children }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors focus-within:border-[#ff8a1c]/60 focus-within:bg-[#ff8a1c]/[0.06]">
      {children}
    </div>
  )
}

export function FinalCtaContact({
  title,
}) {
  const [selectedFormat, setSelectedFormat] = useState('SYNDICATE')

  const formatOptions = [
    { name: 'START', price: 'от $299' },
    { name: 'SYNDICATE', price: 'от $799' },
    { name: 'PRIVATE 1:1', price: 'По заявке' },
  ]

  return (
    <section className="relative px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
      <div className="mx-auto w-[min(1320px,94vw)]">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-5 lg:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative z-10 grid grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-[1fr_0.9fr]">
            <MobileReveal variant="drift-left" y={28} blur={12} className="h-full">
            <div className="rounded-[1.35rem] border border-white/8 bg-black/35 p-4 sm:rounded-[2rem] sm:p-7 lg:p-8">
              <div className="max-w-2xl text-left lg:mx-auto lg:text-center">
                <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
                  Final CTA
                </div>
                <HeadlineFrame className="mt-4">
                  <h2 className="text-[1.7rem] font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl">
                    {title}
                  </h2>
                </HeadlineFrame>
              </div>

              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:gap-3">
                {[
                  'Выбираете подходящий формат участия',
                  'Оставляете контакты для связи или входа',
                  'Получаете следующий понятный шаг без хаоса',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ff8a1c]" />
                    <div className="text-[0.95rem] leading-6 text-white/72 sm:text-base sm:leading-7">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4"
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/58">
                    Имя
                  </label>
                  <InputShell>
                    <input
                      name="name"
                      type="text"
                      placeholder="Как к вам обращаться"
                      className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none sm:py-4"
                    />
                  </InputShell>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/58">
                      Email
                    </label>
                    <InputShell>
                      <input
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                        className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none sm:py-4"
                      />
                    </InputShell>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/58">
                      Telegram / WhatsApp
                    </label>
                    <InputShell>
                      <input
                        name="messenger"
                        type="text"
                        placeholder="@username или номер"
                        className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none sm:py-4"
                      />
                    </InputShell>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white/58">
                    Выберите формат
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {formatOptions.map((option) => (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() => setSelectedFormat(option.name)}
                        className={cn(
                          'rounded-[1.15rem] border px-4 py-3.5 text-left text-sm transition sm:rounded-[1.25rem] sm:py-4',
                          selectedFormat === option.name
                            ? 'border-[#ff8a1c]/70 bg-[#ff8a1c]/12 text-white'
                            : 'border-white/10 bg-white/[0.03] text-white/62 hover:border-white/18 hover:bg-white/[0.05]',
                        )}
                      >
                        <div className="text-[0.65rem] uppercase tracking-[0.28em]">
                          Format
                        </div>
                        <div className="mt-2 text-base tracking-[-0.03em] text-white">
                          {option.name}
                        </div>
                        <div
                          className={cn(
                            'mt-1 text-sm font-medium tracking-[-0.02em]',
                            selectedFormat === option.name ? 'text-[#ffcfaa]' : 'text-white/50',
                          )}
                        >
                          {option.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-white px-7 text-black shadow-[0_12px_26px_rgba(255,255,255,0.08)] hover:bg-white/90"
                  >
                    Отправить
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
            </MobileReveal>

            <MobileReveal variant="drift-right" y={30} blur={12} delay={0.08} className="h-full">
            <div className="relative h-full min-h-[250px] overflow-hidden rounded-[1.35rem] border border-[#ffb466]/20 bg-[linear-gradient(160deg,#ff9a32_0%,#ff7b11_46%,#d65300_100%)] p-2 sm:min-h-[420px] sm:rounded-[2rem] sm:p-5 lg:min-h-full">
              <Motion.div
                initial={{ opacity: 0, y: 28, scale: 0.98, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-2 rounded-[1.1rem] bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.28),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(255,224,189,0.24),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(118,39,0,0.24),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))] sm:inset-4 sm:rounded-[1.75rem]"
              />
              <div className="absolute inset-2 rounded-[1.1rem] border border-white/12 sm:inset-4 sm:rounded-[1.75rem]" />
              <div className="absolute -right-10 top-5 h-24 w-24 rounded-full bg-white/12 blur-3xl sm:-right-16 sm:top-10 sm:h-48 sm:w-48" />
              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#ffd0a4]/10 blur-3xl sm:hidden" />
              <div className="absolute inset-x-2 bottom-2 top-2 overflow-hidden rounded-[1.1rem] sm:inset-4 sm:rounded-[1.75rem]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_28%,rgba(0,0,0,0.14)_100%)]" />
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/16 bg-black/14 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.26em] text-white/78 backdrop-blur-md sm:hidden">
                  Личный формат
                </div>
                <div className="absolute bottom-4 left-4 z-10 max-w-[11rem] sm:hidden">
                  <div className="text-[1.15rem] font-medium leading-[1] tracking-[-0.05em] text-white">
                    Прямой доступ к Владиславу
                  </div>
                  <div className="mt-2 text-[0.82rem] leading-5 text-white/72">
                    Персональная работа, разбор решений и быстрый маршрут без лишних шагов.
                  </div>
                </div>
                <div className="absolute bottom-3 left-[46%] h-12 w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(92,28,0,0.34),transparent_72%)] blur-2xl sm:bottom-6 sm:left-1/2 sm:w-[56%]" />
                <Motion.img
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  src={vladPhoto}
                  alt="Владислав"
                  className="absolute bottom-0 right-[-2%] z-10 h-[98%] w-auto max-w-none object-contain object-right-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.28)] sm:right-1 sm:h-[95%] lg:right-[-2%] lg:h-[98%]"
                />
              </div>
            </div>
            </MobileReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
