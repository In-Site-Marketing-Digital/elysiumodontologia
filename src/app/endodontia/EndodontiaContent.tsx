"use client";

import { SpecialtyTemplate, SpecialtyData } from "@/components/SpecialtyTemplate";
import { ShieldCheck, Microscope, HeartPulse, Zap, TreePine, Clock } from "lucide-react";

const data: SpecialtyData = {
  name: "Endodontia",
  badge: "Tratamento de Canal",
  tagline: (
    <>
      Salvar seu dente é sempre{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        a melhor escolha
      </em>
    </>
  ),
  heroSubtitle:
    "A endodontia moderna é segura, rápida e muito mais confortável do que se imagina. Com técnica e tecnologia adequadas, preservamos seu dente natural — aliviando a dor e eliminando a infecção.",
  heroChecks: [
    "Procedimento indolor com anestesia local eficiente",
    "Sistema rotatório digital — mais rápido e preciso",
    "Preservação do dente natural como prioridade máxima",
  ],
  ctaHref: "/contato?source=endodontia",
  accentColor: "#8E6F3A",

  overviewTitle: (
    <>
      O que é a{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        endodontia?
      </em>
    </>
  ),
  overviewIntro:
    "A endodontia é a especialidade odontológica responsável pelo diagnóstico e tratamento de doenças que afetam a polpa dental — o tecido interno do dente, composto por nervos, vasos sanguíneos e tecido conjuntivo. Quando essa região é atingida por cárie profunda, trauma ou infecção, o tratamento endodôntico — popularmente conhecido como 'canal' — se torna necessário para eliminar o foco infeccioso, aliviar a dor e preservar o elemento dental. Com anestesia local moderna e instrumentação rotatória de última geração, o procedimento é muito mais tranquilo do que a fama sugere.",
  overviewPoints: [
    "Atua diretamente na polpa dental, onde nervos e vasos sanguíneos estão localizados",
    "Elimina a infecção sem remover o dente — preservando sua função e estrutura",
    "A anestesia local moderna garante total controle da dor durante o procedimento",
    "O sistema rotatório digital tornou o tratamento mais rápido, preciso e confortável",
    "Após o tratamento, o dente é restaurado e pode funcionar normalmente por muitos anos",
  ],

  processTitle: (
    <>
      Como funciona o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        tratamento de canal?
      </em>
    </>
  ),
  steps: [
    {
      number: "01",
      title: "Diagnóstico por Imagem e Anestesia",
      desc: "Realizamos radiografia periapical para mapear as raízes e avaliar a extensão da infecção. Em seguida, aplicamos anestesia local de alta eficácia — o procedimento é totalmente indolor a partir daí.",
    },
    {
      number: "02",
      title: "Acesso e Remoção da Polpa",
      desc: "Abrimos um acesso controlado ao interior do dente e removemos a polpa comprometida com instrumentos rotatórios modernos e solução irrigante antimicrobiana para desinfecção dos canais.",
    },
    {
      number: "03",
      title: "Modelagem e Limpeza dos Canais",
      desc: "Os canais são moldados com precisão milimétrica para receber o material obturador. A limpeza é realizada com agentes irrigantes que eliminam bactérias e detritos das paredes do canal.",
    },
    {
      number: "04",
      title: "Obturação, Selamento e Restauração",
      desc: "Os canais são preenchidos com material biocompatível (guta-percha) e selados hermeticamente para impedir recontaminação. O dente é então restaurado, devolvendo sua função completa.",
    },
  ],

  benefitsTitle: (
    <>
      Tratar o canal é{" "}
      <em className="not-italic text-gold">sempre melhor do que extrair</em>
    </>
  ),
  benefitsSubtitle:
    "Manter o dente natural traz benefícios que vão muito além da estética — impactam diretamente sua saúde bucal e geral.",
  benefits: [
    {
      icon: TreePine,
      title: "Preserva a Estrutura Natural",
      desc: "O dente natural é sempre a melhor prótese possível. Preservá-lo evita perdas ósseas progressivas e a necessidade de próteses ou implantes no futuro.",
    },
    {
      icon: ShieldCheck,
      title: "Elimina a Infecção",
      desc: "O tratamento remove completamente o foco infeccioso, impedindo que a infecção se espalhe para ossos e tecidos vizinhos — o que pode ocorrer quando o problema é ignorado.",
    },
    {
      icon: HeartPulse,
      title: "Alívio Imediato da Dor",
      desc: "A dor causada pela infecção pulpar é intensa. O tratamento endodôntico alivia esse desconforto de forma definitiva, já na primeira sessão.",
    },
    {
      icon: Microscope,
      title: "Alta Taxa de Sucesso",
      desc: "Quando realizado corretamente e seguido de restauração adequada, o tratamento de canal apresenta excelente prognóstico a longo prazo na literatura científica.",
    },
    {
      icon: Zap,
      title: "Procedimento Rápido",
      desc: "Com instrumentação rotatória digital e planejamento adequado, a maioria dos casos é resolvida em uma ou duas sessões, com retorno rápido às atividades normais.",
    },
    {
      icon: Clock,
      title: "Evita Custos Futuros",
      desc: "Preservar o dente natural evita os custos e o tempo de tratamento envolvidos na reabilitação com implantes ou próteses após uma extração.",
    },
  ],

  indicationsFor: [
    "Dor dental intensa e espontânea, especialmente noturna",
    "Cárie profunda que atingiu a polpa do dente",
    "Trauma dental com comprometimento do tecido interno",
    "Abscesso dentário (inchaço, fístula ou secreção na gengiva)",
    "Dente que mudou de cor sem causa aparente",
  ],
  indicationsRequires: [
    "Dentes com fratura vertical geralmente não são passíveis de tratamento endodôntico",
    "Casos com perda óssea severa ao redor do dente requerem avaliação conjunta com periodontia",
    "Dentes com reabsorção radicular extensa podem ter limitações para o tratamento",
    "Pacientes com condições sistêmicas específicas precisam de avaliação médica prévia",
  ],

  faqTitle: (
    <>
      O que você precisa saber sobre o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        tratamento de canal
      </em>
    </>
  ),
  faqs: [
    {
      id: "en-1",
      q: "O tratamento de canal dói?",
      a: "Com a anestesia local moderna, o procedimento em si é indolor. A dor que as pessoas associam ao canal é, na verdade, a infecção que antecede o tratamento. Após o procedimento, pode haver uma leve sensibilidade por alguns dias — controlada com medicação.",
    },
    {
      id: "en-2",
      q: "Quantas sessões são necessárias?",
      a: "Na maioria dos casos, o tratamento é concluído em uma ou duas sessões, dependendo da complexidade do caso, do número de raízes e do estado da infecção. Realizamos diagnóstico completo antes de definir o protocolo.",
    },
    {
      id: "en-3",
      q: "O dente tratado com canal fica mais fraco?",
      a: "O dente perde sua vitalidade após o tratamento, mas não necessariamente se torna mais fraco se for restaurado corretamente. Em muitos casos, recomendamos uma coroa protética para proteger e fortalecer a estrutura remanescente.",
    },
    {
      id: "en-4",
      q: "Quando é indicado o retratamento endodôntico?",
      a: "O retratamento é indicado quando um dente já tratado apresenta sinais de infecção persistente — como dor, inchaço ou alterações visíveis na radiografia. É uma alternativa eficaz para salvar o dente sem recorrer à extração.",
    },
    {
      id: "en-5",
      q: "Posso esperar para tratar o canal?",
      a: "Não é recomendado. A infecção pulpar não se resolve sozinha — ela evolui progressivamente, podendo comprometer o osso ao redor do dente e gerar complicações mais graves. O tratamento precoce melhora o prognóstico.",
    },
    {
      id: "en-6",
      q: "O que acontece se eu extrair o dente em vez de tratar?",
      a: "A extração resolve o problema imediato, mas gera consequências: perda óssea progressiva, migração dos dentes vizinhos e a necessidade de reabilitação com implante ou prótese — procedimentos de maior complexidade e custo.",
    },
  ],
};

export function EndodontiaContent() {
  return <SpecialtyTemplate data={data} />;
}
