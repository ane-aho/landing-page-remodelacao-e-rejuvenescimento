export function GallerySection() {
  return (
    <section id="espaco" className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Conheça nosso espaço
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-primary sm:text-4xl">
            Nossas instalações
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Um espaço pensado para o seu conforto e bem-estar, do início ao fim da consulta.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="relative col-span-2 row-span-2 flex items-end overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent via-rose/15 to-accent p-5">
            <div>
              <p className="text-sm font-semibold text-primary">Consultório Principal</p>
              <p className="text-xs text-muted-foreground">Endereço do consultório</p>
            </div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-secondary via-accent to-secondary"
            >
              <span className="text-xs text-muted-foreground">Foto {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
