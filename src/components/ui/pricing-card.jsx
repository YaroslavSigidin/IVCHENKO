import React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'bg-card relative w-full rounded-[1.25rem] p-1.5 shadow-xl backdrop-blur-xl',
        'border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]',
        className,
      )}
      {...props}
    />
  )
}

function Header({ className, children, glassEffect = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-muted/80 relative mb-4 rounded-[1rem] border border-white/8 bg-white/[0.04] p-3.5 dark:bg-white/[0.03] sm:p-4',
        className,
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.035) 42%, rgba(0,0,0,0) 100%)',
          }}
        />
      )}
      {children}
    </div>
  )
}

function Plan({ className, ...props }) {
  return (
    <div
      className={cn('mb-6 flex items-center justify-between gap-3 sm:mb-8', className)}
      {...props}
    />
  )
}

function Description({ className, ...props }) {
  return (
    <p
      className={cn('text-xs leading-6 text-white/50', className)}
      {...props}
    />
  )
}

function PlanName({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm font-medium text-white/72 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'rounded-full border border-white/14 px-2 py-0.5 text-xs text-white/72',
        className,
      )}
      {...props}
    />
  )
}

function Price({ className, ...props }) {
  return (
    <div className={cn('mb-3 flex items-end gap-1', className)} {...props} />
  )
}

function MainPrice({ className, ...props }) {
  return (
    <span
      className={cn('text-[2.35rem] font-extrabold tracking-tight text-white sm:text-3xl', className)}
      {...props}
    />
  )
}

function Period({ className, ...props }) {
  return (
    <span className={cn('pb-1 text-sm text-white/74', className)} {...props} />
  )
}

function OriginalPrice({ className, ...props }) {
  return (
    <span
      className={cn('ml-auto mr-1 text-lg text-white/34 line-through', className)}
      {...props}
    />
  )
}

function Body({ className, ...props }) {
  return <div className={cn('space-y-5 p-2.5 sm:space-y-6 sm:p-3', className)} {...props} />
}

function List({ className, ...props }) {
  return <ul className={cn('space-y-2.5 sm:space-y-3', className)} {...props} />
}

function ListItem({ className, ...props }) {
  return (
    <li
      className={cn(
        'flex items-start gap-3 text-sm leading-6 text-white/68',
        'text-[13px] sm:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function Separator({
  children = 'Upgrade to access',
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-sm text-white/44',
        className,
      )}
      {...props}
    >
      <span className="h-px flex-1 bg-white/12" />
      <span className="shrink-0 text-white/44">{children}</span>
      <span className="h-px flex-1 bg-white/12" />
    </div>
  )
}

export {
  Card,
  Header,
  Description,
  Plan,
  PlanName,
  Badge,
  Price,
  MainPrice,
  Period,
  OriginalPrice,
  Body,
  List,
  ListItem,
  Separator,
}
