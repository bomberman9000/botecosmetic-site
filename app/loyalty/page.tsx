"use client";

import { motion } from "framer-motion";
import { Gift, Star, Crown, Sparkles, CheckCircle } from "lucide-react";

export default function LoyaltyPage() {
  const bonuses = [
    {
      icon: "1₽",
      title: "Начисление",
      value: "1 ₽ = 0.5 бонуса",
    },
    {
      icon: "6",
      title: "Срок действия",
      value: "Бонусы действуют 6 месяцев с момента начисления",
    },
    {
      icon: "30%",
      title: "Оплата бонусами",
      value: "Бонусами можно оплатить до 30% от суммы заказа",
    },
  ];

  const gifts = [
    {
      amount: "от 10 000 ₽",
      title: "Тоник",
      description: "Освежающий тоник для вашего ухода",
    },
    {
      amount: "от 20 000 ₽",
      title: "Тоник + умывалка",
      description: "Тоник и гидрофильная умывалка в подарок",
    },
    {
      amount: "от 30 000 ₽",
      title: "Крем для век",
      description: "Питательный крем для области вокруг глаз",
    },
  ];

  const statuses = [
    {
      name: "Silver",
      min: 60000,
      cashback: "3%",
      benefits: [
        "Повышенное начисление бонусов",
        "Ранний доступ к новинкам",
      ],
      color: "text-gray-600",
    },
    {
      name: "Gold",
      min: 100000,
      cashback: "5%",
      benefits: [
        "Максимальное начисление бонусов",
        "Эксклюзивные подарки",
        "Приоритетная поддержка",
      ],
      color: "text-gold-500",
    },
    {
      name: "Platinum",
      min: 150000,
      cashback: "7%",
      benefits: [
        "Премиальное начисление бонусов",
        "Персональные офферы",
        "VIP-обслуживание",
        "Эксклюзивные события",
      ],
      color: "text-gold-600",
    },
  ];

  const faq = [
    {
      question: "Когда начисляются бонусы?",
      answer: "Бонусы начисляются после оплаты заказа",
    },
    {
      question: "Как долго они действуют?",
      answer: "Бонусы действуют 6 месяцев с момента начисления",
    },
    {
      question: "Можно ли оплатить бонусами доставку?",
      answer: "Бонусы не начисляются на доставку",
    },
    {
      question: "Можно ли обменять бонусы на деньги?",
      answer: "Бонусы не обмениваются на деньги",
    },
    {
      question: "Суммируются ли подарки от суммы с бонусами?",
      answer: "Подарки от суммы заказа предоставляются дополнительно к бонусам",
    },
    {
      question: "Что делать, если подарок не добавился?",
      answer: "Обратитесь в службу поддержки, мы решим вопрос в течение 24 часов",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-soft to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block bg-gold-50 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premium Club
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Программа лояльности VIA LABOTE Клуб
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Получайте бонусы за покупки, подарки от суммы заказа и повышайте свой статус
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is it Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
              Что это такое?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Программа лояльности VIA LABOTE Клуб — это система бонусов, подарков и статусов, которая делает каждую покупку выгоднее. Копите бонусы, получайте подарки при крупных заказах и повышайте свой статус для ещё больших преимуществ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How bonuses work Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
              Как копятся бонусы
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-card transition-shadow duration-300"
              >
                <div className="relative mb-4 flex items-center justify-center min-h-[80px]">
                  {index === 0 && (
                    <Star className="w-16 h-16 text-gold-500 star-spin absolute" fill="currentColor" />
                  )}
                  <div className="text-5xl font-bold text-gold-500 relative z-10">
                    {bonus.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {bonus.title}
                </h3>
                <p className="text-gray-600">
                  {bonus.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Как тратить бонусы
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span>На оплату части заказа (до 30% от суммы)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span>Бонусы не обмениваются на деньги</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span>Бонусы не начисляются на доставку</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
              Подарки от суммы заказа
            </h2>
            <p className="text-lg text-gray-600">
              При достижении суммы заказа вы автоматически получаете подарок
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gifts.map((gift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300 text-center"
              >
                <div className="text-2xl font-bold text-gold-500 mb-4">
                  {gift.amount}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {gift.title}
                </h3>
                <p className="text-gray-600">
                  {gift.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statuses Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
              Статусы участников
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statuses.map((status, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className={`font-display text-2xl font-bold ${status.color} mb-2`}>
                    {status.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    от {status.min.toLocaleString()} ₽ покупок за 12 месяцев
                  </p>
                  <div className={`text-4xl font-bold ${status.color} mb-2`}>
                    {status.cashback} кешбэк бонусами
                  </div>
                  <p className="text-xs text-gray-500">
                    * Процент — это повышенный кешбэк бонусами (а не скидка)
                  </p>
                </div>
                <ul className="space-y-2">
                  {status.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
              Часто задаваемые вопросы
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <h3 className="font-semibold text-primary mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
