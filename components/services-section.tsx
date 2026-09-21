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
  {
    href: "/suporte-nutricional",
    title: "Suporte Nutricional e Metabólico",
    keywords: "Nutrição. Equilíbrio. Cuidado.",
    tagline: "Cuide de si, de dentro para fora",
  },
  {
    href: "/saude-sexual",
    title: "Saúde Sexual e Bem-Estar",
    keywords: "Prazer. Confiança. Conexão.",
    tagline: "Viva sua sexualidade com liberdade e confiança",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
            Nossos Serviços
          </p>
          <p className="mt-4 text-pretty text-lg font-semibold uppercase tracking-wide text-primary">
            Onde saúde, emagrecimento e estética se unem
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative">
            <div className="relative mx-auto aspect-[3/5] w-full max-w-md overflow-hidden">
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

          <div className="flex flex-col items-start gap-5">
            {programs.map(({ href, title, keywords, tagline }) => (
              <Link
                key={href}
                href={href}
                className="group flex w-full max-w-xs flex-col items-center justify-center gap-2 border border-border px-6 py-8 text-center transition-colors hover:border-copper"
              >
                <h3 className="text-lg font-bold text-primary">{title}</h3>
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
