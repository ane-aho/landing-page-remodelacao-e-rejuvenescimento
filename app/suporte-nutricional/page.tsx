import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Suporte Nutricional e Metabólico | Dra. Roseli Perfoll",
  description:
    "Acompanhamento nutricional individualizado para apoiar o equilíbrio metabólico e o cuidado integral com o corpo.",
}

export default function SuporteNutricionalPage() {
  return (
    <ProgramPage
      title="Suporte Nutricional e Metabólico"
      keywords="Nutrição. Equilíbrio. Cuidado."
      tagline="Cuide de si, de dentro para fora"
      intro="Um acompanhamento nutricional individualizado, alinhado ao seu momento de vida e aos seus objetivos, para apoiar o equilíbrio metabólico, a energia e o bem-estar no dia a dia."
    />
  )
}
