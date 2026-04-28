import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "Elysium Odontologia | Gama — DF",
  description:
    "A Elysium Odontologia é referência em odontologia estética e de saúde no Gama - DF. Facetas, implantes, clareamento, alinhadores e muito mais com tecnologia de ponta.",
  keywords: ["odontologia Gama DF", "dentista Gama", "facetas dentárias", "implantes dentários", "Elysium Odontologia"],
  openGraph: {
    title: "Elysium Odontologia | Gama — DF",
    description: "Tecnologia de ponta, técnica refinada e atendimento humanizado. Transforme seu sorriso.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
