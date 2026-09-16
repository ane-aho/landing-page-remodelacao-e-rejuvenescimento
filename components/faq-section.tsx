import { Accordion } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "O que são peptídeos e como atuam no organismo?",
    answer:
      "Peptídeos são pequenas cadeias de aminoácidos que funcionam como mensageiros biológicos, sinalizando processos naturais do corpo como reparo celular, produção hormonal e regulação metabólica. Os protocolos são individualizados conforme sua avaliação clínica.",
  },
  {
    question: "Como é definido o meu protocolo?",
    answer:
      "Após anamnese detalhada e análise de exames laboratoriais, montamos um protocolo peptídico e nutricional personalizado, alinhado aos seus objetivos e necessidades de saúde.",
  },
  {
    question: "Vocês atendem casos de reequilíbrio hormonal pós-menopausa?",
    answer:
      "Sim. Desenvolvemos protocolos específicos para essa fase, com foco em metabolismo, libido e ação anti-inflamatória, sempre com acompanhamento clínico contínuo.",
  },
  {
    question: "Quanto tempo até perceber resultados?",
    answer:
      "Varia conforme o objetivo e o protocolo, mas a maioria das pacientes começa a notar mudanças nas primeiras semanas, com reavaliações periódicas para ajustar o plano.",
  },
  {
    question: "O acompanhamento inclui orientação nutricional?",
    answer:
      "Sim, todo protocolo é acompanhado de um plano de nutrição personalizado que potencializa os resultados da terapia peptídica.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Perguntas comuns sobre os protocolos
          </h2>
        </div>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}
