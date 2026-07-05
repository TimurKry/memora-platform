import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memora Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
