"use client";

import { SpecialtyTemplate, SpecialtyData } from "@/components/SpecialtyTemplate";
import { Sun, Shield, Droplets, Zap, Sparkles, Clock } from "lucide-react";

const data: SpecialtyData = {
  name: "Clareamento Dental",
  badge: "Clareamento Profissional",
  tagline: (
    <>
      Dentes mais claros,{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        sorriso mais confiante
      </em>
    </>
  ),
  heroSubtitle:
    "O clareamento dental profissional é uma das formas mais seguras e eficazes de transformar o visual do seu sorriso, devolvendo o brilho natural dos seus dentes.",
  heroChecks: [
    "Tecnologia LED de última geração",
    "Protocolos de baixíssima sensibilidade",
    "Resultado visível já na primeira sessão",
  ],
  ctaHref: "/contato?source=clareamento",
  accentColor: "#8E6F3A",

  overviewTitle: (
    <>
      O que é o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        clareamento dental?
      </em>
    </>
  ),
  overviewIntro:
    "O clareamento dental é um procedimento estético que utiliza agentes químicos, geralmente à base de peróxido de hidrogênio ou carbamida, para oxidar as moléculas de pigmento depositadas no esmalte e na dentina dos dentes. O processo é seguro, não invasivo e não exige desgaste da estrutura dental — diferente das facetas, por exemplo. Pode ser realizado em consultório, com ativação por luz LED, ou de forma caseira, por meio de moldeiras personalizadas e gel de uso domiciliar.",
  overviewPoints: [
    "Age diretamente nas moléculas de pigmento acumuladas no esmalte e dentina",
    "Não remove estrutura dental — é um procedimento puramente químico",
    "Disponível em diferentes concentrações, adaptadas à sensibilidade de cada paciente",
    "Pode ser combinado com outros tratamentos estéticos para um resultado mais completo",
    "Mantém resultados por longo período quando há cuidados adequados de higiene",
  ],

  processTitle: (
    <>
      Como é o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        procedimento?
      </em>
    </>
  ),
  steps: [
    {
      number: "01",
      title: "Avaliação Clínica",
      desc: "Examinamos o estado do seu esmalte, a presença de restaurações e sua sensibilidade para indicar o protocolo mais adequado ao seu caso específico.",
    },
    {
      number: "02",
      title: "Preparação e Proteção Gengival",
      desc: "Aplicamos um protetor gengival para isolar os tecidos moles, garantindo que apenas os dentes recebam a ação do gel clareador durante a sessão.",
    },
    {
      number: "03",
      title: "Aplicação do Gel e Fotoativação",
      desc: "O gel clareador é aplicado sobre os dentes e ativado com luz LED de alta potência, ampliando a eficácia do agente ativo e acelerando o resultado.",
    },
    {
      number: "04",
      title: "Avaliação do Resultado e Orientações",
      desc: "Ao final da sessão, avaliamos o resultado alcançado e orientamos sobre cuidados para prolongar o efeito — incluindo alimentos e hábitos a evitar nas primeiras 48h.",
    },
  ],

  benefitsTitle: (
    <>
      Vantagens do clareamento{" "}
      <em className="not-italic text-gold">profissional</em>
    </>
  ),
  benefitsSubtitle:
    "Escolher um clareamento realizado por profissional habilitado faz toda a diferença na segurança, no resultado e na durabilidade.",
  benefits: [
    {
      icon: Shield,
      title: "Segurança Clínica",
      desc: "Realizado com produtos regulamentados e protocolos controlados, com proteção dos tecidos moles e monitoramento do processo pelo profissional.",
    },
    {
      icon: Sun,
      title: "Resultado Expressivo",
      desc: "A combinação de géis de alta concentração com fotoativação LED proporciona resultados muito mais expressivos do que produtos vendidos em farmácia.",
    },
    {
      icon: Droplets,
      title: "Baixa Sensibilidade",
      desc: "Utilizamos géis com agentes dessensibilizantes e protocolos fracionados que minimizam o desconforto durante e após o procedimento.",
    },
    {
      icon: Sparkles,
      title: "Sem Desgaste Dental",
      desc: "O clareamento não remove estrutura dental. É um tratamento puramente cosmético que age quimicamente, sem causar danos mecânicos ao esmalte.",
    },
    {
      icon: Zap,
      title: "Rapidez e Praticidade",
      desc: "O clareamento de consultório pode ser realizado em uma única sessão, com resultado imediato — ideal para quem tem pouco tempo disponível.",
    },
    {
      icon: Clock,
      title: "Durabilidade",
      desc: "Com cuidados de higiene adequados e visitas regulares ao dentista, os resultados do clareamento se mantêm por um período prolongado.",
    },
  ],

  indicationsFor: [
    "Pessoas com manchas extrínsecas causadas por café, chá, vinho ou tabaco",
    "Quem deseja complementar tratamentos estéticos como facetas ou lentes",
    "Pacientes com dentes amarelados por envelhecimento natural",
    "Quem busca melhora estética de forma não invasiva, sem desgaste dental",
  ],
  indicationsRequires: [
    "Gestantes e lactantes devem aguardar o término desse período",
    "Pacientes com cárie ativa ou doença periodontal devem tratar primeiro",
    "Dentes com restaurações extensas em regiões visíveis requerem planejamento específico",
    "Pessoas com hipersensibilidade severa precisam de protocolo adaptado",
  ],

  faqTitle: (
    <>
      Tudo que você quer saber sobre o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        clareamento
      </em>
    </>
  ),
  faqs: [
    {
      id: "cl-1",
      q: "O clareamento danifica o esmalte?",
      a: "Quando realizado com produtos de pH neutro ou alcalino e em protocolos adequados, o clareamento não danifica o esmalte. A supervisão profissional é fundamental para garantir a segurança do procedimento.",
    },
    {
      id: "cl-2",
      q: "Quanto tempo dura o resultado?",
      a: "A durabilidade varia conforme os hábitos do paciente. Consumo de café, vinho tinto, chá e tabaco aceleram o manchamento. Com higiene adequada e manutenção periódica, os resultados se prolongam de forma satisfatória.",
    },
    {
      id: "cl-3",
      q: "Sentirei dor durante o procedimento?",
      a: "Sensibilidade transitória pode ocorrer, especialmente nas primeiras 48h após a sessão. Utilizamos géis com dessensibilizantes e protocolos que minimizam esse efeito ao máximo.",
    },
    {
      id: "cl-4",
      q: "O clareamento funciona em próteses e resinas?",
      a: "Não. O gel clareador age apenas sobre a estrutura dental natural. Restaurações e próteses não clareiam — esse fator é sempre avaliado no planejamento para garantir uniformidade estética.",
    },
    {
      id: "cl-5",
      q: "É melhor clareamento LED ou caseiro?",
      a: "Ambos são eficazes. O LED oferece resultado mais imediato e em sessão única. O caseiro é mais gradual e indicado para manutenção ou sensibilidade aumentada. O protocolo combinado (LED + caseiro) entrega o melhor resultado.",
    },
    {
      id: "cl-6",
      q: "Com que frequência posso repetir o clareamento?",
      a: "Não existe um intervalo fixo universal — depende da evolução e da sensibilidade de cada paciente. Em geral, recomenda-se aguardar alguns meses antes de repetir o procedimento, e sempre com avaliação clínica prévia.",
    },
  ],
};

export function ClareamentoContent() {
  return <SpecialtyTemplate data={data} />;
}
