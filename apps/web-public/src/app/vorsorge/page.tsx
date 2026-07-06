import Link from "next/link";
import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";

export default function VorsorgePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.14em] text-memora-muted">Vorsorge</p>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl">
          Heute planen — Angehörige entlasten
        </h1>
        <p className="mt-6 text-memora-muted leading-relaxed">
          Vorsorge bedeutet, wichtige Entscheidungen in ruhigen Momenten zu treffen. Diese Seite
          wird mit Inhalten aus dem Collaboration-Ordner ergänzt.
        </p>
        <Link href="/demo" className="btn-primary mt-10 inline-flex">
          Beratung vereinbaren →
        </Link>
      </main>
      <CategoryBar />
    </>
  );
}
