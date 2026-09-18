import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/contact"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-rose/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Ginecologista
          </span>
          <h1 className="text-balance font-display text-6xl font-semibold leading-[1.05] text-primary sm:text-7xl">
            Dra.
            <br />
            Roseli Perfoll
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-copper">
            Remodele o corpo &amp; rejuvenesça por dentro com terapia peptídica
          </p>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Com protocolos personalizados que apoiam o reparo celular, a função hormonal, o
            metabolismo e a longevidade, remodele o seu corpo e rejuvenesça por dentro.
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
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-rose/20 to-accent shadow-sm">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">Foto da Dra. Roseli Perfoll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
