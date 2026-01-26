"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  wildberriesUrl?: string;
  ozonUrl?: string;
  letualUrl?: string;
  aptekaUrl?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Изображение */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Контент */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-5 line-clamp-3 min-h-[4rem]">
          {product.description}
        </p>

        {/* Кнопка "Подробнее" - на всю ширину */}
        <Link
          href={`/products/${product.slug}`}
          className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center font-medium text-sm block mb-3"
        >
          Подробнее
        </Link>

        {/* Заголовок "Купить:" */}
        <div className="text-xs text-gray-500 font-medium mb-2 flex items-center gap-2">
          <ShoppingCart className="w-3.5 h-3.5" />
          Купить:
        </div>

        {/* Кнопки магазинов в два ряда (2x2) */}
        <div className="grid grid-cols-2 gap-2">
          {/* Wildberries */}
          {product.wildberriesUrl && (
            <a
              href={product.wildberriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-[#CB11AB] text-white rounded-lg hover:bg-[#B00F96] transition-all duration-200 flex items-center justify-center gap-1.5 font-medium text-xs shadow-sm hover:shadow-md"
              title="Купить на Wildberries"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Wildberries
            </a>
          )}

          {/* Ozon */}
          {product.ozonUrl && (
            <a
              href={product.ozonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-[#005BFF] text-white rounded-lg hover:bg-[#0047CC] transition-all duration-200 flex items-center justify-center gap-1.5 font-medium text-xs shadow-sm hover:shadow-md"
              title="Купить на Ozon"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ozon
            </a>
          )}

          {/* Л'Этуаль */}
          {product.letualUrl && (
            <a
              href={product.letualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-[#000000] text-white rounded-lg hover:bg-[#333333] transition-all duration-200 flex items-center justify-center gap-1.5 font-medium text-xs shadow-sm hover:shadow-md"
              title="Купить на Л'Этуаль"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Л'Этуаль
            </a>
          )}

          {/* Аптека.ру */}
          {product.aptekaUrl && (
            <a
              href={product.aptekaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-[#00A651] text-white rounded-lg hover:bg-[#008C44] transition-all duration-200 flex items-center justify-center gap-1.5 font-medium text-xs shadow-sm hover:shadow-md"
              title="Купить на Аптека.ру"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Аптека.ру
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
