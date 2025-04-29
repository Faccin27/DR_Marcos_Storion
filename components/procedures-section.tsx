"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedServiceCard from "./animated-service-card"
import AllProcedures from "./all-procedures"

export default function ProceduresSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Particles
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Increase number of particles from 50 to 200
    const particleCount = 60
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    const createParticles = () => {
      particles.length = 0 // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Increase size range from (1-4) to (2-6)
          size: Math.random() * 4 + 2,
          // Slightly increase speed for more movement
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4,
          // Increase opacity range from (0.1-0.6) to (0.3-0.8)
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    const animateParticles = () => {
      // Use a semi-transparent clear to create trails
      ctx.fillStyle = "rgba(44, 62, 80, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Use a brighter gold color with higher opacity
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Add a subtle glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(212, 175, 55, 0.5)"

        // Update particle position
        p.x += p.speedX
        p.y += p.speedY

        // Wrap particles around the screen
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    createParticles()
    const animationId = requestAnimationFrame(animateParticles)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const [showAllProcedures, setShowAllProcedures] = useState(false)

  const featuredProcedures = [
    {
      title: "Lipo HD",
      description: "Lipoaspiração de alta definição para resultados mais precisos e naturais.",
      icon: "Droplets",
      index: 0,
    },
    {
      title: "Rinoplastia",
      description: "Cirurgia para correção estética e funcional do nariz.",
      icon: "Scissors",
      index: 1,
    },
    {
      title: "Prótese de Mama",
      description: "Aumento mamário com implantes de silicone de alta qualidade.",
      icon: "Heart",
      index: 2,
    },
    {
      title: "Harmonização Facial",
      description: "Procedimentos combinados para equilibrar as proporções faciais.",
      icon: "Sparkles",
      index: 3,
    },
  ]

  return (
    <section id="servicos" className="relative w-full bg-[#2c3e50] py-16 overflow-hidden" ref={ref}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#fff]">Serviços Oferecidos</h2>
          <p className="mt-2 text-[#7f8c8d]">Conheça os procedimentos realizados pelo Dr. Marcos Storion</p>
        </div>

        <AnimatePresence mode="wait">
          {!showAllProcedures ? (
            <motion.div key="featured" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProcedures.map((procedure) => (
                  <AnimatedServiceCard
                    key={procedure.title}
                    title={procedure.title}
                    description={procedure.description}
                    icon={procedure.icon}
                    index={procedure.index}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllProcedures(true)}
                  className="bg-[#d4af37] hover:bg-[#b8971f] text-white"
                >
                  Ver todos os procedimentos
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AllProcedures />
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllProcedures(false)}
                  className="bg-[#d4af37] hover:bg-[#b8971f] text-white"
                >
                  Mostrar destaques
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
