"use client";

import { Navbar } from "@/components/Navbar";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Microscope, Heart, MapPin, Clock, Mail, ArrowRight } from "lucide-react";

/* ─── Missão / Visão / Valores ─────────────── */

const mvv = [
  {
    label: "Missão",
    text: "Oferecer tratamentos odontológicos de excelência, com cuidado humanizado e tecnologia de ponta, transformando sorrisos e elevando a qualidade de vida dos nossos pacientes.",
    gradient: "linear-gradient(135deg, #8E6F3A 0%, #CBB27A 100%)",
  },
  {
    label: "Visão",
    text: "Ser referência em odontologia estética e de saúde no Gama - DF, reconhecida pela qualidade dos resultados, pela ética profissional e pelo relacionamento duradouro com cada paciente.",
    gradient: "linear-gradient(135deg, #CBB27A 0%, #F3E6C2 100%)",
  },
  {
    label: "Valores",
    text: "Ética, transparência, excelência técnica, empatia no atendimento e compromisso genuíno com o bem-estar de cada pessoa que nos confia o seu sorriso.",
    gradient: "linear-gradient(135deg, #8E6F3A 0%, #0E2A26 100%)",
  },
];

/* ─── Diferenciais ──────────────────────────── */

const diferenciais = [
  {
    icon: Award,
    title: "Excelência Clínica",
    desc: "Profissionais comprometidos com atualização contínua, utilizando as melhores técnicas e protocolos da odontologia moderna.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    desc: "Cada paciente é tratado de forma única. Ouvimos com atenção, explicamos cada etapa e respeitamos o seu tempo e suas necessidades.",
  },
  {
    icon: Microscope,
    title: "Tecnologia de Ponta",
    desc: "Investimos em equipamentos modernos e materiais premium para garantir diagnósticos precisos e resultados duradouros.",
  },
  {
    icon: Heart,
    title: "Relacionamento de Confiança",
    desc: "Construímos relações de longo prazo com nossos pacientes, baseadas em transparência e no compromisso real com a sua saúde bucal.",
  },
];

/* ─── Especialidades ────────────────────────── */

const especialidades = [
  { nome: "Facetas & Lentes Dentárias", href: "/" },
  { nome: "Implantes Dentários", href: "/implantes" },
  { nome: "Clareamento Dental", href: "/clareamento" },
  { nome: "Alinhador Invisível", href: "/alinhador" },
  { nome: "Endodontia (Canal)", href: "/endodontia" },
  { nome: "Cirurgia Oral", href: "/cirurgia" },
];

/* ─── Hero Institucional ─────────────────────── */

function HeroInstitucional() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden noise"
      style={{ background: "radial-gradient(circle at top right, #123531 0%, #0E2A26 60%, #071715 100%)" }}
    >
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(203, 178, 122, 0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(203, 178, 122, 0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 glass rounded-full px-4 py-2 mb-6"
        >
          <span className="text-xs font-body font-semibold text-white/80 tracking-wide uppercase">
            Odontologia no Gama — DF
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-premium font-extrabold text-white mb-6 leading-[1.1] tracking-tight normal-case"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
        >
          Bem-vindo à{" "}
          <em className="not-italic font-light text-gold-light">Elysium</em>
          <br />
          <em className="not-italic text-gold">Odontologia</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "1.1rem" }}
        >
          Uma clínica criada com o propósito de transformar sorrisos com arte, ciência e cuidado genuíno.
          Aqui, cada paciente é tratado com a atenção e o respeito que merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="/contato" className="btn-gold px-8 py-3.5 text-base font-bold inline-flex items-center gap-2">
            Agendar consulta <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#diferenciais" className="btn-outline-gold px-8 py-3.5 text-base font-semibold">
            Conhecer a clínica
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MVV Section ────────────────────────────── */

function MvvSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="missao" className="section-pad" style={{ background: "#FAF9F6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>
            Nossa essência
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Missão, Visão e <em className="not-italic" style={{ color: "#8E6F3A" }}>Valores</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mvv.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 16px 48px rgba(142, 111, 58, 0.12)" }}
            >
              <div className="p-1.5" style={{ background: item.gradient }}>
                <div className="rounded-[20px] bg-white p-8 h-full">
                  <p className="text-xs font-body font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8E6F3A" }}>
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-[#2D4D59]/80 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── História da Clínica ───────────────────── */

function HistoriaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="historia" className="section-pad relative overflow-hidden" style={{ background: "#0E2A26" }}>
      <div className="absolute left-[-100px] top-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none opacity-10" style={{ background: "radial-gradient(circle, #CBB27A 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>
              Nossa história
            </p>
            <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Uma clínica criada para{" "}
              <em className="not-italic text-gold">transformar vidas</em>
            </h2>
            <div className="flex flex-col gap-5 font-body text-white/65 leading-relaxed text-sm">
              <p>
                A Elysium Odontologia nasceu da crença de que um sorriso bonito é um direito de todos.
                Nosso propósito é unir tecnologia de ponta, técnica refinada e atendimento humanizado
                para entregar resultados que vão além da estética — transformamos a autoestima e a
                qualidade de vida de cada paciente.
              </p>
              <p>
                Localizada no Gama - DF, nossa clínica foi projetada para oferecer uma experiência
                acolhedora e sofisticada, desde o primeiro contato até o pós-tratamento. Acreditamos
                que cada detalhe importa, e é por isso que investimos continuamente em capacitação,
                equipamentos e nos melhores materiais do mercado.
              </p>
              <p>
                Na Elysium, você não é apenas um paciente — é parte de uma jornada de transformação
                cuidadosamente planejada para o seu caso específico.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-[40px] overflow-hidden border border-gold/20 p-12 text-center flex flex-col items-center justify-center gap-8"
              style={{ background: "linear-gradient(135deg, #123531 0%, #071715 100%)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)", minHeight: "420px" }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #8E6F3A 0%, #CBB27A 100%)", boxShadow: "0 16px 40px rgba(142,111,58,0.4)" }}
              >
                <Heart className="w-10 h-10 text-[#0E2A26]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-white mb-3">
                  Cuidado genuíno
                </h3>
                <p className="font-body text-white/55 text-sm leading-relaxed max-w-xs mx-auto">
                  Do agendamento ao pós-tratamento, cada etapa é pensada para que você se sinta
                  seguro, bem informado e confortável.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Diferenciais Section ──────────────────── */

function DiferenciaisSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="diferenciais" className="section-pad" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>
            Por que a Elysium?
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            O que nos <em className="not-italic" style={{ color: "#8E6F3A" }}>diferencia</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="hover-lift rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#FAF9F6", border: "1px solid rgba(142, 111, 58, 0.15)" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(142, 111, 58, 0.08)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#8E6F3A" }} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0E2A26]">{d.title}</h3>
                <p className="font-body text-xs text-[#2D4D59]/65 leading-relaxed">{d.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Especialidades Section ────────────────── */

function EspecialidadesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="especialidades" className="section-pad" style={{ background: "#FAF9F6" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>
            Nossos serviços
          </p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Nossas <em className="not-italic" style={{ color: "#8E6F3A" }}>especialidades</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {especialidades.map((esp, i) => (
            <motion.a
              key={esp.nome}
              href={esp.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all"
              style={{ background: "white", border: "1px solid rgba(203, 178, 122, 0.2)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
            >
              <span className="font-heading font-semibold text-[#0E2A26] text-sm group-hover:text-[#8E6F3A] transition-colors">
                {esp.nome}
              </span>
              <ArrowRight className="w-4 h-4 flex-shrink-0 text-gold opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Localização Section ───────────────────── */

function LocalizacaoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="localizacao" className="section-pad relative overflow-hidden" style={{ background: "#0E2A26" }}>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10" style={{ background: "radial-gradient(circle, #CBB27A 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>
            Como nos encontrar
          </p>
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Venha nos <em className="not-italic text-gold">visitar</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: MapPin, label: "Endereço", value: "St. Central EQ 47/49 Edifício Life Gama\nGama, Brasília — DF | CEP: 72405-470" },
              { icon: Clock, label: "Horários", value: "Segunda a Sexta: 07h às 19h\nSábado: 07h às 12h\nDomingo: Fechado" },
              { icon: Mail, label: "E-mail", value: "elysiumodonto@gmail.com" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(203, 178, 122, 0.1)", border: "1px solid rgba(203, 178, 122, 0.2)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#CBB27A" }} />
                  </div>
                  <div>
                    <p className="font-body font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "#CBB27A" }}>{item.label}</p>
                    <p className="font-body text-sm text-white/60 whitespace-pre-line leading-relaxed">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(203, 178, 122, 0.15)", height: "300px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=St.+Central+EQ+47%2F49+Edif%C3%ADcio+Life+Gama+Gama+DF&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Elysium Odontologia"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Component ────────────────────────── */

export function SobreContent() {
  return (
    <>
      <Navbar ctaHref="/contato?source=sobre" />
      <main>
        <HeroInstitucional />
        <MvvSection />
        <HistoriaSection />
        <DiferenciaisSection />
        <EspecialidadesSection />
        <LocalizacaoSection />
        <ContactCTASection ctaHref="/contato?source=sobre" />
      </main>
      <Footer />
    </>
  );
}
