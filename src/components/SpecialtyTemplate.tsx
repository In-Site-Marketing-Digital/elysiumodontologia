"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTASection } from "@/components/ContactCTASection";

/* ────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────── */
export interface SpecialtyStep {
  number: string;
  title: string;
  desc: string;
}

export interface SpecialtyBenefit {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export interface SpecialtyFaq {
  id: string;
  q: string;
  a: string;
}

export interface SpecialtyData {
  name: string;
  badge: string;
  tagline: React.ReactNode;
  heroSubtitle: string;
  heroChecks: string[];
  ctaHref: string;
  overviewTitle: React.ReactNode;
  overviewIntro: string;
  overviewPoints: string[];
  processTitle: React.ReactNode;
  steps: SpecialtyStep[];
  benefitsTitle: React.ReactNode;
  benefitsSubtitle?: string;
  benefits: SpecialtyBenefit[];
  indicationsFor: string[];
  indicationsRequires: string[];
  faqTitle: React.ReactNode;
  faqs: SpecialtyFaq[];
  accentColor?: string;
}

/* ────────────────────────────────────────────────────
   1. Hero — fundo creme claro, diferente das landing pages
──────────────────────────────────────────────────── */
function SpecialtyHero({ data }: { data: SpecialtyData }) {
  const accent = data.accentColor ?? "#8E6F3A";

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
      style={{ background: "#FAF9F6" }}
    >
      {/* Grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(142,111,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(142,111,58,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Gold blob */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203,178,122,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
            >
              <span
                className="text-xs font-body font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {data.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-[#0E2A26] mb-5 leading-[1.1]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
            >
              {data.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-[#2D4D59]/75 leading-relaxed mb-8 max-w-lg"
              style={{ fontSize: "1.05rem" }}
            >
              {data.heroSubtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 mb-10"
            >
              {data.heroChecks.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: accent }} />
                  <span className="font-body text-sm text-[#2D4D59]/80">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.a
              href={data.ctaHref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold"
            >
              Agendar Avaliação Gratuita <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Right — decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-[32px] p-10 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0E2A26 0%, #123531 100%)",
                boxShadow: "0 32px 80px rgba(14,42,38,0.25)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${accent}, #F3E6C2)` }}
              />
              <p className="text-xs font-body font-bold uppercase tracking-[0.2em]" style={{ color: "#CBB27A" }}>
                {data.badge}
              </p>
              <h2
                className="font-heading font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              >
                {data.name}
              </h2>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                {data.overviewIntro.slice(0, 200)}…
              </p>
              <div className="flex flex-col gap-2.5 mt-2">
                {data.heroChecks.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#CBB27A" }} />
                    <span className="font-body text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   2. Overview — editorial, fundo branco, tipografia grande
──────────────────────────────────────────────────── */
function SpecialtyOverview({ data }: { data: SpecialtyData }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const accent = data.accentColor ?? "#8E6F3A";

  return (
    <section id="overview" className="section-pad" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — intro grande */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p
              className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-5"
              style={{ color: accent }}
            >
              O que é
            </p>
            <h2
              className="font-heading font-bold text-[#0E2A26] mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              {data.overviewTitle}
            </h2>
            <span className="divider-gold block mb-8" />
            <p className="font-body text-[#2D4D59]/75 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {data.overviewIntro}
            </p>
          </motion.div>

          {/* Right — key points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-4 lg:pt-16"
          >
            {data.overviewPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "#FAF9F6", border: `1px solid ${accent}20` }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-body font-bold text-xs"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, #CBB27A)`,
                    color: "#0E2A26",
                  }}
                >
                  {i + 1}
                </span>
                <p className="font-body text-sm text-[#2D4D59]/80 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   3. Process — alternado esq/dir, fundo creme
──────────────────────────────────────────────────── */
function SpecialtyProcess({ data }: { data: SpecialtyData }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const accent = data.accentColor ?? "#8E6F3A";

  return (
    <section id="processo" className="section-pad relative overflow-hidden" style={{ background: "#FAF9F6" }}>
      <div
        className="absolute left-[-80px] bottom-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203,178,122,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: accent }}>
            Passo a passo
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            {data.processTitle}
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {data.steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Number block */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div
                    className="w-28 h-28 rounded-3xl flex flex-col items-center justify-center gap-1"
                    style={{
                      background: "linear-gradient(135deg, #0E2A26 0%, #123531 100%)",
                      boxShadow: "0 16px 48px rgba(14,42,38,0.25)",
                    }}
                  >
                    <span className="font-heading font-bold text-4xl" style={{ color: "#CBB27A" }}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content block */}
                <div
                  className="flex-1 rounded-2xl p-7"
                  style={{
                    background: "white",
                    border: `1px solid ${accent}25`,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="h-0.5 w-10 mb-4 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${accent}, #F3E6C2)` }}
                  />
                  <h3 className="font-heading font-bold text-xl text-[#0E2A26] mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-[#2D4D59]/75 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   4. Benefits — fundo verde escuro, cards horizontais
──────────────────────────────────────────────────── */
function SpecialtyBenefits({ data }: { data: SpecialtyData }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="vantagens" className="section-pad relative overflow-hidden" style={{ background: "#0E2A26" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,178,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(203,178,122,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-[-60px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, #CBB27A 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4 text-center" style={{ color: "#CBB27A" }}>
            Por que fazer
          </p>
          <h2
            className="font-heading font-bold text-white text-center"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            {data.benefitsTitle}
          </h2>
          {data.benefitsSubtitle && (
            <p className="font-body text-white/55 text-center mt-4 max-w-xl mx-auto">{data.benefitsSubtitle}</p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {data.benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start p-6 rounded-2xl transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(203,178,122,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(203,178,122,0.12)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#CBB27A" }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{b.title}</h3>
                  <p className="font-body text-sm text-white/55 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   5. Indications — fundo branco, duas colunas
──────────────────────────────────────────────────── */
function SpecialtyIndications({ data }: { data: SpecialtyData }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const accent = data.accentColor ?? "#8E6F3A";

  return (
    <section id="indicacoes" className="section-pad" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: accent }}>
            Indicações
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            Para quem é <em className="not-italic" style={{ color: accent }}>indicado?</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Indicado para */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl overflow-hidden"
            style={{ border: `1px solid ${accent}30` }}
          >
            <div
              className="px-7 py-5"
              style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}
            >
              <h3 className="font-heading font-bold text-[#0E2A26] text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" style={{ color: accent }} />
                Indicado para
              </h3>
            </div>
            <div className="px-7 py-6 bg-white flex flex-col gap-3">
              {data.indicationsFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
                  <p className="font-body text-sm text-[#2D4D59]/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requer avaliação */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(203,178,122,0.2)" }}
          >
            <div className="px-7 py-5" style={{ background: "rgba(203,178,122,0.06)" }}>
              <h3 className="font-heading font-bold text-[#0E2A26] text-lg flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ borderColor: "#CBB27A", color: "#CBB27A" }}>!</span>
                Requer avaliação prévia
              </h3>
            </div>
            <div className="px-7 py-6 bg-white flex flex-col gap-3">
              {data.indicationsRequires.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#CBB27A" }} />
                  <p className="font-body text-sm text-[#2D4D59]/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   6. FAQ — fundo creme, 2 colunas desktop
──────────────────────────────────────────────────── */
function SpecialtyFaqItem({ faq, index }: { faq: SpecialtyFaq; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: open ? "1px solid #CBB27A" : "1px solid rgba(142,111,58,0.15)",
        background: open ? "white" : "#FAF9F6",
        transition: "border-color 0.25s, background 0.25s",
        boxShadow: open ? "0 8px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-body font-bold text-sm leading-snug" style={{ color: open ? "#0E2A26" : "#2D4D59" }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: open ? "linear-gradient(135deg, #8E6F3A, #CBB27A)" : "rgba(142,111,58,0.08)" }}
        >
          {open ? <Minus className="w-3.5 h-3.5 text-[#0E2A26]" /> : <Plus className="w-3.5 h-3.5" style={{ color: "#CBB27A" }} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-body text-sm text-[#2D4D59]/80 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
}

function SpecialtyFaq({ data }: { data: SpecialtyData }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const accent = data.accentColor ?? "#8E6F3A";
  const half = Math.ceil(data.faqs.length / 2);

  return (
    <section id="faq" className="section-pad" style={{ background: "#FAF9F6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: accent }}>
            Dúvidas frequentes
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            {data.faqTitle}
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        {/* Two column layout on desktop */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {data.faqs.slice(0, half).map((faq, i) => (
              <SpecialtyFaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {data.faqs.slice(half).map((faq, i) => (
              <SpecialtyFaqItem key={faq.id} faq={faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   Template Assembly
──────────────────────────────────────────────────── */
export function SpecialtyTemplate({ data }: { data: SpecialtyData }) {
  return (
    <>
      <Navbar ctaHref={data.ctaHref} theme="light" />
      <main>
        <SpecialtyHero data={data} />
        <SpecialtyOverview data={data} />
        <SpecialtyProcess data={data} />
        <SpecialtyBenefits data={data} />
        <SpecialtyIndications data={data} />
        <SpecialtyFaq data={data} />
        <ContactCTASection ctaHref={data.ctaHref} />
      </main>
      <Footer />
    </>
  );
}
