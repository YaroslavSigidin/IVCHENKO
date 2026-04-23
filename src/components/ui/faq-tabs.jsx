import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Plus } from 'lucide-react'

import { HeadlineFrame } from '@/components/ui/headline-frame'
import { cn } from '@/lib/utils'

export function FAQ({
  title = 'Частые вопросы',
  subtitle = 'FAQ',
  faqData,
  className,
  ...props
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden px-4 py-12 text-white sm:px-6 lg:px-8',
        className,
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQList faqData={faqData} />
    </section>
  )
}

function FAQHeader({ title, subtitle }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <span className="mb-6 bg-gradient-to-r from-[#ff8a1c] to-[#ffb36b] bg-clip-text text-[0.72rem] font-medium uppercase tracking-[0.38em] text-transparent">
        {subtitle}
      </span>
      <HeadlineFrame className="mb-4 max-w-4xl sm:mb-5">
        <h2 className="text-[2rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
          {title}
        </h2>
      </HeadlineFrame>
      <span className="absolute -top-[260px] left-1/2 z-0 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ff8a1c]/10 to-white/[0.04] blur-3xl" />
    </div>
  )
}

function FAQList({ faqData }) {
  return (
    <div className="mx-auto mt-9 max-w-4xl sm:mt-12">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'backInOut' }}
        className="space-y-4"
      >
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </Motion.div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Motion.div
      animate={isOpen ? 'open' : 'closed'}
      className={cn(
        'rounded-[1.5rem] border transition-colors',
        isOpen
          ? 'border-white/16 bg-white/[0.05]'
          : 'border-white/10 bg-white/[0.025]',
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-6"
      >
        <span
          className={cn(
            'text-lg tracking-[-0.03em] transition-colors',
            isOpen ? 'text-white' : 'text-white/66',
          )}
        >
          {question}
        </span>
        <Motion.span
          variants={{
            open: { rotate: '45deg' },
            closed: { rotate: '0deg' },
          }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus
            className={cn(
              'h-5 w-5 transition-colors',
              isOpen ? 'text-[#ffb36b]' : 'text-white/42',
            )}
          />
        </Motion.span>
      </button>
      <Motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : '0px',
          marginBottom: isOpen ? '20px' : '0px',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-4 sm:px-6"
      >
        <p className="max-w-3xl text-sm leading-8 text-white/56 sm:text-base">
          {answer}
        </p>
      </Motion.div>
    </Motion.div>
  )
}
