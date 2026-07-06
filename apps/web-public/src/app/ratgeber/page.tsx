import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";

export default function RatgeberPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.14em] text-memora-muted">Ratgeber</p>
        <h1 className="mt-4 font-serif text-3xl">Orientierung in schweren Zeiten</h1>
        <p className="mt-6 text-memora-muted leading-relaxed">
          Artikel und Leitfäden — Inhalte folgen in collaboration/content-de.md
        </p>
      </main>
      <CategoryBar />
    </>
  );
}
