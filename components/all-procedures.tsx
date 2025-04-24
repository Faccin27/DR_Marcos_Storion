"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProcedureModal from "./procedure-modal";

interface Procedure {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon?: string;
  image?: string;
  category: "face" | "body" | "breast" | "other";
}

export default function AllProcedures() {
  const [activeTab, setActiveTab] = useState<
    "all" | "face" | "body" | "breast" | "other"
  >("all");
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const procedures: Procedure[] = [
    {
      id: "deep-plane-facelift",
      title: "Deep Plane FaceLift",
      shortDescription:
        "Técnica avançada de rejuvenescimento facial com resultados naturais e duradouros.",
      fullDescription: `O Deep Plane FaceLift é uma técnica cirúrgica avançada de rejuvenescimento facial que trabalha em camadas mais profundas da face, proporcionando resultados mais naturais e duradouros.

      Diferente das técnicas tradicionais, o Deep Plane FaceLift reposiciona os tecidos faciais em um plano mais profundo, tratando não apenas a pele, mas também o SMAS (Sistema Músculo-Aponeurótico Superficial) e os ligamentos faciais.

      Esta técnica é especialmente eficaz para corrigir flacidez moderada a severa no terço médio da face, linha da mandíbula e pescoço, com resultados que podem durar de 8 a 12 anos.

      O Dr. Marcos Storion utiliza as técnicas mais modernas e seguras, garantindo resultados naturais que preservam as características individuais de cada paciente, evitando o aspecto "esticado" ou artificial.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "neck-lift",
      title: "Neck Lift",
      shortDescription:
        "Procedimento para rejuvenescer e redefinir o contorno do pescoço.",
      fullDescription: `O Neck Lift, ou ritidoplastia cervical, é um procedimento cirúrgico destinado a melhorar os sinais visíveis de envelhecimento no pescoço e na linha da mandíbula.

      Este procedimento trata especificamente o excesso de pele e gordura sob o queixo, as bandas platismais (cordas verticais no pescoço) e a flacidez da pele do pescoço, criando um contorno mais definido e jovem.

      O Dr. Marcos Storion realiza esta cirurgia com técnicas minimamente invasivas quando possível, resultando em cicatrizes discretas e um período de recuperação mais rápido.

      O Neck Lift pode ser realizado isoladamente ou em conjunto com outros procedimentos faciais, como o FaceLift, para um rejuvenescimento facial completo e harmonioso.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "facelift",
      title: "FaceLift",
      shortDescription:
        "Rejuvenescimento facial completo para uma aparência mais jovem e natural.",
      fullDescription: `O FaceLift, ou ritidoplastia, é um procedimento cirúrgico que visa rejuvenescer a face, tratando os sinais de envelhecimento como flacidez, rugas e perda de volume.

      Durante o procedimento, o Dr. Marcos Storion reposiciona os tecidos faciais, remove o excesso de pele e, quando necessário, redistribui ou adiciona volume para restaurar o contorno facial jovem.

      As técnicas modernas utilizadas pelo Dr. Storion garantem resultados naturais, evitando o aspecto "operado" ou excessivamente esticado, preservando a expressividade e as características individuais de cada paciente.

      O FaceLift pode ser personalizado para atender às necessidades específicas de cada paciente, podendo ser combinado com outros procedimentos como blefaroplastia (cirurgia das pálpebras) ou rinoplastia para resultados ainda mais harmoniosos.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "blefaroplastia",
      title: "Blefaroplastia",
      shortDescription:
        "Correção estética das pálpebras para um olhar mais descansado e jovem.",
      fullDescription: `A Blefaroplastia é uma cirurgia plástica que visa melhorar a aparência das pálpebras superiores e/ou inferiores, removendo o excesso de pele, gordura e, em alguns casos, fortalecendo os músculos.

      Este procedimento é ideal para pacientes que apresentam pálpebras caídas, bolsas sob os olhos ou excesso de pele nas pálpebras, características que podem conferir um aspecto cansado ou envelhecido.

      Além do benefício estético, a blefaroplastia pode melhorar o campo visual em casos onde o excesso de pele nas pálpebras superiores interfere na visão.

      O Dr. Marcos Storion realiza esta cirurgia com técnicas precisas e minimamente invasivas, resultando em cicatrizes praticamente imperceptíveis e um período de recuperação relativamente rápido, com resultados que proporcionam um olhar mais descansado, jovem e expressivo.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "rinoplastia",
      title: "Rinoplastia",
      shortDescription: "Cirurgia para correção estética e funcional do nariz.",
      fullDescription: `A Rinoplastia é uma cirurgia plástica que visa melhorar a forma, tamanho e proporção do nariz, harmonizando-o com as demais características faciais. Além do aspecto estético, também pode corrigir problemas funcionais, como desvio de septo e dificuldades respiratórias.

      O Dr. Marcos Storion utiliza técnicas avançadas de rinoplastia, incluindo a preservação da estrutura nasal, que mantém a integridade do nariz enquanto permite modificações precisas, resultando em um nariz natural que complementa as características faciais do paciente.

      Cada rinoplastia é personalizada de acordo com a anatomia, características étnicas e desejos específicos do paciente, sempre buscando um resultado harmonioso e natural.

      A recuperação geralmente leva de 1 a 2 semanas para os sinais visíveis da cirurgia desaparecerem, com resultados finais que se consolidam ao longo de 12 meses, à medida que o inchaço residual diminui completamente.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "otoplastia",
      title: "Otoplastia",
      shortDescription:
        "Correção estética das orelhas para um contorno mais harmonioso.",
      fullDescription: `A Otoplastia é uma cirurgia plástica que visa corrigir a forma, posição ou proporção das orelhas. É especialmente indicada para orelhas proeminentes ("orelhas de abano"), mas também pode corrigir deformidades congênitas ou causadas por traumas.

      O procedimento envolve a remodelação da cartilagem da orelha e, quando necessário, a remoção de excesso de pele, permitindo que as orelhas fiquem mais próximas à cabeça e com formato mais harmonioso.

      O Dr. Marcos Storion realiza esta cirurgia com técnicas que resultam em cicatrizes discretas, geralmente escondidas nas dobras naturais atrás da orelha.

      A otoplastia pode ser realizada em crianças a partir dos 5-6 anos, quando as orelhas já atingiram seu tamanho adulto, ou em adultos de qualquer idade, proporcionando um impacto positivo significativo na autoestima e confiança.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "mentoplastia",
      title: "Mentoplastia",
      shortDescription:
        "Cirurgia para harmonização do queixo com o restante do rosto.",
      fullDescription: `A Mentoplastia é uma cirurgia plástica que visa melhorar o contorno e a projeção do queixo, harmonizando-o com as demais características faciais. Pode envolver o aumento do queixo com implantes ou a redução e remodelação do osso.

      Este procedimento é ideal para pacientes com queixo recuado (retrognatismo), queixo muito proeminente (prognatismo) ou assimetrias, contribuindo significativamente para o equilíbrio e harmonia facial.

      O Dr. Marcos Storion utiliza técnicas avançadas e implantes de alta qualidade quando necessário, garantindo resultados naturais e duradouros.

      A mentoplastia pode ser realizada isoladamente ou em conjunto com outros procedimentos faciais, como rinoplastia ou lipoaspiração de papada, para um resultado facial ainda mais harmonioso.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "cirurgia-angulo-mandibula",
      title: "Cirurgia de Ângulo de Mandíbula",
      shortDescription:
        "Procedimento para definir e contornar a linha da mandíbula.",
      fullDescription: `A Cirurgia de Ângulo de Mandíbula é um procedimento que visa melhorar o contorno e a definição da linha mandibular, criando um perfil facial mais harmônico e definido.

      Este procedimento pode envolver a colocação de implantes para aumentar a projeção do ângulo mandibular, a redução óssea para diminuir um ângulo muito proeminente, ou a correção de assimetrias.

      O Dr. Marcos Storion utiliza técnicas avançadas e personalizadas para cada paciente, considerando suas características faciais únicas e objetivos estéticos.

      A cirurgia de ângulo de mandíbula é especialmente popular entre pacientes que desejam um perfil facial mais definido e masculino, mas também pode beneficiar mulheres que buscam melhor definição do contorno facial.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "face",
    },
    {
      id: "lipoaspiracao",
      title: "Lipoaspiração",
      shortDescription:
        "Remoção de gordura localizada para contorno corporal mais definido.",
      fullDescription: `A Lipoaspiração é um procedimento cirúrgico que remove depósitos de gordura localizada resistentes à dieta e exercícios, melhorando o contorno corporal.

      O Dr. Marcos Storion utiliza técnicas avançadas de lipoaspiração, incluindo a lipoaspiração HD (alta definição), que não apenas remove o excesso de gordura, mas também esculpe o corpo, criando definição muscular e contornos mais atléticos.

      As áreas mais comumente tratadas incluem abdômen, flancos, costas, braços, coxas, joelhos e papada, mas a técnica pode ser aplicada em praticamente qualquer área do corpo com acúmulo de gordura.

      É importante ressaltar que a lipoaspiração não é um tratamento para obesidade, mas sim um procedimento de contorno corporal para pacientes próximos do peso ideal que desejam melhorar áreas específicas.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
    {
      id: "mamoplastia-aumento",
      title: "Mamoplastia de Aumento",
      shortDescription:
        "Aumento mamário com implantes de silicone de alta qualidade.",
      fullDescription: `A Mamoplastia de Aumento é uma cirurgia plástica que visa aumentar o volume e melhorar a forma dos seios através da colocação de implantes mamários.

      O Dr. Marcos Storion utiliza implantes de silicone de última geração, com alta tecnologia e segurança, disponíveis em diferentes formatos, tamanhos e perfis para atender às necessidades e desejos específicos de cada paciente.

      A cirurgia pode ser realizada através de diferentes incisões (periareolar, inframamária ou axilar) e os implantes podem ser posicionados em plano subglandular (sobre o músculo) ou submuscular (sob o músculo), dependendo da anatomia e objetivos da paciente.

      Além de aumentar o volume dos seios, este procedimento pode melhorar a proporção corporal, corrigir assimetrias leves e restaurar o volume perdido após gravidez, amamentação ou perda de peso significativa.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "breast",
    },
    {
      id: "mastopexia",
      title: "Mastopexia",
      shortDescription: "Cirurgia para elevação e remodelação das mamas.",
      fullDescription: `A Mastopexia, ou lifting de mama, é uma cirurgia plástica que visa elevar e remodelar seios caídos (ptose mamária), criando um contorno mais jovem e firme.

      Durante o procedimento, o Dr. Marcos Storion remove o excesso de pele, reposiciona o tecido mamário e, quando necessário, reposiciona o complexo aréolo-papilar para uma posição mais elevada e natural.

      A mastopexia pode ser realizada isoladamente ou em conjunto com implantes mamários (mastopexia com prótese) quando, além da elevação, deseja-se aumentar o volume dos seios.

      Este procedimento é especialmente indicado para mulheres que apresentam flacidez mamária após gravidez, amamentação, grandes perdas de peso ou como resultado do processo natural de envelhecimento.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "breast",
    },
    {
      id: "lipoabdominoplastia",
      title: "Lipoabdominoplastia",
      shortDescription:
        "Combinação de lipoaspiração e abdominoplastia para resultados superiores.",
      fullDescription: `A Lipoabdominoplastia é uma técnica cirúrgica avançada que combina os benefícios da lipoaspiração com os da abdominoplastia tradicional, proporcionando resultados superiores no contorno abdominal.

      Diferente da abdominoplastia convencional, esta técnica preserva melhor a vascularização da região, permitindo uma lipoaspiração mais ampla e segura do abdômen e áreas adjacentes, como flancos e costas.

      O Dr. Marcos Storion realiza a correção da diástase dos músculos retos abdominais (separação dos músculos abdominais que pode ocorrer após gravidez ou ganho de peso significativo), remove o excesso de pele e gordura, e remodela o contorno abdominal.

      Esta técnica resulta em um abdômen mais definido, com cicatrizes menores e melhor posicionadas, além de proporcionar uma recuperação geralmente mais rápida e confortável em comparação com a abdominoplastia tradicional.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
    {
      id: "ninfoplastia",
      title: "Ninfoplastia",
      shortDescription:
        "Cirurgia íntima feminina para redução ou remodelação dos pequenos lábios.",
      fullDescription: `A Ninfoplastia, também conhecida como labioplastia, é uma cirurgia íntima feminina que visa reduzir ou remodelar os pequenos lábios (lábios menores) da vulva.

      Este procedimento é indicado para mulheres que apresentam hipertrofia (aumento) dos pequenos lábios, seja por razões congênitas, hormonais ou resultantes de partos, causando desconforto físico, dificuldades de higiene ou constrangimento estético.

      O Dr. Marcos Storion realiza esta cirurgia com técnicas precisas e minimamente invasivas, preservando a sensibilidade e funcionalidade da região, com resultados naturais e cicatrizes praticamente imperceptíveis.

      A recuperação é relativamente rápida, com retorno às atividades normais em aproximadamente 7-10 dias, e às relações sexuais após 30-40 dias, conforme orientação médica individualizada.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "other",
    },
    {
      id: "gluteoplastia",
      title: "Gluteoplastia",
      shortDescription:
        "Aumento e modelagem dos glúteos para contorno mais definido.",
      fullDescription: `A Gluteoplastia é uma cirurgia plástica que visa aumentar o volume e melhorar o formato dos glúteos, proporcionando um contorno mais definido e harmonioso.

      O Dr. Marcos Storion realiza diferentes técnicas de gluteoplastia, incluindo o uso de implantes de silicone especiais para glúteos e a lipoenxertia (transferência de gordura), onde gordura do próprio paciente é removida de áreas com excesso, purificada e reinjetada nos glúteos.

      A escolha da técnica mais adequada depende da anatomia do paciente, quantidade de gordura disponível para transferência e do resultado desejado.

      Este procedimento é ideal para pacientes que desejam glúteos mais volumosos, projetados ou que apresentam assimetrias, proporcionando resultados naturais e duradouros quando realizado por um cirurgião experiente como o Dr. Storion.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
    {
      id: "correcao-ginecomastia",
      title: "Correção de Ginecomastia",
      shortDescription:
        "Tratamento cirúrgico para redução das mamas masculinas.",
      fullDescription: `A Correção de Ginecomastia é uma cirurgia plástica que visa tratar o aumento anormal das mamas em homens, uma condição que pode causar desconforto físico e psicológico significativo.

      O procedimento pode envolver lipoaspiração para remover o excesso de gordura, excisão direta de tecido glandular, ou uma combinação de ambas as técnicas, dependendo da causa e gravidade da ginecomastia.

      O Dr. Marcos Storion utiliza técnicas minimamente invasivas sempre que possível, resultando em cicatrizes discretas e um período de recuperação mais rápido e confortável.

      Esta cirurgia proporciona um contorno torácico mais masculino e definido, com resultados permanentes na maioria dos casos, desde que mantido o peso estável e evitado o uso de substâncias que possam estimular o crescimento mamário.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "breast",
    },
    {
      id: "implantes-panturrilha",
      title: "Implantes de Panturrilha",
      shortDescription:
        "Aumento e definição das panturrilhas com implantes de silicone.",
      fullDescription: `O Implante de Panturrilha é uma cirurgia plástica que visa aumentar o volume e melhorar o contorno das panturrilhas através da colocação de implantes de silicone especialmente desenvolvidos para esta região.

      Este procedimento é ideal para pacientes que desejam panturrilhas mais volumosas e definidas, seja por razões estéticas ou para corrigir assimetrias ou hipotrofias (desenvolvimento insuficiente) resultantes de condições congênitas ou adquiridas.

      O Dr. Marcos Storion utiliza técnicas avançadas para posicionar os implantes em um plano subfascial ou submuscular, garantindo resultados naturais e minimizando riscos de complicações.

      Os implantes de panturrilha são feitos de silicone sólido, especificamente desenhados para simular a anatomia muscular natural, proporcionando resultados duradouros e resistentes.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
    {
      id: "lifting-bracos",
      title: "Lifting de Braços",
      shortDescription:
        "Cirurgia para remover excesso de pele e gordura dos braços.",
      fullDescription: `O Lifting de Braços, ou braquioplastia, é uma cirurgia plástica que visa remover o excesso de pele e gordura dos braços, resultando em contornos mais definidos e firmes.

      Este procedimento é especialmente indicado para pacientes que apresentam flacidez significativa nos braços devido a grandes perdas de peso, envelhecimento natural ou fatores genéticos.

      O Dr. Marcos Storion pode combinar a remoção do excesso de pele com lipoaspiração para otimizar os resultados, criando braços mais tonificados e proporcionais ao resto do corpo.

      As cicatrizes resultantes são estrategicamente posicionadas na face interna dos braços, tornando-as discretas e facilmente ocultáveis na posição natural dos braços.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
    {
      id: "lifting-coxas",
      title: "Lifting de Coxas",
      shortDescription:
        "Cirurgia para remover excesso de pele e gordura das coxas.",
      fullDescription: `O Lifting de Coxas, ou cruroplastia, é uma cirurgia plástica que visa remover o excesso de pele e gordura das coxas, melhorando seu contorno e firmeza.

      Este procedimento é especialmente indicado para pacientes que apresentam flacidez significativa nas coxas devido a grandes perdas de peso, envelhecimento natural ou fatores genéticos.

      O Dr. Marcos Storion pode realizar diferentes tipos de lifting de coxas, incluindo o lifting medial (face interna das coxas), lifting lateral (face externa) ou lifting circunferencial, dependendo das necessidades específicas do paciente.

      A cirurgia pode ser combinada com lipoaspiração para otimizar os resultados, criando coxas mais tonificadas e com contornos mais harmoniosos.`,
      image: "/placeholder.svg?height=300&width=600",
      category: "body",
    },
  ];

  const openModal = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProcedures =
    activeTab === "all"
      ? procedures
      : procedures.filter((procedure) => procedure.category === activeTab);

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "all"
              ? "bg-[#d4af37] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveTab("face")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "face"
              ? "bg-[#d4af37] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Face
        </button>
        <button
          onClick={() => setActiveTab("body")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "body"
              ? "bg-[#d4af37] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Corpo
        </button>
        <button
          onClick={() => setActiveTab("breast")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "breast"
              ? "bg-[#d4af37] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Mama
        </button>
        <button
          onClick={() => setActiveTab("other")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "other"
              ? "bg-[#d4af37] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Outros
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-[#2c3e50]">
                  {procedure.title}
                </h3>
                <p className="mb-6 flex-grow text-[#7f8c8d]">
                  {procedure.shortDescription}
                </p>
                <button
                  onClick={() => openModal(procedure)}
                  className="mt-auto inline-flex items-center text-sm font-medium text-[#d4af37] hover:text-[#b8971f]"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
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
  );
}
