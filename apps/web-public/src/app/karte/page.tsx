import { CategoryBar } from "@/components/CategoryBar";
import { CemeteryMap } from "@/components/CemeteryMap";
import { Header } from "@/components/Header";

export default function KartePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1280px] border-x border-memora-border px-8 py-16 lg:px-14 lg:py-20">
        <p className="text-[10px] uppercase tracking-[0.22em] text-memora-muted">
          Interaktive Karte
        </p>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl">Friedhofskarte</h1>
        <p className="editorial-body mt-4 max-w-lg">
          Jeder Friedhof erhält eine eigene illustrierte Karte — Gräber suchen, Wege planen,
          Angehörige finden.
        </p>
        <div className="mx-auto mt-12 max-w-3xl border border-memora-border bg-memora-white p-6 lg:p-10">
          <div className="aspect-[4/3] w-full">
            <CemeteryMap variant="hero" />
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-[1280px] border-x border-memora-border">
        <CategoryBar />
      </div>
    </>
  );
}
