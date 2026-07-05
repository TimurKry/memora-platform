import Link from "next/link";
import { DEMO_CITIES, DEMO_LISTINGS, formatPrice } from "@memora/shared";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-amber-700">
      <span aria-hidden>★</span>
      <span className="font-medium">{rating.toFixed(1)}</span>
    </span>
  );
}

function ListingCard({
  listing,
}: {
  listing: (typeof DEMO_LISTINGS)[number];
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-memora-300 hover:shadow-md">
      <div
        className="h-2"
        style={{ backgroundColor: listing.branding.primaryColor }}
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-stone-900 group-hover:text-memora-800">
              {listing.name}
            </h3>
            <p className="text-sm text-stone-500">{listing.city}</p>
          </div>
          <div className="text-right">
            <StarRating rating={listing.rating} />
            <p className="text-xs text-stone-400">({listing.reviewCount})</p>
          </div>
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-600">
          {listing.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {listing.services.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text-xs text-stone-400">ab</p>
            <p className="font-semibold text-stone-900">
              {formatPrice(listing.priceFrom)}
            </p>
          </div>
          <Link
            href="/demo"
            className="rounded-lg bg-memora-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-memora-800"
          >
            Ansehen & Buchen
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const city = "Berlin";
  const listings = DEMO_LISTINGS.filter((l) => l.city === city);

  return (
    <>
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-memora-900 text-sm font-bold text-white">
              M
            </span>
            <span className="text-xl font-semibold tracking-tight text-memora-900">
              Memora
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <Link href="#suchen" className="hover:text-memora-900">
              Suchen
            </Link>
            <Link href="#so-funktionierts" className="hover:text-memora-900">
              So funktioniert&apos;s
            </Link>
            <Link href="/demo" className="hover:text-memora-900">
              Demo buchen
            </Link>
          </nav>
          <Link
            href="#"
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            Anmelden
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-memora-950 via-memora-900 to-memora-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-memora-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-400">
            Digitale Bestattungsplanung
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Finden Sie das richtige Bestattungsunternehmen
          </h1>
          <p className="mt-6 max-w-xl text-lg text-memora-100">
            Vergleichen Sie Anbieter in Ihrer Nähe. Buchen Sie Beratungstermine
            online — einfühlsam, transparent und ohne unnötige Anrufe.
          </p>

          <form
            id="suchen"
            className="mt-10 flex max-w-xl flex-col gap-3 rounded-2xl bg-white/10 p-2 backdrop-blur sm:flex-row"
          >
            <select
              defaultValue="Berlin"
              className="flex-1 rounded-xl border-0 bg-white px-4 py-3.5 text-stone-900 shadow-sm focus:ring-2 focus:ring-gold-400"
              aria-label="Stadt"
            >
              {DEMO_CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-xl bg-gold-500 px-8 py-3.5 font-semibold text-memora-950 transition hover:bg-gold-400"
            >
              Suchen
            </button>
          </form>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">
              Bestattungsunternehmen in {city}
            </h2>
            <p className="mt-1 text-stone-500">
              {listings.length} Anbieter — sortiert nach Bewertung
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>

      <section
        id="so-funktionierts"
        className="border-t border-stone-200 bg-white py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold text-stone-900">
            So funktioniert Memora
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Anbieter finden",
                text: "Suchen Sie nach Stadt und vergleichen Sie Bewertungen, Leistungen und Preise.",
              },
              {
                step: "2",
                title: "Beratung buchen",
                text: "Wählen Sie einen Termin auf der Website des Anbieters — online und diskret.",
              },
              {
                step: "3",
                title: "Alles im Blick",
                text: "Verfolgen Sie den Status Ihres Falls, laden Sie Dokumente hoch und bezahlen Sie sicher.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-memora-100 text-lg font-bold text-memora-800">
                  {item.step}
                </div>
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-100 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-stone-500">
          <p>© 2026 Memora Platform — MVP Demo</p>
          <p className="mt-1">
            <Link href="/demo" className="underline hover:text-memora-800">
              White-label Demo
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
