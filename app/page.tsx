"use client";

import { Users, Award, Calendar, Smile, CheckCircle } from "lucide-react";
import { motion } from "framer-motion"


import AnimatedCounter from "@/components/animated-counter";
import HeroSection from "@/components/hero-section";
import SiteHeader from "@/components/site-header";
import ProceduresSection from "@/components/procedures-section";
import ParallaxQuoteSection from "@/components/parallax-quote-section";
import AnimatedTestimonials from "@/components/animated-testimonials";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedBeforeAfter from "@/components/animated-before-after";
import FAQAccordion from "@/components/faq-accordion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SiteHeader />

      <HeroSection />

      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <AnimatedCounter
              end={10}
              label="Anos de Experiência"
              icon={<Calendar className="h-8 w-8" />}
              suffix="+"
            />
            <AnimatedCounter
              end={5000}
              label="Pacientes Satisfeitos"
              icon={<Smile className="h-8 w-8" />}
              suffix="+"
            />
            <AnimatedCounter
              end={30}
              label="Prêmios e Reconhecimentos"
              icon={<Award className="h-8 w-8" />}
              suffix="+"
            />
            <AnimatedCounter
              end={12}
              label="Especialistas na Equipe"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      <ProceduresSection />

      {/* Parallax Quote */}
      <ParallaxQuoteSection
        quote="A beleza está nos olhos de quem vê, mas a confiança vem de dentro."
        author="Dr. Marcos Storion"
        backgroundOption={1}
      />

      {/* About Section */}
      <section id="sobre" className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl shadow-lg">
                <div className="absolute -inset-0.5 z-0 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f0e6b2] opacity-50" />
                <div className="absolute inset-0 z-10 rounded-xl bg-white/5" />
                <img
                  src="/images/doctor.jpeg"
                  alt="Dr. Marcos Storion"
                  className="relative z-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2c3e50]">
                Sobre o Dr. Marcos Storion
              </h2>
              <p className="text-[#7f8c8d]">
                Com mais de 10 anos de experiência, Dr. Marcos Storion é
                especialista em cirurgia plástica estética e reparadora.
                Graduado em Medicina pela Universidade Estadual Paulista
                (UNESP), com uma formação de excelência, concluiu sua
                especialização em Cirurgia Plástica no renomado Instituto Dr.
                Ewaldo Bolivar de Souza Pinto
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#d4af37]" />
                  <span>
                    Graduado em Medicina pela Universidade Estadual Paulista
                    (UNESP)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#d4af37]" />
                  <span>
                    Especializado em Cirurgia Plástica no renomado Instituto Dr.
                    Ewaldo Bolivar de Souza Pinto
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#d4af37]" />
                  <span>CRM: 123456 / RQE: 54321</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold text-[#2c3e50]">
                  Destaque na Mídia
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/o_globo.jpg"
                      alt="Entrevista na TV OGlobo"
                      className="h-16 w-24 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/uol.png"
                      alt="Revista uol"
                      className="h-16 w-24 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/terra.jpg"
                      alt="Terra"
                      className="h-16 w-24 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="w-full bg-[#f8f9fa] py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">
              Depoimentos de Pacientes
            </h2>
            <p className="mt-2 text-[#7f8c8d]">
              Veja o que nossos pacientes dizem sobre seus resultados
            </p>
          </div>
          <AnimatedTestimonials />
        </div>
      </section>

      {/* Before and After Section with Animation */}
      <section id="antes-depois" className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">
              Antes e Depois
            </h2>
            <p className="mt-2 text-[#7f8c8d]">
              Resultados reais de procedimentos realizados pelo Dr. Marcos
              Storion
            </p>
            <p className="mt-1 text-xs text-[#95a5a6]">
              (Todas as imagens publicadas com autorização dos pacientes)
            </p>
          </div>
          <Tabs defaultValue="lipoHD" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="lipoHD">Lipo HD</TabsTrigger>
              <TabsTrigger value="rinoplastia">Rinoplastia</TabsTrigger>
              <TabsTrigger value="mamoplastia">Mamoplastia</TabsTrigger>
              <TabsTrigger value="facial">Harmonização</TabsTrigger>
            </TabsList>
            <TabsContent value="lipoHD">
              <AnimatedBeforeAfter category="lipoHD" />
            </TabsContent>
            <TabsContent value="rinoplastia">
              <AnimatedBeforeAfter category="rinoplastia" />
            </TabsContent>
            <TabsContent value="mamoplastia">
              <AnimatedBeforeAfter category="mamoplastia" />
            </TabsContent>
            <TabsContent value="facial">
              <AnimatedBeforeAfter category="facial" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full bg-[#f8f9fa] py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">Diferenciais da Clínica</h2>
            <p className="mt-2 text-[#7f8c8d]">Por que escolher o Dr. Marcos Storion</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Equipamentos Modernos",
                description: "Tecnologia de ponta para procedimentos mais seguros e resultados superiores.",
                index: 0,
              },
              {
                title: "Equipe Multidisciplinar",
                description: "Profissionais especializados para um cuidado completo antes, durante e após a cirurgia.",
                index: 1,
              },
              {
                title: "Localização Privilegiada",
                description: "Clínica em área nobre com fácil acesso e estacionamento para sua comodidade.",
                index: 2,
              },
              {
                title: "Atendimento Humanizado",
                description: "Cuidado personalizado e acolhedor, respeitando a individualidade de cada paciente.",
                index: 3,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f8f5e6] transition-all group-hover:bg-[#d4af37]/20">
                  <CheckCircle className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#2c3e50]">{item.title}</h3>
                <p className="text-[#7f8c8d]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">Dúvidas Frequentes</h2>
            <p className="mt-2 text-[#7f8c8d]">Respostas para as perguntas mais comuns sobre os procedimentos</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
