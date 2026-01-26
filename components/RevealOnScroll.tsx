"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom" | "flip";
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  animation = "fade",
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-animation ${animation} ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
