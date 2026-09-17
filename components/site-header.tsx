"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/contact"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#especialidade", label: "Dra. Roseli" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-6 lg:gap-10">
        <a href="#inicio" className="flex shrink-0 items-center">
          <Logo imgClassName="h-16 sm:h-20" />
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Button
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            variant="outline"
          >
            WhatsApp
          </Button>
          <Button render={<a href="#contato" />} nativeButton={false}>
            Agendar avaliação
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              className="mt-2 w-full"
            >
              WhatsApp
            </Button>
            <Button
              render={<a href="#contato" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 w-full"
            >
              Agendar avaliação
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
