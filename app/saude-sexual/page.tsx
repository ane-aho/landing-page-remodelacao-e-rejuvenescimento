import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Saúde Sexual e Bem-Estar | Dra. Roseli Perfoll",
  description:
    "Cuidado individualizado com a saúde sexual, a libido e o bem-estar, em todas as fases da vida.",
}

export default function SaudeSexualPage() {
  return (
    <ProgramPage
      title="Saúde Sexual e Bem-Estar"
      keywords="Prazer. Confiança. Conexão."
      tagline="Viva sua sexualidade com liberdade e confiança"
      intro="Um espaço de escuta e cuidado para tratar questões de libido, desconforto e bem-estar sexual, com abordagem acolhedora e individualizada em cada fase da vida."
    />
  )
}
