# Memora Platform

White-label multi-tenant SaaS for the funeral industry — booking, payments, CRM, marketplace, cemetery management.

## Quick Start

**Requirements:** Node.js 20+, pnpm 9+

```bash
pnpm install
pnpm dev:public    # B2C discovery → http://localhost:3000
pnpm dev:tenant    # White-label site → http://localhost:3001
```

Or run all apps:

```bash
pnpm dev
```

| App | Port | URL |
|-----|------|-----|
| web-public | 3000 | Discovery & search (B2C) |
| web-tenant | 3001 | White-label funeral home site |
| web-partner | 3002 | B2B partner dashboard |
| web-admin | 3003 | Platform admin |

## Demo Flow

1. Open **http://localhost:3000** — search funeral homes in Berlin
2. Click **Ansehen & Buchen** → white-label tenant site
3. Book a demo appointment → creates Case reference `CASE-2026-0042`
4. Open **http://localhost:3002** — see the case in partner portal

## Documentation

- [Tech Stack](./docs/tech-stack.md)
- [Business Structure](./docs/prd/03-business-structure.md)
- [PRD Outline](./docs/prd/README.md)

## Decisions (locked)

- **Customer account:** Hybrid (global identity, data isolated per tenant)
- **Case model:** First-class entity from MVP
- **web-public:** Included in MVP

## Deploy (GitHub Pages — бесплатно)

После push сайт доступен на **`https://ВАШ-USERNAME.github.io/memora-platform/`**

### Быстрый деплой (2 команды)

```powershell
gh auth login
cd C:\Users\timur\Projects\memora-platform
.\scripts\push-github-pages.ps1
```

Скрипт: создаёт repo → push → включает GitHub Pages → запускает deploy.

| URL | Что это |
|-----|---------|
| `/` | Поиск бюро (B2C) |
| `/demo/` | White-label + бронирование |

Deploy занимает **2–3 минуты**. Статус: `gh run list`

### Вручную включить Pages (если нужно)

GitHub → repo → **Settings → Pages → Source: GitHub Actions**

---

*Memora Platform © 2026*
