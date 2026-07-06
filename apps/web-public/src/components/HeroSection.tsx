import Link from "next/link";
import { CemeteryMap } from "./CemeteryMap";

export function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2">
      {/* Copy */}
      <div className="fade-in flex flex-col justify-center border-b border-memora-border px-8 py-14 lg:border-b-0 lg:border-r lg:px-12 lg:py-20 xl:px-14">
        <p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-memora-muted">
          Memorial Technology
        </p>
        <h1 className="font-serif text-[1.85rem] leading-[1.14] tracking-[-0.02em] sm:text-[2.15rem] lg:text-[2.65rem] xl:text-[2.85rem]">
          WIR SIND FÜR SIE DA.
          <br />
          IN MOMENTEN,
          <br />
          DIE ZÄHLEN.
        </h1>
        <p className="editorial-body mt-7 max-w-[24rem] lg:max-w-[26rem]">
          MEMORA verbindet Friedhöfe, Bestattungsunternehmen und Familien — mit Klarheit, Würde
          und Respekt. Die digitale Infrastruktur des Gedenkens.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/suchen" className="btn-primary">
            Angebot erhalten
            <span aria-hidden>→</span>
          </Link>
          <Link href="/ueber-uns" className="btn-outline">
            Mehr erfahren
          </Link>
        </div>
      </div>

      {/* Map */}
      <div className="fade-in flex items-center justify-center bg-memora-white px-6 py-10 lg:px-10 lg:py-14">
        <div className="relative aspect-[4/3] w-full max-w-[540px]">
          <CemeteryMap variant="hero" />
        </div>
      </div>
    </section>
  );
}
