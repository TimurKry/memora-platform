# Page Map — B2C + B2B

## web-public (memora.app / GitHub Pages)

| Путь | Страница | Аудитория | MVP |
|------|----------|-----------|-----|
| `/` | Homepage (референс MEMORA) | B2C | ✓ |
| `/suchen` | Поиск бюро / кладбищ | B2C | ✓ |
| `/demo` | White-label demo booking | B2C | ✓ |
| `/vorsorge` | Предварительное планирование | B2C | shell |
| `/ratgeber` | Статьи, гайды | B2C | shell |
| `/ueber-uns` | О платформе | B2C | shell |
| `/kontakt` | Контакт | B2C | shell |
| `/login` | Вход (hybrid account) | B2C | Phase 2 |

## web-tenant ({brand}.domain)

| Путь | Страница | MVP |
|------|----------|-----|
| `/` | Branded homepage (копия стиля референса) | ✓ |
| `/leistungen` | Услуги | ✓ |
| `/termin` | Бронирование | ✓ |
| `/status` | Статус Case | Phase 2 |
| `/dokumente` | Загрузка документов | Phase 2 |

## web-partner (app.memora.app)

| Путь | Модуль | MVP |
|------|--------|-----|
| `/` | Dashboard | shell |
| `/faelle` | Cases | ✓ |
| `/kalender` | Calendar | shell |
| `/crm` | Contacts | shell |
| `/einstellungen/branding` | White-label preview | Phase 2 |
| `/zahlungen` | Payments | Phase 2 |

---

## Навигация Homepage (референс)

```text
FÜR ANGEHÖRIGE  →  / (hero + поиск)
VORSORGE        →  /vorsorge
ÜBER UNS        →  /ueber-uns
RATGEBER        →  /ratgeber
KONTAKT         →  /kontakt
```

## Category Bar

```text
Bestattungsarten    →  /suchen?type=bestattung
Vorsorge            →  /vorsorge
Trauerbegleitung    →  /ratgeber?tag=begleitung
Ratgeber            →  /ratgeber
```
