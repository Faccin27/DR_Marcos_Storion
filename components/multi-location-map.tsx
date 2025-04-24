// Vamos substituir completamente este componente para mostrar mapas do Google Maps
import { MapPin } from "lucide-react"

interface Location {
  id: string
  name: string
  address: string
  mapUrl: string
}

export default function MultiLocationMap() {
  const locations: Location[] = [
    {
      id: "paulista",
      name: "Unidade Paulista",
      address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976517748085!2d-46.65499492392006!3d-23.564616178899723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1713984000000!5m2!1spt-BR!2sbr",
    },
    {
      id: "jardins",
      name: "Unidade Jardins",
      address: "Rua Oscar Freire, 500 - Jardins, São Paulo - SP",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2635995502106!2d-46.67260492392025!3d-23.55871367891097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5270055%3A0x7f01e58f2f696a8d!2sR.%20Oscar%20Freire%2C%20500%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001426-000!5e0!3m2!1spt-BR!2sbr!4v1713984000000!5m2!1spt-BR!2sbr",
    },
    {
      id: "alphaville",
      name: "Unidade Alphaville",
      address: "Alameda Rio Negro, 200 - Alphaville, Barueri - SP",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1744761458855!2d-46.85982492392147!3d-23.5184166788378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02a9d519a5c1%3A0x4b7e5c9e8f9a0f5e!2sAl.%20Rio%20Negro%2C%20200%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006454-000!5e0!3m2!1spt-BR!2sbr!4v1713984000000!5m2!1spt-BR!2sbr",
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-[#d4af37]" />
        <h3 className="text-xl font-semibold text-[#2c3e50]">Nossos Consultórios</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {locations.map((location) => (
          <div key={location.id} className="flex flex-col">
            <p className="mb-2 text-center text-sm font-medium text-[#7f8c8d]">{location.name}</p>
            <p className="mb-4 text-center text-xs text-[#7f8c8d]">{location.address}</p>
            <div className="h-[200px] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa da localização ${location.name}`}
                className="h-full w-full"
              ></iframe>
            </div>
            <div className="mt-2 text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d4af37] hover:text-[#b8971f] hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
