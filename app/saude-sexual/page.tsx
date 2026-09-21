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
      intro="A saúde sexual faz parte do nosso bem-estar e da qualidade de vida em todas as fases da vida. Ao longo dos anos, mudanças hormonais, físicas e emocionais podem transformar a forma como vivenciamos o desejo, o prazer, a lubrificação e a intimidade."
      paragraphs={[
        "Por isso, oferecemos um espaço de escuta e cuidado individualizado, respeitando a história, o momento de vida e as necessidades de cada pessoa. Nossa abordagem busca promover mais conforto, segurança, autoestima e bem-estar na vida íntima, sempre de forma personalizada e acolhedora.",
      ]}
      narrative
    />
  )
}
