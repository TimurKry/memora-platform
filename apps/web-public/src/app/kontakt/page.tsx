import Link from "next/link";
import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.14em] text-memora-ink-muted">Kontakt</p>
        <h1 className="mt-4 font-serif text-3xl">Wir sind für Sie da</h1>
        <p className="mt-6 text-memora-ink-muted">
          Telefon: +49 341 000 0000
          <br />
          E-Mail: kontakt@memora.app
        </p>
        <Link href="/demo" className="btn-primary mt-10 inline-flex">
          Termin online buchen →
        </Link>
      </main>
      <CategoryBar />
    </>
  );
}
