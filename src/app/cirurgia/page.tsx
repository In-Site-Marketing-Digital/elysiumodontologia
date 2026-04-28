import type { Metadata } from "next";
import { CirurgiaContent } from "./CirurgiaContent";

export const metadata: Metadata = {
  title: "Cirurgia Oral | Elysium Odontologia",
  description:
    "Extrações simples e complexas, remoção de sisos e cirurgias pré-implante com técnicas minimamente invasivas e máximo conforto. Elysium Odontologia, Gama - DF.",
  keywords: ["cirurgia oral", "extração de siso", "cirurgia dentária", "Elysium Odontologia", "Gama DF"],
  openGraph: {
    title: "Cirurgia Oral | Elysium Odontologia",
    description: "Extrações e cirurgias orais com técnicas minimamente invasivas e acompanhamento completo.",
    type: "website",
  },
};

export default function CirurgiaPage() {
  return <CirurgiaContent />;
}
