import type { Metadata } from "next";
import { DEMO_TENANT } from "@memora/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: `${DEMO_TENANT.name} — Bestattungen in ${DEMO_TENANT.city}`,
  description: DEMO_TENANT.branding.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { primaryColor } = DEMO_TENANT.branding;

  return (
    <html lang="de">
      <body
        className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased"
        style={
          {
            "--tenant-primary": primaryColor,
            "--tenant-secondary": DEMO_TENANT.branding.secondaryColor,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
