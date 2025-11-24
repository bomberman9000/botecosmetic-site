import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Age: когда начинать и что использовать — статья BOTE",
  description:
    "Когда пора начинать anti-age уход, главные активы: пептиды, витамин C, ретинол. Продукты BOTE Anti-Age Pro и правильная схема применения.",
  keywords: [
    "anti-age",
    "омоложение кожи",
    "пептиды",
    "витамин C",
    "коллаген",
    "морщины",
    "упругость кожи",
  ],
  robots: "index, follow",
};

export default function AntiAgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

