"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Award, Users, Microscope, Heart, MapPin, Clock, Mail, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap, Scissors, Eye } from "lucide-react";

const especialidades = [
  { nome: "Facetas & Lentes Dentárias", desc: "Transformação estética de alto impacto em uma única visita ao consultório.", href: "/facetas", icon: Sparkles },
  { nome: "Implantes Dentários", desc: "Solução definitiva para dentes perdidos, com tecnologia de cirurgia guiada.", href: "/implantes", icon: ShieldCheck },
  { nome: "Clareamento Dental", desc: "Dentes até 8 tons mais claros com tecnologia LED de baixa sensibilidade.", href: "/clareamento", icon: Zap },
  { nome: "Alinhador Invisível", desc: "Ortodontia discreta e removível, planejada com simulação 3D prévia.", href: "/alinhador", icon: Eye },
  { nome: "Endodontia", desc: "Tratamento de canal moderno, indolor e preciso para preservar seu dente.", href: "/endodontia", icon: Microscope },
  { nome: "Cirurgia Oral", desc: "Extrações e procedimentos cirúrgicos com técnicas minimamente invasivas.", href: "/cirurgia", icon: Scissors },
];

const diferenciais = [
  { icon: Award, title: "Excelência Clínica", desc: "Profissionais comprometidos com atualização contínua e protocolos de alta precisão." },
  { icon: Users, title: "Atendimento Humanizado", desc: "Cada paciente é único. Ouvimos com atenção e planejamos um tratamento personalizado." },
  { icon: Microscope, title: "Tecnologia de Ponta", desc: "Equipamentos modernos e materiais premium para diagnósticos precisos e duradouros." },
  { icon: Heart, title: "Cuidado Genuíno", desc: "Do primeiro contato ao pós-tratamento, acompanhamos cada etapa da sua jornada." },
];

