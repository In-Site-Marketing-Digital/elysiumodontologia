"use client";

import { SpecialtyTemplate, SpecialtyData } from "@/components/SpecialtyTemplate";
import { Eye, Layers, Smile, Target, RefreshCw, HeartHandshake } from "lucide-react";

const data: SpecialtyData = {
  name: "Alinhador Invisível",
  badge: "Ortodontia Estética",
  tagline: (
    <>
      Dentes alinhados sem{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        abrir mão da discrição
      </em>
    </>
  ),
  heroSubtitle:
    "O alinhador invisível une tecnologia digital e conforto para corrigir o posicionamento dos seus dentes de forma eficaz — sem bráquetes, sem arames e praticamente imperceptível.",
  heroChecks: [
    "Placas transparentes e removíveis",
    "Planejamento 3D com simulação do resultado final",
    "Sem restrição alimentar — remove para comer",
  ],
  ctaHref: "/contato?source=alinhador",
  accentColor: "#8E6F3A",

  overviewTitle: (
    <>
      O que é o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        alinhador invisível?
      </em>
    </>
  ),
  overviewIntro:
    "O alinhador invisível é um sistema ortodôntico alternativo ao aparelho fixo tradicional, composto por uma série de placas termoplásticas transparentes, confeccionadas sob medida a partir do escaneamento digital dos seus dentes. Cada placa exerce uma leve força progressiva sobre os dentes, movimentando-os gradualmente até a posição planejada. O tratamento é inteiramente planejado com software 3D especializado, o que permite simular cada etapa do movimento dental e visualizar o resultado final antes mesmo de iniciar.",
  overviewPoints: [
    "Feito sob medida a partir do escaneamento 3D dos seus dentes — sem moldeiras de alginato",
    "Cada série de placas corresponde a uma etapa do plano de movimentação dental",
    "O material termoplástico é polido e adaptado à anatomia dos dentes, sem pontas cortantes",
    "A troca de placas é feita periodicamente pelo paciente, com consultas de acompanhamento regulares",
    "Ao final do tratamento, o uso de contenção é indicado para estabilizar os resultados",
  ],

  processTitle: (
    <>
      Da avaliação ao{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        sorriso alinhado
      </em>
    </>
  ),
  steps: [
    {
      number: "01",
      title: "Avaliação e Escaneamento Digital",
      desc: "Realizamos uma avaliação ortodôntica completa e o escaneamento intraoral dos seus dentes com scanner de alta resolução — sem o desconforto das moldeiras tradicionais.",
    },
    {
      number: "02",
      title: "Planejamento 3D e Simulação",
      desc: "Utilizamos software especializado para planejar cada movimento dentário e gerar uma simulação visual do resultado final, que você aprova antes de iniciar o tratamento.",
    },
    {
      number: "03",
      title: "Fabricação e Entrega dos Alinhadores",
      desc: "Com o plano aprovado, as placas são fabricadas em série, numeradas em sequência. Você recebe as primeiras séries e começa o uso imediatamente.",
    },
    {
      number: "04",
      title: "Uso e Acompanhamento Periódico",
      desc: "Você utiliza cada placa por um período determinado e retorna periodicamente para avaliação da evolução, receber novas séries e ajustes quando necessários.",
    },
  ],

  benefitsTitle: (
    <>
      Por que o alinhador é a escolha{" "}
      <em className="not-italic text-gold">de quem valoriza discrição</em>
    </>
  ),
  benefitsSubtitle:
    "Além da estética durante o tratamento, o alinhador traz vantagens funcionais que impactam diretamente na qualidade de vida.",
  benefits: [
    {
      icon: Eye,
      title: "Visualmente Discreto",
      desc: "O material termoplástico transparente é praticamente imperceptível no dia a dia — ninguém precisa saber que você está em tratamento ortodôntico.",
    },
    {
      icon: Layers,
      title: "Higiene Facilitada",
      desc: "Por ser removível, você escova e usa fio dental normalmente, sem o acúmulo de resíduos que ocorre ao redor dos bráquetes do aparelho fixo.",
    },
    {
      icon: Smile,
      title: "Sem Ferimentos na Mucosa",
      desc: "As bordas polidas do alinhador não atritam contra a mucosa da bochecha e dos lábios, eliminando o risco de feridas e ulcerações comuns no aparelho fixo.",
    },
    {
      icon: Target,
      title: "Resultado Previsível",
      desc: "A simulação 3D do plano de tratamento permite visualizar o resultado antes mesmo de começar, tornando o processo totalmente transparente e previsível.",
    },
    {
      icon: RefreshCw,
      title: "Sem Restrição Alimentar",
      desc: "Com o alinhador removível para as refeições, você pode comer o que quiser sem preocupação com danos ao aparelho ou com alimentos que ficam presos nos bráquetes.",
    },
    {
      icon: HeartHandshake,
      title: "Conforto Superior",
      desc: "Sem emergências como fio solto ou bráquete desprendido — o alinhador é simples, limpo e muito mais confortável para a rotina diária.",
    },
  ],

  indicationsFor: [
    "Apinhamento dental leve a moderado",
    "Espaçamentos e diastemas entre dentes",
    "Mordidas cruzadas e desvios posicionais",
    "Recidiva ortodôntica (dentes que voltaram ao lugar após tratamento anterior)",
    "Quem busca tratamento ortodôntico sem impacto visual no cotidiano",
  ],
  indicationsRequires: [
    "Casos de má-oclusão severa podem requerer abordagem combinada com aparelho fixo",
    "Pacientes com menos de 18 anos precisam de avaliação de maturidade óssea e dental",
    "Dentes muito rotacionados ou com movimentos verticais complexos têm limitações com alinhadores",
    "A falta de comprometimento com as horas de uso diário (20-22h) compromete o resultado",
  ],

  faqTitle: (
    <>
      Suas dúvidas sobre o{" "}
      <em className="not-italic" style={{ color: "#8E6F3A" }}>
        alinhador invisível
      </em>
    </>
  ),
  faqs: [
    {
      id: "al-1",
      q: "Quantas horas por dia devo usar o alinhador?",
      a: "Para que o tratamento avance conforme o planejado, os alinhadores devem ser usados entre 20 e 22 horas por dia — removidos apenas para comer, beber (exceto água), escovar e usar fio dental.",
    },
    {
      id: "al-2",
      q: "O alinhador causa dor?",
      a: "É comum sentir uma leve pressão ao trocar para uma nova placa, sinal de que os dentes estão se movendo. Esse desconforto é geralmente leve e passa nos primeiros dois a três dias após cada troca.",
    },
    {
      id: "al-3",
      q: "Quais problemas o alinhador não consegue corrigir?",
      a: "Casos de má oclusão esquelética grave, impactações severas, extrusões complexas e situações que requerem extração dentária geralmente exigem tratamento combinado ou aparelho fixo. A avaliação clínica define a melhor abordagem.",
    },
    {
      id: "al-4",
      q: "Preciso de contenção após o término do tratamento?",
      a: "Sim, sempre. A contenção — geralmente uma placa noturna — é essencial para manter os dentes na posição alcançada e evitar que retornem às posições anteriores, fenômeno chamado de recidiva.",
    },
    {
      id: "al-5",
      q: "O tratamento com alinhador demora mais do que o aparelho fixo?",
      a: "O tempo de tratamento depende da complexidade do caso e não necessariamente do tipo de aparelho. Em casos leves a moderados, os alinhadores podem ter duração similar ou até menor do que o aparelho fixo.",
    },
    {
      id: "al-6",
      q: "Como devo higienizar os alinhadores?",
      a: "Escove as placas com escova macia e água fria sempre que as remover. Evite água quente, que pode deformar o material. Produtos específicos para higiene de alinhadores também podem ser usados periodicamente.",
    },
  ],
};

export function AlinhadoresContent() {
  return <SpecialtyTemplate data={data} />;
}
