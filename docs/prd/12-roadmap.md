# 12 — Roadmap & Phases

## Overview

| Phase | Timeline (indicative) | Market | Focus |
|-------|----------------------|--------|-------|
| **Phase 1 — MVP** | Months 1–4 | 🇩🇪 Germany | Multi-tenant booking + payments + white-label |
| **Phase 2 — Ecosystem** | Months 5–9 | DE + pilot AT | Marketplace + cemetery module |
| **Phase 3 — Scale** | Months 10–18 | EU expansion | AI, analytics, integrations, NA prep |

---

## Phase 1 — MVP (Foundation)

**Goal:** Prove one complete digital journey: discover → book → pay on a branded tenant site.

### Deliverables
- [ ] Monorepo scaffold (Turborepo, NestJS, Next.js, Prisma)
- [ ] Tenant provisioning + subdomain white-label
- [ ] Organization + service catalog
- [ ] Booking engine + partner calendar
- [ ] Stripe payments (single organization)
- [ ] Basic CRM (contacts from bookings)
- [ ] Email notifications (DE templates)
- [ ] Platform admin (tenant list, suspend)
- [ ] German i18n (+ English fallback)

### Success criteria
- 3–5 pilot funeral homes live
- ≥50 completed online bookings
- Payment success rate ≥95%

### Out of scope
- Marketplace, cemetery plots, custom domains, AI, SMS

---

## Phase 2 — Ecosystem

**Goal:** Connect suppliers and cemeteries; marketplace GMV.

### Deliverables
- [ ] Marketplace catalog + B2B ordering
- [ ] Stripe Connect multi-party payouts
- [ ] Cemetery: plots, ceremony scheduling
- [ ] Custom domain + Cloudflare SSL
- [ ] Document upload + verification workflow
- [ ] Partner analytics dashboard
- [ ] SMS notifications (premium)

### Success criteria
- ≥10 suppliers onboarded
- ≥2 cemetery partnerships
- Marketplace GMV > SaaS MRR (target TBD)

---

## Phase 3 — Scale

**Goal:** EU expansion and premium modules.

### Deliverables
- [ ] Locales: AT, CH, NL, BE, FR
- [ ] AI assistant (premium)
- [ ] Advanced analytics + reporting
- [ ] Calendar sync (Google/Microsoft)
- [ ] API access for enterprise
- [ ] DATEV export (DE accounting)
- [ ] North America regulatory research

---

## Engineering Milestones (Cross-Phase)

| Milestone | Phase | Description |
|-----------|-------|-------------|
| M0 | Pre-1 | Docs + monorepo scaffold |
| M1 | 1 | Auth + tenant resolution working |
| M2 | 1 | Booking E2E |
| M3 | 1 | Payments E2E |
| M4 | 1 | Pilot launch |
| M5 | 2 | Marketplace alpha |
| M6 | 2 | Cemetery module alpha |

---

## Risk Register (Summary)

| Risk | Mitigation |
|------|------------|
| Slow cemetery sales cycle | Start parallel funeral home pilots |
| GDPR complexity | EU hosting, legal review before launch |
| Stripe Connect onboarding friction | Assisted onboarding for pilots |
| Scope creep | Strict PRD phase gates |

---

*Expand: sprint-level backlog mapping, hiring plan, budget*
