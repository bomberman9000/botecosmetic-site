import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Акне: причины, мифы и эффективный уход — статья BOTE",
  description:
    "Откуда появляется акне, развенчание мифов, что действительно помогает. Салициловая кислота, ниацинамид, пробиотики и комплексный уход BOTE.",
  keywords: [
    "акне",
    "прыщи",
    "лечение акне",
    "салициловая кислота",
    "ниацинамид",
    "MULTI 3",
    "уход от прыщей",
  ],
  robots: "index, follow",
};

export default function AcneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

