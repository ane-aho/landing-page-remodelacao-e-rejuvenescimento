import Image from "next/image"
import { Sparkles, ShieldCheck, Award } from "lucide-react"

const credentials = [
  {
    icon: Sparkles,
    title: "Especialidade",
    description: "Ginecologia e Obstetrícia",
    description2: "Medicina e Nutrição do Esporte",
  },
  {
    icon: ShieldCheck,
    title: "CRM",
    description: "3827",
  },
  {
    icon: Award,
    title: "RQE",
    description: "18093",
  },
]

export function SpecialtySection() {
  return (
    <section id="especialidade" className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
            Nossa especialidade
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Remodelação &amp; Rejuvenescimento
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Protocolos e tecnologia a serviço da sua saúde e bem-estar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center bg-muted"
            >
              <span className="text-sm text-muted-foreground">Foto do atendimento {i}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-lg overflow-hidden">
            <Image
              src="/images/dra-roseli-bio.jpg"
              alt="Dra. Roseli Perfoll"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40rem, 95vw"
            />
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">
              Sobre a Doutora
            </p>
            <h3 className="font-display text-3xl font-normal text-[#4B4B4B] sm:text-4xl">
              Uma trajetória dedicada à saúde e à longevidade feminina
            </h3>
            <div className="space-y-4 text-pretty text-justify leading-relaxed text-muted-foreground">
              <p>
                Com 35 anos de atuação na medicina, a Dra. Roseli Isabel Perfoll, médica
                ginecologista PhD em Ginecologia, construiu sua trajetória profissional atuando
                em hospitais, maternidades e consultórios particulares em Rio do Sul e Balneário
                Camboriú, Santa Catarina.
              </p>
              <p>
                Pós-graduada em Medicina e Nutrição do Esporte e Sexologia, amplia sua visão
                sobre a saúde feminina para além do tratamento de doenças, com atenção às
                diferentes fases da vida e à qualidade de vida da mulher.
              </p>
              <p>
                Com foco no cuidado individualizado, atua nas áreas de menopausa e reposição
                hormonal, endometriose, transtornos sexuais e longevidade, integrando
                conhecimento médico, experiência clínica e uma abordagem centrada nas
                necessidades de cada paciente.
              </p>
              <p>
                Uma medicina que valoriza a mulher em sua integralidade, respeitando sua
                história, suas transformações e o desejo de viver com saúde, autonomia e
                bem-estar.
              </p>
            </div>
            <div className="space-y-4 pt-2">
              {credentials.map(({ icon: Icon, title, description, description2 }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose/25 text-copper">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                    {description2 && (
                      <p className="text-sm text-muted-foreground">{description2}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
