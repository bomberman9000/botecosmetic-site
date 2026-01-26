"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, X } from "lucide-react";

export default function AcneArticle() {
  return (
    <article className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm sm:text-base mb-6"
          >
            ← Назад к статьям
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Акне: причины, мифы и эффективный уход
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Проблемы кожи • 10 минут чтения
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <div className="text-gray-700 leading-relaxed space-y-6">
            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Откуда появляется акне
              </h2>
              <p>
                Акне — это воспалительное заболевание кожи, которое возникает из-за закупорки пор и 
                размножения бактерий. Понимание причин помогает выбрать правильный подход к лечению.
              </p>
              <p className="mb-4"><strong>Основные причины акне:</strong></p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Гормональные изменения</strong> — повышение уровня андрогенов стимулирует 
                    выработку себума. Часто встречается у подростков, во время менструации, беременности 
                    или при гормональных нарушениях
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Избыток себума</strong> — чрезмерная выработка кожного сала закупоривает поры 
                    и создаёт благоприятную среду для бактерий
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Бактерии</strong> — Propionibacterium acnes размножаются в закупоренных порах 
                    и вызывают воспаление
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Стресс</strong> — повышает уровень кортизола, что усиливает выработку себума
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Неправильный уход</strong> — использование слишком агрессивных или, наоборот, 
                    недостаточно эффективных средств
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Агрессивные очищающие средства</strong> — пересушивают кожу, что заставляет 
                    её вырабатывать ещё больше себума
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Мифы об акне
              </h2>
              <p className="mb-4">
                Существует множество мифов об акне, которые мешают эффективному лечению:
              </p>
              <div className="space-y-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-red-700">Миф:</strong> Прыщи появляются из-за сладкого
                      <p className="text-sm text-gray-700 mt-1">
                        <strong>Реальность:</strong> Связь между сладким и акне не доказана. Однако 
                        избыток сахара может усугубить воспаления у некоторых людей. Важнее общий 
                        баланс питания и правильный уход.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-red-700">Миф:</strong> Акне — только в подростковом возрасте
                      <p className="text-sm text-gray-700 mt-1">
                        <strong>Реальность:</strong> Акне может появиться в любом возрасте. У взрослых 
                        часто связано с гормональными изменениями, стрессом или неправильным уходом.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-red-700">Миф:</strong> Нужно "пересушивать" кожу
                      <p className="text-sm text-gray-700 mt-1">
                        <strong>Реальность:</strong> Пересушивание разрушает защитный барьер и заставляет 
                        кожу вырабатывать ещё больше себума. Нужен баланс: эффективное очищение без 
                        пересушивания.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Что действительно помогает
              </h2>
              
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  1. Салициловая кислота
                </h3>
                <p className="text-gray-700">
                  Работает внутри поры, растворяет себум и отмершие клетки. Проникает глубоко в поры, 
                  очищая их изнутри. Это один из самых эффективных компонентов против акне.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>В BOTE:</strong> Сыворотка MULTI 3 содержит салициловую кислоту в оптимальной 
                  концентрации
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  2. Ниацинамид
                </h3>
                <p className="text-gray-700">
                  Уменьшает воспаление и жирность. Регулирует работу сальных желёз, сужает поры и 
                  выравнивает тон. Мягкий, но эффективный компонент, подходит даже чувствительной коже.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>В BOTE:</strong> MULTI 3 и крем Balance содержат ниацинамид
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  3. Пробиотики
                </h3>
                <p className="text-gray-700">
                  Восстанавливают барьер кожи и нормализуют микрофлору. Помогают коже быстрее 
                  восстанавливаться после воспалений и предотвращают новые высыпания.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>В BOTE:</strong> MULTI 3 содержит комплекс пробиотиков
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  4. Мягкое очищение каждый день
                </h3>
                <p className="text-gray-700">
                  Гель Deep Clean — идеален для ежедневного использования. Очищает поры, борется с 
                  черными точками, но не пересушивает кожу. Содержит фруктовые кислоты и растительные 
                  экстракты.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>В BOTE:</strong> Deep Clean — мягкий гель для всех типов кожи
                </p>
              </div>

              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  5. Персональный уход
                </h3>
                <p className="text-gray-700 mb-3">
                  Схема с MULTI 3 = лучший выбор для проблемной кожи. Комплексный подход с сывороткой, 
                  кремом и очищением даёт максимальный результат.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Схема:</strong> Утром и вечером — Deep Clean → MULTI 3 → Balance крем
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Признаки правильного ухода
              </h2>
              <p className="mb-4">
                Как понять, что выбранный уход работает:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Меньше новых высыпаний</strong> — через 2-3 недели количество новых 
                  прыщей заметно снижается</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Кожа перестаёт блестеть</strong> — жирность нормализуется, блеск 
                  исчезает в течение дня</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Поры постепенно сужаются</strong> — поры становятся чище и визуально 
                  меньше</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Исчезают постакне</strong> — пятна и неровности постепенно выравниваются, 
                  тон становится ровнее</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Кожа становится здоровее</strong> — появляется естественное сияние, 
                  текстура улучшается</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Важно: результаты появляются постепенно. Первые улучшения заметны через 2-3 недели, 
                максимальный эффект — через 2-3 месяца регулярного использования.
              </p>
            </section>

            <section className="bg-accent/10 border-2 border-accent rounded-card p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Комплексный уход против акне от BOTE
              </h2>
              <p className="mb-4 text-gray-700">
                Набор для проблемной кожи: MULTI 3 + Deep Clean + Balance крем
              </p>
              <p className="mb-6 text-gray-700">
                Пройдите тест подбора и получите персональную формулу ухода, созданную специально для 
                вашей кожи с акне.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products/multi3"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
                >
                  Смотреть MULTI 3
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/skin-test"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-primary hover:text-white transition-colors min-h-[48px]"
                >
                  Пройти тест подбора
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

