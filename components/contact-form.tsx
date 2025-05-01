// Inutilizado por enquanto

// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { motion } from "framer-motion"
// import { Send } from "lucide-react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       console.log("Form submitted:", formData)
//       setFormData({ name: "", email: "", phone: "", message: "" })
//       setIsSubmitting(false)
//       setIsSuccess(true)

//       // Reset success message after 3 seconds
//       setTimeout(() => setIsSuccess(false), 3000)
//     }, 1500)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >

//     </motion.div>
//   )
// }
