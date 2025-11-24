import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог косметики BOTE — сыворотки, кремы, очищение",
  description:
    "Все продукты BOTE: сыворотки против акне, увлажняющие серумы, anti-age, кремы и очищающие гели. Подходят для всех типов кожи.",
  keywords: [
    "сыворотки",
    "кремы",
    "уход за кожей",
    "косметика для лица",
    "anti-age",
    "acne care",
  ],
  robots: "index, follow",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

