"use client";

import { SpecialtyTemplate, SpecialtyData } from "@/components/SpecialtyTemplate";
import { Scissors, ShieldCheck, Layers, Microscope, Clock, HeartPulse } from "lucide-react";

const data: SpecialtyData = {
  name: "Cirurgia Oral",
  badge: "Cirurgia Oral",
  tagline: (
    <>
      Procedimentos seguros para{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        restabelecer sua saúde bucal
      </em>
    </>
  ),
  heroSubtitle:
    "Da extração simples ao preparo pré-implante, nossa equipe realiza cirurgias orais com planejamento detalhado, técnicas minimamente invasivas e acompanhamento pós-operatório completo.",
  heroChecks: [
    "Técnicas minimamente invasivas",
    "Planejamento por imagem antes de qualquer procedimento",
    "Orientações e acompanhamento pós-operatório completos",
  ],
  ctaHref: "/contato?source=cirurgia",
  accentColor: "#8E6F3A",

  overviewTitle: (
    <>
      O que é a{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        cirurgia oral?
      </em>
    </>
  ),
  overviewIntro:
    "A cirurgia oral e maxilofacial é a especialidade odontológica voltada para o diagnóstico e tratamento cirúrgico de doenças, lesões e condições que afetam os dentes, os ossos da face, a gengiva e os tecidos moles da boca. Os procedimentos mais comuns incluem extrações simples e complexas, remoção de dentes inclusos (especialmente os sisos), frenectomias, biópsias e cirurgias de preparo para instalação de implantes. O planejamento baseado em exames de imagem — como radiografias e tomografias — é indispensável para garantir a segurança e a previsibilidade de cada procedimento.",
  overviewPoints: [
    "Abrange desde extrações simples até procedimentos mais complexos de reconstrução óssea",
    "O planejamento por imagem (radiografia ou tomografia) é sempre realizado antes da cirurgia",
    "Técnicas minimamente invasivas reduzem o trauma tecidual e aceleram a recuperação",
    "A anestesia local moderna garante total conforto durante o procedimento",
    "O acompanhamento pós-operatório adequado é parte indissociável do tratamento",
  ],

  processTitle: (
    <>
      Da consulta à{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        recuperação completa
      </em>
    </>
  ),
  steps: [
    {
      number: "01",
      title: "Consulta e Planejamento por Imagem",
      desc: "Avaliamos o caso clínico e solicitamos os exames de imagem necessários — radiografia ou tomografia 3D — para mapear com precisão a anatomia da região e planejar o procedimento com máxima segurança.",
    },
    {
      number: "02",
      title: "Preparo e Anestesia",
      desc: "Aplicamos anestesia local de alta eficácia. Para pacientes com ansiedade mais intensa, avaliamos a possibilidade de sedação consciente, garantindo um procedimento tranquilo e sem desconforto.",
    },
    {
      number: "03",
      title: "Procedimento Cirúrgico",
      desc: "Executamos a cirurgia com instrumentação precisa e abordagem minimamente invasiva, buscando sempre o menor trauma possível aos tecidos vizinhos, o que resulta em cicatrização mais rápida e confortável.",
    },
    {
      number: "04",
      title: "Alta e Cuidados Pós-Operatórios",
      desc: "Ao final, fornecemos orientações detalhadas de cuidados pós-cirúrgicos, prescrição medicamentosa quando necessário e agendamos retorno para avaliação da cicatrização e retirada de pontos.",
    },
  ],

  benefitsTitle: (
    <>
      Cirurgia com{" "}
      <em className="not-italic text-gold">planejamento é cirurgia com segurança</em>
    </>
  ),
  benefitsSubtitle:
    "Cada detalhe do procedimento cirúrgico é pensado para maximizar o resultado e minimizar o desconforto do paciente.",
  benefits: [
    {
      icon: ShieldCheck,
      title: "Planejamento Detalhado",
      desc: "Nenhuma cirurgia é realizada sem avaliação clínica completa e exames de imagem adequados. O planejamento é a primeira etapa de um procedimento seguro.",
    },
    {
      icon: Scissors,
      title: "Técnica Minimamente Invasiva",
      desc: "Utilizamos abordagens que preservam ao máximo os tecidos adjacentes, resultando em menos sangramento, menor inchaço e recuperação mais ágil.",
    },
    {
      icon: HeartPulse,
      title: "Controle da Dor e Ansiedade",
      desc: "Anestesia local de alta eficácia e, quando indicado, protocolos de sedação consciente para garantir que o procedimento seja tranquilo e confortável.",
    },
    {
      icon: Microscope,
      title: "Diagnóstico de Alta Precisão",
      desc: "O uso de radiografias digitais e tomografias 3D permite mapear com exatidão a anatomia local — essencial para cirurgias mais complexas.",
    },
    {
      icon: Layers,
      title: "Integração com Outros Tratamentos",
      desc: "As cirurgias orais frequentemente preparam o terreno para outros tratamentos, como implantes dentários, garantindo as condições ideais para o sucesso da reabilitação.",
    },
    {
      icon: Clock,
      title: "Recuperação Orientada",
      desc: "Fornecemos protocolos claros de pós-operatório — com orientações de alimentação, higiene e medicação — para que sua recuperação seja tranquila e sem complicações.",
    },
  ],

  indicationsFor: [
    "Dentes com cárie extensa que não permitem restauração conservadora",
    "Terceiros molares (sisos) inclusos ou semi-inclusos que causam dor ou risco",
    "Frênulos labiais ou linguais que interferem na fala, amamentação ou ortodontia",
    "Preparo do leito ósseo para instalação de implantes dentários",
    "Lesões em tecidos moles ou ósseos que requerem biópsia ou remoção",
  ],
  indicationsRequires: [
    "Pacientes em uso de anticoagulantes precisam de avaliação médica prévia",
    "Diabéticos não compensados podem ter cicatrização prejudicada — controle glicêmico é necessário",
    "Cirurgias durante a gestação são evitadas sempre que possível, especialmente no 1º e 3º trimestres",
    "Pacientes com histórico de osteonecrose por bisfosfonatos requerem avaliação especializada",
  ],

  faqTitle: (
    <>
      O que você precisa saber sobre{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        cirurgia oral
      </em>
    </>
  ),
  faqs: [
    {
      id: "ci-1",
      q: "A extração do siso é muito dolorosa?",
      a: "Com anestesia local adequada, o procedimento em si é indolor. O pós-operatório pode incluir inchaço e desconforto nos primeiros dois a três dias, controlados com medicamentos prescritos e compressas de gelo.",
    },
    {
      id: "ci-2",
      q: "Todo siso precisa ser removido?",
      a: "Não. A indicação depende do posicionamento do dente, da presença de sintomas, do espaço disponível na arcada e do risco de complicações futuras. Avaliamos cada caso individualmente e explicamos claramente a indicação.",
    },
    {
      id: "ci-3",
      q: "Quanto tempo leva a recuperação após a cirurgia?",
      a: "Extrações simples geralmente permitem retorno às atividades em um a dois dias. Extrações de sisos inclusos ou cirurgias mais complexas podem exigir de três a cinco dias de cuidados especiais, com repouso relativo.",
    },
    {
      id: "ci-4",
      q: "Quais cuidados devo ter após a cirurgia?",
      a: "Nas primeiras 24h: evite cuspir com força, fazer bochecho vigoroso, fumar, consumir bebidas quentes e fazer esforços físicos. Morda a gaze conforme orientado e aplique gelo externamente. Seguir essas orientações reduz significativamente o risco de complicações.",
    },
    {
      id: "ci-5",
      q: "O que é alveolite e como ela ocorre?",
      a: "A alveolite é uma complicação pós-extração em que o coágulo sanguíneo que protege o alvéolo se dissolve prematuramente, expondo o osso. Ocorre com maior frequência em fumantes e quando as orientações pós-operatórias não são seguidas.",
    },
    {
      id: "ci-6",
      q: "Posso fazer cirurgia oral estando grávida?",
      a: "Procedimentos cirúrgicos eletivos são evitados durante a gestação, especialmente no primeiro e terceiro trimestres. Em casos de urgência (infecção, abscesso), a avaliação é individualizada com orientação do obstetra.",
    },
  ],
};

export function CirurgiaContent() {
  return <SpecialtyTemplate data={data} />;
}