const processo = [
  { n: "01", title: "Consulta Inicial", desc: "Escutamos seus objetivos, avaliamos sua saúde bucal e explicamos todas as opções disponíveis para o seu caso, sem compromisso." },
  { n: "02", title: "Planejamento Personalizado", desc: "Elaboramos um plano de tratamento sob medida, com simulações digitais quando aplicável, para que você visualize os resultados antes de decidir." },
  { n: "03", title: "Execução com Precisão", desc: "Realizamos o tratamento com técnica refinada, equipamentos modernos e materiais de alta qualidade, sempre priorizando seu conforto." },
  { n: "04", title: "Acompanhamento Contínuo", desc: "Após o tratamento, acompanhamos sua evolução e mantemos a comunicação aberta para garantir resultados duradouros." },
];

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
      style={{ background: "radial-gradient(circle at top right, #123531 0%, #0E2A26 60%, #071715 100%)" }}>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,178,122,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,178,122,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(203,178,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(203,178,122,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
          <span className="text-xs font-body font-semibold text-white/80 tracking-[0.2em] uppercase">Elysium Odontologia · Gama — DF</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-premium font-extrabold text-white leading-[1.08] tracking-tight normal-case mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
          Onde a ciência encontra{" "}
          <em className="not-italic text-gold">a arte de sorrir</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto" style={{ fontSize: "1.15rem" }}>
          A Elysium Odontologia reúne tecnologia de ponta, técnica refinada e atendimento genuinamente humanizado
          para transformar sorrisos com segurança, precisão e cuidado real.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center">
          <a href="/contato" className="btn-gold inline-flex items-center gap-2 px-10 py-4 text-base font-bold">
            Agendar consulta gratuita <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#especialidades" className="btn-outline-gold inline-block px-10 py-4 text-base font-semibold">
            Nossas especialidades
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16">
          {["Atendimento humanizado", "Tecnologia de última geração", "Tratamentos personalizados"].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#CBB27A" }} />
              <span className="font-body text-sm text-white/60">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClinicaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="clinica" className="section-pad" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}>
            <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "#CBB27A" }}>A clínica</p>
            <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Uma clínica criada para <em className="not-italic" style={{ color: "#8E6F3A" }}>transformar vidas</em>
            </h2>
            <span className="divider-gold block mb-8" />
            <div className="flex flex-col gap-5 font-body text-[#2D4D59]/75 leading-relaxed" style={{ fontSize: "1.02rem" }}>
              <p>A Elysium Odontologia nasceu da crença de que um sorriso saudável e bonito transforma não apenas a aparência, mas a autoestima, a segurança e a qualidade de vida de cada pessoa.</p>
              <p>Localizada no Gama - DF, nossa clínica foi projetada para oferecer uma experiência acolhedora e sofisticada — do agendamento ao pós-tratamento. Cada detalhe do ambiente e do atendimento é pensado para que você se sinta cuidado, bem informado e seguro em todas as etapas.</p>
              <p>Acreditamos que uma odontologia de excelência precisa, acima de tudo, ser humana. Por isso, investimos tanto em tecnologia quanto nas pessoas — profissionais que se atualizam continuamente e que enxergam em cada paciente uma história única, merecedora de atenção e dedicação real.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 40 - 40 } : {}} transition={{ duration: 0.65, delay: 0.15 }} className="grid grid-cols-2 gap-5">
            {diferenciais.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="hover-lift rounded-2xl p-6 flex flex-col gap-3"
                  style={{ background: "#FAF9F6", border: "1px solid rgba(142,111,58,0.15)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(142,111,58,0.08)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#8E6F3A" }} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0E2A26]">{d.title}</h3>
                  <p className="font-body text-xs text-[#2D4D59]/65 leading-relaxed">{d.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EspecialidadesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="especialidades" className="section-pad relative overflow-hidden" style={{ background: "#0E2A26" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(203,178,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(203,178,122,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #CBB27A 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="text-center mb-16">
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>O que oferecemos</p>
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Nossas <em className="not-italic text-gold">especialidades</em>
          </h2>
          <p className="font-body text-white/55 max-w-xl mx-auto">
            Tratamentos completos de odontologia estética e de saúde, planejados individualmente para o seu caso.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {especialidades.map((esp, i) => {
            const Icon = esp.icon;
            return (
              <motion.a key={esp.nome} href={esp.href}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-7 flex flex-col gap-4 transition-colors overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(203,178,122,0.12)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "linear-gradient(90deg, #8E6F3A, #CBB27A)" }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(203,178,122,0.1)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#CBB27A" }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{esp.nome}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{esp.desc}</p>
                </div>
                <span className="font-body text-xs font-semibold flex items-center gap-1.5 mt-auto transition-colors" style={{ color: "#CBB27A" }}>
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="processo" className="section-pad" style={{ background: "#FAF9F6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="text-center mb-16">
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>Como funciona</p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Sua jornada na <em className="not-italic" style={{ color: "#8E6F3A" }}>Elysium</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>
        <div className="flex flex-col gap-6">
          {processo.map((step, i) => (
            <motion.div key={step.n} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-3xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0E2A26 0%, #123531 100%)", boxShadow: "0 16px 48px rgba(14,42,38,0.2)" }}>
                  <span className="font-heading font-bold text-4xl" style={{ color: "#CBB27A" }}>{step.n}</span>
                </div>
              </div>
              <div className="flex-1 rounded-2xl p-7 bg-white" style={{ border: "1px solid rgba(142,111,58,0.15)", boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}>
                <div className="h-0.5 w-10 mb-4 rounded-full" style={{ background: "linear-gradient(90deg, #8E6F3A, #F3E6C2)" }} />
                <h3 className="font-heading font-bold text-xl text-[#0E2A26] mb-3">{step.title}</h3>
                <p className="font-body text-sm text-[#2D4D59]/75 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompromissoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const items = [
    "Diagnóstico detalhado antes de qualquer procedimento",
    "Transparência total sobre custos, etapas e expectativas reais",
    "Materiais de alta qualidade selecionados com critério",
    "Protocolos que priorizam o conforto e a segurança do paciente",
    "Acompanhamento após o tratamento para garantir resultados duradouros",
    "Respeito ao tempo, às dúvidas e às decisões de cada paciente",
  ];
  return (
    <section id="compromisso" className="section-pad relative overflow-hidden" style={{ background: "#0E2A26" }}>
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #CBB27A 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}>
            <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "#CBB27A" }}>Nosso compromisso</p>
            <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              O que você pode <em className="not-italic text-gold">sempre esperar</em> de nós
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-8">
              Transparência não é apenas uma palavra aqui — é a base de cada consulta, cada plano de tratamento e cada conversa que temos com nossos pacientes.
            </p>
            <a href="/contato" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
              Conhecer a clínica <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.15 }} className="flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(203,178,122,0.1)" }}>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#CBB27A" }} />
                <p className="font-body text-sm text-white/70 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LocalizacaoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="localizacao" className="section-pad" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="text-center mb-14">
          <p className="text-xs font-body font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#CBB27A" }}>Onde estamos</p>
          <h2 className="font-heading font-bold text-[#0E2A26] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Venha nos <em className="not-italic" style={{ color: "#8E6F3A" }}>visitar</em>
          </h2>
          <span className="divider-gold mx-auto block" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-7">
            {[
              { icon: MapPin, label: "Endereço", value: "St. Central EQ 47/49 Edifício Life Gama\nGama, Brasília — DF · CEP: 72405-470" },
              { icon: Clock, label: "Horários de Atendimento", value: "Segunda a Sexta: 07h às 19h\nSábado: 07h às 12h\nDomingo: Fechado" },
              { icon: Mail, label: "E-mail", value: "elysiumodonto@gmail.com" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(142,111,58,0.08)", border: "1px solid rgba(142,111,58,0.15)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#8E6F3A" }} />
                  </div>
                  <div>
                    <p className="font-body font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "#8E6F3A" }}>{item.label}</p>
                    <p className="font-body text-sm text-[#2D4D59]/75 whitespace-pre-line leading-relaxed">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(142,111,58,0.15)", height: "340px", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}>
            <iframe
              src="https://maps.google.com/maps?q=St.+Central+EQ+47%2F49+Edif%C3%ADcio+Life+Gama+Gama+DF&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Localização da Elysium Odontologia" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function HomeContent() {
  return (
    <>
      <Navbar ctaHref="/contato?source=geral" />
      <main>
        <Hero />
        <ClinicaSection />
        <EspecialidadesSection />
        <ProcessoSection />
        <CompromissoSection />
        <LocalizacaoSection />
        <ContactCTASection ctaHref="/contato?source=geral" />
      </main>
      <Footer />
    </>
  );
}
