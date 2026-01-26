"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ArticlePage() {
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
            Как правильно подобрать уход за кожей: полный гид
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Уход за кожей • 8 минут чтения
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
                Почему универсальный уход не работает
              </h2>
              <p>
                У каждого человека кожа — как отдельная экосистема. То, что идеально подходит сухой коже, 
                может ухудшить состояние жирной. Универсальный уход не учитывает тонкости: интенсивность 
                работы сальных желёз, чувствительность, наличие акне или пигментации, возрастные изменения.
              </p>
              <p>
                Правильный подбор ухода — это персональная стратегия. Она строится на понимании типа кожи, 
                текущих задач и реакции на активные компоненты. Когда вы используете средства, созданные 
                специально под ваши особенности, результат появляется быстрее и сохраняется дольше.
              </p>
              <p>
                Многие бренды предлагают "универсальные" средства, но они работают по принципу "среднего 
                арифметического" — подходят многим, но не идеальны ни для кого. Персональный подход BOTE 
                учитывает все нюансы вашей кожи и создаёт формулу, которая работает именно для вас.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Типы кожи: как определить свой
              </h2>
              <p className="mb-4">
                Чтобы подобрать эффективный уход, нужно знать, к какому типу относится кожа. 
                Определить тип можно самостоятельно или пройти тест подбора BOTE.
              </p>
              
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Жирная кожа
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Блеск в течение дня, особенно в Т-зоне</li>
                  <li>• Расширенные поры, особенно на носу и щеках</li>
                  <li>• Склонность к акне, черным точкам и воспалениям</li>
                  <li>• Толстая текстура кожи</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Рекомендация:</strong> Очищение Deep Clean, сыворотка MULTI 3, крем Balance
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Сухая кожа
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Шелушения, особенно после умывания</li>
                  <li>• Чувство стянутости</li>
                  <li>• Тонкие, почти незаметные поры</li>
                  <li>• Тусклый цвет лица</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Рекомендация:</strong> Мягкое очищение, сыворотка Hydrate+, питательный крем
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Комбинированная кожа
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Блеск в Т-зоне (лоб, нос, подбородок)</li>
                  <li>• Сухость на щеках</li>
                  <li>• Расширенные поры в центре лица</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Рекомендация:</strong> Комбинированный уход: балансирующие средства для Т-зоны, увлажнение для щёк
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Нормальная кожа
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ровная текстура</li>
                  <li>• Нет ярко выраженных проблем</li>
                  <li>• Сбалансированное выделение себума</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Рекомендация:</strong> Поддерживающий уход для сохранения баланса
                </p>
              </div>

              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Чувствительная кожа
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Реакция на новые средства</li>
                  <li>• Покраснения и раздражения</li>
                  <li>• Склонность к аллергическим реакциям</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Рекомендация:</strong> Мягкие формулы без агрессивных компонентов, тестирование перед применением
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Ошибки в выборе ухода, которые вредят коже
              </h2>
              <p className="mb-4">
                Многие люди совершают типичные ошибки при выборе косметики, которые не только не помогают, 
                но и могут ухудшить состояние кожи:
              </p>
              <ol className="space-y-3 mb-4 list-decimal list-inside">
                <li className="text-gray-700">
                  <strong>Покупка средств "по совету" без диагностики</strong> — то, что помогло подруге, 
                  может не подойти вам из-за другого типа кожи или проблем.
                </li>
                <li className="text-gray-700">
                  <strong>Использование слишком агрессивных кислот</strong> — чрезмерное применение AHA/BHA 
                  может разрушить защитный барьер и вызвать раздражение.
                </li>
                <li className="text-gray-700">
                  <strong>Пренебрежение увлажнением</strong> — даже жирной коже нужно увлажнение, иначе 
                  она начнёт вырабатывать ещё больше себума.
                </li>
                <li className="text-gray-700">
                  <strong>Несочетаемые активы</strong> — одновременное использование несовместимых компонентов 
                  может нейтрализовать их действие или вызвать раздражение.
                </li>
                <li className="text-gray-700">
                  <strong>Неправильная последовательность использования</strong> — порядок нанесения средств 
                  важен: от лёгких к плотным, от активных к базовым.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Почему тест подбора ухода лучше самостоятельного выбора
              </h2>
              <p>
                Тест подбора учитывает множество факторов одновременно, создавая комплексную картину вашей кожи:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Тип кожи</strong> — жирная, сухая, комбинированная, нормальная, чувствительная</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Чувствительность</strong> — насколько кожа реагирует на новые средства</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Наличие проблем</strong> — акне, тусклость, морщины, расширенные поры</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Возраст</strong> — разные возрастные группы нуждаются в разных подходах</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Желаемый результат</strong> — увлажнение, борьба с акне, омоложение</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Уровень ухода</strong> — минимальный или расширенный набор средств</span>
                </li>
              </ul>
              <p>
                На основе этих данных формируется персональный набор, который точечно решает ваш запрос. 
                Это экономит время, деньги и гарантирует результат.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Примеры эффективных схем ухода
              </h2>
              
              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Для жирной кожи с акне</h3>
                <p className="mb-2 text-gray-700"><strong>Утро:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Очищение Deep Clean</li>
                  <li>Сыворотка MULTI 3</li>
                  <li>Лёгкий крем Balance</li>
                </ul>
                <p className="mb-2 text-gray-700"><strong>Вечер:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Очищение Deep Clean</li>
                  <li>Сыворотка MULTI 3</li>
                  <li>Крем Balance</li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Для сухой кожи</h3>
                <p className="mb-2 text-gray-700"><strong>Утро:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Мягкое очищение</li>
                  <li>Сыворотка Hydrate+</li>
                  <li>Питательный крем</li>
                </ul>
                <p className="mb-2 text-gray-700"><strong>Вечер:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Мягкое очищение</li>
                  <li>Сыворотка Hydrate+</li>
                  <li>Питательный крем (более плотный)</li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Для anti-age</h3>
                <p className="mb-2 text-gray-700"><strong>Утро:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Очищение</li>
                  <li>Сыворотка Anti-Age Pro</li>
                  <li>Увлажняющий крем</li>
                  <li>SPF (обязательно!)</li>
                </ul>
                <p className="mb-2 text-gray-700"><strong>Вечер:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Очищение</li>
                  <li>Сыворотка Anti-Age Pro</li>
                  <li>Питательный крем</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Почему BOTE — лучший выбор для персонального ухода
              </h2>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Индивидуальный подбор</strong> — умный тест анализирует все особенности вашей кожи 
                    и создаёт персональную формулу
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Лабораторные формулы</strong> — все средства разработаны в собственной лаборатории 
                    с контролем качества
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Натуральные активы</strong> — ниацинамид, салициловая кислота, гиалуроновая кислота, 
                    пептиды, пробиотики
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Отсутствие красителей</strong> — все средства без искусственных красителей и 
                    агрессивных компонентов
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Подходит всем</strong> — мужчинам, женщинам, подросткам, включая людей с 
                    чувствительной кожей
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-accent/10 border-2 border-accent rounded-card p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Получите персональную формулу ухода
              </h2>
              <p className="mb-6 text-gray-700">
                Пройдите тест подбора BOTE и получите индивидуальный набор средств, созданный специально 
                для вашей кожи. Быстро, эффективно, с гарантией результата.
              </p>
              <Link
                href="/skin-test"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
              >
                Пройти тест подбора
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
