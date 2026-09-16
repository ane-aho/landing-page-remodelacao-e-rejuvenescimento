import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { MethodSection } from "@/components/method-section"
import { MenopauseSection } from "@/components/menopause-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <PillarsSection />
        <MethodSection />
        <MenopauseSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
