import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

export function LogoCloud({ className, logos, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
        className,
      )}
    >
      <InfiniteSlider gap={42} reverse duration={24} durationOnHover={40}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.label || logo.alt}`}
            className="pointer-events-none select-none whitespace-nowrap text-base font-medium tracking-[-0.03em] text-white/78 md:text-[1.15rem]"
          >
            {logo.label ? (
              <span className="inline-flex items-center gap-2">
                <span className="block size-1.5 rounded-full bg-white/70" />
                <span>{logo.label}</span>
              </span>
            ) : (
              <img
                alt={logo.alt}
                className="h-4 opacity-80 brightness-0 invert md:h-5"
                height={logo.height || 'auto'}
                loading="lazy"
                src={logo.src}
                width={logo.width || 'auto'}
              />
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  )
}
