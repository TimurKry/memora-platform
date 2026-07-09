import Link from "next/link";
import { Header } from "@/components/Header";
import { LifecycleInfographic } from "@/components/LifecycleInfographic";

export const metadata = {
  title: "MEMORA — Жизненный цикл услуги",
  description:
    "Step-by-step процесс от заказа до закрытия дела: похоронное бюро, документы, кладбище, кремация, автоматизация.",
};

export default function OekosystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LifecycleInfographic />
      <footer className="border-t border-memora-border py-10 text-center">
        <p className="text-[9px] uppercase tracking-[0.2em] text-memora-muted">
          <Link href="/" className="hover:underline">
            MEMORA
          </Link>
          {" · "}
          <a
            href="https://github.com/TimurKry/memora-platform/blob/main/docs/user-flows/service-lifecycle.md"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Документация на GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
