# TILE.EXPERT — анимированный header с поиском

Тестовое задание на Angular: вёрстка header и анимированное раскрытие строки поиска.

## Запуск

```bash
npm install
npm start
```

Приложение: http://localhost:4200

## Адаптив header

Header меняет вид на разрешении экрана **890px** (`max-width: 890px`):

| Desktop (> 890px) | Mobile / tablet (≤ 890px) |
| --- | --- |
| Логотип, горизонтальное меню, поиск с анимацией раскрытия влево, кнопка «НАЙТИ» | Status bar, бургер, компактные иконки |
| Иконки: поиск, добавить, уведомления, аватар | Иконки: добавить, история, поиск, уведомления |
| Панель фильтров под строкой поиска | Полноэкранный оверлей поиска с фильтрами |

Брейкпоинт задан в `SearchUiService.isTablet` и в CSS `@media (max-width: 890px)`.

## Основной функционал

- Анимация раскрытия строки поиска на desktop
- Взаимодействие компонентов через `SearchUiService`
- Мобильный оверлей поиска с полями и чекбоксами

## Деплой (EasyPanel) — уже собранный проект

На VPS `ng build` не запускается: в образ кладётся готовая статика из `dist/`.

### Локально

```bash
npm ci
npm run build
```

Должна появиться папка `dist/tile-search/browser/`.

### В Git

```bash
git add dist Dockerfile nginx.conf .dockerignore .gitignore
git commit -m "Deploy prebuilt static build"
git push origin master
```

### В EasyPanel

1. App → source: GitHub, ветка `master`, Build Path `/`
2. Builder: **Dockerfile**
3. Port: **80**
4. Deploy

Dockerfile только копирует `dist/tile-search/browser` в nginx — сборка на сервере почти мгновенная.

После правок в коде снова: `npm run build` → commit `dist/` → push → Deploy.

URL сайта — в разделе **Domains** (не `:3000` панели).
