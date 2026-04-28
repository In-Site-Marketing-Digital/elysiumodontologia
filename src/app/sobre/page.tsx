import type { Metadata } from "next";
import { SobreContent } from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre a Clínica | Elysium Odontologia",
  description:
    "Conheça a Elysium Odontologia — referência em odontologia estética e de saúde no Gama - DF. Nossa missão, visão, valores e especialidades.",
  keywords: ["sobre Elysium Odontologia", "clínica odontológica Gama DF", "odontologia estética Gama", "dentista Gama DF"],
  openGraph: {
    title: "Sobre a Clínica | Elysium Odontologia",
    description: "Conheça a Elysium Odontologia — missão, valores e especialidades em odontologia no Gama - DF.",
    type: "website",
  },
};

export default function SobrePage() {
  return <SobreContent />;
}
