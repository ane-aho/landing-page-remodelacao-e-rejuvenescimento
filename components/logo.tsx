import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="16" fill="#101216" />
      {/* peptide-chain helix linking the two R's */}
      <path
        d="M14 20c6 4 10 4 16 0s10-4 16 0"
        stroke="#F0C7D2"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M14 44c6-4 10-4 16 0s10 4 16 0"
        stroke="#F0C7D2"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <circle cx="14" cy="20" r="1.6" fill="#B84A6A" />
      <circle cx="30" cy="20" r="1.6" fill="#B84A6A" />
      <circle cx="46" cy="20" r="1.6" fill="#B84A6A" />
      <circle cx="14" cy="44" r="1.6" fill="#B84A6A" />
      <circle cx="30" cy="44" r="1.6" fill="#B84A6A" />
      <circle cx="46" cy="44" r="1.6" fill="#B84A6A" />
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fontFamily="Georgia, 'Aptos Display', serif"
        fontSize="24"
        fontWeight="600"
        fill="#F0C7D2"
      >
        R&amp;R
      </text>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm sm:h-12 sm:w-12">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Remodelação
          <span className="text-copper">&amp;</span>
          Rejuvenescimento
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-copper sm:text-[11px]">
          Terapia peptídica &amp; longevidade
        </span>
      </span>
    </div>
  )
}
