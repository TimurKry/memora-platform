import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MEMORA — Die Zukunft des Gedenkens",
  description:
    "MEMORA verbindet Friedhöfe, Bestattungsunternehmen und Familien auf einer digitalen Plattform — mit Klarheit, Würde und Respekt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
