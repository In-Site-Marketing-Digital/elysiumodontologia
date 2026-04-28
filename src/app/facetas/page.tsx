import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Facetas e Lentes Dentárias | Elysium Odontologia",
  description:
    "Transforme seu sorriso com as melhores lentes e facetas dentárias. A Elysium Odontologia oferece tratamentos de alta estética com tecnologia de ponta.",
};

export default function FacetasPage() {
  return (
    <>
      <Navbar ctaHref="/contato?source=geral" />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <AboutSection />
        <ProcessSection />
        <ResultsSection />
        <VideoTestimonialsSection />
        <FaqSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
