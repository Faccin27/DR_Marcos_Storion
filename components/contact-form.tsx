"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            className="border-gray-200 focus:border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            required
            className="border-gray-200 focus:border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
            className="border-gray-200 focus:border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Como podemos ajudar?"
            rows={4}
            required
            className="border-gray-200 focus:border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden bg-gradient-to-r from-[#d4af37] to-[#b8971f] text-white transition-all hover:from-[#b8971f] hover:to-[#d4af37]"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={isSubmitting ? { scale: 20, opacity: 0.15 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}
            />

            {isSuccess ? (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center"
              >
                Mensagem Enviada com Sucesso!
              </motion.span>
            ) : (
              <motion.span className="flex items-center justify-center">
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.span>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
