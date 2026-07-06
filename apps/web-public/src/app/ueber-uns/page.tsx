import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.14em] text-memora-ink-muted">Über uns</p>
        <h1 className="mt-4 font-serif text-3xl">Memora — digitale Begleitung mit Anstand</h1>
        <p className="mt-6 text-memora-ink-muted leading-relaxed">
          Wir verbinden Angehörige, Bestattungsunternehmen und Friedhöfe auf einer Plattform, die
          Würde und Transparenz in den Mittelpunkt stellt.
        </p>
      </main>
      <CategoryBar />
    </>
  );
}
