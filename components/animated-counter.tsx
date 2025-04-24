"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  label: string
  icon?: React.ReactNode
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2, label, icon, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {icon && <div className="mb-4 text-[#d4af37]">{icon}</div>}
      <div className="text-center">
        <h3 className="mb-2 text-4xl font-bold text-[#2c3e50]">
          {count}
          {suffix}
        </h3>
        <p className="text-[#7f8c8d]">{label}</p>
      </div>
    </motion.div>
  )
}
