# Collaboration — рабочая зона команды

Папка для совместной работы **Timur + партнёрша** над продуктом, дизайном и контентом.

> Код живёт в `apps/` и `docs/prd/`.  
> Здесь — **решения, идеи, тексты, дизайн-референсы** до переноса в PRD и код.

---

## Как пользоваться

| Файл | Кто | Зачем |
|------|-----|-------|
| [b2c-client-experience.md](./b2c-client-experience.md) | Оба | Что видит клиент (планирует похороны) |
| [b2b-business-owner.md](./b2b-business-owner.md) | Оба | Что видит владелец бизнеса |
| [design-system.md](./design-system.md) | Партнёрша / дизайн | Стиль по референсу MEMORA |
| [page-map.md](./page-map.md) | Оба | Карта страниц B2C + B2B |
| [decisions-log.md](./decisions-log.md) | Оба | Журнал решений (дата + кто + что) |
| [backlog.md](./backlog.md) | Оба | Задачи без привязки к спринту |
| [content-de.md](./content-de.md) | Партнёрша | Немецкие тексты для сайта |
| [reference/README.md](./reference/README.md) | Оба | Визуальный референс |

---

## Workflow

```text
1. Обсуждаем идею → пишем в decisions-log.md или backlog.md
2. Согласовали → обновляем b2c / b2b / design-system
3. Готово к разработке → переносим в docs/prd/ и создаём задачу в backlog
4. Реализовано в коде → отмечаем ✅ в backlog
```

---

## Роли (предложение)

| Роль | Фокус |
|------|-------|
| **Product / Tech** | Архитектура, MVP, интеграции, GitHub |
| **Design / Content** | UI по референсу, тексты DE, эмпатия, UX клиента |
| **Оба** | Приоритеты, ценообразование, cemetery-first GTM |

---

## Статус дизайна

- [x] Референс зафиксирован в `design-system.md`
- [x] Первая версия homepage в стиле референса (`apps/web-public`)
- [ ] Согласовать тексты DE (`content-de.md`)
- [ ] White-label tenant в том же стиле
- [ ] Partner dashboard — отдельная эстетика (функциональная, не marketing)

---

*Создано: 2026-07-06*
