import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-secondary/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 md:px-6 md:py-28 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Medicina de precisão &amp; longevidade
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Remodele o corpo. <span className="text-copper">Rejuvenesça</span> por dentro.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Protocolos personalizados de terapia peptídica que apoiam o reparo celular, a função
            hormonal, a saúde sexual, o metabolismo e a longevidade — combinando ciência,
            acompanhamento clínico e nutrição individualizada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#contato" />} nativeButton={false} size="lg" className="px-6 text-base">
              Agendar avaliação inicial
            </Button>
            <Button
              render={<a href="#pilares" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="px-6 text-base"
            >
              Conhecer os pilares
            </Button>
          </div>
          <dl className="grid grid-cols-3 gap-4 pt-4 sm:max-w-md">
            {[
              ["5", "pilares de cuidado"],
              ["100%", "protocolos individualizados"],
              ["1:1", "acompanhamento clínico"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground">{value}</dd>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-copper">
              O que tratamos
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {[
                "Reparo celular e recuperação de tecidos",
                "Função hormonal e equilíbrio endócrino",
                "Saúde sexual e libido",
                "Metabolismo e composição corporal",
                "Longevidade e vitalidade",
                "Reequilíbrio hormonal pós-menopausa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
