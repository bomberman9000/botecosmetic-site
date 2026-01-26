"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Sparkles, CheckCircle } from "lucide-react";
import { getProductsByIds, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ResultClient() {
  const searchParams = useSearchParams();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const hasMarketplace = (product: Product) =>
    Boolean(
      product.wildberriesUrl ||
        product.ozonUrl ||
        product.letualUrl ||
        product.aptekaUrl
    );
  const canBundle =
    recommendedProducts.length > 0 &&
    recommendedProducts.every((product) => !hasMarketplace(product));

  useEffect(() => {
    const productIds = searchParams
      .get("products")
      ?.split(",")
      .filter(Boolean) || [];

    const products = getProductsByIds(productIds);
    setRecommendedProducts(products);
  }, [searchParams]);

  const handleAddAllToCart = () => {
    const cart = recommendedProducts.map((p) => ({
      id: p.id,
      quantity: 1,
    }));
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  const totalPrice = canBundle
    ? recommendedProducts.reduce((sum, product) => sum + product.price, 0)
    : 0;
  const discountPrice = canBundle ? Math.round(totalPrice * 0.9) : 0;

  return (
    <div className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 mb-4 sm:mb-6">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-4">
            Ваша персональная формула
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Мы подобрали для вас идеальный набор средств BOTE на основе ваших
            ответов
          </p>
        </motion.div>

        {recommendedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {recommendedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Usage Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-soft border border-line rounded-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-soft"
            >
              <h2 className="font-display text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">
                Как использовать
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Утро</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Очищение (Deep Clean)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Сыворотка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Крем (если есть)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Вечер</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Очищение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Сыворотка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Крем</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Первые результаты вы заметите через 2-3 недели регулярного использования
              </p>
            </motion.div>

            {canBundle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-accent/10 border-2 border-accent rounded-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-2">
                      Добавить весь набор
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">Скидка -10% при покупке набора</p>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-gray-500 line-through">{totalPrice}₽</p>
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{discountPrice}₽</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddAllToCart}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Добавить весь набор в корзину</span>
                </motion.button>
              </motion.div>
            )}

            {/* Trust Block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-soft border border-line rounded-card p-8 shadow-soft"
            >
              <h2 className="font-display text-2xl font-semibold mb-6 text-primary">
                Почему нам доверяют
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["натуральность", "лаборатория", "дерматологически безопасно", "подтверждённые результаты", "сделано в России"].map((point, index) => (
                  <div key={index} className="text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-button font-medium text-lg hover:bg-primary hover:text-white transition-colors"
              >
                Смотреть весь каталог
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Не удалось загрузить рекомендации
            </p>
            <Link
              href="/skin-test"
              className="text-accent hover:underline font-medium"
            >
              Пройти тест заново
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
