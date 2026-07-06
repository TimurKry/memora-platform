import Link from "next/link";
import { DEMO_CITIES, DEMO_LISTINGS, formatPrice } from "@memora/shared";
import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfoGrid } from "@/components/InfoGrid";
import { TrustSidebar } from "@/components/TrustSidebar";

function ListingRow({
  listing,
}: {
  listing: (typeof DEMO_LISTINGS)[number];
}) {
  return (
    <article className="flex flex-col gap-4 border-b border-memora-line py-8 last:border-b-0 md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <h3 className="font-serif text-xl text-memora-ink">{listing.name}</h3>
        <p className="mt-1 text-sm text-memora-ink-muted">{listing.city}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-memora-ink-muted">
          {listing.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-[10px] uppercase tracking-wider text-memora-ink-muted">
          {listing.services.slice(0, 3).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-memora-ink-muted">ab</p>
          <p className="font-serif text-2xl">{formatPrice(listing.priceFrom)}</p>
          <p className="text-xs text-amber-800">
            ★ {listing.rating.toFixed(1)} ({listing.reviewCount})
          </p>
        </div>
        <Link href="/demo" className="btn-primary px-5 py-2.5 text-[10px]">
          Ansehen & Buchen →
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const city = "Berlin";
  const listings = DEMO_LISTINGS.filter((l) => l.city === city);

  return (
    <>
      <Header />

      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        <div className="flex-1">
          <HeroSection />
          <InfoGrid />
          <CategoryBar />

          <section id="suchen" className="border-b border-memora-line px-6 py-14 lg:px-10">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Bestattungsunternehmen in {city}
                </h2>
                <p className="mt-2 text-sm text-memora-ink-muted">
                  {listings.length} Anbieter — mit Transparenz und persönlicher Beratung
                </p>
              </div>
              <select
                defaultValue="Berlin"
                className="border border-memora-line bg-white px-4 py-2.5 text-sm"
                aria-label="Stadt wählen"
              >
                {DEMO_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {listings.map((listing) => (
                <ListingRow key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        </div>

        <TrustSidebar />
      </div>

      <footer className="px-6 py-10 text-center text-[11px] uppercase tracking-wider text-memora-ink-muted">
        <p>© 2026 Memora Platform</p>
        <p className="mt-2">
          <Link href="/demo" className="hover:text-memora-ink">
            Demo buchen
          </Link>
          {" · "}
          <Link href="https://github.com/TimurKry/memora-platform" className="hover:text-memora-ink">
            GitHub
          </Link>
        </p>
      </footer>
    </>
  );
}
