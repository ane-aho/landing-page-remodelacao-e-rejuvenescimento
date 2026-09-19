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
      intro="A terapia com peptídeos pode ser a chave para você voltar a se sentir bem. Com protocolos personalizados que apoiam o reparo celular, a função hormonal, o metabolismo e a longevidade, remodele o seu corpo e rejuvenesça por dentro."
      protocols={[
        {
          goal: "Ganho de massa magra e perda de gordura",
          compounds: "CJC-1295 + Ipamorelin",
        },
        {
          goal: "Oxidação de gordura",
          compounds: "MOTS-c, AOD-9604",
        },
        {
          goal: "Libido e energia",
          compounds: "PT-141 (Bremelanotide)",
        },
        {
          goal: "Recuperação e anti-inflamatório",
          compounds: "BPC-157",
        },
        {
          goal: "Preservar massa magra durante o emagrecimento",
          compounds: "",
        },
      ]}
    />
  )
}
