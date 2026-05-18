'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Pause, Play, Volume1, Volume2, VolumeX } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

function CustomSlider({ value, onChange, className }) {
  return (
    <Motion.div
      className={cn(
        'relative h-1 w-full cursor-pointer rounded-full bg-white/20',
        className,
      )}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const percentage = (x / rect.width) * 100
        onChange(Math.min(Math.max(percentage, 0), 100))
      }}
    >
      <Motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-white"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </Motion.div>
  )
}

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showControls, setShowControls] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [hasStartedFrame, setHasStartedFrame] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateInputMode = () => {
      setIsTouchDevice(mediaQuery.matches)
      if (mediaQuery.matches) {
        setShowControls(true)
      }
    }

    updateInputMode()
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateInputMode)
      return () => mediaQuery.removeEventListener('change', updateInputMode)
    }

    mediaQuery.addListener(updateInputMode)
    return () => mediaQuery.removeListener(updateInputMode)
  }, [])

  useEffect(() => {
    if (!videoRef.current) return

    const playPromise = videoRef.current.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const handleVolumeChange = (value) => {
    if (!videoRef.current) return

    const nextVolume = value / 100
    videoRef.current.volume = nextVolume
    setVolume(nextVolume)
    setIsMuted(nextVolume === 0)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return

    const nextProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    if (videoRef.current.currentTime > 0.12) {
      setHasStartedFrame(true)
    }
    setProgress(Number.isFinite(nextProgress) ? nextProgress : 0)
    setCurrentTime(videoRef.current.currentTime)
    setDuration(videoRef.current.duration || 0)
  }

  const handleSeek = (value) => {
    if (!videoRef.current || !videoRef.current.duration) return

    const time = (value / 100) * videoRef.current.duration
    if (Number.isFinite(time)) {
      videoRef.current.currentTime = time
      setProgress(value)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)

    if (!isMuted) {
      setVolume(0)
    } else {
      setVolume(1)
      videoRef.current.volume = 1
    }
  }

  const setSpeed = (speed) => {
    if (!videoRef.current) return

    videoRef.current.playbackRate = speed
    setPlaybackSpeed(speed)
  }

  return (
    <Motion.div
      className="relative mx-auto w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d0d0fb8] shadow-[0_28px_80px_rgba(0,0,0,0.34)] backdrop-blur-md sm:rounded-[1.5rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        if (!isTouchDevice) setShowControls(true)
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setShowControls(false)
      }}
      onTouchStart={() => setShowControls(true)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 z-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-2xl"
      />
      {poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            hasStartedFrame ? 'opacity-0' : 'opacity-100',
          )}
        />
      ) : null}
      <video
        ref={videoRef}
        className={cn(
          'relative z-10 aspect-video w-full object-cover transition-opacity duration-700',
          hasStartedFrame ? 'opacity-100' : 'opacity-0',
        )}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => {
          setIsPlaying(true)
          setHasStartedFrame(true)
        }}
        onPause={() => setIsPlaying(false)}
        src={src}
        onClick={togglePlay}
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        poster={poster}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/55 via-black/12 to-transparent sm:h-28" />

      <AnimatePresence>
        {showControls ? (
          <Motion.div
            className="absolute bottom-0 left-0 right-0 mx-auto m-2 max-w-xl rounded-[1.15rem] bg-[#11111198] p-3 backdrop-blur-md sm:rounded-2xl sm:p-4"
            initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'circInOut', type: 'spring' }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs text-white sm:text-sm">{formatTime(currentTime)}</span>
              <CustomSlider
                value={progress}
                onChange={handleSeek}
                className="flex-1"
              />
              <span className="text-xs text-white sm:text-sm">{formatTime(duration)}</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-4">
                <Motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                  <Button
                    onClick={togglePlay}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white hover:bg-[#111111d1] hover:text-white sm:h-10 sm:w-10"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                </Motion.div>

                <div className="flex items-center gap-x-1">
                  <Motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                    <Button
                      onClick={toggleMute}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-white hover:bg-[#111111d1] hover:text-white sm:h-10 sm:w-10"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : volume > 0.5 ? (
                        <Volume2 className="h-5 w-5" />
                      ) : (
                        <Volume1 className="h-5 w-5" />
                      )}
                    </Button>
                  </Motion.div>

                  <div className="w-16 sm:w-24">
                    <CustomSlider
                      value={volume * 100}
                      onChange={handleVolumeChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <Motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={speed}
                  >
                    <Button
                      onClick={() => setSpeed(speed)}
                      variant="ghost"
                      size="icon"
                      className={cn(
                        'h-8 w-8 text-[0.7rem] text-white hover:bg-[#111111d1] hover:text-white sm:h-10 sm:w-10 sm:text-sm',
                        playbackSpeed === speed && 'bg-[#111111d1]',
                      )}
                    >
                      {speed}x
                    </Button>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.div>
  )
}
