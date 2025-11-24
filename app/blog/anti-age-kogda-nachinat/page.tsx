"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AntiAgeArticle() {
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
            Anti-Age: когда начинать и что использовать
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Anti-Age • 7 минут чтения
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
                Когда пора начинать anti-age уход
              </h2>
              <p>
                Оптимально начинать anti-age уход с 25–27 лет, когда начинает снижаться выработка коллагена. 
                Однако первые признаки старения могут появиться и раньше из-за внешних факторов: 
                ультрафиолета, стресса, неправильного ухода.
              </p>
              <p>
                Раннее начало anti-age ухода — это профилактика. Гораздо проще предотвратить появление 
                морщин, чем бороться с уже существующими. Поэтому если вы заметили первые признаки 
                старения (мелкие морщинки, потеря упругости, тусклость), не стоит ждать — начинайте 
                использовать anti-age средства.
              </p>
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Признаки, что пора начинать anti-age:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Мелкие морщинки вокруг глаз и на лбу</li>
                  <li>• Потеря упругости кожи</li>
                  <li>• Тусклый цвет лица</li>
                  <li>• Неровный рельеф кожи</li>
                  <li>• Возраст 25+ лет</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Главные anti-age активы
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Пептиды</h3>
                  <p className="text-sm text-gray-700">
                    Стимулируют выработку коллагена и эластина, улучшают упругость и разглаживают морщины. 
                    Работают на глубоком уровне, восстанавливая структуру кожи.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Витамин C</h3>
                  <p className="text-sm text-gray-700">
                    Мощный антиоксидант, защищает от свободных радикалов, выравнивает тон, придаёт 
                    сияние. Осветляет пигментацию и улучшает текстуру кожи.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Ретинол</h3>
                  <p className="text-sm text-gray-700">
                    В лёгких концентрациях ускоряет обновление клеток, разглаживает морщины, улучшает 
                    текстуру. Требует осторожного применения и защиты от солнца.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Антиоксиданты</h3>
                  <p className="text-sm text-gray-700">
                    Защищают кожу от окислительного стресса, предотвращают преждевременное старение, 
                    поддерживают здоровье клеток.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Продукты BOTE Anti-Age
              </h2>
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-2 text-lg">
                  Anti-Age Pro — омолаживающая сыворотка
                </h3>
                <p className="text-gray-700 mb-3">
                  Профессиональная сыворотка с пептидами, витамином C и коллагеном. Направлена на 
                  уменьшение морщин и повышение упругости кожи. Пептидный комплекс стимулирует выработку 
                  коллагена, витамин C выравнивает тон и придаёт сияние.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Активные компоненты:</strong> Пептиды, коллаген, витамин C
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Эффект:</strong> Разглаживание морщин, улучшение упругости, выравнивание рельефа, 
                  омоложение, сияние
                </p>
              </div>
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-2 text-lg">
                  Крем для восстановления
                </h3>
                <p className="text-gray-700">
                  Питательный крем, который дополняет действие сыворотки, обеспечивая глубокое увлажнение 
                  и восстановление барьера кожи. Идеален для завершения anti-age ухода.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Как работает anti-age уход
              </h2>
              <p className="mb-4">
                Anti-age уход работает на нескольких уровнях:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Укрепляет барьер</strong> — восстанавливает защитный слой кожи, предотвращает 
                    потерю влаги и защищает от внешних факторов
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Улучшает тонус</strong> — пептиды и коллаген стимулируют выработку собственных 
                    белков, делая кожу более упругой и подтянутой
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Уменьшает морщины</strong> — активные компоненты разглаживают существующие 
                    морщинки и предотвращают появление новых
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Делает кожу плотнее</strong> — улучшает структуру кожи, делает её более 
                    плотной и здоровой
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Выравнивает рельеф</strong> — витамин C и пептиды улучшают текстуру, делая 
                    кожу более ровной
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Придаёт сияние</strong> — антиоксиданты и витамин C возвращают здоровое 
                    сияние и ровный тон
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Правильная схема anti-age ухода
              </h2>
              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Утро:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Очищение</li>
                  <li>Сыворотка Anti-Age Pro</li>
                  <li>Увлажняющий крем</li>
                  <li><strong>SPF (обязательно!)</strong> — защита от ультрафиолета критически важна для anti-age</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Утром SPF обязателен, так как некоторые anti-age компоненты могут повышать чувствительность к солнцу
                </p>
              </div>
              <div className="bg-accent/10 border border-accent rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Вечер:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Очищение</li>
                  <li>Сыворотка Anti-Age Pro</li>
                  <li>Питательный крем для восстановления</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Вечером кожа восстанавливается, поэтому anti-age активы работают наиболее эффективно
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Что ожидать от anti-age ухода
              </h2>
              <p className="mb-4">
                При регулярном использовании anti-age средств:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Через 2-3 недели: улучшение тона, появление сияния</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Через 1-2 месяца: разглаживание мелких морщинок, улучшение упругости</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Через 3-6 месяцев: заметное улучшение рельефа, более плотная и упругая кожа</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Важно: anti-age уход требует терпения и регулярности. Результаты накапливаются постепенно, 
                но при правильном подходе они долгосрочные и заметные.
              </p>
            </section>

            <section className="bg-accent/10 border-2 border-accent rounded-card p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Начните anti-age уход с Anti-Age Pro
              </h2>
              <p className="mb-6 text-gray-700">
                Сыворотка Anti-Age Pro с пептидами, витамином C и коллагеном — профессиональное решение 
                для омоложения кожи. Подходит для всех типов кожи, включая чувствительную.
              </p>
              <Link
                href="/products/antiage"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
              >
                Смотреть Anti-Age Pro
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

