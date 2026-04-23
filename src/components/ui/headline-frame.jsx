import React from 'react'

import { cn } from '@/lib/utils'

export function HeadlineFrame({ children, className, contentClassName, ...props }) {
  return (
    <div className={cn('headline-frame', className)} {...props}>
      <div className={cn('headline-frame__content', contentClassName)}>
        {children}
      </div>
    </div>
  )
}
