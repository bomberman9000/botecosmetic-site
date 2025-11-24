"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { getProductById, Product } from "@/lib/products";

interface CartItem {
  id: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<(Product & { quantity: number })[]>(
    []
  );

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
    const productsWithData = cart.map((item: CartItem) => {
      const product = getProductById(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    });
    setProducts(productsWithData.filter(Boolean) as (Product & { quantity: number })[]);
  }, []);

  const updateQuantity = (id: string, change: number) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    const productsWithData = updated.map((item: CartItem) => {
      const product = getProductById(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    });
    setProducts(productsWithData.filter(Boolean) as (Product & { quantity: number })[]);
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    const productsWithData = updated.map((item: CartItem) => {
      const product = getProductById(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    });
    setProducts(productsWithData.filter(Boolean) as (Product & { quantity: number })[]);
  };

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-bg py-6 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Корзина пуста
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Добавьте товары из каталога или пройдите подбор
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/products"
              className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-accent transition-colors min-h-[48px] flex items-center justify-center"
            >
              Каталог
            </Link>
            <Link
              href="/skin-test"
              className="border-2 border-primary text-primary px-6 py-3 rounded-button font-medium hover:bg-primary hover:text-white transition-colors min-h-[48px] flex items-center justify-center"
            >
              Пройти подбор
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-12">
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-bg border border-line rounded-card p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-soft"
              >
                <div className="relative w-full sm:w-24 h-48 sm:h-24 bg-soft rounded-sm flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, 96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-primary line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center border border-line rounded-button hover:bg-soft min-h-[44px] sm:min-h-[32px]"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium w-8 text-center text-sm sm:text-base">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center border border-line rounded-button hover:bg-soft min-h-[44px] sm:min-h-[32px]"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="text-lg sm:text-xl font-bold text-primary">
                        {product.price * product.quantity}₽
                      </span>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-red-500 hover:text-red-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-soft border border-line rounded-card p-4 sm:p-6 sticky top-20 sm:top-24 shadow-soft">
              <h2 className="font-display text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">
                Итого
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Товаров: {products.reduce((sum, p) => sum + p.quantity, 0)}</span>
                  <span>{total}₽</span>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between text-xl font-bold text-primary">
                    <span>Всего:</span>
                    <span>{total}₽</span>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 sm:py-4 rounded-button font-medium text-base sm:text-lg hover:bg-accent transition-colors border-2 border-primary min-h-[48px]"
              >
                Оформить заказ
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

