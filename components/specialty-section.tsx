import { Sparkles, ShieldCheck, Award } from "lucide-react"

const credentials = [
  {
    icon: Sparkles,
    title: "Especialidade",
    description: "Ginecologia e Terapia Peptídica",
  },
  {
    icon: ShieldCheck,
    title: "Registro Profissional",
    description: "CRM/CRN 00000",
  },
  {
    icon: Award,
    title: "Certificação Vigente",
    description: "Conselho da especialidade",
  },
]

export function SpecialtySection() {
  return (
    <section id="especialidade" className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-copper/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Nossa especialidade
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-primary sm:text-4xl">
            Remodelação &amp; Rejuvenescimento
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Protocolos e tecnologia a serviço da sua saúde e bem-estar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-secondary via-rose/15 to-accent"
            >
              <span className="text-sm text-muted-foreground">Foto do atendimento {i}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent via-rose/15 to-accent">
            <span className="text-sm text-muted-foreground">Foto da Dra. Roseli Perfoll</span>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
              Conheça-me
            </p>
            <h3 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              Dra. Roseli Perfoll
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Com anos de dedicação à ginecologia, atuo desenvolvendo protocolos de terapia
              peptídica personalizados, sempre unindo rigor clínico, escuta atenta e
              acompanhamento próximo em cada etapa do tratamento.
            </p>
            <div className="space-y-4 pt-2">
              {credentials.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose/25 text-copper">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
