import { INSTAGRAM_HANDLE, INSTAGRAM_LINK } from "@/lib/contact"
import { InstagramEmbed } from "@/components/instagram-embed"

const reels = [
  "https://www.instagram.com/reel/Db9CEKvJIll/",
  "https://www.instagram.com/reel/DZ-48clRIaB/",
  "https://www.instagram.com/reel/DY24WaZxNwX/",
  "https://www.instagram.com/reel/C_yzYBgulcE/",
  "https://www.instagram.com/reel/DbHKK7SRPeF/",
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

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {reels.map((url) => (
            <InstagramEmbed key={url} url={url} />
          ))}
        </div>
      </div>
    </section>
  )
}
