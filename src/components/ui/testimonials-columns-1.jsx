'use client'

import React from 'react'
import { motion as Motion } from 'motion/react'

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
            {testimonials.map(({ text, image, name, role }, itemIndex) => (
              <article
                className="w-full max-w-sm rounded-[1.75rem] border border-white/70 bg-[#f6f2eb] p-6 text-[#121316] shadow-[0_20px_50px_rgba(0,0,0,0.26)]"
                key={`${index}-${itemIndex}-${name}`}
              >
                <div className="text-[15px] leading-7 text-[#17181c]/88">
                  {text}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    width={44}
                    height={44}
                    src={image}
                    alt={name}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-black/10"
                  />
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
            ))}
          </React.Fragment>
        ))}
      </Motion.div>
    </div>
  )
}
