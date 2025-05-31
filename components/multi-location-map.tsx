// Vamos substituir completamente este componente para mostrar mapas do Google Maps

interface Location {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
}

export default function MultiLocationMap() {
  const locations: Location[] = [
    {
      id: "paulista",
      name: "São Paulo - SP",
      address:
        "São Paulo - SP Av. Brigadeiro Faria Lima, 1656 - 5A - Jardim Paulistano",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d279!2d-46.692866!3d-23.5719966!2m2!1f76.96!2f44.95!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x94ce574fd54d1b8d%3A0x7b32acd40066b52c!2sAv.%20Brig.%20Faria%20Lima%2C%201656%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-001!5e1!3m2!1sen!2sbr!4v1747347208784!5m2!1sen!2sbr",
    },
    {
      id: "Bauru",
      name: "Bauru - SP",
      address:
        "Av. Getúlio Vargas, 22-25 - Torre 1 - Salas 205/206 - Jardim Europa",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.9733492716953!2d-49.050434375856824!3d-22.352166807532754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6705cdd02fa7%3A0xff921acf2ec69da6!2sPrime%20Square%20-%20Centro%20Empresarial!5e1!3m2!1sen!2sbr!4v1747347349301!5m2!1sen!2sbr",
    },
    {
      id: "Bariri",
      name: "Bariri - SP",
      address: "Clínica Visa Vida - R. Tiradentes, 21 - Vila Santa Terezinha",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009.6174257965748!2d-48.74138432522925!3d-22.070972855221235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf4b37a0318bc3%3A0x10f47752e005c827!2sCl%C3%ADnica%20Visa%20Vida!5e1!3m2!1sen!2sbr!4v1747347291623!5m2!1sen!2sbr",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid gap-6 md:grid-cols-3">
        {locations.map((location) => (
          <div key={location.id} className="flex flex-col">
            <p className="mb-2 text-center text-sm font-medium text-[#7f8c8d]">
              {location.name}
            </p>
            <p className="mb-4 text-center text-xs text-[#7f8c8d]">
              {location.address}
            </p>
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
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.address
                )}`}
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
  );
}
