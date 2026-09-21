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
      intro="Uma boa nutrição é parte fundamental para manter a energia, o equilíbrio metabólico e o bom funcionamento do organismo."
      paragraphs={[
        "Por isso, buscamos compreender as necessidades de cada pessoa de forma individualizada, levando em conta sua rotina, alimentação, objetivos e características clínicas.",
      ]}
      includesTitle="A abordagem pode incluir:"
      includes={[
        "Vitaminas e minerais",
        "Estratégias de suporte antioxidante com glutationa",
        "Protocolos com NAD+ voltados ao suporte metabólico e celular",
        "Orientação sobre suplementação e hábitos de vida",
      ]}
      afterParagraphs={[
        "Quando necessário, o acompanhamento também pode incluir a avaliação de parâmetros clínicos e laboratoriais, permitindo que cada estratégia seja ajustada às necessidades de cada paciente.",
      ]}
      narrative
    />
  )
}
