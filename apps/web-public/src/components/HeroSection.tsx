import Link from "next/link";
import { CemeteryIllustration } from "./CemeteryIllustration";

export function HeroSection() {
  return (
    <section className="border-b border-memora-line">
      <div className="mx-auto flex max-w-[1400px]">
        <div className="hidden w-12 flex-col items-center border-r border-memora-line py-10 pl-4 lg:flex">
          {["01", "02", "03"].map((n, i) => (
            <span
              key={n}
              className={`mb-8 font-serif text-sm ${i === 0 ? "text-memora-ink" : "text-memora-line"}`}
            >
              {n}
            </span>
          ))}
        </div>

        <div className="grid flex-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-r border-memora-line px-6 py-12 lg:px-12 lg:py-16">
            <h1 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              WIR SIND FÜR SIE DA.
              <br />
              IN MOMENTEN, DIE ZÄHLEN.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-memora-ink-muted md:text-base">
              In schweren Zeiten verdienen Sie Klarheit, Würde und menschliche Begleitung. Wir
              helfen Ihnen, Angehörige würdevoll zu verabschieden — transparent, persönlich und in
              Ihrem Tempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo" className="btn-primary">
                Beratung vereinbaren
                <span aria-hidden>→</span>
              </Link>
              <Link href="/vorsorge" className="btn-outline">
                Vorsorge entdecken
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] border-b border-memora-line p-6 lg:min-h-[420px] lg:border-b-0 lg:p-10">
            <CemeteryIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
