import Image from "next/image"
import { Play } from "lucide-react"
import { INSTAGRAM_HANDLE, INSTAGRAM_LINK } from "@/lib/contact"

const reels = [
  { href: "https://www.instagram.com/reel/Db9CEKvJIll/", cover: "/images/instagram/reel-1.jpg" },
  { href: "https://www.instagram.com/reel/DZ-48clRIaB/", cover: "/images/instagram/reel-2.jpg" },
  { href: "https://www.instagram.com/reel/DY24WaZxNwX/", cover: "/images/instagram/reel-3.jpg" },
  { href: "https://www.instagram.com/reel/C_yzYBgulcE/", cover: "/images/instagram/reel-4.jpg" },
  { href: "https://www.instagram.com/reel/DbHKK7SRPeF/", cover: "/images/instagram/reel-5.jpg" },
]

export function GallerySection() {
  return (
    <section id="espaco" className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
            Siga-me no Instagram
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copper"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {reels.map(({ href, cover }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] w-40 shrink-0 overflow-hidden bg-muted sm:w-48"
            >
              <Image
                src={cover}
                alt={`Vídeo ${index + 1} da Dra. Roseli Perfoll no Instagram`}
                fill
                className="object-cover"
                sizes="192px"
              />
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-primary transition-colors group-hover:bg-copper group-hover:text-copper-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
