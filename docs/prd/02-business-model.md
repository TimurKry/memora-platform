# 02 — Business Model

## Monetization (Neutral Framing)

> The platform is designed to support multiple monetization models, including SaaS subscriptions, marketplace commissions, payment processing fees, referral programs, and partnership agreements with cemeteries and other industry participants.

Architecture must treat each model as a **configurable revenue adapter** — not hard-coded business logic in core domains.

## Revenue Streams

| Stream | Mechanism | Implementation hook |
|--------|-----------|---------------------|
| SaaS subscription | Monthly/annual plans per tenant | `billing` module, Stripe Billing |
| Marketplace commission | % on supplier → funeral home / customer orders | Order settlement rules |
| Payment processing fee | Small % on online transactions | Stripe application fee |
| Premium modules | AI, SMS, WhatsApp, API, analytics | Feature flags + plan entitlements |
| Partnership / referral | Cemetery or partner agreements | Configurable rules engine (Phase 2+) |

## B2B Value Proposition

**For funeral homes:** More leads, online booking, payments, CRM, less admin.  
**For cemeteries:** Digitized plots, ceremony scheduling, fewer phone calls, partnership channel.  
**For suppliers:** New sales channel, catalog management, order integration.

## B2C Value Proposition

Transparent discovery, price comparison, online booking and payment, document upload, status tracking, single point of contact where ecosystem allows.

## Pricing Structure (Template — Numbers TBD)

| Plan | Target | Includes |
|------|--------|----------|
| Starter | Small funeral home | Branded site, booking, basic CRM |
| Professional | Mid-size | + payments, staff, analytics |
| Enterprise | Chains, cemetery groups | + custom domain, API, SLA |
| Supplier | Marketplace sellers | Catalog + order management |
| Cemetery | Plot & ceremony mgmt | Cemetery module + partner tools |

## Partnership Model (Principles)

- Commercial terms vary by cemetery and local regulation
- Platform aligns incentives: cemetery digitization ↔ funeral home referrals ↔ customer convenience
- No fixed commission % in architecture — store in `partnership_agreements` config

---

*Expand: unit economics worksheet, churn assumptions, expansion revenue*
