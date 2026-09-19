import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Terapia com Peptídeos | Dra. Roseli Perfoll",
  description:
    "Protocolos personalizados de terapia peptídica para reparo celular, metabolismo e longevidade — renove, regenere e revitalize.",
}

export default function TerapiaPeptideosPage() {
  return (
    <ProgramPage
      title="Terapia com Peptídeos"
      keywords="Renove. Regenere. Revitalize."
      tagline="Viva sua melhor versão!"
      intro="Peptídeos são pequenas cadeias de aminoácidos que atuam como mensageiros no organismo, sinalizando processos naturais de reparo celular, produção hormonal e regulação metabólica. Cada protocolo é individualizado a partir da sua avaliação clínica e laboratorial."
      benefits={[
        "Apoio ao reparo celular e à recuperação de tecidos",
        "Suporte ao metabolismo e à composição corporal",
        "Ação anti-inflamatória",
        "Suporte à longevidade e à vitalidade",
        "Acompanhamento clínico contínuo, com nutrição personalizada",
      ]}
    />
  )
}
