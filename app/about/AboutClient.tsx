"use client";

import { motion } from "framer-motion";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative py-20 px-4 bg-gradient-to-r from-gray-100 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center"
          >
            История бренда
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 text-center leading-relaxed"
          >
            VIA LABOTE соединяет науку, ингредиенты и технологию персонального подбора
            ухода.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Наш подход
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Персональная косметика VIA LABOTE — это новый подход к уходу за
              кожей, основанный на точной диагностике, качественных активных
              ингредиентах и индивидуальном подборе формул. Мы создаём средства,
              которые действительно работают с конкретными задачами кожи, а не
              предлагают универсальный вариант &quot;для всех&quot;.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Лабораторная разработка
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Каждый продукт разрабатывается в собственной лаборатории, где
              специалисты тщательно подбирают концентрации активных компонентов,
              тестируют формулы и создают уход, способный дать заметный результат
              после недели применения. Все лабораторные разработки проходят
              строгий контроль качества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              VIA LABOTE — это бренд, который объединяет науку, натуральные
              ингредиенты и современные технологии подбора косметики онлайн. Мы
              не используем красители, агрессивные компоненты или ненужные
              добавки. Наши средства подходят мужчинам, женщинам и подросткам,
              включая людей с чувствительной кожей.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Все формулы гипоаллергенны и имеют безопасный состав. Безопасность
              и эффективность подтверждаются тестами, а производственный цикл
              полностью контролируется командой экспертов.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <a
              href="/skin-test"
              className="inline-block px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Пройти тест и подобрать уход
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
