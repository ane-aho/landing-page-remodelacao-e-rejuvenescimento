import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Excelente profissional, muito atenciosa. Me explicou tudo com detalhe e me senti muito segura durante todo o processo.",
    name: "Paciente A.",
  },
  {
    quote:
      "Recomendo amplamente. Depois de anos buscando resposta, a Dra. Roseli foi quem realmente me deu um protocolo eficaz.",
    name: "Paciente B.",
  },
  {
    quote:
      "Atendimento de primeira, espaço impecável e a doutora é muito atenta. Sem dúvida a melhor experiência que já tive.",
    name: "Paciente C.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Notas de agradecimento
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            O que dizem nossas pacientes
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Histórias reais de pessoas que hoje se sentem melhor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map(({ quote, name }) => (
            <div key={name} className="flex flex-col gap-4 p-6 text-center sm:text-left">
              <div className="flex justify-center gap-0.5 text-copper sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{quote}&rdquo;</p>
              <div className="mt-auto flex items-center justify-center gap-2 sm:justify-start">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose/25 text-xs font-semibold text-copper">
                  {name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-primary">{name}</p>
                  <p className="text-xs text-muted-foreground">Paciente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
