"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  description: string;
}

export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  description,
}: BeforeAfterImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="overflow-hidden border-none shadow-lg">
        <div className="p-0">
          <div
            ref={containerRef}
            className="relative h-[400px] w-full cursor-ew-resize select-none overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={beforeSrc || "/placeholder.svg"}
                alt={beforeAlt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                Antes
              </div>
            </div>

            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={afterSrc || "/placeholder.svg"}
                alt={afterAlt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                Depois
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#d4af37] shadow-lg">
                <div className="flex h-full w-full items-center justify-center">
                  <MoveHorizontal className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p className="text-center text-sm text-[#7f8c8d]">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

interface AnimatedBeforeAfterProps {
  category: string;
}

export default function AnimatedBeforeAfter({
  category,
}: AnimatedBeforeAfterProps) {
  // aqui troca as img
  const getGalleryItems = () => {
    switch (category) {
      case "lipoHD":
        return [
          {
            id: 1,
            before: `/images/before.png`,
            after: `/images/after.png`,
            description: `Lipo HD - Paciente 1, 35 anos`,
          },
          {
            id: 2,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Lipo HD - Paciente 2, 42 anos`,
          },
        ];
      case "rinoplastia":
        return [
          {
            id: 1,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Rinoplastia - Paciente 1, 28 anos`,
          },
          {
            id: 2,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Rinoplastia - Paciente 2, 31 anos`,
          },
        ];
      case "mamoplastia":
        return [
          {
            id: 1,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Mamoplastia - Paciente 1, 33 anos`,
          },
          {
            id: 2,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Mamoplastia - Paciente 2, 29 anos`,
          },
        ];
      case "facial":
        return [
          {
            id: 1,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Harmonização Facial - Paciente 1, 38 anos`,
          },
          {
            id: 2,
            before: `/placeholder.svg?height=400&width=600`,
            after: `/placeholder.svg?height=400&width=600`,
            description: `Harmonização Facial - Paciente 2, 45 anos`,
          },
        ];
      default:
        return [];
    }
  };

  const galleryItems = getGalleryItems();

  return (
    <div className="py-4">
      <div className="grid gap-8 md:grid-cols-2">
        {galleryItems.map((item) => (
          <BeforeAfterImage
            key={item.id}
            beforeSrc={item.before}
            afterSrc={item.after}
            beforeAlt={`Antes - ${item.description}`}
            afterAlt={`Depois - ${item.description}`}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
