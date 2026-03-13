---
description: normalize.css — подключение и расположение в проекте
globs: ["**/*.css", "**/*.js", "**/*.html"]
alwaysApply: true
---

# Normalize.css

## Расположение

`normalize.css` хранится в `src/vendor/normalize.css` — НЕ в `public/`.

## Как подключать

В CRA-проектах (React) normalize подключается через `@import` в `src/index.css` как первая строка:

```css
@import url('./vendor/normalize.css');
@import url('./vendor/fonts/inter.css');

@import url('./blocks/page/page.css');
/* ... остальные блоки ... */
```

## Порядок подключения в `src/index.css`

1. `normalize.css` — всегда первым
2. Шрифты (`fonts/fontname.css`)
3. Глобальные стили страницы (`blocks/page/page.css`)
4. Все остальные блоки

## Чего НЕ делать

```
ЗАПРЕЩЕНО: Класть normalize.css в public/
ЗАПРЕЩЕНО: Подключать через <link> в public/index.html
ЗАПРЕЩЕНО: Импортировать normalize.css внутри компонента
```