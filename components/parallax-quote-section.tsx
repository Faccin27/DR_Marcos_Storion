"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxQuoteSectionProps {
  quote: string;
  author: string;
  backgroundOption?: number;
}

export default function ParallaxQuoteSection({
  quote,
  author,
  backgroundOption = 1,
}: ParallaxQuoteSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const backgrounds = [
    "linear-gradient(to right, rgba(44, 62, 80, 0.8), rgba(26, 37, 47, 0.2)), url('/images/parallaxbk.jpg')",
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div
        style={{
          y,
          opacity,
          background: backgrounds[backgroundOption - 1],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="h-0.5 w-16 bg-[#d4af37]"></div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              "{quote}"
            </h2>

            <div className="flex justify-center">
              <div className="h-0.5 w-16 bg-[#d4af37]"></div>
            </div>

            <p className="mt-6 text-xl text-gray-200">{author}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
