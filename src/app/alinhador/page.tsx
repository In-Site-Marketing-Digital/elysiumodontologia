import type { Metadata } from "next";
import { AlinhadoresContent } from "./AlinhadoresContent";

export const metadata: Metadata = {
  title: "Alinhador Invisível | Elysium Odontologia",
  description:
    "Corrija o alinhamento dos seus dentes de forma discreta com alinhadores transparentes. Planejamento digital 3D e resultado previsível. Gama - DF.",
  keywords: ["alinhador invisível", "aparelho transparente", "ortodontia estética", "Elysium Odontologia", "Gama DF"],
  openGraph: {
    title: "Alinhador Invisível | Elysium Odontologia",
    description: "Corrija o alinhamento dos seus dentes de forma discreta com alinhadores transparentes.",
    type: "website",
  },
};

export default function AlinhadoresPage() {
  return <AlinhadoresContent />;
}
