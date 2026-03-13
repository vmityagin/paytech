---
description: React (CRA) project structure and code rules — diploma-frontend style
globs: ["**/*.jsx", "**/*.js", "**/*.css"]
alwaysApply: true
---

# React — структура проекта и правила кода (стиль diploma-frontend)

Стек: Create React App (CRA). Webpack не используется.

---

## 1. ФАЙЛОВАЯ СТРУКТУРА ПРОЕКТА

```
<project-name>/
├── public/
│   ├── index.html        <- единственный HTML-файл
│   └── favicon.ico
├── src/
│   ├── blocks/           <- все CSS-файлы в БЭМ-структуре
│   │   ├── header/
│   │   │   ├── header.css
│   │   │   ├── __logo/
│   │   │   │   └── header__logo.css
│   │   │   └── _theme/
│   │   │       └── header_theme_dark.css
│   │   └── ...
│   ├── components/       <- только .js/.jsx файлы (без CSS)
│   │   ├── App/
│   │   │   └── App.js
│   │   ├── Header.js
│   │   └── ...
│   ├── images/           <- все изображения
│   ├── vendor/
│   │   ├── normalize.css <- нормализация стилей
│   │   └── fonts/        <- шрифты
│   ├── index.css         <- главный CSS: собирает все блоки через @import
│   └── index.js          <- точка входа React
├── package.json
└── README.md
```

### Ключевые правила структуры

- **CSS живёт в `src/blocks/`** — каждый блок в отдельной папке, элементы и модификаторы — в подпапках.
- **`src/components/`** содержит ТОЛЬКО `.js`/`.jsx` файлы. Никаких CSS рядом с компонентами.
- **`src/index.css`** — единственная точка сборки стилей. Подключает всё через `@import url()`.
- **`src/vendor/normalize.css`** — нормализация, подключается первой в `index.css`.
- Изображения — в `src/images/`.
- Шрифты — в `src/vendor/fonts/`.

---

## 2. CSS: ФАЙЛОВАЯ СТРУКТУРА БЛОКОВ (`src/blocks/`)

Каждый БЭМ-блок — папка. Элементы и модификаторы — вложенные папки:

```
src/blocks/
├── header/
│   ├── header.css              <- стили блока .header
│   ├── __logo/
│   │   └── header__logo.css    <- стили элемента .header__logo
│   ├── __nav/
│   │   └── header__nav.css
│   └── _mobile/
│       └── header_mobile.css   <- стили модификатора .header_mobile
├── footer/
│   ├── footer.css
│   ├── __copyright/
│   │   └── footer__copyright.css
│   └── ...
└── ...
```

---

## 3. СБОРКА СТИЛЕЙ (`src/index.css`)

Все стили собираются в `src/index.css` через `@import url()`:

```css
@import url('./vendor/normalize.css');
@import url('./vendor/fonts/inter.css');
@import url('./blocks/page/page.css');

@import url('./blocks/header/header.css');
@import url('./blocks/header/__logo/header__logo.css');
@import url('./blocks/header/__nav/header__nav.css');

@import url('./blocks/footer/footer.css');
@import url('./blocks/footer/__copyright/footer__copyright.css');
```

`src/index.css` импортируется в `src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
```

---

## 4. КОМПОНЕНТЫ (`src/components/`)

### Правила именования
- Имя файла — PascalCase: `Header.js`, `MoviesCard.js`.
- Один компонент на файл.
- `export default` в конце файла.
- Компоненты могут группироваться в подпапки по смыслу: `App/App.js`, `Main/Promo.js`.

### CSS в компонентах — НЕ импортировать
CSS НЕ импортируется внутри компонента. Все стили уже подключены глобально через `src/index.css`.

```js
// Header.js
import React from 'react';
// НЕТ import './Header.css'

function Header() {
  return <header className="header">...</header>;
}

export default Header;
```

### Порядок импортов в компоненте
1. `import React from 'react'` — всегда первым
2. Импорт дочерних компонентов
3. Импорт изображений (через ES6 import)
4. Без импорта CSS

---

## 5. ИЗОБРАЖЕНИЯ (`src/images/`)

- Все изображения — в `src/images/`.
- Именование по БЭМ: `header__logo.svg`, `moviesElement__like.svg`.
- Подключение только через ES6 `import`:

```js
import logoPath from '../images/header__logo.svg';

function Header() {
  return <img className="header__logo" src={logoPath} alt="Логотип" />;
}
```

---

## 6. ШРИФТЫ (`src/vendor/fonts/`)

- Шрифты — в `src/vendor/fonts/`.
- Объявлять через `@font-face` в отдельном файле `src/vendor/fonts/fontname.css`:

```css
@font-face {
  font-family: 'Inter';
  src:
    url('./Inter-Regular.woff2') format('woff2'),
    url('./Inter-Regular.woff') format('woff');
  font-display: swap;
}
```

- Подключать в `src/index.css` вторым (после normalize):

```css
@import url('./vendor/normalize.css');
@import url('./vendor/fonts/inter.css');
```

---

## 7. КЛАССЫ В JSX

- Всегда `className`, никогда `class`.
- Именование по БЭМ: `header__logo`, `search__button_active`.

```jsx
<div className="header__nav header__nav_mobile">
```

---

## 8. СТРОГИЕ ЗАПРЕТЫ

```
ЗАПРЕЩЕНО: CSS-файлы в src/components/ рядом с компонентами
ЗАПРЕЩЕНО: import './Component.css' внутри компонентов
ЗАПРЕЩЕНО: Второй HTML-файл (index.html только один, в public/)
ЗАПРЕЩЕНО: Изображения в public/ (только src/images/ + import)
ЗАПРЕЩЕНО: normalize.css в public/ (только src/vendor/)
ЗАПРЕЩЕНО: Путь к изображению строкой в src="" без import
ЗАПРЕЩЕНО: class вместо className в JSX
ЗАПРЕЩЕНО: inline-стили style={{}} в JSX
ЗАПРЕЩЕНО: Компонент без export default
ЗАПРЕЩЕНО: Создавать папки вне схемы без явного согласования
```

---

## 9. ЧЕК-ЛИСТ ПРИ ДОБАВЛЕНИИ НОВОГО КОМПОНЕНТА

- [ ] Создан файл `src/components/ComponentName.js`
- [ ] Создана папка `src/blocks/component-name/` с `component-name.css`
- [ ] Для каждого элемента — подпапка `src/blocks/component-name/__element/element.css`
- [ ] CSS-файл блока добавлен в `src/index.css` через `@import url()`
- [ ] Компонент экспортируется: `export default ComponentName`
- [ ] БЭМ-классы в JSX через `className`
- [ ] Изображения в `src/images/`, подключены через import