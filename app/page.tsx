"use client";

import { Users, Award, Calendar, Smile } from "lucide-react";

import AnimatedCounter from "@/components/animated-counter";
import HeroSection from "@/components/hero-section";
import SiteHeader from "@/components/site-header";
import ProceduresSection from "@/components/procedures-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SiteHeader />

      <HeroSection />

      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <AnimatedCounter
              end={15}
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
    </main>
  );
}
