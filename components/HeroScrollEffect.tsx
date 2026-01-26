"use client";

import { useEffect } from "react";

export default function HeroScrollEffect() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const onScroll = () => {
      const max = 240; // насколько "сильно" эффект
      const v = Math.min(window.scrollY / max, 1);
      (hero as HTMLElement).style.setProperty("--scroll", v.toFixed(3));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
