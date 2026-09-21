import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { WHATSAPP_LINK, INSTAGRAM_LINK, EMAIL_ADDRESS } from "@/lib/contact"

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl border-t border-border px-4 pt-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Logo imgClassName="h-20 sm:h-24" />
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.1em] text-copper">
              Remodele seu corpo &amp; Rejuvenesça por dentro
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
              Nosso contato
            </p>

            <div className="mt-6 flex items-center gap-4 md:justify-end">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-copper hover:text-copper"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.61-.6-2.84-1.23-4.69-4.1-4.83-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.08.99-2.37c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.49-.14.14-.28.28-.12.55.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.19-.28.37-.23.63-.14.26.09 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
                </svg>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-copper hover:text-copper"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                aria-label="E-mail"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-copper hover:text-copper"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{EMAIL_ADDRESS}</p>

            <div className="mt-8">
              <Button
                render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="px-6 text-base"
              >
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
