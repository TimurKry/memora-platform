"use client";

import Link from "next/link";
import { useState } from "react";
import { DEMO_TENANT, formatPrice } from "@memora/shared";

const TIME_SLOTS = ["09:00", "10:30", "14:00", "15:30", "17:00"];

export default function TenantHomePage() {
  const tenant = DEMO_TENANT;
  const { branding } = tenant;
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const service = tenant.services.find((s) => s.id === selectedService);

  function handleBook(e: React.FormEvent) {
    e.preventDefault();
    if (selectedService && selectedSlot) setBooked(true);
  }

  if (booked) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-lg">
          <div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white"
            style={{ backgroundColor: branding.primaryColor }}
          >
            ✓
          </div>
          <h1 className="text-xl font-semibold">Termin angefragt</h1>
          <p className="mt-2 text-stone-600">
            {service?.name} am nächsten Werktag um {selectedSlot} Uhr.
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Fall-Referenz: <strong>CASE-2026-0042</strong>
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg px-6 py-2.5 text-sm font-medium text-white"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <header
        className="text-white"
        style={{ backgroundColor: branding.primaryColor }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
          <div>
            <p className="text-xs uppercase tracking-widest opacity-80">
              Bestattungen
            </p>
            <h1 className="font-serif text-2xl">{tenant.name}</h1>
          </div>
          <a
            href="http://localhost:3000"
            className="text-sm opacity-80 hover:opacity-100"
          >
            ← Memora
          </a>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: branding.secondaryColor }}
          >
            {branding.tagline}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">
            Wir begleiten Sie in schweren Zeiten
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Persönliche Beratung, transparente Preise und digitale Begleitung —
            von der ersten Anfrage bis zur Trauerfeier.
          </p>
          <a
            href="#buchen"
            className="mt-8 inline-block rounded-lg px-8 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Termin vereinbaren
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h3 className="text-xl font-semibold">Unsere Leistungen</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tenant.services.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-stone-200 bg-white p-5"
            >
              <h4 className="font-medium">{s.name}</h4>
              <p className="mt-1 text-sm text-stone-600">{s.description}</p>
              <p className="mt-3 text-sm font-semibold">
                {s.priceFrom === 0 ? "Kostenlos" : `ab ${formatPrice(s.priceFrom)}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="buchen" className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-lg px-4">
          <h3 className="text-xl font-semibold">Online-Termin buchen</h3>
          <p className="mt-1 text-sm text-stone-500">Demo-Buchungsflow (MVP)</p>

          <form onSubmit={handleBook} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700">
                Leistung wählen
              </label>
              <select
                required
                value={selectedService ?? ""}
                onChange={(e) => setSelectedService(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2.5"
              >
                <option value="">Bitte wählen…</option>
                {tenant.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700">
                Uhrzeit (nächster Werktag)
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-lg border px-4 py-2 text-sm transition ${
                      selectedSlot === slot
                        ? "border-transparent text-white"
                        : "border-stone-300 hover:border-stone-400"
                    }`}
                    style={
                      selectedSlot === slot
                        ? { backgroundColor: branding.primaryColor }
                        : undefined
                    }
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700">
                Ihr Name
              </label>
              <input
                required
                type="text"
                placeholder="Max Mustermann"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700">
                E-Mail
              </label>
              <input
                required
                type="email"
                placeholder="max@example.com"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2.5"
              />
            </div>

            <button
              type="submit"
              disabled={!selectedService || !selectedSlot}
              className="w-full rounded-lg py-3 font-semibold text-white transition disabled:opacity-40"
              style={{ backgroundColor: branding.primaryColor }}
            >
              Termin anfragen
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        <p>{tenant.address}</p>
        <p className="mt-1">
          {tenant.phone} · {tenant.email}
        </p>
        <p className="mt-3 text-xs opacity-60">
          Powered by Memora · White-label Demo
        </p>
      </footer>
    </>
  );
}
