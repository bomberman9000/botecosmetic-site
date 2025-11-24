"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-300 border-2";
  
  const variants = {
    primary: "bg-primary text-white border-primary hover:bg-accent hover:border-accent",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary border-transparent hover:bg-soft",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-button",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

