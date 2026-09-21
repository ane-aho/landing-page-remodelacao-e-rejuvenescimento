import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/contact"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Ginecologista e Médica do Esporte
          </span>
          <h1 className="text-balance font-display text-6xl font-normal leading-[1.03] text-[#4B4B4B] sm:text-7xl">
            Dra.
            <br />
            Roseli Perfoll
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-copper">
            Remodele seu corpo &amp; rejuvenesça por dentro
          </p>
          <p className="max-w-lg text-pretty text-justify leading-relaxed text-muted-foreground">
            Você não precisa mais continuar tentando descobrir sozinha o que está acontecendo
            com seu corpo, com a Dra. Roseli Perfoll, ginecologista e médica do esporte, você
            terá um olhar completo sobre sua saúde. Do equilíbrio hormonal ao emagrecimento, do
            bem-estar à estética, ela combina tratamentos como reposição hormonal, terapia com
            peptídeos, medicamentos para controle de peso e outras abordagens — tudo sob medida
            para você.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="px-6 text-base"
            >
              Agendar avaliação
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden">
            <Image
              src="/images/dra-roseli.jpg"
              alt="Dra. Roseli Perfoll"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 36rem, 95vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
