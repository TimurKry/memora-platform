# Документация MEMORA

> **Единый источник правды** для архитектуры, бизнеса и спецификаций.  
> **Язык:** русский (папка `prd/` — legacy на английском, постепенно переносим сюда).  
> **Агент:** [AGENTS.md](../AGENTS.md) · **Экосистема:** [ECOSYSTEM.md](ECOSYSTEM.md) — читать перед любым модулем.

---

## Как пользоваться этой папкой

### Если вы человек

1. Прочитайте **[ECOSYSTEM.md](ECOSYSTEM.md)** — кто участники, кто на чём зарабатывает
2. Откройте нужный модуль в таблице ниже
3. Сверьтесь с **[decisions/](decisions/)** и **[../collaboration/decisions-log.md](../collaboration/decisions-log.md)**

### Если вы ИИ-агент

1. `ECOSYSTEM.md` → ответьте на 4 вопроса для каждого затронутого участника
2. Пишите документы **на русском**
3. Добавляйте Mermaid-диаграммы
4. Обновите статус в этой таблице
5. Коммит: `docs: <описание>` → push

---

## Легенда статусов

| Статус | Значение |
|--------|----------|
| ✅ | Готово, можно опираться |
| 🟡 | Черновик, нужно дополнить |
| ⬜ | Только структура папки |

---

## Структура `docs/` — что где лежит

```
docs/
│
├── README.md              ← ВЫ ЗДЕСЬ — навигация по документации
├── ECOSYSTEM.md           ← ★ Экосистема и монетизация (win-win)
├── tech-stack.md          ← Стек: Next.js, NestJS, Prisma, Stripe…
│
├── architecture/          ⬜ Системная архитектура, C4, сервисы
├── business/              🟡 Бизнес-модель, тарифы, подписки
├── database/              🟡 ER-диаграммы, схема БД
├── api/                   ⬜ REST/OpenAPI по модулям
├── modules/               ⬜ Индекс всех модулей платформы
│
├── crm/                   🟡 Cases, контакты, воронка, timeline
├── marketplace/           ⬜ Каталог, заказы, комиссии
├── cemetery/              🟡 Карты, участки, поиск могил
├── crematorium/           ⬜ Расписание, слоты, статусы
├── white-label/           🟡 Тенанты, брендинг, домены
│
├── user-flows/            🟡 Сценарии пользователей (Mermaid)
├── security/              ⬜ Auth, GDPR, RBAC, аудит
├── deployment/            🟡 CI/CD, GitHub Pages, облако
├── integrations/          🟡 Stripe, Mapbox, email, страховые
├── ai/                    ⬜ Будущее: ассистент, OCR
│
├── roadmap/               🟡 Фазы и вехи
├── diagrams/              ⬜ Общие Mermaid-источники
├── decisions/             🟡 ADR — архитектурные решения
├── glossary/              🟡 Термины (Case, Tenant, …)
│
└── prd/                   ✅ Формальный PRD (English, legacy)
```

---

## Быстрые ссылки по темам

| Тема | Документ |
|------|----------|
| **Экосистема и деньги** | [ECOSYSTEM.md](ECOSYSTEM.md) |
| **Инфографика экосистемы** | [business/ecosystem-infographic.md](business/ecosystem-infographic.md) |
| Монетизация (развёрнуто) | [../collaboration/monetization-win-win.md](../collaboration/monetization-win-win.md) |
| Видение продукта | [prd/01-vision.md](prd/01-vision.md) |
| Бизнес-модель | [prd/02-business-model.md](prd/02-business-model.md) · [business/](business/) |
| Сущности и Case | [prd/03-business-structure.md](prd/03-business-structure.md) |
| Роли и RBAC | [prd/04-personas-roles.md](prd/04-personas-roles.md) |
| Пользовательские потоки | [prd/05-user-flows.md](prd/05-user-flows.md) · [user-flows/](user-flows/) · **[service-lifecycle.md](user-flows/service-lifecycle.md)** |
| Фичи MVP | [prd/06-features.md](prd/06-features.md) |
| База данных | [prd/07-database.md](prd/07-database.md) · [database/](database/) |
| Roadmap | [prd/12-roadmap.md](prd/12-roadmap.md) · [roadmap/](roadmap/) |
| Стек | [tech-stack.md](tech-stack.md) |
| Решения команды | [../collaboration/decisions-log.md](../collaboration/decisions-log.md) |
| Дизайн | [../collaboration/design-system.md](../collaboration/design-system.md) |

---

## Модули ↔ приложения

| Модуль в `docs/` | Код в `apps/` | Участники |
|------------------|---------------|-----------|
| [white-label/](white-label/) | `web-tenant` | Бюро, кладбище |
| [crm/](crm/) | `web-partner` | Бюро, семья (статус) |
| [cemetery/](cemetery/) | `web-public` `/karte` | Кладбище, семья |
| [marketplace/](marketplace/) | Phase 2 | Поставщики, бюро |
| [api/](api/) | `api` (planned) | Все |
| deployment | `.github/workflows/` | DevOps |

---

## Стандарт документа

Каждый содержательный документ включает:

| Раздел | Содержание |
|--------|------------|
| Цель | Зачем документ |
| Бизнес-цель | Ценность для пользователей и партнёров |
| Техническая цель | Что строят инженеры |
| Зависимости | Связанные модули |
| Открытые вопросы | Нерешённое |
| Риски | Юридические, технические |
| История решений | Ссылка на `decisions/` |

Шаблон ADR: [decisions/000-template.md](decisions/000-template.md)

---

## Связь с остальным репозиторием

| Папка | Роль |
|-------|------|
| [`../README.md`](../README.md) | Вход в проект — карта всего репо |
| [`../collaboration/`](../collaboration/) | Брифы для партнёра, тексты DE |
| [`../apps/`](../apps/) | Реализация UI |
| [`../packages/shared/`](../packages/shared/) | Общие типы |

---

*Обновлено: 2026-07-09*
