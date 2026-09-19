import Link from "next/link"
import { ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/contact"

export interface ProgramPageProps {
  title: string
  keywords: string
  tagline: string
  intro: string
  preSigns?: string
  signs?: string[]
  paragraphs?: string[]
  closing?: string
  benefits?: string[]
  protocolsTitle?: string
  protocols?: { goal: string; compounds: string }[]
}

export function ProgramPage({
  title,
  keywords,
  tagline,
  intro,
  preSigns,
  signs,
  paragraphs,
  closing,
  benefits,
  protocolsTitle,
  protocols,
}: ProgramPageProps) {
  const narrative = Boolean((signs && signs.length > 0) || (protocols && protocols.length > 0))

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-rose/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-4 md:px-6">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <h1 className="mt-6 text-balance text-5xl font-semibold text-primary sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-copper">
              {keywords}
            </p>
            <p className="mt-2 text-xl text-muted-foreground">{tagline}</p>
            <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {intro}
            </p>

            {signs && signs.length > 0 && (
              <>
                {preSigns && (
                  <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {preSigns}
                  </p>
                )}
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                      <span className="text-pretty leading-relaxed text-muted-foreground">
                        {sign}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {protocols && protocols.length > 0 && (
              <>
                <h2 className="mt-12 text-balance text-3xl font-semibold text-primary sm:text-4xl">
                  {protocolsTitle ?? "Protocolos"}
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {protocols.map(({ goal, compounds }) => (
                    <div
                      key={goal}
                      className="rounded-2xl border border-border bg-accent p-6 shadow-sm"
                    >
                      <p className="font-semibold text-primary">{goal}</p>
                      {compounds && <p className="mt-2 text-sm text-copper">{compounds}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}

            {paragraphs && paragraphs.length > 0 && (
              <div className="mt-10 space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-pretty text-justify leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {closing && (
              <p className="mt-8 text-balance text-2xl font-semibold text-primary">{closing}</p>
            )}

            {!narrative && (
              <div className="mt-8">
                <Button
                  render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  size="lg"
                  className="px-6 text-base"
                >
                  Agendar avaliação
                </Button>
              </div>
            )}

            {narrative && (
              <div className="mt-10">
                <Button
                  render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  size="lg"
                  className="px-6 text-base"
                >
                  Agendar sua consulta
                </Button>
              </div>
            )}
          </div>
        </section>

        {benefits && benefits.length > 0 && (
          <section className="border-t border-border bg-secondary/40 py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
              <h2 className="text-balance text-3xl font-semibold text-primary sm:text-4xl">
                Benefícios do protocolo
              </h2>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {!narrative && <ContactSection />}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
