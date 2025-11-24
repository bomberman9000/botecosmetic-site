import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина — оформление заказа BOTE",
  description:
    "Проверьте ваш набор персонального ухода BOTE перед оформлением заказа.",
  keywords: ["корзина", "boteserum", "персональный уход"],
  robots: "index, follow",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

