"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Antes e Depois", href: "/#antes-depois" },
  { name: "Depoimentos", href: "/#depoimentos" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contato", href: "/#contato" },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("/")

  // Handle scroll to detect when to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Detect active section based on scroll position
    const handleScrollForActiveSection = () => {
      const sections = navigation.map((item) => item.href.replace("/", "").replace("#", ""))

      for (const section of sections) {
        if (!section) continue // Skip home
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`/#${section}`)
            return
          }
        }
      }

      // If no section is active or we're at the top, set to home
      if (window.scrollY < 100) {
        setActiveSection("/")
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleScrollForActiveSection)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollForActiveSection)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dr. Marcos Storion</span>
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="MS Logo" width={50} height={50} className="h-10 w-auto" />
              <div
                className={cn(
                  "hidden md:block font-semibold transition-colors",
                  scrolled ? "text-[#2c3e50]" : "text-white",
                )}
              >
                <span className="text-lg">Dr. Marcos Storion</span>
                <p className="text-xs font-normal">Cirurgião Plástico</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              scrolled ? "text-gray-700" : "text-white",
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                activeSection === item.href
                  ? "text-[#d4af37]"
                  : scrolled
                    ? "text-gray-700 hover:text-[#d4af37]"
                    : "text-white hover:text-[#d4af37]",
              )}
              onClick={(e) => {
                if (item.href.includes("#")) {
                  e.preventDefault()
                  const element = document.getElementById(item.href.split("#")[1])
                  if (element) {
                    const yOffset = -80 // Header height offset
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                    setActiveSection(item.href)
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            className="bg-[#d4af37] hover:bg-[#b8971f] text-white"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Agende sua consulta
          </Button>
        </div>

        {/* Mobile menu, show/hide based on mobile menu state */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Dr. Marcos Storion</span>
                  <div className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="MS Logo" width={40} height={40} className="h-8 w-auto" />
                    <div className="text-[#2c3e50] font-semibold">
                      <span className="text-base">Dr. Marcos Storion</span>
                      <p className="text-xs font-normal">Cirurgião Plástico</p>
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fechar menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                          activeSection === item.href ? "bg-gray-50 text-[#d4af37]" : "text-gray-900 hover:bg-gray-50",
                        )}
                        onClick={(e) => {
                          if (item.href.includes("#")) {
                            e.preventDefault()
                            setMobileMenuOpen(false)
                            const element = document.getElementById(item.href.split("#")[1])
                            if (element) {
                              setTimeout(() => {
                                const yOffset = -80
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                                window.scrollTo({ top: y, behavior: "smooth" })
                                setActiveSection(item.href)
                              }, 100)
                            }
                          } else {
                            setMobileMenuOpen(false)
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      className="w-full bg-[#d4af37] hover:bg-[#b8971f] text-white"
                      onClick={() => {
                        window.open("https://wa.me/5511999999999", "_blank")
                        setMobileMenuOpen(false)
                      }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Agende sua consulta
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
