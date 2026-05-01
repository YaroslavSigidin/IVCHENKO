import React from 'react'
import { motion as Motion, useReducedMotion } from 'motion/react'
import { Globe, MessageCircleMore, Package, Play, Send } from 'lucide-react'

import { cn } from '@/lib/utils'

const footerLinks = [
  {
    label: 'Страница',
    links: [
      { title: 'Программа', href: '#program' },
      { title: 'Результаты', href: '#results' },
      { title: 'Тарифы', href: '#pricing' },
      { title: 'FAQ', href: '#faq' },
    ],
  },
  {
    label: 'Форматы',
    links: [
      { title: 'START', href: '#pricing' },
      { title: 'SYNDICATE', href: '#pricing' },
      { title: 'PRIVATE 1:1', href: '#pricing' },
      { title: 'Оставить заявку', href: '/apply-private' },
    ],
  },
  {
    label: 'Материалы',
    links: [
      { title: 'Бесплатные мини-уроки', href: '/' },
      { title: 'Подробнее о программе', href: '#program' },
      { title: 'Отзывы', href: '#results' },
      { title: 'Поддержка', href: '#faq' },
    ],
  },
      {
        label: 'Соцсети',
        links: [
          { title: 'Telegram', href: '#', icon: Send },
          { title: 'Instagram', href: '#', icon: MessageCircleMore },
          { title: 'YouTube', href: '#', icon: Play },
          { title: 'LinkedIn', href: '#', icon: Globe },
        ],
      },
]

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-[min(1320px,94vw)]">
        <div className="glass-panel relative overflow-hidden rounded-t-[2rem] border-t px-6 py-12 lg:px-10 lg:py-16">
          <div className="bg-white/18 absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 blur-sm" />
          <div className="absolute inset-0 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />

          <div className="relative z-10 grid w-full gap-10 xl:grid-cols-[0.9fr_2.1fr] xl:gap-8">
            <AnimatedContainer className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff8a1c]/18 bg-[#ff8a1c]/[0.08] text-[#ff9a33] shadow-[0_0_22px_rgba(255,138,28,0.12)]">
                <Package className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <div>
                <div className="text-lg font-medium tracking-[-0.04em] text-white">
                  TikTok Shop
                </div>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/58">
                  Пошаговая программа запуска TikTok Shop бизнеса в США для тех,
                  кто хочет двигаться системно, а не вслепую.
                </p>
              </div>
              <p className="pt-6 text-sm text-white/42">
                © {new Date().getFullYear()} TikTok Shop. All rights reserved.
              </p>
            </AnimatedContainer>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {footerLinks.map((section, index) => (
                <AnimatedContainer key={section.label} delay={0.12 + index * 0.08}>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.32em] text-white/42">
                      {section.label}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-white/58">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center gap-2 transition duration-300 hover:text-white"
                          >
                            {link.icon ? <link.icon className="size-4" /> : null}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={cn(className)}
    >
      {children}
    </Motion.div>
  )
}
