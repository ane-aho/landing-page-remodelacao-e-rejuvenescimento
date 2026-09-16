"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WHATSAPP_LINK } from "@/lib/contact"
import { Loader2, CheckCircle2 } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle")
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) {
      setStatus("error")
      return
    }
    setStatus("loading")
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      if (response.ok) {
        setStatus("success")
        event.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">Contato</p>
          <h2 className="text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Comece sua avaliação inicial
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Preencha o formulário ou fale diretamente pelo WhatsApp. Nossa equipe entra em
            contato para entender seu caso e agendar a primeira avaliação.
          </p>
          <Button
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="px-6 text-base"
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" required placeholder="Seu nome completo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input id="phone" name="phone" required placeholder="(00) 00000-0000" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Conte um pouco sobre seu objetivo</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Ex: reequilíbrio hormonal, metabolismo, longevidade..."
            />
          </div>
          <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            Enviar solicitação
          </Button>
          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-copper">
              <CheckCircle2 className="h-4 w-4" /> Mensagem enviada! Em breve entraremos em contato.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive">
              Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
