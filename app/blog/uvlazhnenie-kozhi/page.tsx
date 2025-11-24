"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HydrationArticle() {
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
            Увлажнение кожи: почему это важно даже при акне?
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Уход за кожей • 6 минут чтения
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
                Почему важен барьер кожи
              </h2>
              <p>
                Кожа — это защитный орган. Её верхний слой, роговой слой, образует защитный барьер, 
                который предотвращает потерю влаги и защищает от внешних факторов: бактерий, загрязнений, 
                ультрафиолета.
              </p>
              <p>
                Когда барьер нарушен, кожа теряет способность удерживать влагу и защищаться. Это приводит к:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Появлению сухости и шелушений</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Раздражениям и покраснениям</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Быстрому появлению прыщей — повреждённый барьер не может защитить от бактерий</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Усилению жирности — кожа пытается компенсировать потерю влаги</span>
                </li>
              </ul>
              <div className="bg-accent/10 border border-accent rounded-card p-6">
                <p className="text-gray-700">
                  <strong>Важно:</strong> Да, даже жирной коже нужно увлажнение! Когда кожа обезвожена, 
                  она начинает вырабатывать больше себума, чтобы компенсировать потерю влаги. Это создаёт 
                  порочный круг: сухость → избыток себума → акне → агрессивное очищение → сухость.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Главные увлажняющие компоненты
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Гиалуроновая кислота</h3>
                  <p className="text-sm text-gray-700">
                    Удерживает влагу в 1000 раз больше собственного веса. Проникает в глубокие слои 
                    кожи, обеспечивая длительное увлажнение.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Пантенол</h3>
                  <p className="text-sm text-gray-700">
                    Успокаивает, восстанавливает барьер, снимает раздражения. Идеален для чувствительной 
                    и повреждённой кожи.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Бетаин</h3>
                  <p className="text-sm text-gray-700">
                    Натуральный увлажнитель, который помогает коже удерживать влагу и оставаться мягкой.
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2">Алоэ вера</h3>
                  <p className="text-sm text-gray-700">
                    Успокаивает, увлажняет и восстанавливает. Особенно эффективен для раздражённой кожи.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Продукты BOTE для увлажнения
              </h2>
              <div className="space-y-4 mb-4">
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2 text-lg">
                    Hydrate+ — увлажняющая сыворотка
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Сыворотка Hydrate+ содержит гиалуроновую кислоту, пантенол и бетаин. Интенсивно 
                    увлажняет, смягчает и успокаивает кожу. Подходит для сухой, чувствительной и 
                    нормальной кожи.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Эффект:</strong> Устранение стянутости, мягкость, восстановление барьера, 
                    здоровое сияние
                  </p>
                </div>
                <div className="bg-soft rounded-card p-6">
                  <h3 className="font-semibold text-primary mb-2 text-lg">
                    Balance — балансирующий крем
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Крем Balance обеспечивает увлажнение без перегруза. Подходит для жирной и 
                    комбинированной кожи, обеспечивая баланс между увлажнением и контролем жирности.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Эффект:</strong> Баланс увлажнения, матирование, контроль жирности
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Как понять, что увлажнения недостаточно
              </h2>
              <p className="mb-4">
                Признаки обезвоженной кожи:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Кожа тянет</strong> — особенно после умывания, ощущение стянутости и дискомфорта
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Видные мелкие морщинки</strong> — особенно вокруг глаз и на лбу, которые 
                    исчезают после нанесения увлажняющего средства
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>"Серость"</strong> — тусклый, сероватый оттенок кожи, отсутствие здорового сияния
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Косметика ложится плохо</strong> — тональный крем скатывается, подчёркивает 
                    шелушения, выглядит неестественно
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Шелушения</strong> — особенно на щеках, носу и вокруг рта
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Парадоксальная жирность</strong> — кожа блестит, но при этом чувствуется 
                    стянутость. Это признак обезвоженной жирной кожи
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Правильная схема увлажнения
              </h2>
              <div className="bg-soft rounded-card p-6 mb-4">
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
              <div className="bg-soft rounded-card p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Для жирной кожи с акне</h3>
                <p className="mb-2 text-gray-700"><strong>Утро:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Очищение Deep Clean</li>
                  <li>Сыворотка MULTI 3</li>
                  <li>Крем Balance (лёгкое увлажнение)</li>
                </ul>
                <p className="mb-2 text-gray-700"><strong>Вечер:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Очищение Deep Clean</li>
                  <li>Сыворотка MULTI 3</li>
                  <li>Крем Balance</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Важно:</strong> Даже при акне нужно увлажнение! Balance обеспечивает баланс 
                  между контролем жирности и увлажнением.
                </p>
              </div>
            </section>

            <section className="bg-accent/10 border-2 border-accent rounded-card p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
                Попробуйте Hydrate+ для интенсивного увлажнения
              </h2>
              <p className="mb-6 text-gray-700">
                Сыворотка Hydrate+ с гиалуроновой кислотой, пантенолом и бетаином обеспечивает глубокое 
                увлажнение и восстановление барьера кожи. Подходит для сухой, чувствительной и нормальной кожи.
              </p>
              <Link
                href="/products/hydrate"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
              >
                Смотреть Hydrate+
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

