import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md',
        className,
      )}
      {...props}
    />
  )
})

const CardHeader = React.forwardRef(function CardHeader(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
})

const CardContent = React.forwardRef(function CardContent(
  { className, ...props },
  ref,
) {
    return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
})

const CardFooter = React.forwardRef(function CardFooter(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
})

export { Card, CardHeader, CardContent, CardFooter }
