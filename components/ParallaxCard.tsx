"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function ParallaxCard({
  children,
  className = "",
  intensity = 15,
}: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((centerX - x) / centerX) * intensity;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      className={`parallax-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
