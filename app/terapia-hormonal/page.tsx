import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Terapia de Reposição Hormonal | Dra. Roseli Perfoll",
  description:
    "Protocolos personalizados de reposição hormonal para recuperar energia, clareza mental e vitalidade em cada fase da vida.",
}

export default function TerapiaHormonalPage() {
  return (
    <ProgramPage
      title="Terapia de Reposição Hormonal"
      keywords="Energia. Clareza. Vitalidade."
      tagline="Sinta-se você de novo!"
      intro="Avaliação laboratorial completa e acompanhamento clínico próximo para reequilibrar seus hormônios de forma segura e individualizada, com foco em disposição, humor e qualidade de vida."
      benefits={[
        "Mais energia e disposição no dia a dia",
        "Clareza mental e melhora da concentração",
        "Equilíbrio do humor e do sono",
        "Suporte ao metabolismo e à composição corporal",
        "Acompanhamento contínuo com ajustes personalizados",
      ]}
    />
  )
}
