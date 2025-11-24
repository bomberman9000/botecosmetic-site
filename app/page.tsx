"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart, Users, CheckCircle, FileText, FlaskConical, Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { products } from "@/lib/products";

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

const steps = [
  {
    number: 1,
    title: "Вы проходите короткий тест",
    description: "8 простых вопросов о вашей коже",
  },
  {
    number: 2,
    title: "Мы анализируем ваш тип кожи",
    description: "Алгоритм подбирает оптимальную формулу",
  },
  {
    number: 3,
    title: "Подбираем персональный уход",
    description: "2-4 средства специально для вас",
  },
  {
    number: 4,
    title: "Вы получаете набор, который работает",
    description: "Персональная формула с инструкцией",
  },
];

const trustPoints = [
  "сделано в России",
  "разработано в лаборатории",
  "не используем красители",
  "подходит подросткам и взрослым",
  "подтверждённые результаты",
];

const testimonials = [
  {
    name: "Анна, 28 лет",
    text: "После подбора BOTE моя проблемная кожа стала чистой и сияющей. Рекомендую!",
    rating: 5,
  },
  {
    name: "Максим, 32 года",
    text: "MULTI 3 помог избавиться от акне за месяц. Кожа чистая и ровная.",
    rating: 5,
  },
  {
    name: "Елена, 35 лет",
    text: "Anti-Age Pro творит чудеса. Морщинки разгладились, кожа сияет.",
    rating: 5,
  },
];

const popularProducts = products.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6 px-4">
              Персональная косметика{" "}
              <span className="text-accent">BOTE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
              BOTE — это персональная косметика, подобранная под вашу кожу.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Мы создаём рецептуры в лаборатории, используем натуральные активы и подбираем уход, который действительно работает.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4"
            >
              <Link
                href="/skin-test"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors duration-300 border-2 border-primary w-full sm:w-auto min-h-[48px]"
              >
                Пройти подбор
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Personal Care */}
      <section className="py-20 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4">
              Почему персональный уход лучше?
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {whyPersonal.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg text-gray-700 px-4"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4">
              Как проходит подбор?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white font-display text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-bg">
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

      {/* Popular Products */}
      <section className="py-20 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-4">
              Популярные продукты
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4">
              Проверенные формулы для разных типов кожи
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
            >
              Смотреть весь каталог
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8 px-4">
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
      <section className="py-20 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4">
              Отзывы
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6 px-4">
              <p className="text-lg">
                Персональная косметика <strong>BOTE</strong> — это новый подход к уходу за кожей, основанный на точной диагностике, качественных активных ингредиентах и индивидуальном подборе формул. Мы создаём средства, которые действительно работают с конкретными задачами кожи, а не предлагают универсальный вариант "для всех".
              </p>
              
              <p>
                Каждый продукт разрабатывается в собственной лаборатории, где специалисты тщательно подбирают концентрации <strong>активных компонентов</strong>, тестируют формулы и создают уход, способный дать заметный <strong>результат после недели</strong> применения. Все <strong>лабораторные разработки</strong> проходят строгий контроль качества.
              </p>

              <p>
                <strong>BOTE</strong> — это бренд, который объединяет науку, <strong>натуральные ингредиенты</strong> и современные технологии <strong>подбора косметики онлайн</strong>. Мы не используем <strong>красители</strong>, агрессивные компоненты или ненужные добавки. Наши средства подходят мужчинам, женщинам и подросткам, включая людей с <strong>чувствительной кожей</strong>. Все формулы <strong>гипоаллергенны</strong> и имеют <strong>безопасный состав</strong>. Безопасность и эффективность подтверждаются тестами, а производственный цикл полностью контролируется командой технологов. Мы используем только <strong>растительные экстракты</strong> и обеспечиваем <strong>экологичность</strong> производства.
              </p>

              <p>
                Главная особенность <strong>BOTE</strong> — <strong>персональный подбор ухода</strong>. На сайте доступен умный <strong>тест подбора ухода</strong>, который проводит <strong>косметологический анализ</strong> и определяет <strong>тип кожи: жирная / сухая / комбинированная</strong>, чувствительность, возрастные особенности и текущие задачи: акне, черные точки, жирность, сухость, тусклость, расширенные поры, возрастные изменения и многое другое. На основании ответов система формирует <strong>индивидуальную формулу</strong> — персональный набор средств: сыворотку, крем, тоник или гель. Благодаря точной логике <strong>подбора косметики онлайн</strong> клиент получает действительно работающий уход, который создан под его индивидуальные особенности с <strong>адаптацией под кожу</strong>.
              </p>

              <p>
                Особое внимание уделяется <strong>активным компонентам</strong>. В сыворотках <strong>BOTE</strong> используются <strong>ниацинамид</strong>, <strong>салициловая кислота</strong>, пробиотики, <strong>пептиды</strong>, витамин С, <strong>гиалуроновая кислота</strong>, <strong>растительные экстракты</strong> и другие современные ингредиенты. Такие сочетания помогают бороться с акне и <strong>воспалениями</strong>, улучшать <strong>барьер кожи</strong>, контролировать <strong>жирность</strong> и обеспечивать <strong>себорегуляцию</strong>, <strong>увлажнять</strong> и <strong>омолаживать</strong> кожу. Каждая <strong>индивидуальная формула</strong> сбалансирована так, чтобы действие было заметным, но мягким и <strong>безопасным</strong>. Средства обеспечивают <strong>очищение пор</strong>, <strong>матирующий эффект</strong> и <strong>восстановление барьера</strong>.
              </p>

              <p>
                <strong>BOTE</strong> предлагает несколько направлений ухода: анти-акне с контролем <strong>воспалений</strong> и <strong>себорегуляцией</strong>, <strong>увлажнение</strong> с <strong>смягчением</strong> и <strong>восстановлением барьера</strong>, баланс для <strong>контроля жирности</strong>, <strong>anti-age</strong> с <strong>пептидами</strong> для <strong>упругости кожи</strong> и <strong>разглаживания морщин</strong>, уход для подростков и <strong>чувствительной кожи</strong>. После прохождения <strong>теста подбора ухода</strong> пользователь получает подробные рекомендации: как использовать продукты утром и вечером, как сочетать активы и какие результаты можно ожидать уже <strong>после недели</strong> применения. Такой подход помогает не просто решить текущие проблемы, но и выстроить грамотную систему ухода с <strong>адаптацией под кожу</strong>.
              </p>

              <p>
                Мы уделяем внимание каждому этапу — от разработки до упаковки. Продукция производится в России, проходит контроль качества, а упаковка соответствует современным стандартам премиальной косметики. Линейка бренда постоянно расширяется, появляются новые формулы и решения для разных типов кожи.
              </p>

              <p className="text-lg font-medium">
                Если вы ищете качественную персональную косметику, которая учитывает индивидуальные особенности кожи — <strong>BOTE</strong> станет вашим надёжным выбором. Пройдите тест на сайте и получите уход, созданный специально для вас.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
