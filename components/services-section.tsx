import { Dna, Activity, HeartPulse, Flame, Infinity as InfinityIcon, Leaf } from "lucide-react"

const services = [
  {
    icon: Dna,
    title: "Reparo celular",
    description:
      "Peptídeos selecionados para apoiar a regeneração de tecidos e a recuperação estrutural do organismo.",
  },
  {
    icon: Activity,
    title: "Função hormonal",
    description:
      "Avaliação laboratorial completa e protocolos direcionados para reequilibrar eixos hormonais.",
  },
  {
    icon: HeartPulse,
    title: "Saúde sexual",
    description:
      "Abordagem individualizada para libido, desempenho e bem-estar sexual com protocolos específicos.",
  },
  {
    icon: Flame,
    title: "Metabolismo",
    description:
      "Estratégias para composição corporal, sensibilidade metabólica e energia, aliadas à nutrição.",
  },
  {
    icon: InfinityIcon,
    title: "Longevidade",
    description:
      "Protocolos preventivos e de manutenção para estender a saúde funcional e a qualidade de vida.",
  },
  {
    icon: Leaf,
    title: "Pós-menopausa",
    description:
      "Reequilíbrio hormonal com ação anti-inflamatória, foco em metabolismo, libido e vitalidade.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/60 to-secondary/40 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Serviços pensados para você
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-primary sm:text-4xl">
            Como posso te ajudar?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada protocolo é construído a partir da sua história clínica, exames e objetivos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className={
                  "flex h-11 w-11 items-center justify-center rounded-xl " +
                  (index % 2 === 0 ? "bg-accent text-copper" : "bg-rose/25 text-copper")
                }
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
