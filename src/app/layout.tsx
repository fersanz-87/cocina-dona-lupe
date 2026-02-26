import type { Metadata } from "next";
import { Merriweather, Lora } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cocina Doña Lupe | Comida Mexicana Tradicional en Monterrey",
  description:
    "Disfruta el auténtico sazón casero de Doña Lupe en el corazón de Monterrey. Recetas de familia, ingredientes frescos del mercado y un ambiente cálido que te hará sentir en casa.",
  keywords: [
    "comida mexicana",
    "restaurante Monterrey",
    "comida casera",
    "cocina tradicional",
    "enchiladas",
    "mole",
    "pozole",
    "Doña Lupe",
    "comida corrida Monterrey",
  ],
  openGraph: {
    title: "Cocina Doña Lupe | Comida Mexicana Tradicional en Monterrey",
    description:
      "El sazón de casa, en el corazón de Monterrey. Recetas de familia con ingredientes frescos del mercado.",
    locale: "es_MX",
    type: "website",
    siteName: "Cocina Doña Lupe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${merriweather.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
