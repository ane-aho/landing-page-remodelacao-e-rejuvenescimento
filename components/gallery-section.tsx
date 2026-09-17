export function GallerySection() {
  return (
    <section id="espaco" className="border-b border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
            Conheça nosso espaço
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Nossas instalações
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Um espaço pensado para o seu conforto e bem-estar, do início ao fim da consulta.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="relative col-span-2 row-span-2 flex items-end overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent via-secondary to-accent p-5">
            <div>
              <p className="text-sm font-semibold text-foreground">Consultório Principal</p>
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
