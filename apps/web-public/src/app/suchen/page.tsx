import Link from "next/link";
import { DEMO_LISTINGS } from "@memora/shared";
import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";

export default function SuchenPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <h1 className="font-serif text-3xl">Bestattungsarten & Anbieter</h1>
        <div className="mt-10 divide-y divide-memora-border">
          {DEMO_LISTINGS.map((l) => (
            <div key={l.id} className="flex justify-between gap-4 py-6">
              <div>
                <h2 className="font-serif text-xl">{l.name}</h2>
                <p className="text-sm text-memora-muted">{l.city}</p>
              </div>
              <Link href="/demo" className="btn-outline shrink-0 self-center px-4 py-2 text-[10px]">
                Details
              </Link>
            </div>
          ))}
        </div>
      </main>
      <CategoryBar />
    </>
  );
}
