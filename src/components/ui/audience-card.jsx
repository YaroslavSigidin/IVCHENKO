import React from 'react'

import { cn } from '@/lib/utils'

function AudienceCard({ className, ...props }) {
  return (
    <div
      className={cn(
        'group relative min-h-[300px] overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.032),rgba(255,255,255,0.018))] shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/14 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] hover:shadow-[0_18px_50px_rgba(0,0,0,0.34)] sm:min-h-[320px] sm:rounded-[2rem]',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            className="absolute inset-0 h-full w-full fill-transparent stroke-white/7 opacity-38"
          />
        </div>
      </div>
      {props.children}
    </div>
  )
}

function AudienceCardInner({ className, children, ...props }) {
  return (
    <div
      className={cn('relative z-10 flex h-full flex-col', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function AudienceCardTag({ className, ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.3em] text-white/60',
        className,
      )}
      {...props}
    />
  )
}

function AudienceCardTitle({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative z-10 mt-8 max-w-[18ch] text-[1.1rem] font-medium leading-[1.15] tracking-[-0.03em] text-white sm:mt-10 md:text-xl',
        className,
      )}
      {...props}
    />
  )
}

function AudienceCardText({ className, ...props }) {
  return (
    <p
      className={cn(
        'relative z-10 mt-3 max-w-[32ch] text-sm leading-7 text-white/58 md:text-[15px]',
        className,
      )}
      {...props}
    />
  )
}

function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = React.useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares ? (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      ) : null}
    </svg>
  )
}

export {
  AudienceCard,
  AudienceCardInner,
  AudienceCardTag,
  AudienceCardTitle,
  AudienceCardText,
}
