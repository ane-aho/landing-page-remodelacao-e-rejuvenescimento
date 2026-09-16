import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Protocolos peptídicos para reequilíbrio hormonal",
  "Suporte ao metabolismo e à composição corporal",
  "Apoio à libido e à saúde sexual",
  "Ação anti-inflamatória e recuperação do bem-estar",
]

export function MenopauseSection() {
  return (
    <section id="pos-menopausa" className="border-b border-border bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Pós-menopausa
          </p>
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Reequilíbrio hormonal para a nova fase do seu corpo
          </h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/80">
            A menopausa traz mudanças hormonais que impactam metabolismo, libido, humor e
            inflamação. Desenvolvemos protocolos peptídicos específicos para essa fase,
            focados em restaurar o equilíbrio e a qualidade de vida — com segurança e
            acompanhamento clínico contínuo.
          </p>
          <Button render={<a href="#contato" />} nativeButton={false} size="lg" className="mt-2 bg-copper px-6 text-base text-copper-foreground hover:bg-copper/90">
            Falar sobre meu caso
          </Button>
        </div>

        <ul className="space-y-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <span className="text-sm leading-relaxed text-primary-foreground/90">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
