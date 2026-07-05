# 06 — Feature Specification

## Module Index

Features grouped by bounded context. **MVP** = Phase 1 Germany launch.

| Module | MVP | Phase 2 | Phase 3 |
|--------|-----|---------|---------|
| Tenant & branding | ✓ | custom domains SSL | enterprise isolation |
| Auth & RBAC | ✓ | SSO | custom roles |
| Organization profile | ✓ | multi-location | org hierarchies |
| Service catalog | ✓ | packages | dynamic pricing rules |
| Booking & calendar | ✓ | resource pools | Google/Outlook sync |
| Payments | ✓ single-party | Connect marketplace | installments |
| CRM (basic) | ✓ contacts + notes | pipelines | automation |
| Notifications | email | SMS, in-app | WhatsApp |
| Documents | upload only | templates, e-sign | DATEV export |
| Marketplace | — | ✓ | B2C checkout |
| Cemetery | — | ✓ plots + ceremonies | GIS maps |
| Analytics | basic counts | dashboards | AI insights |
| Admin | ✓ | billing self-serve | feature flags UI |

---

## EPIC: Tenant & White-Label (MVP)

### In scope
- Tenant CRUD (platform admin)
- Subdomain `{slug}.memora.app`
- Branding: logo, primary/secondary colors, favicon, contact info
- Public page: home, services list, booking CTA, contact

### Out of scope (MVP)
- Custom domain + SSL automation
- Page builder / drag-and-drop CMS

### Acceptance criteria
- [ ] New tenant live on subdomain within 15 min of provisioning
- [ ] Branding reflects on all public tenant pages
- [ ] Tenant A cannot access Tenant B data (verified by integration tests)

---

## EPIC: Booking (MVP)

### In scope
- Services with duration, price (display), description
- Weekly availability rules + exceptions
- Appointment creation with conflict detection
- Statuses: `pending`, `confirmed`, `cancelled`, `completed`, `no_show`
- Partner calendar view (day/week)

### Out of scope (MVP)
- Multi-staff resource scheduling
- Waitlist

### Acceptance criteria
- [ ] Customer selects only available slots
- [ ] Concurrent booking attempts → one succeeds
- [ ] Partner receives notification within 60s

---

## EPIC: Payments (MVP)

### In scope
- Stripe Connect onboarding for organization
- Pay at booking or pay later link
- Webhook handling: success, failure, refund
- Invoice record linked to appointment

### Out of scope (MVP)
- Split payments marketplace
- SEPA direct debit

---

## EPIC: CRM Basic (MVP)

### In scope
- Contact auto-created from booking
- Timeline: appointments, notes, emails sent
- Manual note add

### Out of scope (MVP)
- Deal pipelines, lead scoring

---

## Feature Request Template

Copy for each new epic:

```markdown
### [EPIC-XXX] Name
**Phase:** MVP | 2 | 3
**Module:** booking | crm | ...
**Problem:** ...
**User stories:** ...
**Acceptance criteria:** ...
**API endpoints:** ...
**DB entities:** ...
**Dependencies:** ...
```

---

*Expand: 20–30 epics with full AC, API refs, and UI screen list*
