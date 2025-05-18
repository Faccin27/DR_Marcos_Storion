"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Droplets, Scissors, Heart, Sparkles } from "lucide-react"
import ProcedureModal from "./procedure-modal"

interface Procedure {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon?: string
  image?: string
  category: "face" | "body" | "breast" | "other"
}

export default function AllProcedures() {
  const [activeTab, setActiveTab] = useState<"all" | "face" | "body" | "breast" | "other">("all")
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const procedures: Procedure[] = [
    {
      id: "deep-plane-facelift",
      title: "Deep Plane FaceLift",
      shortDescription: "Técnica avançada de rejuvenescimento facial com resultados naturais e duradouros.",
      fullDescription: `O Deep Plane FaceLift é uma técnica cirúrgica avançada de rejuvenescimento facial que trabalha em camadas mais profundas da face, proporcionando resultados mais naturais e duradouros.
  
      Diferente das técnicas tradicionais, o Deep Plane FaceLift reposiciona os tecidos faciais em um plano mais profundo, tratando não apenas a pele, mas também o SMAS (Sistema Músculo-Aponeurótico Superficial) e os ligamentos faciais.
  
      Esta técnica é especialmente eficaz para corrigir flacidez moderada a severa no terço médio da face, linha da mandíbula e pescoço, com resultados que podem durar de 8 a 12 anos.
  
      O Dr. Marcos Storion utiliza as técnicas mais modernas e seguras, garantindo resultados naturais que preservam as características individuais de cada paciente, evitando o aspecto "esticado" ou artificial.`,
      image: "/images/deepplane.jpg",
      category: "face",
    },
    {
      id: "neck-lift",
      title: "Neck Lift",
      shortDescription:
        "Procedimento para rejuvenescimento do pescoço, eliminando flacidez e melhorando o contorno cervical.",
      fullDescription: `O Neck Lift é um procedimento cirúrgico especializado no rejuvenescimento do pescoço, ideal para pacientes que apresentam flacidez cutânea, bandas platismais proeminentes ou acúmulo de gordura na região submentoniana.
  
      Durante a cirurgia, são realizadas incisões discretas atrás das orelhas e, em alguns casos, sob o queixo, permitindo a remoção do excesso de pele e gordura, além do reposicionamento dos músculos do pescoço.
  
      O procedimento pode ser realizado isoladamente ou em conjunto com um facelift, dependendo das necessidades individuais do paciente e da avaliação do cirurgião.
  
      Os resultados incluem um contorno cervical mais definido, aparência mais jovem e harmoniosa, com recuperação média de 2 a 3 semanas para as principais atividades sociais.`,
      image: "/images/necklift.png",
      category: "face",
    },
    {
      id: "facelift",
      title: "FaceLift",
      shortDescription:
        "Procedimento clássico de rejuvenescimento facial que combate sinais de envelhecimento e flacidez.",
      fullDescription: `O FaceLift tradicional, também conhecido como ritidoplastia, é um procedimento cirúrgico que visa rejuvenescer a face através da remoção do excesso de pele e reposicionamento dos tecidos faciais.
  
      A técnica envolve incisões discretas ao redor das orelhas, permitindo ao cirurgião tratar a flacidez da pele e do SMAS (Sistema Músculo-Aponeurótico Superficial), resultando em uma aparência mais jovem e descansada.
  
      Ideal para pacientes com sinais moderados a avançados de envelhecimento facial, o FaceLift trata principalmente o terço inferior da face e pescoço, melhorando o contorno mandibular e reduzindo os sulcos nasolabiais.
  
      O Dr. Marcos Storion adapta a técnica às necessidades específicas de cada paciente, garantindo resultados naturais que respeitam as características individuais, com duração média de 5 a 8 anos.`,
      image: "/images/FaceLift.jpeg",
      category: "face",
    },
    {
      id: "blefaroplastia",
      title: "Blefaroplastia",
      shortDescription: "Cirurgia para rejuvenescimento das pálpebras, removendo excesso de pele e bolsas de gordura.",
      fullDescription: `A Blefaroplastia é uma cirurgia plástica focada no rejuvenescimento da região dos olhos, tratando o excesso de pele nas pálpebras superiores e/ou inferiores, além das bolsas de gordura que causam aspecto de cansaço e envelhecimento.
  
      Nas pálpebras superiores, o procedimento remove o excesso de pele que pode até mesmo interferir na visão em casos mais severos. Nas pálpebras inferiores, são tratadas as bolsas de gordura e a flacidez cutânea.
  
      As incisões são realizadas em locais estratégicos que seguem as dobras naturais da pálpebra, tornando as cicatrizes praticamente imperceptíveis após a cicatrização completa.
  
      Os resultados incluem um olhar mais descansado, jovem e expressivo, com recuperação relativamente rápida de aproximadamente 7 a 10 dias para retorno às atividades sociais.`,
      image: "/images/blefaroplastia.jpg",
      category: "face",
    },
    {
      id: "rinoplastia",
      title: "Rinoplastia",
      shortDescription: "Cirurgia para harmonização e remodelação do nariz, melhorando estética e função respiratória.",
      fullDescription: `A Rinoplastia é uma cirurgia plástica que visa remodelar e harmonizar o nariz, podendo ter finalidades estéticas e/ou funcionais, dependendo das necessidades de cada paciente.
  
      Do ponto de vista estético, a cirurgia pode corrigir diversos aspectos como: dorso nasal alto ou baixo, ponta bulbosa ou caída, narinas largas, desvios visíveis e assimetrias, sempre buscando harmonização com os demais traços faciais.
  
      Funcionalmente, a rinoplastia pode corrigir problemas respiratórios causados por desvio de septo, hipertrofia de cornetos ou outras alterações estruturais que dificultam a respiração adequada.
  
      O Dr. Marcos Storion realiza um planejamento individualizado, considerando as características anatômicas e expectativas do paciente, utilizando técnicas modernas que garantem resultados naturais e harmonização facial.`,
      image: "/images/rinoest.jpg",
      category: "face",
    },
    {
      id: "otoplastia",
      title: "Otoplastia",
      shortDescription:
        "Correção de orelhas proeminentes ou em abano, melhorando o contorno e posicionamento auricular.",
      fullDescription: `A Otoplastia é um procedimento cirúrgico que corrige orelhas proeminentes (popularmente conhecidas como "orelhas em abano"), aproximando-as da cabeça e melhorando seu contorno e posicionamento.
  
      A cirurgia envolve incisões discretas na parte posterior da orelha, permitindo a remodelação da cartilagem auricular e, quando necessário, a remoção de pequenas porções de pele para um resultado mais harmonioso.
  
      Este procedimento pode ser realizado em crianças a partir dos 6-7 anos de idade, quando a orelha já atingiu cerca de 85% do seu tamanho adulto, ou em qualquer fase da vida adulta.
  
      Os resultados são permanentes e proporcionam significativa melhora na autoestima, especialmente em crianças e adolescentes que frequentemente sofrem bullying devido à proeminência das orelhas.`,
      image: "/images/Otoplastia.png",
      category: "face",
    },
    {
      id: "mentoplastia",
      title: "Mentoplastia",
      shortDescription:
        "Cirurgia para harmonização do queixo, corrigindo desproporções através de implantes ou redução óssea.",
      fullDescription: `A Mentoplastia é uma cirurgia de remodelação do queixo que visa corrigir desproporções faciais, podendo ser de aumento (através da colocação de implantes) ou redução (através da remodelação óssea).
  
      O procedimento de aumento utiliza implantes de silicone sólido ou outros biomateriais compatíveis, inseridos através de incisões discretas realizadas internamente na boca ou externamente sob o queixo.
  
      Nos casos de redução, é realizada a remodelação óssea para diminuir projeções excessivas do mento, harmonizando o perfil facial do paciente.
  
      A mentoplastia frequentemente é associada a outros procedimentos como rinoplastia ou lipoaspiração de papada para um resultado facial mais harmônico, equilibrando as proporções entre nariz, queixo e pescoço.`,
      image: "/images/Mentoplastia.png",
      category: "face",
    },
    {
      id: "cirurgia-angulo-mandibula",
      title: "Cirurgia de Ângulo de Mandíbula",
      shortDescription:
        "Procedimento para definição e harmonização do contorno mandibular, criando uma aparência mais estruturada.",
      fullDescription: `A Cirurgia de Ângulo de Mandíbula é um procedimento especializado que visa melhorar a definição e o contorno da linha mandibular, criando um ângulo mais marcado e estruturado na transição entre o rosto e o pescoço.
  
      Existem duas abordagens principais: o aumento do ângulo mandibular através de implantes personalizados, ou a remodelação óssea para pacientes com hipertrofia massetérica ou ângulos muito proeminentes que desejam um refinamento.
  
      A técnica utiliza incisões internas na boca, não deixando cicatrizes visíveis, e pode ser associada a outros procedimentos como mentoplastia ou lipoaspiração de papada para um resultado facial ainda mais harmonioso.
  
      Este procedimento é muito procurado por pacientes que desejam uma aparência facial mais definida e angular, especialmente homens que buscam uma expressão mais masculina através do contorno mandibular bem delineado.`,
      image: "/images/mandibula.jpeg",
      category: "face",
    },
    {
      id: "lipoaspiracao",
      title: "Lipoaspiração",
      shortDescription: "Técnica cirúrgica para remoção de gordura localizada e remodelação corporal.",
      fullDescription: `A Lipoaspiração é um procedimento cirúrgico de contorno corporal que remove depósitos de gordura resistentes à dieta e exercícios, melhorando as proporções e silhueta do corpo.
  
      A técnica moderna utiliza cânulas de pequeno calibre inseridas através de incisões mínimas, que permitem a sucção controlada da gordura subcutânea de diversas áreas como abdome, flancos, costas, braços, coxas e papada.
  
      O Dr. Marcos Storion emprega técnicas avançadas como a lipoaspiração VASER (ultrassônica) ou lipoaspiração laser, que promovem a emulsificação da gordura antes da aspiração, reduzindo o trauma aos tecidos adjacentes e facilitando a recuperação.
  
      É importante ressaltar que a lipoaspiração não é um tratamento para obesidade, mas sim para remodelação corporal em pacientes próximos do peso ideal que apresentam acúmulos localizados de gordura.`,
      image: "/images/Lipoaspiracao.jpeg",
      category: "body",
    },
    {
      id: "mamoplastia-aumento",
      title: "Mamoplastia de Aumento",
      shortDescription: "Cirurgia para aumento do volume mamário através da colocação de implantes de silicone.",
      fullDescription: `A Mamoplastia de Aumento é uma cirurgia plástica que visa aumentar o volume e melhorar a forma dos seios através da colocação de implantes mamários de silicone.
  
      O procedimento é personalizado de acordo com as características anatômicas e desejos de cada paciente, considerando aspectos como: tipo de implante (redondo ou anatômico), volume adequado às proporções corporais, posicionamento (subglandular, submuscular ou plano dual), e via de acesso (periareolar, inframamária ou axilar).
  
      Os implantes modernos possuem alta tecnologia e segurança, com envoltório de silicone coesivo (gel de silicone) que mantém sua integridade mesmo em caso de ruptura do envoltório.
  
      Os resultados proporcionam maior volume mamário, melhora na projeção e simetria dos seios, com consequente aumento da autoestima e satisfação com a imagem corporal.`,
      image: "/images/mamaaumento.jpeg",
      category: "body",
    },
    {
      id: "mastopexia",
      title: "Mastopexia",
      shortDescription: "Cirurgia para elevação e remodelação das mamas que apresentam ptose (queda).",
      fullDescription: `A Mastopexia é um procedimento cirúrgico que visa elevar e remodelar as mamas que apresentam ptose (queda), devolvendo-lhes uma aparência mais jovem e projetada.
  
      As causas mais comuns da ptose mamária incluem gravidez e amamentação, grandes variações de peso, envelhecimento natural e predisposição genética, fazendo com que o tecido mamário perca firmeza e a aréola se posicione abaixo do sulco inframamário.
  
      A técnica cirúrgica varia conforme o grau de ptose e pode incluir diferentes tipos de incisões (periareolar, vertical ou em "T" invertido), sempre buscando cicatrizes mínimas e bem posicionadas.
  
      A mastopexia pode ser realizada isoladamente ou associada à colocação de implantes (mastopexia com prótese) quando, além da elevação, a paciente deseja aumento do volume mamário.`,
      image: "/images/mastopexia.jpg",
      category: "body",
    },
    {
      id: "lipoabdominoplastia",
      title: "Lipoabdominoplastia",
      shortDescription:
        "Procedimento combinado que associa lipoaspiração e abdominoplastia para remodelação completa do abdome.",
      fullDescription: `A Lipoabdominoplastia é um procedimento avançado que combina as técnicas de lipoaspiração e abdominoplastia tradicional, proporcionando uma remodelação completa do abdome com resultados superiores e recuperação otimizada.
  
      Diferente da abdominoplastia convencional, esta técnica inicia com a lipoaspiração do abdome e flancos, o que preserva melhor a vascularização dos tecidos e permite uma remoção mais efetiva da gordura localizada antes da ressecção do excesso de pele.
  
      O procedimento também inclui a plicatura dos músculos retos abdominais (correção da diástase), reposicionamento do umbigo e remoção do excesso de pele abdominal, resultando em um abdome mais plano e contornado.
  
      Indicada principalmente para pacientes pós-gestação ou após grande perda de peso que apresentam flacidez abdominal, gordura localizada e enfraquecimento da parede muscular do abdome.`,
      image: "/images/lipom.jpeg",
      category: "body",
    },
    {
      id: "ninfoplastia",
      title: "Ninfoplastia",
      shortDescription: "Cirurgia íntima feminina para redução ou remodelação dos pequenos lábios vaginais.",
      fullDescription: `A Ninfoplastia, também conhecida como labioplastia, é uma cirurgia íntima feminina que visa reduzir ou remodelar os pequenos lábios vaginais (ninfas) quando estes são desproporcionalmente grandes ou assimétricos.
  
      O procedimento é indicado para mulheres que apresentam desconforto físico durante atividades cotidianas ou íntimas, irritação e problemas de higiene devido ao excesso de tecido labial, além daquelas que buscam melhoria estética da região.
  
      A técnica cirúrgica envolve a remoção precisa do tecido excedente dos pequenos lábios, preservando sua sensibilidade e funcionalidade, com suturas absorvíveis que minimizam o desconforto no pós-operatório.
  
      A recuperação é relativamente rápida, com retorno às atividades normais em aproximadamente 7 dias e às relações sexuais após 30-40 dias, proporcionando maior conforto físico e melhora significativa na autoestima.`,
      image: "/images/ninfoplastia.jpg",
      category: "body",
    },
    {
      id: "gluteoplastia",
      title: "Gluteoplastia",
      shortDescription: "Cirurgia para aumento e remodelação dos glúteos através de implantes ou lipoenxertia.",
      fullDescription: `A Gluteoplastia é um procedimento cirúrgico que visa aumentar o volume e melhorar o contorno dos glúteos, podendo ser realizada através de duas técnicas principais: implantes de silicone ou lipoenxertia (transferência de gordura).
  
      Na técnica com implantes, próteses especiais de silicone coesivo são inseridas através de uma incisão discreta no sulco interglúteo, posicionadas em plano submuscular ou intramuscular para resultado natural.
  
      A gluteoplastia por lipoenxertia (Brazilian Butt Lift) utiliza gordura do próprio paciente, obtida por lipoaspiração de áreas com excesso e transferida para os glúteos após processamento adequado, proporcionando resultado mais natural.
  
      O Dr. Marcos Storion avalia individualmente cada caso para indicar a técnica mais adequada, considerando a quantidade de gordura disponível, as proporções corporais e as expectativas do paciente.`,
      image: "/images/gluteoplastia.jpg",
      category: "body",
    },
    {
      id: "correcao-ginecomastia",
      title: "Correção de Ginecomastia",
      shortDescription:
        "Tratamento cirúrgico para redução das mamas masculinas aumentadas, devolvendo contorno torácico masculino.",
      fullDescription: `A Correção de Ginecomastia é um procedimento cirúrgico que trata o aumento anormal das mamas em homens, uma condição que pode causar significativo impacto psicológico e social.
  
      A técnica varia de acordo com o tipo de ginecomastia: em casos predominantemente gordurosos, pode-se utilizar apenas lipoaspiração; quando há excesso de tecido glandular, realiza-se também a ressecção direta deste tecido através de incisões discretas ao redor da aréola.
  
      Em casos severos com grande excesso de pele, pode ser necessária a remoção de pele redundante, resultando em cicatrizes mais evidentes, porém cuidadosamente planejadas para máxima discrição.
  
      Os resultados incluem um tórax com contorno mais masculino e definido, cicatrizes mínimas e praticamente imperceptíveis na maioria dos casos, com significativa melhora da autoestima e qualidade de vida.`,
      image: "/images/ginecomastia.jpg",
      category: "body",
    },
    {
      id: "implantes-panturrilha",
      title: "Implantes de Panturrilha",
      shortDescription: "Procedimento para aumento e definição das panturrilhas através de implantes personalizados.",
      fullDescription: `Os Implantes de Panturrilha são uma solução cirúrgica para pacientes que desejam aumentar o volume e melhorar a definição das panturrilhas, seja por razões estéticas ou para corrigir assimetrias e deformidades.
  
      O procedimento utiliza implantes de silicone coesivo, especialmente desenhados para a região da panturrilha, que são inseridos através de incisões discretas no sulco posterior do joelho, posicionados em plano subfascial ou submuscular.
  
      Os implantes são selecionados de acordo com as características anatômicas do paciente e podem ser colocados para aumentar principalmente a parte medial da panturrilha (mais comum) ou ambos os lados, dependendo do objetivo estético.
  
      A cirurgia proporciona resultados permanentes com contorno natural, sendo especialmente procurada por pessoas com panturrilhas pouco desenvolvidas mesmo após treinamento físico intensivo, devido a fatores genéticos.`,
      image: "/images/panturrilha.png",
      category: "body",
    },
    {
      id: "lifting-bracos",
      title: "Lifting de Braços",
      shortDescription:
        "Cirurgia para remoção de excesso de pele e gordura na região dos braços, melhorando o contorno e firmeza.",
      fullDescription: `O Lifting de Braços, também conhecido como braquioplastia, é um procedimento cirúrgico que remove o excesso de pele e gordura na face interna dos braços, área comumente afetada pelo envelhecimento, grandes perdas de peso ou predisposição genética.
  
      A técnica envolve uma incisão longitudinal na face interna do braço, desde a axila até próximo ao cotovelo em casos mais severos, permitindo a remoção do excesso cutâneo e gorduroso, além da reestruturação dos tecidos para um contorno mais firme.
  
      O cirurgião posiciona estrategicamente a cicatriz na face interna do braço, onde fica menos visível, utilizando técnicas de sutura que minimizam sua aparência final.
  
      O resultado é um braço com contorno mais definido e firme, proporcionando maior conforto físico e liberdade para usar roupas sem mangas, com recuperação que permite retorno às atividades normais em aproximadamente 2 a 3 semanas.`,
      image: "/images/liftbraco.jpg",
      category: "body",
    },
    {
      id: "lifting-coxas",
      title: "Lifting de Coxas",
      shortDescription:
        "Procedimento para remoção de excesso de pele e gordura nas coxas, melhorando contorno e firmeza.",
      fullDescription: `O Lifting de Coxas, ou cruroplastia, é um procedimento cirúrgico que visa remover o excesso de pele e gordura nas coxas, melhorando seu contorno e firmeza, especialmente indicado após grandes perdas de peso ou devido ao processo natural de envelhecimento.
  
      Existem diferentes técnicas dependendo da área a ser tratada: o lifting medial trata a parte interna das coxas com incisão no sulco inguinal e eventualmente vertical; o lifting lateral foca na face externa com incisões que podem se estender da região inguinal até o glúteo.
  
      O procedimento não apenas remove o excesso de pele, mas também reposiciona os tecidos remanescentes, criando um contorno mais harmonioso e firme nas coxas.
  
      A recuperação exige cuidados especiais como uso de cinta compressiva por 4 a 6 semanas e restrição de atividades físicas intensas por pelo menos 1 mês, com resultados que proporcionam maior conforto ao caminhar e liberdade para usar roupas mais curtas.`,
      image: "/images/liftcoxa.jpeg",
      category: "body",
    },
  ]

  const openModal = (procedure: Procedure) => {
    setSelectedProcedure(procedure)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const getIcon = (category: string) => {
    switch (category) {
      case "face":
        return <Sparkles className="h-8 w-8 text-[#d4af37]" />
      case "body":
        return <Droplets className="h-8 w-8 text-[#d4af37]" />
      case "breast":
        return <Heart className="h-8 w-8 text-[#d4af37]" />
      default:
        return <Scissors className="h-8 w-8 text-[#d4af37]" />
    }
  }

  const filteredProcedures =
    activeTab === "all" ? procedures : procedures.filter((procedure) => procedure.category === activeTab)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "all" ? "bg-[#d4af37] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveTab("face")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "face" ? "bg-[#d4af37] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Face
        </button>
        <button
          onClick={() => setActiveTab("body")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "body" ? "bg-[#d4af37] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Corpo
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-full"
            >
              <motion.div
                className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-[#d8d8d8] p-1 shadow-xl transition-all"
                onHoverStart={() => setHoveredCard(procedure.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col items-center p-6 text-center">
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5e6]"
                    animate={hoveredCard === procedure.id ? { scale: 1.1, backgroundColor: "#f0e6b2" } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {getIcon(procedure.category)}
                  </motion.div>

                  <h3 className="mb-3 text-xl font-bold text-[#2c3e50]">{procedure.title}</h3>

                  <p className="mb-6 flex-grow text-[#7f8c8d]">{procedure.shortDescription}</p>

                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredCard === procedure.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => openModal(procedure)}
                      className="inline-flex items-center text-sm font-medium text-[#d4af37] hover:text-[#b8971f]"
                    >
                      Saiba mais
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0e6b2]"
                  initial={{ width: "0%" }}
                  animate={hoveredCard === procedure.id ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {selectedProcedure && (
        <ProcedureModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProcedure.title}
          description={selectedProcedure.fullDescription}
          image={selectedProcedure.image}
        />
      )}
    </div>
  )
}
