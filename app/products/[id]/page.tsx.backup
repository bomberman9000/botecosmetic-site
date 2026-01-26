"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, ExternalLink } from "lucide-react";
import { getProductById, Product } from "@/lib/products";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const id = params.id as string;
    const foundProduct = getProductById(id);
    setProduct(foundProduct || null);
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: product.id, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-gray-600">Товар не найден</p>
      </div>
    );
  }

  const marketplaceLinks = [
    {
      label: "Wildberries",
      url: product.wildberriesUrl,
      className: "bg-[#CB11AB] text-white border-[#CB11AB] hover:bg-[#B00F96]",
    },
    {
      label: "Ozon",
      url: product.ozonUrl,
      className: "bg-[#005BFF] text-white border-[#005BFF] hover:bg-[#0047CC]",
    },
    {
      label: "Л'Этуаль",
      url: product.letualUrl,
      className: "bg-[#000000] text-white border-[#000000] hover:bg-[#333333]",
    },
    {
      label: "Аптека.ру",
      url: product.aptekaUrl,
      className: "bg-[#00A651] text-white border-[#00A651] hover:bg-[#008C44]",
    },
  ].filter(
    (
      link
    ): link is { label: string; url: string; className: string } =>
      Boolean(link.url)
  );
  const hasMarketplace = marketplaceLinks.length > 0;

  return (
    <div className="min-h-screen bg-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 lg:h-[500px] bg-soft rounded-card"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 text-lg mb-8">{product.description}</p>

            {/* Full Description */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4 text-primary">
                Описание
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.descriptionFull || product.descriptionMedium || product.description}
              </p>
            </div>

            {/* Effects */}
            {product.effects && product.effects.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">
                  Эффект
                </h2>
                <ul className="space-y-2">
                  {product.effects.map((effect, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Active Ingredients */}
            {product.active && product.active.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">
                  Активные компоненты
                </h2>
                <ul className="space-y-2">
                  {product.active.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasMarketplace ? (
              <div className="border-t border-line pt-8">
                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Купить:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {marketplaceLinks.map((link) => {
                    return (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-button font-medium text-sm sm:text-base transition-colors border-2 ${link.className}`}
                      >
                        Купить на {link.label}
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="border-t border-line pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 mb-2">Цена</p>
                    <p className="text-4xl font-bold text-primary">
                      {product.price}₽
                    </p>
                    {product.volume && (
                      <p className="text-gray-600 mt-1">{product.volume}</p>
                    )}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-button font-medium text-lg hover:bg-accent transition-colors border-2 border-primary"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Добавить в корзину
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
