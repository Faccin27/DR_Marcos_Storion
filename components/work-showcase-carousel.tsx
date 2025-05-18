"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface WorkShowcaseProps {
  category: string
}

export default function WorkShowcaseCarousel({ category }: WorkShowcaseProps) {
  const getShowcaseItems = () => {
    switch (category) {
      case "lipoHD":
        return [
          {
            id: 1,
            image: `/images/lipo-hd.jpg`,
            title: "Lipo HD",
            description: "Resultado de lipoaspiração de alta definição com técnica avançada para contorno corporal.",
          },
          {
            id: 2,
            image: `/images/lipohom.jpg`,
            title: "Lipo HD - Abdômen Masculino",
            description: "Definição abdominal masculina com técnica de lipoaspiração HD.",
          },
          {
            id: 3,
            image: `/images/lipom.jpeg`,
            title: "Lipo HD - Contorno Feminino",
            description: "Contorno corporal feminino com definição de cintura e abdômen.",
          },
        ]
      case "rinoplastia":
        return [
          {
            id: 1,
            image: `/images/rinoest.jpg`,
            title: "Rinoplastia Estrutural",
            description: "Correção de dorso nasal e ponta com preservação da função respiratória.",
          },
          {
            id: 2,
            image: `/images/rinoetnica.jpg`,
            title: "Rinoplastia Étnica",
            description: "Harmonização nasal respeitando características étnicas do paciente.",
          },
          {
            id: 3,
            image: `/images/rinosec.png`,
            title: "Rinoplastia Secundária",
            description: "Correção de resultados anteriores com técnicas avançadas de reconstrução.",
          },
        ]
      case "mamoplastia":
        return [
          {
            id: 1,
            image: `/images/mamaaumento.jpeg`,
            title: "Mamoplastia de Aumento",
            description: "Aumento mamário com implantes de silicone para resultados naturais.",
          },
          {
            id: 2,
            image: `/images/mastopexia.jpg`,
            title: "Mastopexia",
            description: "Elevação mamária com correção de ptose e reposicionamento do complexo aréolo-papilar.",
          },
          {
            id: 3,
            image: `/images/mamaredus.jpg`,
            title: "Mamoplastia Redutora",
            description: "Redução mamária para alívio de dores e melhora estética.",
          },
        ]
      case "facial":
        return [
          {
            id: 1,
            image: `/images/ritidoplastia.png`,
            title: "Ritidoplastia",
            description: "Rejuvenescimento facial com técnica de SMAS para resultados naturais e duradouros.",
          },
          {
            id: 2,
            image: `/images/blefaroplastia.jpg`,
            title: "Blefaroplastia",
            description: "Correção de pálpebras superiores e inferiores para um olhar mais descansado.",
          },
          {
            id: 3,
            image: `/images/facial.png`,
            title: "Harmonização Facial",
            description: "Procedimentos combinados para harmonização completa da face.",
          },
        ]
      default:
        return []
    }
  }

  const showcaseItems = getShowcaseItems()

  return (
    <div className="py-4">
      <Carousel className="w-full">
        <CarouselContent>
          {showcaseItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="overflow-hidden border-none shadow-lg h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-[250px] w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-[#f8f9fa] to-white">
                      <h3 className="text-lg font-bold text-[#2c3e50] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#7f8c8d]">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-[#d4af37] hover:text-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-[#d4af37] hover:text-white" />
        </div>
      </Carousel>
    </div>
  )
}
