"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Получаем корзину
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Отправка заказа через API route
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cart }),
      });
      
      if (!response.ok) {
        throw new Error("Ошибка при отправке заказа");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("Произошла ошибка при отправке заказа. Попробуйте позже.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    localStorage.removeItem("cart");
    
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Заказ оформлен!
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Мы свяжемся с вами в ближайшее время
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-12">
          Оформление заказа
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Имя *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 sm:py-4 border border-line rounded-button focus:outline-none focus:border-accent text-base min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 sm:py-4 border border-line rounded-button focus:outline-none focus:border-accent text-base min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 sm:py-4 border border-line rounded-button focus:outline-none focus:border-accent text-base min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Адрес доставки *
            </label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 sm:py-4 border border-line rounded-button focus:outline-none focus:border-accent text-base min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Комментарий к заказу
            </label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 sm:py-4 border border-line rounded-button focus:outline-none focus:border-accent text-base min-h-[48px]"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors disabled:opacity-50 border-2 border-primary min-h-[48px]"
          >
            {isSubmitting ? "Отправка..." : "Оформить заказ"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

