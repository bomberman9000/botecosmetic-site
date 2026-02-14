"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(max-width: 768px)").matches) {
      canvas.style.display = "none";
      return;
    }

    canvas.style.display = "block";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Particle[] = [];

    const drawHeart = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, size * 0.35);
      ctx.bezierCurveTo(-size * 1.2, -size * 0.45, -size * 0.9, -size * 1.2, 0, -size * 0.55);
      ctx.bezierCurveTo(size * 0.9, -size * 1.2, size * 1.2, -size * 0.45, 0, size * 0.35);
      ctx.closePath();
      ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
      ctx.fill();
      ctx.restore();
    };

    for (let i = 0; i < 38; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 3,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        drawHeart(particle.x, particle.y, particle.size, particle.opacity);
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
