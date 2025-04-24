"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqItems = [
    {
      question: "Quanto tempo dura a recuperação após uma lipoaspiração?",
      answer:
        "A recuperação varia de acordo com a extensão do procedimento e características individuais do paciente. Em geral, o retorno às atividades leves pode ocorrer em 7-10 dias, enquanto a recuperação completa leva cerca de 4-6 semanas. Durante a consulta, o Dr. Marcos Storion fornecerá orientações específicas para o seu caso.",
    },
    {
      question: "Os procedimentos são dolorosos?",
      answer:
        "Os procedimentos são realizados com anestesia adequada para garantir o conforto do paciente. No pós-operatório, é comum sentir algum desconforto, que pode ser controlado com medicação prescrita pelo médico. A equipe do Dr. Marcos Storion está preparada para oferecer todo o suporte necessário durante a recuperação.",
    },
    {
      question: "Quais são os riscos das cirurgias plásticas?",
      answer:
        "Como em qualquer procedimento cirúrgico, existem riscos envolvidos. Estes podem incluir infecção, sangramento, cicatrizes, assimetrias, entre outros. O Dr. Marcos Storion discute detalhadamente todos os riscos durante a consulta e implementa protocolos rigorosos para minimizá-los, garantindo a máxima segurança.",
    },
    {
      question: "Os resultados são permanentes?",
      answer:
        "Os resultados de muitos procedimentos, como rinoplastia e otoplastia, são geralmente permanentes. Outros, como lipoaspiração e mamoplastia, podem ser afetados por fatores como envelhecimento, gravidez e alterações significativas de peso. Manter um estilo de vida saudável é essencial para preservar os resultados a longo prazo.",
    },
    {
      question: "Como agendar uma consulta?",
      answer:
        "Você pode agendar uma consulta através do formulário de contato em nosso site, pelo telefone (11) 99999-9999 ou pelo WhatsApp. Nossa equipe entrará em contato para confirmar a data e horário disponíveis que melhor se adequem à sua agenda.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-[#2c3e50]">{item.question}</AccordionTrigger>
          <AccordionContent className="text-[#7f8c8d]">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
