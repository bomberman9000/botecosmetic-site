"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  type?: "typing" | "fade-in" | "slide-up" | "gradient";
  className?: string;
  speed?: number;
}

export default function AnimatedText({
  text,
  type = "typing",
  className = "",
  speed = 50,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (type !== "typing") {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, type, speed]);

  if (type === "gradient") {
    return <span className={`animated-text-gradient ${className}`}>{text}</span>;
  }

  return (
    <span className={`animated-text-${type} ${className}`}>
      {type === "typing" ? displayedText : text}
      {type === "typing" && currentIndex < text.length && (
        <span className="typing-cursor">|</span>
      )}
    </span>
  );
}
