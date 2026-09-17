import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SpecialtySection } from "@/components/specialty-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <SpecialtySection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
