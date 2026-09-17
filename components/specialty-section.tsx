import { Sparkles, ShieldCheck, Award } from "lucide-react"

const credentials = [
  {
    icon: Sparkles,
    title: "Especialidade",
    description: "Medicina Integrativa e Terapia Peptídica",
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
    <section id="especialidade" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Nossa especialidade
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
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
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-secondary via-accent to-secondary"
            >
              <span className="text-sm text-muted-foreground">Foto do atendimento {i}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent via-secondary to-accent">
            <span className="text-sm text-muted-foreground">Foto da Dra. Roseli Perfoll</span>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
              Conheça-me
            </p>
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Dra. Roseli Perfoll
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Com anos de dedicação à medicina integrativa, atuo desenvolvendo protocolos de
              terapia peptídica personalizados, sempre unindo rigor clínico, escuta atenta e
              acompanhamento próximo em cada etapa do tratamento.
            </p>
            <div className="space-y-4 pt-2">
              {credentials.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-copper">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{title}</p>
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
