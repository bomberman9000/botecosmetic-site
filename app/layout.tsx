import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Персональная косметика BOTE — индивидуальный подбор ухода по типу кожи",
  description:
    "Онлайн-подбор ухода по типу кожи: сыворотки, кремы, очищение, anti-age, anti-acne. Персональные формулы BOTE на основе натуральных активов и лабораторных разработок.",
  keywords: [
    "персональная косметика",
    "подбор ухода онлайн",
    "сыворотка от акне",
    "уход за кожей",
    "ниацинамид",
    "натуральная косметика",
    "лабораторная косметика",
  ],
  openGraph: {
    title: "Персональная косметика BOTE — индивидуальный подбор ухода",
    description:
      "Пройдите тест и получите персональную формулу ухода для лица от бренда BOTE.",
    siteName: "BOTEcosmetic",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

