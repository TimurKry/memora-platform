import Link from "next/link";
import { CategoryBar } from "@/components/CategoryBar";
import { EditorialFrame } from "@/components/EditorialLayout";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfoGrid } from "@/components/InfoGrid";
import { TrustSidebar } from "@/components/TrustSidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <EditorialFrame sidebar={<TrustSidebar />}>
        <HeroSection />
        <InfoGrid />
        <CategoryBar />

        <section className="px-8 py-20 lg:px-12 lg:py-24 xl:px-14">
          <p className="text-[10px] uppercase tracking-[0.22em] text-memora-muted">Die Plattform</p>
          <h2 className="mt-5 max-w-xl font-serif text-2xl leading-snug md:text-[1.75rem]">
            Eine digitale Infrastruktur für Friedhöfe, Bestattungsunternehmen und Familien.
          </h2>
          <p className="editorial-body mt-5 max-w-md">
            Grab suchen. Wege planen. Dienste buchen. Dokumente teilen — alles an einem Ort.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/suchen"
              className="text-[10px] uppercase tracking-[0.16em] underline-offset-4 hover:underline"
            >
              Für Angehörige →
            </Link>
            <Link
              href="/ueber-uns"
              className="text-[10px] uppercase tracking-[0.16em] underline-offset-4 hover:underline"
            >
              Für Unternehmen →
            </Link>
          </div>
        </section>
      </EditorialFrame>

      <footer className="border-t border-memora-border py-10 text-center">
        <p className="text-[9px] uppercase tracking-[0.2em] text-memora-muted">
          © 2026 Memora Platform
        </p>
      </footer>
    </div>
  );
}
