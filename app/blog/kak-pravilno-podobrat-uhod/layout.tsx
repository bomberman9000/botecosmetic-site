import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как правильно подобрать уход за кожей — статья BOTE",
  description:
    "Почему универсальный уход не работает, как определить тип кожи, основные ошибки и почему тест подбора эффективнее. Персональный подбор BOTE.",
  keywords: [
    "подбор ухода",
    "тип кожи",
    "уход за кожей",
    "персональный уход",
    "тест подбора",
  ],
  robots: "index, follow",
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

