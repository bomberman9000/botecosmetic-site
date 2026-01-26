"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
  dropdown?: Array<{ href: string; label: string }>;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = lastScrollY - currentScrollY;
          
          // Скролл вверх: разница > 5px и мы не в самом верху
          const scrollingUp = scrollDifference > 5 && currentScrollY > 30;
          
          setScrollY(currentScrollY);
          setIsScrolled(currentScrollY > 20);
          setIsScrollingUp(scrollingUp);
          setLastScrollY(currentScrollY);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Проверяем начальное состояние
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/products") {
      return pathname === "/products" || pathname?.startsWith("/products/");
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const navItems: NavItem[] = [
    { href: "/", label: "ГЛАВНАЯ" },
    { href: "/about", label: "ИСТОРИЯ БРЕНДА" },
    { href: "/skin-test", label: "ПЕРСОНАЛЬНЫЙ УХОД" },
    { href: "/products", label: "ГОТОВЫЙ УХОД" },
    { href: "/loyalty", label: "ПРОГРАММА ЛОЯЛЬНОСТИ" },
  ];

  return (
    <header 
      className={`site-header sticky top-0 z-[1000] transition-all duration-300 ${
        isScrolled ? "is-scrolled" : ""
      } ${
        isScrollingUp ? "is-scrolling-up" : ""
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center h-20 lg:h-24">
          {/* Logo & Brand Tagline */}
          <div className="logo-wrapper flex-shrink-0">
            <Link href="/" className="flex items-center header-logo-link brand">
              <img 
                src="/images/via-labote-logo.svg" 
                alt="VIA LABOTE" 
                className="brand-logo"
              />
              <div className="brand-tagline">
                <div className="brand-title">КОНЦЕПТОР УХОДА</div>
                <div className="brand-subtitle">день и ночь, чтобы раскрыть красоту и долговечность любой кожи</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - с отступом от логотипа */}
          <nav 
            className={`hidden lg:flex items-center nav-wrapper flex-1 transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-100"
            }`}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="nav-item relative"
              >
                <Link
                  href={item.href}
                  className={`nav-link nav-link-luxury text-sm lg:text-base font-medium uppercase ${
                    isActive(item.href) ? "active" : ""
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="nav-dropdown-link"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

        </div>

        {/* Mobile/Tablet Navigation - inline labels */}
        <nav className="mobile-nav-inline lg:hidden" aria-label="Основная навигация">
          <div className="mobile-nav-row">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link nav-link-luxury ${
                  isActive(item.href) ? "active" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
