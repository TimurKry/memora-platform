import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memora Partner Portal",
  description: "B2B dashboard for funeral homes and partners",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-slate-100 font-sans antialiased">{children}</body>
    </html>
  );
}
