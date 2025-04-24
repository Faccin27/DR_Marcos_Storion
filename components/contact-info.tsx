import { Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-[#2c3e50]">Informações de Contato</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-[#d4af37]" />
          <div>
            <p className="font-medium">Telefone</p>
            <p className="text-[#7f8c8d]">(11) 99999-9999</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-[#d4af37]" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-[#7f8c8d]">contato@drmarcosstorion.com.br</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-1 h-5 w-5 text-[#d4af37]" />
          <div>
            <p className="font-medium">Horário de Atendimento</p>
            <p className="text-[#7f8c8d]">Segunda a Sexta: 9h às 18h</p>
            <p className="text-[#7f8c8d]">Sábado: 9h às 13h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
