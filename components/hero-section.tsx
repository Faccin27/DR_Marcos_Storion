"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Particulas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }

      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animateParticles();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full  bg-[#2c3e50]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: "none" }}
      />
      <Image src={"/images/banner1.jpg"} alt="" className="object-cover" fill />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2c3e50]/70 via-[#1a252f]/80 to-[#1a252f]/90" />

      <motion.div style={{ y, opacity }} className="relative z-20 h-full">
        <div className="container flex h-full items-center px-4 md:px-6">
          <div className="grid gap-8 pt-20 md:grid-cols-2 md:pt-0">
            <div className="flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                  Dr. Marcos Storion
                </h1>
                <p className="text-xl font-medium text-gray-200 md:text-2xl">
                  Cirurgião Plástico Especialista em Estética Facial e Corporal
                </p>
                <p className="text-lg italic text-gray-300">
                  "Transformando autoestima com segurança e excelência"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button className="group relative overflow-hidden bg-[#d4af37] text-white hover:bg-[#d4af37]">
                  <span className="relative z-10 flex items-center">
                    <Link target="_blank" href="https://api.whatsapp.com/send?phone=5511934167007&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20marcar%20uma%20consulta%20com%20o%20Dr.%20Marcos%20!">
                      Agende sua consulta
                    </Link>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-[#b8971f] transition-transform group-hover:translate-x-0" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-white"
                >
                  <Link target="_blank" href="https://api.whatsapp.com/send?phone=5511934167007&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20marcar%20uma%20consulta%20com%20o%20Dr.%20Marcos%20!">
                    Fale pelo WhatsApp
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
                <div className="absolute -inset-0.5 z-0 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f0e6b2] opacity-50" />
                <div className="absolute inset-0 z-10 rounded-xl bg-white/5" />
                <Image
                  src="/images/doctor.jpeg"
                  alt="Dr. Marcos Storion"
                  fill
                  className="relative z-0 object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-[#d4af37]" />
          <div className="mt-2 h-2 w-2 rounded-full bg-[#ffca1b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
