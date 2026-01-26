"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, MessageSquare, Instagram, Youtube } from "lucide-react";

export default function ContactsPage() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "botecosmetic@mail.ru",
      href: "mailto:botecosmetic@mail.ru",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "8 (903) 303-38-75",
      href: "tel:+79033033875",
    },
    {
      icon: Globe,
      label: "Сайт",
      value: "botecosmetic.ru",
      href: "https://botecosmetic.ru",
    },
    {
      icon: MessageSquare,
      label: "Telegram",
      value: "@botecosmetic",
      href: "https://t.me/botecosmetic",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bote_cosmetic",
      href: "https://instagram.com/bote_cosmetic",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@botecosmetic",
      href: "https://youtube.com/@botecosmetic",
    },
  ];

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
      href: "https://youtube.com/@botecosmetic",
      icon: Youtube,
    },
    {
      name: "VK",
      href: "https://vk.com/bote_cosmetic",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") || contact.href.startsWith("mailto") || contact.href.startsWith("tel") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg border border-line rounded-card p-6 text-center hover:shadow-card transition-shadow shadow-soft"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <contact.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-600">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-soft border border-line rounded-card p-8 text-center shadow-soft"
        >
          <h2 className="font-display text-2xl font-semibold mb-6 text-primary">
            Мы в социальных сетях
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
