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
      intro="Ignorar os sinais de desequilíbrio hormonal é deixar seu corpo lidar sozinho com mudanças profundas. Se você se identifica com boa parte desta lista, preste atenção:"
      signs={[
        "Cansaço constante",
        "Dificuldade para concentrar",
        "Falhas de memória",
        "Irritabilidade e ansiedade",
        "Sono fragmentado",
        "Ganho de peso e metabolismo mais lento",
        "Ressecamento vaginal e queda da libido",
        "Infecções urinárias recorrentes",
      ]}
      paragraphs={[
        'Isso não é "frescura". É simplesmente seu corpo reagindo e dizendo: chegou o momento de restaurar o equilíbrio.',
        "Na perimenopausa e na menopausa, os níveis de estrogênio e progesterona caem de forma brusca. O corpo sente. E muito.",
        "Sob a liderança da médica Dra. Roseli Perfoll, oferecemos um plano personalizado baseado em diálogo aberto, exames laboratoriais detalhados e reposição hormonal bioidêntica planejada para você.",
      ]}
      closing="Recupere sua energia, clareza e vitalidade. Volte a se sentir você."
    />
  )
}
