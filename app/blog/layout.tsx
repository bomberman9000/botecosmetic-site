import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о уходе за кожей — статьи BOTE",
  description:
    "Полезные статьи о персональном уходе за кожей, ингредиентах, проблемах и эффективных схемах ухода от BOTE.",
  keywords: [
    "блог о косметике",
    "уход за кожей",
    "статьи о косметике",
    "ниацинамид",
    "акне",
    "anti-age",
  ],
  robots: "index, follow",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

