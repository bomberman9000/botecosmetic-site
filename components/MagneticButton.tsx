"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.3,
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;

    button.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
