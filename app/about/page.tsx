import { Metadata } from "next";

export const metadata: Metadata = {
  title: "История бренда VIA LABOTE | О компании",
  description:
    "VIA LABOTE соединяет науку, ингредиенты и технологию персонального подбора ухода. Натуральная косметика премиум-класса.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-gray-100 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center animate-fade-in">
            История бренда
          </h1>

          <p className="text-xl text-gray-600 text-center leading-relaxed">
            VIA LABOTE соединяет науку, ингредиенты и технологию персонального
            подбора ухода.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <a
              href="/skin-test"
              className="inline-block px-8 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-full hover:bg-[#C19B2C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Пройти тест и подобрать уход
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
