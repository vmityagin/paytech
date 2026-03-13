# Pay-tech — Лендинг

Статичный лендинг сервиса международных банковских переводов **Pay-tech.ru**.

## Стек

- React (Create React App)
- CSS (БЭМ, без CSS-модулей и препроцессоров)
- Без TypeScript, без UI-библиотек, без роутинга

## Структура проекта

```
src/
├── components/
│   ├── App/          — корневой компонент
│   ├── Header/       — шапка сайта
│   ├── Hero/         — секция с заголовком и глобусом
│   ├── Features/     — карточки преимуществ
│   └── Countries/    — доступные страны переводов
├── images/           — все изображения и иконки
├── vendor/
│   └── normalize.css
├── index.css         — подключение всех стилей
└── index.js          — точка входа
public/
└── index.html
```

## Запуск

```bash
npm install
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
```

## Breakpoints

| Breakpoint | Ширина |
|---|---|
| Desktop | > 1199px |
| Tablet | ≤ 1199px |
| Mobile | ≤ 767px |
