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

## Деплой (EasyPanel)

В проекте есть `Dockerfile` и `nginx.conf` для деплоя как Docker-приложения.

1. Запушьте репозиторий на GitHub.
2. В EasyPanel создайте App и выберите **Dockerfile**.
3. Source: ветка `master`, Build Path `/`, Port `80`.
4. Deploy → URL смотрите в Domains (не порт `:3000` панели).

Если сборка зависает на `ng build` / падает с кодом **137** — на VPS мало RAM. На сервере добавьте swap (пример для Ubuntu):

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

После этого снова Deploy в EasyPanel.

Локальная проверка Docker:

```bash
docker build -t tile-search .
docker run --rm -p 8080:80 tile-search
```

Откройте http://localhost:8080
