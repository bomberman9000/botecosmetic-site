import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Программа лояльности VIA LABOTE Клуб | VIA LABOTE",
  description: "Получайте бонусы за покупки, подарки от суммы заказа и повышайте свой статус в программе лояльности VIA LABOTE Клуб.",
};

export default function LoyaltyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
