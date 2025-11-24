import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оформить заказ — персональный уход BOTE",
  description:
    "Введите контактные данные и завершите заказ персонального ухода BOTE.",
  robots: "noindex, nofollow", // Не индексируем страницу оформления
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

