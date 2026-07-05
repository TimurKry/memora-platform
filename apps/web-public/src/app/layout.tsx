import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memora — Bestattungen finden und online planen",
  description:
    "Finden Sie Bestattungsunternehmen in Ihrer Nähe. Vergleichen, beraten lassen und online buchen — transparent und einfühlsam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
