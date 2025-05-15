"use client";

import {
  Users,
  Award,
  Calendar,
  Smile,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import AnimatedCounter from "@/components/animated-counter";
import HeroSection from "@/components/hero-section";
import SiteHeader from "@/components/site-header";
import ProceduresSection from "@/components/procedures-section";
import ParallaxQuoteSection from "@/components/parallax-quote-section";
import AnimatedTestimonials from "@/components/animated-testimonials";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedBeforeAfter from "@/components/animated-before-after";
import FAQAccordion from "@/components/faq-accordion";
import ContactInfo from "@/components/contact-info";
import MultiLocationMap from "@/components/multi-location-map";

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
      <section
        id="sobre"
        className="w-full bg-gradient-to-t from-[#618fbd4d] to-white py-16"
      >
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
                <div className="grid grid-cols-3 gap-4 w-fit mx-auto md:mx-0">
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
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/oglobo.jpg"
                      alt="Terra"
                      className="h-16 w-24 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/portal_ig.png"
                      alt="Terra"
                      className="h-16 w-24 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/images/valor.jpg"
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

      <section
        id="depoimentos"
        className="w-full bg-gradient-to-b from-[#618fbd4d] to-white py-16"
      >
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
      <section
        id="antes-depois"
        className="w-full py-16"
        style={{
          backgroundImage: 'url("/images/bg2-lines.png")',
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
        }}
      >
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
            <h2 className="text-3xl font-bold text-[#2c3e50]">
              Diferenciais da Clínica
            </h2>
            <p className="mt-2 text-[#7f8c8d]">
              Por que escolher o Dr. Marcos Storion
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Equipamentos Modernos",
                description:
                  "Tecnologia de ponta para procedimentos mais seguros e resultados superiores.",
                index: 0,
              },
              {
                title: "Equipe Multidisciplinar",
                description:
                  "Profissionais especializados para um cuidado completo antes, durante e após a cirurgia.",
                index: 1,
              },
              {
                title: "Localização Privilegiada",
                description:
                  "Clínica em área nobre com fácil acesso e estacionamento para sua comodidade.",
                index: 2,
              },
              {
                title: "Atendimento Humanizado",
                description:
                  "Cuidado personalizado e acolhedor, respeitando a individualidade de cada paciente.",
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
                <h3 className="mb-2 text-xl font-semibold text-[#2c3e50]">
                  {item.title}
                </h3>
                <p className="text-[#7f8c8d]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">
              Dúvidas Frequentes
            </h2>
            <p className="mt-2 text-[#7f8c8d]">
              Respostas para as perguntas mais comuns sobre os procedimentos
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <section id="contato" className="w-full bg-[#f8f9fa] py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2c3e50]">
              Nossos Consultórios
            </h2>
            <p className="mt-2 text-[#7f8c8d]">
              Estamos prontos para atender você
            </p>
          </div>

          <div className="mt-12 ">
            <MultiLocationMap />
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#2c3e50] py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">Dr. Marcos Storion</h3>
              <p className="text-gray-300">
                Cirurgião Plástico Especialista em Estética Facial e Corporal
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-white"
                  >
                    Procedimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#antes-depois"
                    className="text-gray-300 hover:text-white"
                  >
                    Antes e Depois
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-gray-300 hover:text-white"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-300 hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Certificações</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-[#2c3e50]">
                  <span className="text-xs font-bold">CRM</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-[#2c3e50]">
                  <span className="text-xs font-bold">SBCP</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-[#2c3e50]">
                  <span className="text-xs font-bold">ISAPS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dr. Marcos Storion. Todos os direitos
              reservados. Feito por{" "}
              <a href="https://fixteam.uk" className="hover:text-gray-200">
                fixteam
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
