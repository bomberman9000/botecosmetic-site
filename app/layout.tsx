import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroScrollEffect from "@/components/HeroScrollEffect";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VIA LABOTE — персональная косметика премиум-класса",
  description:
    "Персональный подбор ухода по типу кожи. Лабораторные формулы с активными компонентами. Индивидуальный подход к уходу за кожей.",
  keywords: [
    "персональная косметика",
    "подбор ухода онлайн",
    "сыворотка от акне",
    "уход за кожей",
    "ниацинамид",
    "натуральная косметика",
    "лабораторная косметика",
    "премиум косметика",
    "VIA LABOTE",
  ],
  openGraph: {
    title: "VIA LABOTE — персональная косметика премиум-класса",
    description:
      "Персональный подбор ухода по типу кожи. Лабораторные формулы с активными компонентами. Индивидуальный подход к уходу за кожей.",
    siteName: "VIA LABOTE",
    locale: "ru_RU",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ParticleBackground />
        <ScrollProgress />
        <CustomCursor />
        <HeroScrollEffect />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
