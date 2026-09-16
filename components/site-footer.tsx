import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <Logo className="[&_span]:text-primary-foreground" />
        <p className="max-w-md text-xs leading-relaxed text-primary-foreground/70">
          Os protocolos de terapia peptídica são prescritos individualmente, mediante avaliação
          clínica e laboratorial. Este site tem caráter informativo e não substitui consulta
          médica.
        </p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Remodelação &amp; Rejuvenescimento. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
