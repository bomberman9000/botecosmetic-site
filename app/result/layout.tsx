import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Персональная формула ухода — ваш результат подбора",
  description:
    "Персональная формула BOTE — сыворотки, кремы и очищение, подобранные специально под ваш тип кожи. Рекомендации применения и полный набор средств.",
  keywords: [
    "персональная формула ухода",
    "индивидуальная косметика",
    "набор для кожи",
  ],
  robots: "index, follow",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

