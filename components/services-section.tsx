import Link from "next/link"
import { Activity, Dna } from "lucide-react"

const programs = [
  {
    href: "/terapia-hormonal",
    icon: Activity,
    title: "Terapia de Reposição Hormonal",
    keywords: "Energia. Clareza. Vitalidade.",
    tagline: "Sinta-se você de novo!",
  },
  {
    href: "/terapia-peptideos",
    icon: Dna,
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

        <div className="mt-12 flex flex-col items-start gap-8 lg:flex-row">
          <div className="relative aspect-[3/5] w-full max-w-md shrink-0 overflow-hidden rounded-3xl border border-border shadow-sm">
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
          <div className="flex flex-col items-start gap-6 sm:flex-row lg:flex-col">
            {programs.map(({ href, icon: Icon, title, keywords, tagline }) => (
              <Link
                key={href}
                href={href}
                className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-accent shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-1 flex-col items-center gap-3 px-8 py-8 text-center">
                  <Icon className="h-9 w-9 text-primary" strokeWidth={1} />
                  <h3 className="text-2xl font-bold text-primary">{title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                    {keywords}
                  </p>
                  <p className="text-sm text-muted-foreground">{tagline}</p>
                </div>
                <span className="bg-copper px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.1em] text-copper-foreground transition-colors group-hover:bg-copper/90">
                  Saiba mais
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
