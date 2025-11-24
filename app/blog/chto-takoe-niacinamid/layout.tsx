import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ниацинамид: универсальный актив для чистой кожи — статья BOTE",
  description:
    "Что такое ниацинамид, как он работает, кому подходит и с чем сочетается. Продукты BOTE с ниацинамидом: MULTI 3 и Balance.",
  keywords: [
    "ниацинамид",
    "витамин B3",
    "акне",
    "сыворотка от прыщей",
    "MULTI 3",
    "уход за кожей",
  ],
  robots: "index, follow",
};

export default function NiacinamideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

