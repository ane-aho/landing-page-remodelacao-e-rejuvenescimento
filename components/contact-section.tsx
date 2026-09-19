import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/contact"

const hours = [
  ["Segunda a Sexta", "8:00 - 12:00"],
  ["Segunda a Sexta", "14:00 - 18:00"],
  ["Sábados", "8:00 - 12:00"],
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-balance text-3xl font-semibold text-primary sm:text-4xl">
          Agende sua consulta, sem complicações
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Escreva pelo meio que preferir; será um prazer te acompanhar.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="space-y-6 p-8 sm:p-10">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <div>
                <p className="text-sm font-semibold text-primary">Telefone</p>
                <p className="text-sm text-muted-foreground">+55 (00) 00000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <div>
                <p className="text-sm font-semibold text-primary">E-mail</p>
                <p className="text-sm text-muted-foreground">contato@drroselperfoll.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <div>
                <p className="text-sm font-semibold text-primary">Localização</p>
                <p className="text-sm text-muted-foreground">Endereço do consultório</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary">Horários de atendimento</p>
                {hours.map(([day, time]) => (
                  <p key={day + time} className="text-sm text-muted-foreground">
                    {day}: {time}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-copper"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-copper"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.5-1.46h1.6V4.35C16.3 4.24 15.4 4.1 14.3 4.1c-2.28 0-3.84 1.39-3.84 3.94V10.5H8v3h2.46V21h3.04z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="min-h-[280px] border-t border-border lg:border-l lg:border-t-0">
            <iframe
              title="Mapa da localização"
              src="https://www.google.com/maps?q=Brasil&output=embed"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">Prefere escrever? Te respondemos por WhatsApp.</p>
          <Button
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="px-6 text-base"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  )
}
