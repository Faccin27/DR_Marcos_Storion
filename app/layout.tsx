import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Marcos Storion - Cirurgião Plástico",
  description: "Cirurgião Plástico Especialista em Estética Facial e Corporal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Head>
        {/* SEO Básico */}
        <title>Dr. Marcos Storion - Cirurgião Plástico</title>
        <meta
          name="description"
          content="Cirurgião Plástico Especialista em Estética Facial e Corporal"
        />
        {/* Open Graph / WhatsApp / Discord ETC */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dr. Marcos Storion - Cirurgião Plástico"
        />
        <meta
          property="og:description"
          content="Cirurgião Plástico Especialista em Estética Facial e Corporal"
        />
        <meta property="og:image" content="/images/doctor.jpeg" />
        <meta property="og:url" content="javascript:;" />{" "}
        {/* aqui bota o  URL do site */}
        {/* twitter card + aplicaveis*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Marcos Storion - Cirurgião Plástico"
        />
        <meta
          name="twitter:description"
          content="Cirurgião Plástico Especialista em Estética Facial e Corporal"
        />
        <meta name="twitter:image" content="/images/doctor.jpeg" />
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
