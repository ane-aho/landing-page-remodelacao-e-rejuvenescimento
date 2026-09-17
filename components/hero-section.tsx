import { Button } from "@/components/ui/button"
import { BadgeCheck, Sparkles } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/contact"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-secondary/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Medicina de precisão &amp; longevidade
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            Dra.
            <br />
            Roseli Perfoll
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-copper">
            Remodelação &amp; Rejuvenescimento com terapia peptídica
          </p>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Protocolos personalizados que apoiam o reparo celular, a função hormonal, a saúde
            sexual, o metabolismo e a longevidade — com acompanhamento clínico próximo e
            nutrição individualizada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#contato" />} nativeButton={false} size="lg" className="px-6 text-base">
              Agendar avaliação
            </Button>
            <Button
              render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="px-6 text-base"
            >
              Conhecer mais
            </Button>
          </div>
          <dl className="grid grid-cols-3 gap-4 pt-2 sm:max-w-md">
            {[
              ["10+", "anos de experiência"],
              ["100%", "protocolos individuais"],
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

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-accent to-secondary shadow-sm">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">Foto da Dra. Roseli Perfoll</span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-md sm:left-auto sm:right-6 sm:translate-x-0">
            <BadgeCheck className="h-5 w-5 text-copper" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-foreground">Certificada</p>
              <p className="text-[11px] text-muted-foreground">Terapia peptídica &amp; longevidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
