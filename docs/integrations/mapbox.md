# Mapbox — настройка карты

## Почему карта не работает

Mapbox требует **public token**, который вшивается в сборку Next.js (`NEXT_PUBLIC_MAPBOX_TOKEN`).

| Среда | Что нужно |
|-------|-----------|
| **Локально** | `apps/web-public/.env.local` с токеном |
| **GitHub Pages** | Secret `MAPBOX_TOKEN` в репозитории → пересборка deploy |

Без токена при `pnpm build` на `/karte` показывается SVG-заглушка, а не интерактивная карта.

## Локально

```env
# apps/web-public/.env.local
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ...
```

Тот же токен, что в `meeting-point-finder` (Mapbox Dashboard).

```bash
pnpm dev:public
# → http://localhost:3000/karte/
```

## GitHub Pages

1. GitHub → **Settings → Secrets and variables → Actions**
2. **New repository secret**
   - Name: `MAPBOX_TOKEN`
   - Value: public token из Mapbox
3. Push в `main` или **Re-run** workflow Deploy GitHub Pages

Workflow уже передаёт секрет в сборку:

```yaml
NEXT_PUBLIC_MAPBOX_TOKEN: ${{ secrets.MAPBOX_TOKEN }}
```

## Где какая карта

| Страница | Тип | Нужен токен |
|----------|-----|-------------|
| `/` Hero | SVG пейзаж (editorial) | Нет |
| `/` Standort | Mapbox Static + grayscale | Да (при build) |
| `/karte` | Mapbox GL интерактив | Да (при build) |

## Editorial-стиль

- Стиль: `mapbox://styles/mapbox/light-v11`
- CSS: полный grayscale + cream overlay
- Без спутниковых фото и ярких цветов
