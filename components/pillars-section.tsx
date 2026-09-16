import { Dna, HeartPulse, Flame, Activity, Infinity as InfinityIcon } from "lucide-react"

const pillars = [
  {
    icon: Dna,
    title: "Reparo celular",
    description:
      "Peptídeos selecionados para apoiar a regeneração de tecidos, recuperação pós-esforço e reparo estrutural do organismo.",
  },
  {
    icon: Activity,
    title: "Função hormonal",
    description:
      "Avaliação laboratorial completa e protocolos direcionados para reequilibrar eixos hormonais e restaurar a vitalidade.",
  },
  {
    icon: HeartPulse,
    title: "Saúde sexual",
    description:
      "Abordagem individualizada para libido, desempenho e bem-estar sexual, com protocolos peptídicos específicos.",
  },
  {
    icon: Flame,
    title: "Metabolismo",
    description:
      "Estratégias para composição corporal, sensibilidade metabólica e energia, aliadas à nutrição personalizada.",
  },
  {
    icon: InfinityIcon,
    title: "Longevidade",
    description:
      "Protocolos preventivos e de manutenção pensados para estender a saúde funcional e a qualidade de vida.",
  },
]

export function PillarsSection() {
  return (
    <section id="pilares" className="border-b border-border bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Nossos pilares
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Cinco frentes de cuidado, um protocolo só seu
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada plano é construído a partir da sua história clínica, exames e objetivos —
            unindo terapia peptídica, protocolos personalizados e nutrição direcionada.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-secondary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
