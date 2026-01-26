"use client";

import Link from "next/link";
import { MessageSquare, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/botecosmetic",
      icon: MessageSquare,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/bote_cosmetic",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
    },
  ];

  return (
    <footer className="footer-premium bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="footer-logo-link">
              <div className="footer-logo on-dark">
                <img 
                  src="/images/via-labote-logo.svg" 
                  alt="VIA LABOTE - Персональная косметика для вашей кожи" 
                  className="brand-logo"
                />
              </div>
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/skin-test" className="hover:text-accent transition-colors">
                  Подбор
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Каталог
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contacts" className="hover:text-accent transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Возврат
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Email:{" "}
              <a
                href="mailto:botecosmetic@mail.ru"
                  className="hover:text-accent transition-colors"
              >
                botecosmetic@mail.ru
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 BOTE Cosmetic. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

