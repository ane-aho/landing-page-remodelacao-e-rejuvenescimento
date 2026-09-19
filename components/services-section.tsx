import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const programs = [
  {
    href: "/terapia-hormonal",
    title: "Terapia de Reposição Hormonal",
    keywords: "Energia. Clareza. Vitalidade.",
    tagline: "Sinta-se você de novo!",
  },
  {
    href: "/terapia-peptideos",
    title: "Terapia com Peptídeos",
    keywords: "Renove. Regenere. Revitalize.",
    tagline: "Viva sua melhor versão!",
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
          <h2 className="text-balance text-4xl font-semibold text-primary sm:text-5xl">
            Serviços pensados para você
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada protocolo é construído a partir da sua história clínica, exames e objetivos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-center">
          <div className="relative aspect-[3/5] w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-sm">
            <video
              src="/videos/dra-roseli-intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {programs.map(({ href, title, keywords, tagline }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-3 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-copper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
                  {keywords}
                </p>
                <p className="text-muted-foreground">{tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
