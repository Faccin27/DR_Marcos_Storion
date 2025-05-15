"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  text: string
  role?: string
  rating: number
  image?: string
}

export default function AnimatedTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Rinoplastia",
      text: "O Dr. Marcos transformou não apenas meu nariz, mas minha autoconfiança. O resultado ficou extremamente natural e o processo de recuperação foi exatamente como ele descreveu. Sua atenção aos detalhes é impressionante.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Lipo HD",
      text: "Após anos de academia sem conseguir definir meu abdômen, o Dr. Storion realizou uma Lipo HD que transformou meu corpo. O profissionalismo da equipe e o acompanhamento pós-operatório foram excepcionais.",
      rating: 5,
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Mamoplastia",
      text: "Minha experiência com o Dr. Marcos foi incrível do início ao fim. Ele entendeu exatamente o que eu queria e o resultado superou minhas expectativas. Me sinto mais feminina e confiante.",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const testimonial = testimonials[current]

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute left-0 top-0 -z-10 text-[400px] font-bold text-[#d4af37]"
      >
        "
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute bottom-0 right-0 -z-10 text-[400px] font-bold text-[#d4af37]"
      >
        "
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#d4af37] shadow-lg">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#d4af37] to-[#f8f5e6] text-2xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < testimonial.rating ? "fill-[#d4af37] text-[#d4af37]" : "text-gray-300"}`}
                />
              ))}
            </div>

            <div className="relative mb-6">
              <Quote className="absolute -left-10 -top-6 h-8 w-8 text-[#d4af37] opacity-30" />
              <p className="text-center text-xl font-light italic leading-relaxed text-gray-700 md:text-2xl w-11/12 mx-auto">
                {testimonial.text}
              </p>
              <Quote className="absolute -bottom-6 -right-10 h-8 w-8 rotate-180 text-[#d4af37] opacity-30" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-[#2c3e50]">{testimonial.name}</h3>
              {testimonial.role && <p className="text-sm text-[#d4af37]">{testimonial.role}</p>}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-1">
          <button
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#2c3e50] shadow-md backdrop-blur-sm transition-all hover:bg-[#d4af37] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#2c3e50] shadow-md backdrop-blur-sm transition-all hover:bg-[#d4af37] hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "w-8 bg-[#d4af37]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
