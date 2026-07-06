import Link from "next/link";
import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfoGrid } from "@/components/InfoGrid";
import { TrustSidebar } from "@/components/TrustSidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto flex max-w-editorial flex-col lg:flex-row">
        <main className="min-w-0 flex-1">
          <HeroSection />
          <InfoGrid />
          <CategoryBar />

          {/* Platform statement — editorial, no cards */}
          <section className="border-t border-memora-border px-8 py-20 lg:px-14 lg:py-28">
            <p className="text-[10px] uppercase tracking-[0.22em] text-memora-muted">
              Die Plattform
            </p>
            <h2 className="mt-6 max-w-2xl font-serif text-2xl leading-snug md:text-3xl lg:text-[2rem]">
              Eine digitale Infrastruktur für Friedhöfe, Bestattungsunternehmen und Familien.
            </h2>
            <p className="editorial-body mt-6 max-w-xl">
              Grab suchen. Wege planen. Dienste buchen. Dokumente teilen. Blumen und Urnen
              bestellen — alles an einem Ort. Für Angehörige einfach. Für Unternehmen
              white-label.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <Link
                href="/suchen"
                className="text-[10px] uppercase tracking-[0.16em] text-memora-text underline-offset-4 hover:underline"
              >
                Für Angehörige →
              </Link>
              <Link
                href="/ueber-uns"
                className="text-[10px] uppercase tracking-[0.16em] text-memora-text underline-offset-4 hover:underline"
              >
                Für Unternehmen →
              </Link>
            </div>
          </section>
        </main>

        <TrustSidebar />
      </div>

      <footer className="border-t border-memora-border px-8 py-12 text-center">
        <p className="text-[9px] uppercase tracking-[0.2em] text-memora-muted">
          © 2026 Memora Platform
        </p>
      </footer>
    </div>
  );
}
