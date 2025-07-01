"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AllProcedures from "./all-procedures";
import AnimatedServiceCard from "./animated-service-card";
import ProcedureModal from "./procedure-modal";

interface Procedure {
  title: string;
  description: string;
  fullDescription?: string;
  icon: string;
  index: number;
  image?: string;
}

export default function ProceduresSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Particles
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showAllProcedures, setShowAllProcedures] = useState(false);

  // Modal state
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Função para ajustar o tamanho do canvas com o pixel ratio correto
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Definir o tamanho do elemento canvas
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Definir o tamanho do buffer do canvas (multiplicado pelo pixel ratio)
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);

      // Escalar o contexto de acordo com o pixel ratio
      ctx.scale(pixelRatio, pixelRatio);
    };

    resizeCanvas();

    // Increase number of particles from 50 to 200
    const particleCount = 20;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          // Reduzir o tamanho das partículas (antes era Math.random() * 4 + 2)
          size: Math.random() * 2.5 + 1,
          // Slightly increase speed for more movement
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4,
          // Increase opacity range from (0.1-0.6) to (0.3-0.8)
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const animateParticles = () => {
      // Use a semi-transparent clear to create trails
      ctx.fillStyle = "#FFF";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Use a brighter gold color with higher opacity
        ctx.fillStyle = `#c9a100`;
        ctx.beginPath();
        // Usar arc com o mesmo valor para largura e altura para garantir círculos perfeitos
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(212, 175, 55, 0.5)";

        // Update particle position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap particles around the screen
        if (p.x > window.innerWidth) p.x = 0;
        if (p.x < 0) p.x = window.innerWidth;
        if (p.y > window.innerHeight) p.y = 0;
        if (p.y < 0) p.y = window.innerHeight;
      }

      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    createParticles();
    const animationId = requestAnimationFrame(animateParticles);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Efeito adicional para garantir que o canvas seja redimensionado quando showAllProcedures mudar
  useEffect(() => {
    // Pequeno timeout para permitir que o DOM seja atualizado primeiro
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        // Disparar um evento de redimensionamento para recalcular o canvas
        window.dispatchEvent(new Event("resize"));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [showAllProcedures]);

  const featuredProcedures: Procedure[] = [
    {
      title: "Deep Plane",
      description:
        "Técnica avançada de rejuvenescimento facial com resultados naturais e duradouros.",
      fullDescription: `O Deep Plane é uma técnica cirúrgica avançada de rejuvenescimento facial que trabalha em camadas mais profundas da face, proporcionando resultados mais naturais e duradouros.
  
      Diferente das técnicas tradicionais, o Deep Plane reposiciona os tecidos faciais em um plano mais profundo, tratando não apenas a pele, mas também o SMAS (Sistema Músculo-Aponeurótico Superficial) e os ligamentos faciais.
  
      Esta técnica é especialmente eficaz para corrigir flacidez moderada a severa no terço médio da face, linha da mandíbula e pescoço, com resultados que podem durar de 8 a 12 anos.
  
      O Dr. Marcos Storion utiliza as técnicas mais modernas e seguras, garantindo resultados naturais que preservam as características individuais de cada paciente, evitando o aspecto "esticado" ou artificial.`,
      icon: "Droplets",
      index: 0,
      image: "/images/deepplane.jpg",
    },
    {
      title: "Neck Lift",
      description:
        "Procedimento para rejuvenescimento do pescoço, eliminando flacidez e melhorando o contorno cervical.",
      fullDescription: `O Neck Lift é um procedimento cirúrgico especializado no rejuvenescimento do pescoço, ideal para pacientes que apresentam flacidez cutânea, bandas platismais proeminentes ou acúmulo de gordura na região submentoniana. Durante a cirurgia, são realizadas incisões discretas atrás das orelhas e, em alguns casos, sob o queixo, permitindo a remoção do excesso de pele e gordura, além do reposicionamento dos músculos do pescoço. O procedimento pode ser realizado isoladamente ou em conjunto com um facelift, dependendo das necessidades individuais do paciente e da avaliação do cirurgião. Os resultados incluem um contorno cervical mais definido, aparência mais jovem e harmoniosa, com recuperação média de 2 a 3 semanas para as principais atividades sociais.`,
      icon: "Scissors",
      index: 1,
      image: "/images/necklift.png",
    },
    {
      title: "FaceLift",
      description:
        "Procedimento clássico de rejuvenescimento facial que combate sinais de envelhecimento e flacidez.",
      fullDescription: `O FaceLift tradicional, também conhecido como ritidoplastia, é um procedimento cirúrgico que visa rejuvenescer a face através da remoção do excesso de pele e reposicionamento dos tecidos faciais. A técnica envolve incisões discretas ao redor das orelhas, permitindo ao cirurgião tratar a flacidez da pele e do SMAS (Sistema Músculo-Aponeurótico Superficial), resultando em uma aparência mais jovem e descansada. Ideal para pacientes com sinais moderados a avançados de envelhecimento facial, o FaceLift trata principalmente o terço inferior da face e pescoço, melhorando o contorno mandibular e reduzindo os sulcos nasolabiais. O Dr. Marcos Storion adapta a técnica às necessidades específicas de cada paciente, garantindo resultados naturais que respeitam as características individuais, com duração média de 5 a 8 anos.`,
      icon: "Heart",
      index: 2,
      image: "/images/FaceLift.jpeg",
    },
    {
      title: "Blefaroplastia",
      description:
        "Cirurgia para rejuvenescimento das pálpebras, removendo excesso de pele e bolsas de gordura.",
      fullDescription: `A Blefaroplastia é uma cirurgia plástica focada no rejuvenescimento da região dos olhos, tratando o excesso de pele nas pálpebras superiores e/ou inferiores, além das bolsas de gordura que causam aspecto de cansaço e envelhecimento. Nas pálpebras superiores, o procedimento remove o excesso de pele que pode até mesmo interferir na visão em casos mais severos. Nas pálpebras inferiores, são tratadas as bolsas de gordura e a flacidez cutânea. As incisões são realizadas em locais estratégicos que seguem as dobras naturais da pálpebra, tornando as cicatrizes praticamente imperceptíveis após a cicatrização completa. Os resultados incluem um olhar mais descansado, jovem e expressivo, com recuperação relativamente rápida de aproximadamente 7 a 10 dias para retorno às atividades sociais.`,
      icon: "Sparkles",
      index: 3,
      image: "/images/blefaroplastia.jpg",
    },
  ];

  return (
    <section
      id="servicos"
      className="relative w-full py-16 overflow-hidden"
      ref={ref}
    >
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
        <div className="mb-10 text-center ">
          <h2 className="text-3xl font-bold text-[#2c3e50]">
            Serviços Oferecidos
          </h2>{" "}
          <p className="mt-2 text-[#7f8c8d]">
            Conheça os procedimentos realizados pelo Dr. Marcos Storion
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!showAllProcedures ? (
            <motion.div
              key="featured"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProcedures.map((procedure) => (
                  <AnimatedServiceCard
                    key={procedure.title}
                    title={procedure.title}
                    description={procedure.description}
                    icon={procedure.icon}
                    index={procedure.index}
                    onClick={() => openModal(procedure)}
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

      {selectedProcedure && (
        <ProcedureModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProcedure.title}
          description={
            selectedProcedure.fullDescription || selectedProcedure.description
          }
          image={selectedProcedure.image}
        />
      )}
    </section>
  );
}
