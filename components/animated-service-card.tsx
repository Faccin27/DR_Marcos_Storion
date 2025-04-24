"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Scissors, Heart, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  index: number;
}

export default function AnimatedServiceCard({
  title,
  description,
  icon,
  link = "#",
  index,
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (icon) {
      case "Droplets":
        return <Droplets className="h-8 w-8 text-[#d4af37]" />;
      case "Scissors":
        return <Scissors className="h-8 w-8 text-[#d4af37]" />;
      case "Heart":
        return <Heart className="h-8 w-8 text-[#d4af37]" />;
      case "Sparkles":
        return <Sparkles className="h-8 w-8 text-[#d4af37]" />;
      default:
        return <Droplets className="h-8 w-8 text-[#d4af37]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-1 shadow-xl transition-all"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col items-center p-6 text-center">
          <motion.div
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5e6]"
            animate={
              isHovered ? { scale: 1.1, backgroundColor: "#f0e6b2" } : {}
            }
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {getIcon()}
          </motion.div>

          <h3 className="mb-3 text-xl font-bold text-[#2c3e50]">{title}</h3>

          <p className="mb-6 flex-grow text-[#7f8c8d]">{description}</p>

          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={link}
              className="inline-flex items-center text-sm font-medium text-[#d4af37] hover:text-[#b8971f]"
            >
              Saiba mais
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0e6b2]"
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
