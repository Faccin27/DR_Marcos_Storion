"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

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
      name: "Cristina Senise",
      role: "Botox e Radiesse",
      text: "Se você busca um upgrade natural e sofisticado, o Dr. Marcos é THE ONE. Os procedimentos que faço com ele com frequência são: Botox e Radiesse, o resultado é sempre exatamente o que eu queria: natural, sem excessos, apenas realçando o melhor no meu rosto. O que mais me impressiona é a precisão do trabalho dele. Como cirurgião plástico, ele tem um olhar apurado para os detalhes, aplicando cada procedimento com técnica refinada e extrema atenção à anatomia do rosto. Isso faz toda a diferença para que as cicatrizes fiquem imperceptíveis e o efeito seja harmônico e elegante. Ele domina os tratamentos mais modernos, como Morpheus e Ulthera, que elevam a firmeza da pele e garantem aquele efeito de rejuvenescimento sem parecer que você “fez algo”. O consultório é lindo, o atendimento impecável e a experiência, do início ao fim, transmite confiança. Se você busca um cirurgião plástico de primeiríssima, achou.",
      rating: 5,
    },
    {
      id: 2,
      name: "Neusa Paiola Paiola",
      role: "Blefaroplastia e Abdominoplastia",
      text: "Excelente profissional. O escolhi como cirurgião plástico para fazer minha blefaroplastia e abdominoplastia. Dr Marcos está sempre atualizado e atento as melhores práticas e produtos disponíveis no mercado. Cuidadoso, super atento aos detalhes e muito simpático, o resultado superou minhas expectativas! Super recomendo!",
      rating: 5,
    },
    {
      id: 3,
      name: "DENISE MATTOS",
      role: "Deepplane Facelift",
      text: "Eu fiz um deepplane facelift com Dr Marcos. Simplesmente o toque da perfeição. O detalhe pós cirúrgico, é que, absolutamente imperceptível o que fora feito. Ganhei 20 anos, essa é a verdade. Dr Marcos foi de um profissionalismo inenarrável. Além do trabalho brilhante no meu rosto, recebi a melhor das atenções possíveis. Inclusive, com menos de 10 dias de cirurgia atendi um cliente, sem nenhum problema. O acompanhamento dele era diário, mandando mensagem e solicitando fotografias. Além disso, não posso mensurar os inúmeros retornos ao consultório… sempre com a mesma atenção, cuidado e carinho. Não tive edemas, tampouco fiquei com manchas arroxeadas. Ansiosa para passar novamente por essas mãos brilhantes, abençoadas por Deus! Em síntese… Felicidade que não se mede.",
      rating: 5,
    },
    {
      id: 4,
      name: "Larissa Rocha",
      role: "Botox",
      text: "Ao chegar na clínica, a minha experiência já foi maravilhosa, um local lindo, receptivo e impecável. Procurei o Doutor Marcos Storion pois queria fazer pela primeira vez o procedimento de botox, e o Doutor com todo seu conhecimento me explicou sobre o procedimento, tirou minhas dúvidas e me explicou que o procedimento ficaria com naturalidade, que seria minha maior dúvida! E agora sou refém dos procedimentos que o Doutor Marcos Storion faz no meu rosto! Sempre que me elogiam eu digo, esse rosto tem nome Doutor Marcos Storion o melhor profissional.",
      rating: 5,
    },
    {
      id: 5,
      name: "Mara Romero",
      role: "Blefaroplastia, Abdômen e Seios",
      text: "Dr Marcos é o melhor profissional em cirurgia plástica e procedimentos, é minucioso e delicado nos pontos da cirurgia, a cicatriz posso dizer que não existe, dedicado aos pacientes, atencioso, nos ouve, procura tornar nossa experiência a melhor possível, além de ser um ser humano incrível. Eu o recomendo, fiz com ele blefaroplastia, abdômen e seios e vou fazer deep plane face muito em breve. Amooo esse médico",
      rating: 5,
    },
    {
      id: 5,
      name: "Celso Fernandes",
      role: "Harmonização Facial",
      text: "Fiz uma harmonização facial com Dr Marcos, fui muito bem atendido, recebi toda orientação necessária e o resultado ficou fantástico.",
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
    <div className="relative mx-auto max-w-6xl overflow-hidden py-8 md:py-16">
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

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
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

            <div className="relative mb-6 px-4 md:px-8">
              <Quote className="absolute -left-2 -top-4 h-6 w-6 text-[#d4af37] opacity-30 md:-left-6 md:-top-6 md:h-8 md:w-8" />
              <p className="text-center text-base font-light italic leading-relaxed text-gray-700 md:text-lg lg:text-xl max-w-4xl mx-auto">
                {testimonial.text}
              </p>
              <Quote className="absolute -bottom-4 -right-2 h-6 w-6 rotate-180 text-[#d4af37] opacity-30 md:-bottom-6 md:-right-6 md:h-8 md:w-8" />
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

        {/* Setas de navegação com melhor posicionamento */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#2c3e50] shadow-lg backdrop-blur-sm transition-all hover:bg-[#d4af37] hover:text-white hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#2c3e50] shadow-lg backdrop-blur-sm transition-all hover:bg-[#d4af37] hover:text-white hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicadores com melhor espaçamento */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "w-8 bg-[#d4af37]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
