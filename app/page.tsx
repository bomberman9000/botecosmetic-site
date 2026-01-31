"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Heart, Users, CheckCircle, FileText, FlaskConical, Package, Gift } from "lucide-react";
import WildberriesReviews from "@/components/WildberriesReviews";
import { useEffect } from "react";
import Image from "next/image";

const advantages = [
  {
    icon: Sparkles,
    title: "Персональный подбор",
    description: "Индивидуальная формула под ваш тип кожи и цели",
  },
  {
    icon: Shield,
    title: "Натуральные формулы",
    description: "Без гормонов, спирта и силиконов",
  },
  {
    icon: Heart,
    title: "Создано в России",
    description: "Лаборатория в России, качество мирового уровня",
  },
  {
    icon: Users,
    title: "Для всех",
    description: "Подходит мужчинам, женщинам и подросткам",
  },
];

const whyPersonal = [
  "учитывает тип кожи",
  "решает конкретную проблему",
  "активы и концентрации под вас",
  "быстрый результат",
  "безопасно для чувствительной кожи",
];


const trustPoints = [
  "сделано в России",
  "разработано в лаборатории",
  "не используем красители",
  "подходит подросткам и взрослым",
  "подтверждённые результаты",
];

export default function Home() {
  // Parallax hover effect for hero (desktop only)
  useEffect(() => {
    const hero = document.querySelector('.hero') as HTMLElement;
    const layer = document.querySelector('.hero-parallax') as HTMLElement;

    if (!hero || !layer || window.innerWidth <= 768) {
      return;
    }

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = hero.getBoundingClientRect();
      const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
      const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;

      const moveX = x * 6; // максимум 3px в каждую сторону
      const moveY = y * 6;

      layer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.015)`;
    };

    const handleMouseLeave = () => {
      layer.style.transform = 'translate(0px, 0px) scale(1)';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Микроразметка для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VIA LABOTE",
            "description": "Персональная косметика премиум-класса. Лабораторные формулы с активными компонентами.",
            "url": "https://bote-cosmetic.ru",
            "logo": "https://bote-cosmetic.ru/images/via-labote-logo.svg",
            "sameAs": [
              "https://t.me/botecosmetic",
              "https://instagram.com/bote_cosmetic"
            ]
          })
        }}
      />
      
      {/* Hero Section - Premium Banner */}
      <section className="hero" aria-label="VIA LABOTE hero">
        <div className="hero-content">
          <div className="hero-brand">
            <img
              src="/images/hero/hero-oval-logo.svg"
              alt="VIA LABOTE logo"
              className="hero-emblem"
            />
          </div>
          <h1 className="hero-title">ВИА ЛАБОТЕ</h1>
          <p className="hero-tagline">
            «Лаборатория персональной косметики, где каждая формула — точный ответ коже»
          </p>
        </div>

        <div className="hero-parallax">
          <picture className="hero-media">
            <source
              media="(max-width: 768px)"
              srcSet="/images/hero/hero-general-mobile.png"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/images/hero/hero-general-tablet.png"
            />
            <img
              src="/images/hero/hero-general.png"
              alt="Портрет VIA LABOTE"
              className="hero-img"
            />
          </picture>
        </div>
      </section>

      {/* Promo Cards Section */}
      <section className="section-promos py-12 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Card - Personal Care */}
            <motion.a
              href="/skin-test"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="promo-card group relative rounded-[22px] overflow-hidden block text-decoration-none transform-gpu shadow-[0_14px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-350"
            >
              <div className="relative w-full h-[420px] sm:h-[500px] md:h-[420px] promo-media">
                <Image
                  src="/images/cards/z1.png"
                  alt="Твоя индивидуальная история"
                  fill
                  className="object-cover transition-transform duration-350 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: '50% 25%' }}
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority={false}
                  loading="lazy"
                />
              </div>
              <div className="promo-overlay absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent opacity-90 transition-opacity duration-350 ease-out group-hover:opacity-100 md:bg-gradient-to-r max-md:bg-gradient-to-t max-md:from-transparent max-md:via-black/30 max-md:to-black/55"></div>
              <div className="promo-content absolute left-9 bottom-8 text-white max-w-[70%]">
                <span className="promo-kicker">ТВОЯ</span>
                <h3 className="card-title promo-title font-display text-[38px] leading-[1.15] my-[10px] mb-3.5 font-semibold">
                  Индивидуальная<br />
                  История
                </h3>
                <span className="promo-link">Подробнее →</span>
              </div>
            </motion.a>

            {/* Right Card - Shop */}
            <motion.a
              href="https://www.wildberries.ru/seller/1266087"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="promo-card group relative rounded-[22px] overflow-hidden block text-decoration-none transform-gpu shadow-[0_14px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-350"
            >
              <div className="relative w-full h-[420px] sm:h-[500px] md:h-[420px] promo-media">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet="/images/products/banner2_mobile_900x1200.jpg"
                  />
                  <Image
                    src="/images/products/1278.png"
                    alt="Твой готовый уход"
                    fill
                    className="object-cover transition-transform duration-350 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: '50% 25%' }}
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority={false}
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="promo-overlay absolute inset-0 opacity-90 transition-opacity duration-350 ease-out group-hover:opacity-100"></div>
              <div className="promo-content absolute left-9 bottom-8 text-white max-w-[60%]">
                <span className="promo-kicker">ТВОЙ</span>
                <h3 className="promo-title font-display text-[38px] leading-[1.05] my-[10px] mb-3.5 font-semibold">
                  Готовый<br />
                  Уход.
                </h3>
                <span className="promo-link">Подробнее →</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <advantage.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 sm:py-28 lg:py-32 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8 px-4 leading-tight">
              Почему нам доверяют
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-soft rounded-card p-6 text-center shadow-soft"
                >
                  <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 lg:py-32 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Отзывы наших клиентов
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4 max-w-2xl mx-auto">
              Реальные отзывы с маркетплейсов.
            </p>
          </motion.div>
          <WildberriesReviews limit={6} showLink />
        </div>
      </section>

    </div>
  );
}
