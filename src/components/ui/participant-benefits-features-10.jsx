import React from 'react'
import { Boxes, Globe2, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function ParticipantBenefitsFeatures({
  eyebrow,
  title,
  description,
  resources,
  operations,
  ecosystem,
}) {
  return (
    <section className="mx-auto w-[min(1320px,94vw)]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <FeatureCard>
          <CardHeader className="p-8 pb-4 sm:p-10 sm:pb-5">
            <CardHeading
              icon={Boxes}
              title={resources.eyebrow}
              description={resources.title}
            />
          </CardHeader>

          <VisualImage src={resources.imageSrc} alt={resources.title} />

          <CardContent className="px-8 pb-8 pt-0 sm:px-10 sm:pb-10">
            <div className="space-y-3">
              {resources.items.map((item) => (
                <FeatureListItem key={item}>{item}</FeatureListItem>
              ))}
            </div>
          </CardContent>
        </FeatureCard>

        <FeatureCard>
          <CardHeader className="p-8 pb-4 sm:p-10 sm:pb-5">
            <CardHeading
              icon={Globe2}
              title={operations.eyebrow}
              description={operations.title}
            />
          </CardHeader>

          <VisualImage src={operations.imageSrc} alt={operations.title} />

          <CardContent className="px-8 pb-8 pt-0 sm:px-10 sm:pb-10">
            <div className="space-y-3">
              {operations.items.map((item) => (
                <FeatureListItem key={item}>{item}</FeatureListItem>
              ))}
            </div>
          </CardContent>
        </FeatureCard>

        <FeatureCard className="lg:col-span-2">
          <CardHeader className="p-8 pb-4 sm:p-10 sm:pb-5">
            <div className="mx-auto max-w-3xl text-center">
              <CardHeading
                icon={Sparkles}
                title={ecosystem.eyebrow}
                description={ecosystem.title}
                className="items-center"
                titleClassName="mt-6 text-[2rem] leading-[1.08] tracking-[-0.05em] sm:text-[2.45rem]"
              />
              <p className="mt-5 text-base leading-8 text-white/58 sm:text-lg">
                {ecosystem.description}
              </p>
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8 pt-0 sm:px-10 sm:pb-10">
            <div className="flex flex-wrap justify-center gap-6 overflow-hidden">
              {ecosystem.clusters.map((cluster) => (
                <CircularUI
                  key={cluster.label}
                  label={cluster.label}
                  circles={cluster.circles}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {ecosystem.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/38">
                    {item.eyebrow}
                  </div>
                  <div className="mt-4 text-lg leading-8 tracking-[-0.03em] text-white/84">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/54">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </FeatureCard>
      </div>
    </section>
  )
}

function FeatureCard({ children, className }) {
  return (
    <Card className={cn('group relative overflow-hidden rounded-[2rem]', className)}>
      <CardDecorator />
      {children}
    </Card>
  )
}

function CardDecorator() {
  return (
    <>
      <span className="absolute -left-px -top-px block size-3 border-l-2 border-t-2 border-[#ff8a1c]/65" />
      <span className="absolute -right-px -top-px block size-3 border-r-2 border-t-2 border-[#ff8a1c]/65" />
      <span className="absolute -bottom-px -left-px block size-3 border-b-2 border-l-2 border-[#ff8a1c]/65" />
      <span className="absolute -bottom-px -right-px block size-3 border-b-2 border-r-2 border-[#ff8a1c]/65" />
    </>
  )
}

function CardHeading({
  icon,
  title,
  description,
  className,
  titleClassName,
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
        {React.createElement(icon, { className: 'size-4' })}
        {title}
      </span>
      <p
        className={cn(
          'mt-8 text-2xl font-semibold tracking-[-0.04em] text-white',
          titleClassName,
        )}
      >
        {description}
      </p>
    </div>
  )
}

function VisualImage({ src, alt }) {
  return (
    <div className="relative mb-6 px-8 sm:px-10">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8">
        <img
          src={src}
          alt={alt}
          className="aspect-[16/10] w-full object-cover grayscale-[0.15] opacity-72"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(max-width: 1024px) 94vw, 50vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.22)_48%,rgba(5,5,5,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
      </div>
    </div>
  )
}

function FeatureListItem({ children }) {
  return (
    <div className="flex gap-3">
      <div className="mt-2 h-2 w-2 rounded-full bg-[#ff8a1c]" />
      <div className="text-sm leading-7 text-white/76 sm:text-base">{children}</div>
    </div>
  )
}

function CircularUI({ label, circles, className }) {
  return (
    <div className={className}>
      <div className="rounded-2xl bg-gradient-to-b from-white/14 to-transparent p-px">
        <div className="relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-4">
          {circles.map((circle, index) => (
            <div
              key={index}
              className={cn('size-7 rounded-full border sm:size-8', {
                'border-white/18': circle.pattern === 'none',
                'border-[#ff8a1c]/65 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.14),rgba(255,255,255,0.14)_1px,transparent_1px,transparent_4px)]':
                  circle.pattern === 'border',
                'border-[#ff8a1c]/75 bg-[repeating-linear-gradient(-45deg,rgba(255,138,28,0.8),rgba(255,138,28,0.8)_1px,transparent_1px,transparent_4px)]':
                  circle.pattern === 'primary',
                'z-[1] border-sky-400/80 bg-[repeating-linear-gradient(-45deg,rgba(56,189,248,0.85),rgba(56,189,248,0.85)_1px,transparent_1px,transparent_4px)]':
                  circle.pattern === 'blue',
              })}
            />
          ))}
        </div>
      </div>
      <span className="mt-2 block text-center text-sm text-white/54">{label}</span>
    </div>
  )
}
