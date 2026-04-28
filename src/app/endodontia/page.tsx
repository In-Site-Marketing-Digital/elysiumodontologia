import type { Metadata } from "next";
import { EndodontiaContent } from "./EndodontiaContent";

export const metadata: Metadata = {
  title: "Endodontia — Tratamento de Canal | Elysium Odontologia",
  description:
    "Tratamento de canal moderno, indolor e preciso. Preservamos seu dente com tecnologia rotatória digital e total conforto. Elysium Odontologia, Gama - DF.",
  keywords: ["endodontia", "tratamento de canal", "canal dentário", "Elysium Odontologia", "Gama DF"],
  openGraph: {
    title: "Endodontia — Tratamento de Canal | Elysium Odontologia",
    description: "Tratamento de canal moderno, indolor e preciso. Preservamos seu dente com tecnologia rotatória digital.",
    type: "website",
  },
};

export default function EndodontiaPage() {
  return <EndodontiaContent />;
}
