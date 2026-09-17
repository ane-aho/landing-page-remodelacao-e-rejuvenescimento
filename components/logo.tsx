import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <span className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="Dra. Roseli Perfoll"
        width={795}
        height={404}
        priority
        className={cn("h-12 w-auto object-contain sm:h-14", imgClassName)}
      />
    </span>
  )
}
