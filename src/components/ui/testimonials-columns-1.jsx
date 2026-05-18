'use client'

import React from 'react'
import { motion as Motion } from 'motion/react'

export function TestimonialCard({ text, image, preview, name, role, className = '' }) {
  return (
    <article
      className={`w-full max-w-sm rounded-[1.75rem] border border-white/70 bg-[#f6f2eb] p-6 text-[#121316] shadow-[0_20px_50px_rgba(0,0,0,0.26)] ${className}`}
    >
      {preview ? (
        <div className="mb-5 overflow-hidden rounded-[1.2rem] border border-black/8 bg-white">
          <img
            src={preview}
            alt={name}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      ) : null}
      <div className="text-[15px] leading-7 text-[#17181c]/88">
        {text}
      </div>
      <div className="mt-6 flex items-center gap-3">
        {image ? (
          <img
            width={44}
            height={44}
            src={image}
            alt={name}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-black/10"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff8a1c]/12 text-[11px] font-medium uppercase tracking-[0.18em] text-[#ff8a1c] ring-1 ring-[#ff8a1c]/18">
            TS
          </div>
        )}
        <div className="flex flex-col">
          <div className="font-medium leading-5 tracking-tight text-[#111215]">
            {name}
          </div>
          <div className="leading-5 tracking-tight text-[#111215]/55">
            {role}
          </div>
        </div>
      </div>
    </article>
  )
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}) {
  return (
    <div className={className}>
      <Motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, preview, name, role }, itemIndex) => (
              <TestimonialCard
                key={`${index}-${itemIndex}-${name}`}
                text={text}
                image={image}
                preview={preview}
                name={name}
                role={role}
              />
            ))}
          </React.Fragment>
        ))}
      </Motion.div>
    </div>
  )
}
