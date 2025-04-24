"use client"


import HeroSection from "@/components/hero-section"
import SiteHeader from "@/components/site-header"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SiteHeader />

      <HeroSection/>
    </main>
  )
}
