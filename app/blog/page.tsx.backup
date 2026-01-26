"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: "kak-pravilno-podobrat-uhod",
    title: "Как правильно подобрать уход за кожей: полный гид",
    description: "Почему универсальный уход не работает и как найти идеальную формулу для вашей кожи",
    category: "Уход",
    readingTime: "8 минут",
  },
  {
    id: "chto-takoe-niacinamid",
    title: "Ниацинамид: универсальный актив для чистой и ровной кожи",
    description: "Полный гид по ниацинамиду: как работает, концентрации, эффекты и продукты BOTE",
    category: "Ингредиенты",
    readingTime: "7 минут",
  },
  {
    id: "akne-prichiny-i-uhod",
    title: "Акне: причины, мифы и эффективный уход",
    description: "Откуда берётся акне, частые ошибки и комплексный подход к решению проблемы",
    category: "Проблемы кожи",
    readingTime: "10 минут",
  },
  {
    id: "uvlazhnenie-kozhi",
    title: "Увлажнение кожи: почему это важно даже при акне?",
    description: "Барьер кожи, признаки обезвоживания и правильная схема увлажнения",
    category: "Уход",
    readingTime: "6 минут",
  },
  {
    id: "anti-age-kogda-nachinat",
    title: "Anti-Age: когда начинать и что использовать",
    description: "Возрастные изменения, пептиды, витамин C и эффективный anti-age уход",
    category: "Anti-Age",
    readingTime: "7 минут",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Блог о уходе за кожей
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Полезные статьи о персональном уходе, ингредиентах и эффективных схемах
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg border border-line rounded-card p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block text-xs font-medium text-accent">
                  {article.category}
                </span>
                {article.readingTime && (
                  <span className="text-xs text-gray-500">
                    {article.readingTime}
                  </span>
                )}
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-primary">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {article.description}
              </p>
              <Link
                href={`/blog/${article.id}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-sm sm:text-base"
              >
                Читать статью
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

