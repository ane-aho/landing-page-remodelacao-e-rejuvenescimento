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
          <div />
        </div>
      </div>
    </section>
  )
}
