import Link from "next/link"

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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Nossos Serviços
          </p>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada protocolo é construído a partir da sua história clínica, exames e objetivos.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative">
            <div className="relative mx-auto aspect-[3/5] max-w-md overflow-hidden rounded-3xl border border-border shadow-sm">
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
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row lg:items-stretch">
            {programs.map(({ href, title, keywords, tagline }) => (
              <Link
                key={href}
                href={href}
                className="group flex w-full max-w-sm flex-col items-center gap-3 rounded-2xl border border-border bg-accent px-6 py-8 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary">{title}</h3>
                <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                  {keywords}
                </p>
                <p className="text-sm text-muted-foreground">{tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
