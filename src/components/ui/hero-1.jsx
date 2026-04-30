import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket } from 'lucide-react'
import { LogoCloud } from '@/components/ui/logo-cloud-3'

const logos = [
  {
    label: 'TikTok Shop',
  },
  {
    label: 'Amazon',
  },
  {
    label: 'Shopify',
  },
  {
    label: 'Meta Ads',
  },
  {
    label: 'Alibaba',
  },
  {
    label: 'ShipBob',
  },
  {
    label: 'Stripe',
  },
]

export function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden lg:block"
      >
        <div className="absolute inset-0 -top-14 -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-5 px-0 pb-14 pt-24 sm:gap-5 sm:pb-24 sm:pt-28 lg:pb-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10 size-full overflow-hidden">
          <div className="absolute left-1/2 top-28 h-56 w-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.085),transparent_70%)] blur-3xl sm:top-28 sm:h-64 sm:w-[34rem]" />
          <div className="absolute left-1/2 top-[24rem] h-28 w-[15rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,28,0.12),transparent_72%)] blur-3xl sm:hidden" />
        </div>

        <a
          className={cn(
            'group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 shadow-[0_16px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl',
            'animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards delay-500 duration-500 ease-out',
          )}
          href="#program"
        >
          <Rocket className="size-3 text-white/55" />
          <span className="text-[0.72rem] tracking-[0.02em] text-white/72 sm:text-xs">
            новый поток программы открыт
          </span>
          <span className="block h-5 border-l border-white/10" />
          <ArrowRight className="size-3 duration-150 ease-out group-hover:translate-x-1" />
        </a>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <span className="animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards text-[0.68rem] uppercase tracking-[0.34em] text-white/34 delay-[120ms] duration-500 ease-out sm:hidden">
            TikTok Shop · USA
          </span>

          <h1
            className={cn(
              'animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards text-center tracking-tight delay-100 duration-500 ease-out sm:hidden',
              'max-w-none text-[2.18rem] font-medium leading-[0.98] tracking-[-0.075em] text-shadow-[0_0px_50px_rgba(255,255,255,0.15)]',
            )}
          >
            <span className="block">Пошаговая программа запуска</span>
            <span className="block">TikTok Shop бизнеса</span>
            <span className="block bg-[linear-gradient(180deg,#ffbc5c_0%,#ff9b2d_44%,#ff7d08_100%)] bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(255,138,28,0.24)]">
              в США в 2026
            </span>
          </h1>

          <h1
            className={cn(
              'hidden animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards text-center tracking-tight delay-100 duration-500 ease-out sm:block sm:text-5xl lg:text-7xl',
              'max-w-5xl font-medium leading-[0.88] text-shadow-[0_0px_50px_rgba(255,255,255,0.15)]',
            )}
          >
            Пошаговая программа запуска
            <br />
            TikTok Shop бизнеса в США
            <br />
            <span className="bg-[linear-gradient(180deg,#ffbc5c_0%,#ff9b2d_44%,#ff7d08_100%)] bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(255,138,28,0.24)]">
              в 2026
            </span>
          </h1>
        </div>

        <p className="animate-in fade-in slide-in-from-bottom-10 mx-auto max-w-[17.5rem] fill-mode-backwards text-balance text-center text-[1rem] leading-[1.65] tracking-[0.01em] text-white/68 delay-200 duration-500 ease-out sm:max-w-3xl sm:text-lg sm:leading-8 md:text-xl">
          <span className="sm:hidden">
            Запусти товар, найди поставщика, подключи рекламу и инфлюенсеров -
            выйди на первые продажи за 6-8 недель!
          </span>
          <span className="hidden sm:inline">
            Запусти товар, найди поставщика, подключи рекламу и инфлюенсеров -
            выйди на первые продажи за 6-8 недель!
          </span>
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-10 flex w-full max-w-[22rem] flex-col items-stretch justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#program"
            className="inline-flex h-14 w-full items-center justify-center rounded-[1.35rem] border border-white/12 bg-white px-6 text-[0.98rem] font-medium text-black shadow-[0_18px_34px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-white/92 sm:h-12 sm:w-auto sm:rounded-full sm:px-8 sm:text-sm"
          >
            <span className="text-black">Посмотреть программу</span>
          </a>
          <Button
            asChild
            className="h-14 w-full rounded-[1.35rem] bg-[linear-gradient(180deg,#ff8a1c,#f06500)] px-6 text-black shadow-[0_18px_34px_rgba(255,115,0,0.32)] hover:opacity-95 sm:h-12 sm:w-auto sm:rounded-full"
            size="lg"
          >
            <a href="#pricing">
              Выбрать формат участия
              <ArrowRight className="ms-2 size-4" />
            </a>
          </Button>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 mt-4 w-full max-w-[22rem] fill-mode-backwards delay-[360ms] duration-700 ease-out sm:mt-6 sm:max-w-6xl">
          <div className="relative mx-auto w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d0d0fb8] shadow-[0_28px_80px_rgba(0,0,0,0.34)] backdrop-blur-md sm:rounded-[1.5rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 z-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-2xl"
            />
            <iframe
              className="relative z-10 aspect-video w-full"
              src="https://www.youtube.com/embed/DA6vHxSvoQE?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
              title="Видео о программе запуска TikTok Shop в США"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 flex w-full max-w-[22rem] flex-col gap-2.5 sm:mt-6 sm:max-w-6xl sm:flex-row sm:items-center sm:justify-center sm:gap-3 lg:mt-8 lg:gap-4">
          {[
            'Пошаговая система запуска',
            'Подходит новичкам и тем, кто уже пробовал',
            'Фокус на рынке США и реальной практике',
          ].map((item, index, items) => (
            <div
              key={item}
              className="flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-1 sm:flex-row sm:justify-center sm:gap-3"
            >
              <div
                className={cn(
                  'inline-flex min-h-[3.25rem] w-full items-center justify-center border-b border-white/10 bg-transparent px-5 py-3 text-center text-[0.82rem] leading-snug tracking-[0.01em] text-white/72 transition-colors duration-300 sm:h-13 sm:min-h-0 sm:flex-1 sm:rounded-[1.15rem] sm:border sm:border-white/10 sm:bg-white/[0.04] sm:px-6 sm:text-sm sm:leading-none sm:whitespace-nowrap sm:backdrop-blur-xl',
                  'hover:border-[#ff8a1c]/55 hover:text-white',
                )}
              >
                {item}
              </div>
              {index < items.length - 1 ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8a1c] shadow-[0_0_12px_rgba(255,138,28,0.28)] sm:hidden"
                  />
                  <span
                    aria-hidden="true"
                    className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8a1c] shadow-[0_0_12px_rgba(255,138,28,0.28)] sm:block"
                  />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LogosSection() {
  return (
    <section className="relative mx-auto max-w-[1320px] space-y-4 border-t border-white/10 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-4xl">
        <LogoCloud logos={logos} />
      </div>
    </section>
  )
}
