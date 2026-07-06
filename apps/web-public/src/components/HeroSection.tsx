import Link from "next/link";
import { CemeteryMap } from "./CemeteryMap";

export function HeroSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-editorial">
        {/* Section index */}
        <div className="hidden w-14 shrink-0 flex-col items-start border-r border-memora-border py-14 pl-6 lg:flex">
          {["01", "02", "03"].map((n, i) => (
            <span
              key={n}
              className={`mb-10 font-serif text-[13px] tabular-nums transition-opacity duration-500 ${
                i === 0 ? "text-memora-text" : "text-memora-border"
              }`}
            >
              {n}
            </span>
          ))}
        </div>

        <div className="grid flex-1 lg:grid-cols-[1fr_1.05fr]">
          {/* Copy */}
          <div className="fade-in flex flex-col justify-center border-b border-memora-border px-8 py-16 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
            <p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-memora-muted">
              Memorial Technology
            </p>
            <h1 className="font-serif text-[2rem] leading-[1.12] tracking-[-0.02em] md:text-[2.5rem] lg:text-[2.85rem]">
              WIR SIND FÜR SIE DA.
              <br />
              IN MOMENTEN,
              <br />
              DIE ZÄHLEN.
            </h1>
            <p className="editorial-body mt-8 max-w-[26rem]">
              MEMORA verbindet Friedhöfe, Bestattungsunternehmen und Familien auf einer
              Plattform — mit Klarheit, Würde und Respekt. Nicht ein weiteres
              Bestattungsunternehmen. Die digitale Infrastruktur des Gedenkens.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/suchen" className="btn-primary">
                Angebot erhalten
                <span aria-hidden>→</span>
              </Link>
              <Link href="/ueber-uns" className="btn-outline">
                Mehr erfahren
              </Link>
            </div>
          </div>

          {/* Map illustration */}
          <div className="fade-in relative min-h-[300px] bg-memora-white px-6 py-10 lg:min-h-[480px] lg:px-10 lg:py-12">
            <CemeteryMap />
          </div>
        </div>
      </div>
    </section>
  );
}
