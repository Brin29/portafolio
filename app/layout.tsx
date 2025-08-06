import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import EntranceAnimation from "./entrance-animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breiner Parra | Portafolio de Desarrollador",
  description: "Mi portafolio profesional, donde muestro mis proyectos, experiencia y habilidades como desarrollador.",
  keywords: ["portafolio", "Breiner Parra", "desarrollador", "proyectos", "software", "frontend", "backend", "fullstack"],
  authors: [{ name: "Breiner Parra" }],
  creator: "Breiner Parra",
  metadataBase: new URL("https://tusitio.com"),
  openGraph: {
    title: "Breiner Parra | Portafolio de Desarrollador",
    description: "Explora los proyectos, habilidades y experiencia de Breiner Parra como desarrollador de software.",
    url: "https://tusitio.com",
    siteName: "Breiner Parra - Portafolio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <EntranceAnimation/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
