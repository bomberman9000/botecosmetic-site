"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/products";

interface GiftPopupProps {
  threshold: number; // Минимальная сумма для подарка
  giftProduct: Product;
  currentCartTotal: number;
}

export default function GiftPopup({ threshold, giftProduct, currentCartTotal }: GiftPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Показываем попап если сумма корзины достигла порога и он не был закрыт
    if (currentCartTotal >= threshold && !isClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Показываем через 2 секунды после загрузки
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [currentCartTotal, threshold, isClosed]);

  // Также показываем попап при загрузке страницы, если порог уже достигнут
  useEffect(() => {
    if (currentCartTotal >= threshold && !isClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl border border-gray-200 p-5"
        >
          <button
            onClick={() => {
              setIsVisible(false);
              setIsClosed(true);
            }}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-6">
            <h3 className="font-display text-base font-bold text-primary mb-2">
              От {threshold}₽ покупки
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium text-primary">
                Получите регенерирующий набор в подарок
              </p>
            </div>

            <div className="flex items-center gap-3 bg-soft rounded-lg p-3 border border-line">
              <div className="relative w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0 border border-line">
                <Image
                  src={giftProduct.image}
                  alt={giftProduct.name}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-primary line-clamp-2 mb-2">
                  {giftProduct.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    {giftProduct.price}₽
                  </span>
                  <span className="text-sm font-bold text-accent">0₽</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

