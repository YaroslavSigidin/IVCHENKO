'use client'

import { cn } from '@/lib/utils'

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}) {
  const isVertical = direction === 'vertical'
  const animationName = isVertical
    ? reverse
      ? 'infinite-slider-vertical-reverse'
      : 'infinite-slider-vertical'
    : reverse
      ? 'infinite-slider-horizontal-reverse'
      : 'infinite-slider-horizontal'

  const trackStyle = {
    gap: `${gap}px`,
    flexDirection: isVertical ? 'column' : 'row',
    animationName,
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    willChange: 'transform',
  }

  return (
    <div
      className={cn('group overflow-hidden', className)}
      style={durationOnHover ? { '--slider-hover-duration': `${durationOnHover}s` } : undefined}
    >
      <style>{`
        @keyframes infinite-slider-horizontal {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes infinite-slider-horizontal-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        @keyframes infinite-slider-vertical {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -50%, 0); }
        }

        @keyframes infinite-slider-vertical-reverse {
          from { transform: translate3d(0, -50%, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>
      <div
        className={cn(
          'flex w-max',
          durationOnHover
            ? 'transition-[animation-duration] duration-300 ease-out group-hover:[animation-duration:var(--slider-hover-duration)]'
            : '',
        )}
        style={trackStyle}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
