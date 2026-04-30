import React from 'react'

import { MobileReveal } from '@/components/ui/mobile-reveal'
import { cn } from '@/lib/utils'

const bentoRevealVariants = ['reveal', 'tilt-left', 'pop', 'tilt-right', 'drift-left', 'drift-right']

export function BentoGrid({ items = [] }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-fr">
      {items.map((item, index) => (
        <MobileReveal
          key={item.title ?? index}
          delay={0.05 * index}
          y={24}
          blur={10}
          variant={bentoRevealVariants[index % bentoRevealVariants.length]}
          className={cn(item.colSpan === 2 && 'md:col-span-2')}
        >
          <article
            className={cn(
              'group relative min-h-[228px] overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/14 hover:bg-white/[0.045] hover:shadow-[0_18px_50px_rgba(0,0,0,0.34)] sm:p-6 md:h-full md:min-h-[26rem]',
              item.hasPersistentHover &&
                'border-white/12 bg-white/[0.045] shadow-[0_18px_50px_rgba(0,0,0,0.3)]',
            )}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
              <div
                className={cn(
                  'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_46%)] transition-opacity duration-300',
                  item.hasPersistentHover ? 'opacity-80' : 'opacity-0 group-hover:opacity-80',
                )}
              />
              <div
                className={cn(
                  'absolute inset-0 [mask-image:linear-gradient(180deg,white,transparent)] transition-opacity duration-300',
                  item.hasPersistentHover ? 'opacity-35' : 'opacity-0 group-hover:opacity-35',
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:6px_6px]" />
              </div>
              <div
                className={cn(
                  'absolute inset-0 rounded-[inherit] bg-gradient-to-br from-transparent via-white/[0.04] to-transparent transition-opacity duration-300',
                  item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                )}
              />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-white/16 group-hover:bg-white/[0.06]">
                  {item.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/48 transition-colors duration-300 group-hover:border-white/16 group-hover:text-white/72">
                  {item.status || 'Active'}
                </span>
              </div>

              <div className="mt-7 space-y-3">
                <h3 className="text-xl font-medium leading-[1.15] tracking-[-0.04em] text-white">
                  {item.title}
                  {item.meta ? (
                    <span className="ml-2 align-middle text-xs font-normal uppercase tracking-[0.22em] text-white/38">
                      {item.meta}
                    </span>
                  ) : null}
                </h3>
                <p className="max-w-[34ch] text-sm leading-7 text-white/58 sm:text-[15px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag, tagIndex) => (
                    <span
                      key={`${item.title}-${tagIndex}`}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-white/46 transition-all duration-200 group-hover:border-white/12 group-hover:text-white/62"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={cn(
                    'text-[0.72rem] uppercase tracking-[0.22em] text-white/42 transition-opacity duration-300',
                    item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                  )}
                >
                  {item.cta || 'Подробнее'}
                </span>
              </div>
            </div>
          </article>
        </MobileReveal>
      ))}
    </div>
  )
}
