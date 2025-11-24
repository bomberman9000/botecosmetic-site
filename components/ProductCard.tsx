"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-bg border border-line rounded-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
      >
        <div className="relative h-48 sm:h-56 md:h-64 bg-soft">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-primary line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{product.description}</p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {product.price}₽
            </span>
            <span className="text-accent text-xs sm:text-sm font-medium">
              Подробнее →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

