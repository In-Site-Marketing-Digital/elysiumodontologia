import type { Metadata } from "next";
import { ClareamentoContent } from "./ClareamentoContent";

export const metadata: Metadata = {
  title: "Clareamento Dental Profissional | Elysium Odontologia",
  description:
    "Clareia até 8 tons com tecnologia LED de ponta e baixíssima sensibilidade. A Elysium Odontologia oferece clareamento dental profissional no Gama - DF.",
  keywords: ["clareamento dental", "clareamento LED", "branqueamento dental", "Elysium Odontologia", "Gama DF"],
  openGraph: {
    title: "Clareamento Dental Profissional | Elysium Odontologia",
    description: "Clareia até 8 tons com tecnologia LED de ponta e baixíssima sensibilidade.",
    type: "website",
  },
};

export default function ClareamentoPage() {
  return <ClareamentoContent />;
}
