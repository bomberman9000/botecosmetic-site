import type { Metadata } from "next";
import { getProductById } from "@/lib/products";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Товар не найден — BOTE",
      description: "Товар не найден",
    };
  }

  return {
    title: `${product.name} — купить в BOTE | персональный уход`,
    description: `${product.name} — ${product.descriptionMedium || product.description}. Индивидуально подобранный уход BOTE. Натуральные активы, лабораторная формула, быстрый эффект.`,
    keywords: [
      product.name.toLowerCase(),
      "сыворотка",
      "skincare",
      "boteserum",
      "уход за кожей",
      ...product.problems.map((p) => p.toLowerCase()),
    ],
    robots: "index, follow",
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

