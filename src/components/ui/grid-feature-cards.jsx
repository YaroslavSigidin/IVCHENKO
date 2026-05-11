import React from 'react'

import { cn } from '@/lib/utils'

export function FeatureCard({ feature, className, ...props }) {
  const pattern = genRandomPattern()

  return (
    <div
      className={cn(
        'group relative min-h-[240px] overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/14 hover:bg-white/[0.045] hover:shadow-[0_18px_50px_rgba(0,0,0,0.34)] sm:p-8',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_46%)] opacity-80" />
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="absolute inset-0 h-full w-full fill-white/[0.025] stroke-white/8 opacity-35"
          />
        </div>
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.24em] text-white/38">
          {feature.index}
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-white/16 group-hover:bg-white/[0.06]">
          <feature.icon
            className="size-5 text-white/72 transition duration-300 group-hover:text-white/88"
            strokeWidth={1.4}
            aria-hidden
          />
        </div>
      </div>

      <h3 className="relative z-10 mt-10 max-w-[15ch] text-balance text-[clamp(1.2rem,0.85vw+1rem,1.72rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white">
        {feature.title}
      </h3>
      <p className="relative z-10 mt-4 max-w-[32ch] text-sm leading-7 text-white/58 md:text-[15px]">
        {feature.description}
      </p>
    </div>
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

function genRandomPattern(length = 5) {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 8) + 2,
    Math.floor(Math.random() * 8) + 1,
  ])
}
