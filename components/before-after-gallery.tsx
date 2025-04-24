// ISSO AQUI NÃO ESTA SENDO UTILIZADO, JUST A SAVE

// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"

// interface BeforeAfterGalleryProps {
//   category: string
// }

// export default function BeforeAfterGallery({ category }: BeforeAfterGalleryProps) {
//   const [showImages, setShowImages] = useState(false)

//   const getGalleryItems = () => {
//     return [1, 2, 3, 4].map((id) => ({
//       id,
//       before: `/placeholder.svg?height=300&width=300`,
//       after: `/placeholder.svg?height=300&width=300`,
//       description: `Resultado de ${category} - Paciente ${id}`,
//     }))
//   }

//   const galleryItems = getGalleryItems()

//   return (
//     <div className="py-4">
//       {!showImages ? (
//         <div className="text-center">
//           <p className="mb-4 text-[#7f8c8d]">
//             As imagens estão protegidas por privacidade. Clique abaixo para visualizar.
//           </p>
//           <button
//             onClick={() => setShowImages(true)}
//             className="rounded-md bg-[#3498db] px-4 py-2 text-white hover:bg-[#2980b9]"
//           >
//             Visualizar imagens
//           </button>
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2">
//           {galleryItems.map((item) => (
//             <Card key={item.id} className="overflow-hidden border-none shadow-md">
//               <CardContent className="p-0">
//                 <div className="grid grid-cols-2">
//                   <div className="relative h-48 w-full border-r border-gray-200">
//                     <Image
//                       src={item.before || "/placeholder.svg"}
//                       alt={`Antes - ${item.description}`}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-1 text-xs text-white">Antes</div>
//                   </div>
//                   <div className="relative h-48 w-full">
//                     <Image
//                       src={item.after || "/placeholder.svg"}
//                       alt={`Depois - ${item.description}`}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-1 text-xs text-white">
//                       Depois
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <p className="text-center text-sm text-[#7f8c8d]">{item.description}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
