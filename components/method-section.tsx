import { ClipboardList, FlaskConical, Salad, LineChart } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Anamnese aprofundada",
    description:
      "Levantamento completo de histórico de saúde, sintomas, rotina e objetivos para entender seu ponto de partida.",
  },
  {
    icon: FlaskConical,
    title: "Exames e protocolo peptídico",
    description:
      "Análise laboratorial direcionada e prescrição do protocolo de peptídeos mais adequado ao seu caso.",
  },
  {
    icon: Salad,
    title: "Nutrição personalizada",
    description:
      "Plano nutricional individual que potencializa os resultados do protocolo e apoia o metabolismo e a energia.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento contínuo",
    description:
      "Reavaliações periódicas, ajustes finos do protocolo e acompanhamento próximo da sua evolução.",
  },
]

export function MethodSection() {
  return (
    <section id="metodo" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
              Nosso método
            </p>
            <h2 className="text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Terapia com peptídeos, guiada por dados e acompanhamento clínico
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Peptídeos são pequenas cadeias de aminoácidos que atuam como mensageiros no
              organismo, sinalizando processos naturais de reparo, produção hormonal e
              regulação metabólica. Utilizamos protocolos individualizados — nunca fórmulas
              genéricas — construídos a partir da sua avaliação clínica e laboratorial.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              O acompanhamento é feito de forma próxima, com ajustes ao longo do tempo, aliando
              o protocolo peptídico à nutrição personalizada para sustentar os resultados a
              médio e longo prazo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="absolute right-5 top-5 font-display text-3xl font-semibold text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-copper">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
