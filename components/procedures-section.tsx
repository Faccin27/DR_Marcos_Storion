"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedServiceCard from "./animated-service-card";
import AllProcedures from "./all-procedures";

export default function ProceduresSection() {
  const [showAllProcedures, setShowAllProcedures] = useState(false);

  const featuredProcedures = [
    {
      title: "Lipo HD",
      description:
        "Lipoaspiração de alta definição para resultados mais precisos e naturais.",
      icon: "Droplets",
      index: 0,
    },
    {
      title: "Rinoplastia",
      description: "Cirurgia para correção estética e funcional do nariz.",
      icon: "Scissors",
      index: 1,
    },
    {
      title: "Prótese de Mama",
      description:
        "Aumento mamário com implantes de silicone de alta qualidade.",
      icon: "Heart",
      index: 2,
    },
    {
      title: "Harmonização Facial",
      description:
        "Procedimentos combinados para equilibrar as proporções faciais.",
      icon: "Sparkles",
      index: 3,
    },
  ];

  return (
    <section id="servicos" className="w-full bg-[#f8f9fa] py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50]">
            Serviços Oferecidos
          </h2>
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
    </section>
  );
}
