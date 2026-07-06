# Design System — референс MEMORA

> Визуальная цель: **спокойная премиальная эстетика** — как на приложенном макете.  
> Не «tech startup», не «мрачные похороны» — **достоинство, ясность, тепло**.

---

## Референс (описание макета)

![MEMORA Homepage Reference](./reference/memora-homepage-mockup.png)

*Положите скриншот макета в `collaboration/reference/memora-homepage-mockup.png`*

---

## Цвета (v2 — editorial)

| Token | HEX | Использование |
|-------|-----|---------------|
| `--memora-white` | `#FFFFFF` | Карточки, input, map bg |
| `--memora-paper` | `#F7F6F2` | Фон страницы |
| `--memora-accent` | `#111111` | Кнопки primary |
| `--memora-text` | `#1B1B1B` | Заголовки, body |
| `--memora-border` | `#E6E4DF` | Разделители |
| `--memora-muted` | `#6B6B6B` | Вторичный текст |

**Правило:** без синего, без насыщенных цветов, без градиентов. Ощущение печатного листа.

---

## Типографика

| Роль | Шрифт | Стиль |
|------|-------|-------|
| Display / H1–H2 | **Playfair Display** | Serif, крупный, уверенный |
| UI / Nav / Labels | **DM Sans** | Sans, uppercase nav с `letter-spacing: 0.12em` |
| Body | DM Sans | 16px, line-height 1.6 |

### Примеры размеров

- H1 Hero: `clamp(2rem, 4vw, 3.25rem)`
- Nav links: `11–12px`, uppercase
- Section titles: `1.5–2rem`, serif

---

## Логотип

```text
● ●    MEMORA
 ●
```

Три точки треугольником + wordmark serif. Минималистично, без иконки гроба.

---

## Компоненты (с макета)

### Header
- Logo слева
- Nav по центру: FÜR ANGEHÖRIGE · VORSORGE · ÜBER UNS · RATGEBER
- Справа: KONTAKT (outline box) + hamburger

### Hero
- Слева: заголовок + абзац + 2 CTA (filled + outline)
- Справа: line-art иллюстрация (карта / кладбище / природа)
- Слева вертикально: индикатор слайдера 01 / 02 / 03

### Trust Sidebar (справа по всей высоте)
- 24/7 Erreichbarkeit
- Persönliche Begleitung
- Transparente Kosten
- 4.9 ★★★★★ (128)

### Info Grid (3 колонки)
1. **WIR NEHMEN UNS ZEIT** — текст + иллюстрация лилии + ссылка
2. **FINDEN. ERINNERN. VERBUNDEN BLEIBEN.** — поиск Friedhof + Karte
3. **STANDORT** — адрес, Route planen, мини-карта

### Category Bar (низ)
Иконки + подписи: Bestattungsarten · Vorsorge · Trauerbegleitung · Ratgeber

---

## Иллюстрации

- Стиль: **line-art / engraving**, тонкие линии, без заливки
- Темы: природа, кладбище издалека, цветы (лилия), карта
- **Запрещено:** реалистичные фото умерших, гробы крупным планом

---

## Кнопки

| Тип | Стиль |
|-----|-------|
| Primary | `bg-ink text-white`, стрелка → |
| Secondary | `border border-ink bg-transparent` |
| Ghost link | Текст + underline on hover |

Без скругления `rounded-full` — лёгкий `rounded-sm` или прямоугольник как на макете.

---

## Сетка

- Max width: ~1400px
- Hero: 2 колонки + фиксированный sidebar ~200px справа
- Info grid: 3 равные колонки с вертикальными разделителями

---

## B2B Portal — отдельно

Partner dashboard **не** копирует marketing-стиль один в один:
- Фон: светло-серый `#F4F4F5`
- Sidebar тёмный или белый функциональный
- Тот же шрифт, но плотнее UI (таблицы, формы)

White-label сайт клиента бюро = **тот же стиль, что референс**.

---

## Checklist перед релизом дизайна

- [ ] Cream фон, не белый #FFF на всей странице
- [ ] Serif только для заголовков
- [ ] Nav uppercase
- [ ] Есть блок доверия (24/7, прозрачность)
- [ ] CTA эмпатичные, не агрессивные
- [ ] Mobile: sidebar → горизонтальная полоска под hero

---

*Обновлять при каждом согласованном изменении с партнёршей.*
