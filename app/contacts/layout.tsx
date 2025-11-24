import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты BOTEcosmetic — обратная связь",
  description:
    "Свяжитесь с нами: Telegram, Instagram, VK, YouTube, email. Ответим по подбору ухода и продуктам BOTE.",
  keywords: ["контакты", "bote", "обратная связь", "поддержка"],
  robots: "index, follow",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

