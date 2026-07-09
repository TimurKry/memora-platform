import Link from "next/link";
import { NoirMapHero } from "./map/NoirMapHero";

export function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="fade-in flex flex-col justify-center border-b border-memora-border bg-memora-paper px-8 py-14 lg:border-b-0 lg:border-r lg:px-12 lg:py-20 xl:px-14">
        <p className="noir-eyebrow mb-6 text-memora-gold">Memorial Technology · Leipzig</p>
        <h1 className="font-serif text-[1.85rem] italic leading-[1.12] tracking-[-0.03em] sm:text-[2.15rem] lg:text-[2.65rem] xl:text-[2.85rem]">
          WIR SIND FÜR SIE DA.
          <br />
          IN MOMENTEN,
          <br />
          DIE ZÄHLEN.
        </h1>
        <p className="editorial-body mt-7 max-w-[24rem] lg:max-w-[26rem]">
          MEMORA verbindet Friedhöfe, Bestattungsunternehmen und Familien — Klarheit im
          Schatten, Würde im Licht.
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

      <div className="fade-in flex items-center justify-center bg-memora-ink px-4 py-8 lg:px-8 lg:py-12">
        <div className="noir-map-frame aspect-[4/3] w-full max-w-[540px] p-1">
          <NoirMapHero />
        </div>
      </div>
    </section>
  );
}
