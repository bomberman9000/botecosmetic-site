import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подбор ухода для кожи — пройти тест BOTE",
  description:
    "Быстрый тест подбора ухода. Определение типа кожи, проблем и целей. Персональные рекомендации и формулы на основе реальных продуктов BOTE.",
  keywords: [
    "подбор ухода",
    "тест для кожи",
    "диагностика кожи онлайн",
    "подобрать косметику",
  ],
  robots: "index, follow",
};

export default function SkinTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

