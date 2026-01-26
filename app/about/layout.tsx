import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "История бренда VIA LABOTE | О компании",
  description:
    "VIA LABOTE соединяет науку, ингредиенты и технологию персонального подбора ухода. Натуральная косметика премиум-класса, разработанная в лаборатории.",
  keywords:
    "VIA LABOTE, история бренда, косметика премиум, лаборатория косметики, натуральная косметика",
  openGraph: {
    title: "История бренда VIA LABOTE",
    description:
      "Узнайте о философии и ценностях бренда персональной косметики VIA LABOTE",
    type: "website",
  },
  robots: "index, follow",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
