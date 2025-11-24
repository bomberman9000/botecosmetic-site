import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Увлажнение кожи: почему это важно даже при акне — статья BOTE",
  description:
    "Почему важен барьер кожи, главные увлажняющие компоненты, продукты BOTE для увлажнения. Как понять, что увлажнения недостаточно.",
  keywords: [
    "увлажнение кожи",
    "гиалуроновая кислота",
    "пантенол",
    "барьер кожи",
    "Hydrate+",
    "уход за кожей",
  ],
  robots: "index, follow",
};

export default function HydrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

