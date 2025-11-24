"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/lib/products";

const categories = [
  { value: "all", label: "Все" },
  { value: "Сыворотки", label: "Сыворотки" },
  { value: "Кремы", label: "Кремы" },
  { value: "Очищение", label: "Очищение" },
  { value: "Мужской уход", label: "Для бороды" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Каталог продуктов
          </h1>
          <p className="text-xl text-gray-600">
            Персональная косметика BOTE для вашей кожи
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-button font-medium transition-colors border-2 ${
                selectedCategory === category.value
                  ? "bg-primary text-white border-primary"
                  : "bg-bg text-primary border-line hover:border-accent"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
