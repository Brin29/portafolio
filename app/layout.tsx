import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Sora, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breiner Parra | Portafolio de Desarrollador",
  description: "Mi portafolio profesional, donde muestro mis proyectos, experiencia y habilidades como desarrollador.",
  keywords: ["portafolio", "Breiner Parra", "desarrollador", "proyectos", "software", "frontend", "backend", "fullstack"],
  authors: [{ name: "Breiner Parra" }],
  creator: "Breiner Parra",
  metadataBase: new URL("https://breinerdev-portafolio.vercel.app"),
  openGraph: {
    title: "Breiner Parra | Portafolio de Desarrollador",
    description: "Explora los proyectos, habilidades y experiencia de Breiner Parra como desarrollador de software.",
    url: "https://breinerdev-portafolio.vercel.app",
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
        className={`${sora.variable} ${dmSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
