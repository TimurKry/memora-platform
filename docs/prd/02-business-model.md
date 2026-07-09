# 02 — Business Model

## Positioning

Memora is an **operational platform** for the funeral journey — not just a website builder. The platform takes on digital intake, documentation, coordination, payments, and status communication. Revenue aligns with successful cases closed through the system (SaaS + transaction fees), not with exploiting bereaved families.

> Full win-win narrative (RU): `collaboration/monetization-win-win.md`

## Monetization (Neutral Framing)

> The platform is designed to support multiple monetization models, including SaaS subscriptions, marketplace commissions, payment processing fees, referral programs, and partnership agreements with cemeteries and other industry participants.

Architecture must treat each model as a **configurable revenue adapter** — not hard-coded business logic in core domains.

## Revenue Streams

| Stream | Mechanism | Phase | Implementation hook |
|--------|-----------|-------|---------------------|
| SaaS subscription | Monthly/annual plans per tenant | 1 | `billing` module, Stripe Billing |
| Payment processing fee | 1.5–2.5% application fee on online payments | 1 | Stripe Connect `application_fee_amount` |
| Lead / discovery | Featured listings, CPL, or rev-share from web-public | 1–2 | `listing_tiers`, attribution on Case |
| Marketplace commission | 8–15% on supplier orders in Case | 2 | Order settlement rules |
| Cemetery partnership | Configurable fee per partnership agreement | 2 | `partnership_agreements.terms` |
| Premium modules | AI, SMS, WhatsApp, API, analytics | 2–3 | Feature flags + plan entitlements |

## What Memora Takes Off the Business (Ops Value)

| Process | Memora handles |
|---------|----------------|
| 24/7 intake | Online booking, forms, notifications |
| Documentation | Uploads, checklists, reminders in Case |
| Family communication | Status portal, email templates (DE) |
| Cross-org coordination | Cemetery requests, marketplace orders (Phase 2) |
| Payments | Stripe Connect, invoices, receipts |
| Owner visibility | Dashboard: leads, funnel, GMV |

## B2B Value Proposition

**For funeral homes:** More leads, online booking, payments, CRM, less admin — Memora runs the digital paperwork.  
**For cemeteries:** Digitized plots, ceremony scheduling, fewer phone calls, partnership channel.  
**For suppliers:** New sales channel, catalog management, order integration.

## B2C Value Proposition

Transparent discovery, price comparison, online booking and payment, document upload, status tracking, single point of contact where ecosystem allows. **B2C use of platform is free** — families pay service providers only.

## Pricing Structure (Pilot Draft — DE)

| Plan | Target | Indicative | Includes |
|------|--------|------------|----------|
| Starter | Small funeral home | €79–129/mo | Branded site, booking, basic CRM |
| Professional | Mid-size | €199–349/mo | + payments, documents, staff, analytics, hide branding |
| Enterprise | Chains, cemetery groups | from €599/mo | + custom domain, API, SLA, multi-location |
| Cemetery | Plot & ceremony mgmt | €149–299/mo | Cemetery module + partner tools |
| Supplier | Marketplace sellers | €49–99/mo or commission-only | Catalog + order management |

Plus **payment application fee** (1.5–2.5%) on successful online charges.

## Partnership Model (Principles)

- Commercial terms vary by cemetery and local regulation
- Platform aligns incentives: cemetery digitization ↔ funeral home referrals ↔ customer convenience
- No fixed commission % in architecture — store in `partnership_agreements` config

## Revenue Mix (Target)

| Phase | Primary drivers |
|-------|-----------------|
| MVP | 70% SaaS, 30% payment fees |
| Ecosystem | 50% SaaS, 25% payments, 25% marketplace + partners |
| Scale | Diversified: Enterprise, add-ons, API |

---

*Expand: unit economics worksheet, churn assumptions — see `collaboration/monetization-win-win.md`*
