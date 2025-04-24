// isso não esta sendo utilizado, removido.
// "use client"

// import type React from "react"

// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// interface ParallaxSectionProps {
//   children: React.ReactNode
//   bgImage?: string
//   overlay?: boolean
//   speed?: number
// }

// export default function ParallaxSection({
//   children,
//   bgImage = "url('/placeholder.svg?height=1080&width=1920')",
//   overlay = true,
//   speed = 0.5,
// }: ParallaxSectionProps) {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

//   return (
//     <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
//       <motion.div
//         style={{
//           y,
//           backgroundImage: bgImage,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0"
//       />
//       {overlay && <div className="absolute inset-0 z-10 bg-black/50" />}
//       <div className="relative z-20">{children}</div>
//     </section>
//   )
// }
