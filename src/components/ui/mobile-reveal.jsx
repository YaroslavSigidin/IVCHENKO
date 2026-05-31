export function MobileReveal({
  children,
  className,
  delay = 0,
  y = 26,
  scale = 0.985,
  blur = 10,
  amount = 0.16,
  duration = 0.72,
  once = true,
  variant = 'rise',
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
