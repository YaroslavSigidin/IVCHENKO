import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import createGlobe from 'cobe'
import { motion as Motion } from 'motion/react'

import { cn } from '@/lib/utils'

const defaultMarkers = [
  { id: 'shenzhen', location: [22.5431, 114.0579], region: 'SHENZHEN', role: 'Поставщик' },
  { id: 'yiwu', location: [29.3151, 120.0768], region: 'YIWU', role: 'Sourcing' },
  { id: 'hong-kong', location: [22.3193, 114.1694], region: 'HONG KONG', role: 'Фрахт' },
  { id: 'los-angeles', location: [33.7405, -118.2719], region: 'LOS ANGELES', role: 'Порт / 3PL' },
  { id: 'dallas', location: [32.7767, -96.797], region: 'DALLAS', role: 'Prep center' },
  { id: 'new-york', location: [40.7128, -74.006], region: 'NEW YORK', role: 'East Coast' },
]

const defaultArcs = [
  {
    id: 'route-1',
    from: [22.5431, 114.0579],
    to: [33.7405, -118.2719],
    label: 'Shenzhen → Los Angeles',
    meta: 'Поставщик → порт',
  },
  {
    id: 'route-2',
    from: [29.3151, 120.0768],
    to: [32.7767, -96.797],
    label: 'Yiwu → Dallas',
    meta: 'Sourcing → prep',
  },
  {
    id: 'route-3',
    from: [22.3193, 114.1694],
    to: [40.7128, -74.006],
    label: 'Hong Kong → New York',
    meta: 'Фрахт → склад',
  },
  {
    id: 'route-4',
    from: [33.7405, -118.2719],
    to: [32.7767, -96.797],
    label: 'Los Angeles → Dallas',
    meta: '3PL → prep',
  },
  {
    id: 'route-5',
    from: [32.7767, -96.797],
    to: [40.7128, -74.006],
    label: 'Dallas → New York',
    meta: 'Prep → рынок',
  },
]

const floatingBadgePositions = [
  'left-[6%] top-[18%]',
  'right-[4%] top-[22%]',
  'left-[10%] bottom-[20%]',
  'right-[8%] bottom-[18%]',
]

function buildTrafficSeed(arcs) {
  return arcs.map((arc, index) => ({
    id: arc.id,
    value: [420, 365, 288, 194, 168][index] ?? 140,
  }))
}

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = '',
  speed = 0.0028,
}) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const rotationRef = useRef({ phi: 0, theta: 0 })
  const isPausedRef = useRef(false)

  const [traffic, setTraffic] = useState(() => buildTrafficSeed(arcs))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTraffic((currentTraffic) =>
        currentTraffic.map((item) => ({
          ...item,
          value: Math.max(72, item.value + Math.floor(Math.random() * 27) - 13),
        })),
      )
    }, 1400)

    return () => window.clearInterval(intervalId)
  }, [])

  const handlePointerDown = useCallback((event) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY }
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing'
    }
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current) {
      rotationRef.current.phi += dragOffset.current.phi
      rotationRef.current.theta += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }

    pointerInteracting.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab'
    }
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!pointerInteracting.current) {
        return
      }

      dragOffset.current = {
        phi: (event.clientX - pointerInteracting.current.x) / 320,
        theta: (event.clientY - pointerInteracting.current.y) / 1100,
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    let globe = null

    const initGlobe = () => {
      const width = canvas.offsetWidth
      if (!width) {
        return
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      if (globe) {
        globe.destroy()
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta: 0.18,
        dark: 1,
        diffuse: 1.15,
        scale: 1,
        mapSamples: 18000,
        mapBrightness: 4,
        baseColor: [0.11, 0.11, 0.12],
        markerColor: [1, 0.54, 0.11],
        glowColor: [0.95, 0.42, 0.12],
        offset: [0, 0],
        markerElevation: 0.04,
        markers: markers.map((marker) => ({
          location: marker.location,
          size: 0.03,
          id: marker.id,
        })),
        arcs: arcs.map((arc, index) => ({
          from: arc.from,
          to: arc.to,
          color: index === 2 ? [0.17, 0.74, 1] : [1, 0.54, 0.11],
        })),
        arcColor: [1, 0.54, 0.11],
        arcWidth: 0.7,
        arcHeight: 0.22,
        opacity: 0.92,
        onRender: (state) => {
          if (!isPausedRef.current) {
            rotationRef.current.phi += speed
          }

          state.phi = rotationRef.current.phi + dragOffset.current.phi
          state.theta = 0.18 + rotationRef.current.theta + dragOffset.current.theta
        },
      })

      canvas.style.opacity = '1'
    }

    const resizeObserver = new ResizeObserver(() => {
      initGlobe()
    })

    resizeObserver.observe(canvas)
    initGlobe()

    return () => {
      resizeObserver.disconnect()
      if (globe) {
        globe.destroy()
      }
    }
  }, [arcs, markers, speed])

  const routeFeed = useMemo(
    () =>
      arcs.slice(0, 4).map((arc) => ({
        ...arc,
        value: traffic.find((entry) => entry.id === arc.id)?.value ?? 0,
      })),
    [arcs, traffic],
  )

  const stats = useMemo(
    () => [
      { label: 'Узлы', value: String(markers.length), meta: 'география запуска' },
      { label: 'Маршруты', value: String(arcs.length), meta: 'связки товара и 3PL' },
      { label: 'Фокус', value: 'USA', meta: 'рынок и исполнение' },
    ],
    [arcs.length, markers.length],
  )

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6 lg:p-8',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute -right-20 top-12 h-56 w-56 rounded-full bg-[#ff8a1c]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-8 bottom-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                  {stat.label}
                </div>
                <div className="mt-3 text-2xl font-medium tracking-[-0.05em] text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/46">{stat.meta}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-white/8 bg-black/18 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/38">
                Живая география запуска
              </div>
              <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/28">
                drag globe
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {routeFeed.map((route, index) => (
                <Motion.div
                  key={route.id}
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-between gap-4 rounded-[1.15rem] border border-white/8 bg-white/[0.025] px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium tracking-[-0.02em] text-white">
                      {route.label}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/36">
                      {route.meta}
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full border border-[#ff8a1c]/18 bg-[#ff8a1c]/10 px-3 py-1 font-mono text-xs text-[#ff8a1c]">
                    {route.value} ед/нед
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,138,28,0.18),rgba(255,138,28,0.04)_44%,transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-[8%] rounded-full border border-white/8 bg-white/[0.02]" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border border-white/6" />

          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            className="relative z-10 h-full w-full rounded-full opacity-0 transition-opacity duration-1000"
            style={{
              cursor: 'grab',
              touchAction: 'none',
            }}
          />

          {markers.slice(0, 4).map((marker, index) => (
            <Motion.div
              key={marker.id}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                delay: index * 0.35,
                ease: 'easeInOut',
              }}
              className={cn(
                'pointer-events-none absolute z-20 rounded-full border border-white/10 bg-black/38 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-white/54 shadow-[0_12px_26px_rgba(0,0,0,0.22)] backdrop-blur-xl',
                floatingBadgePositions[index],
              )}
            >
              {marker.region}
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
