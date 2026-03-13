# Правила проекта — читать перед любым действием
# Универсальные правила структуры frontend-проекта (CRA)

Эти правила применяются ко всем проектам по умолчанию, если в конкретном проекте не указано иное.
Стек: Create React App (CRA). Webpack/Место — не используется.

---

## 1. Общая структура проекта

```
<project-name>/
├── public/
│   ├── index.html        <- единственный HTML-файл
│   └── favicon.ico
├── src/
│   ├── blocks/           <- все CSS-файлы в БЭМ-структуре (блок/элемент/модификатор)
│   │   ├── header/
│   │   │   ├── header.css
│   │   │   ├── __logo/
│   │   │   │   └── header__logo.css
│   │   │   └── _mobile/
│   │   │       └── header_mobile.css
│   │   └── ...
│   ├── components/       <- только .js/.jsx файлы (без CSS)
│   │   ├── App/
│   │   │   └── App.js
│   │   ├── Header.js
│   │   └── ...
│   ├── images/           <- все изображения и иконки
│   ├── vendor/
│   │   ├── normalize.css <- нормализация (здесь, не в public/)
│   │   └── fonts/        <- шрифты
│   ├── index.css         <- главный CSS: собирает все блоки через @import url()
│   └── index.js          <- точка входа React
├── package.json
└── README.md
```

**Правило**: не создавать папки и файлы вне этой схемы без явного обоснования.

---

## 2. Компоненты (`src/components/`)

### Правила именования
- Имя файла компонента — PascalCase: `Header.js`, `UserCard.js`, `MoviesCard.js`.
- Один компонент на файл.
- Экспорт: `export default` в конце файла.
- CSS в компонентах НЕ импортируется — все стили подключены через `src/index.css`.

### Импорт в компоненте — порядок
1. `import React from 'react'` — всегда первым
2. Импорт дочерних компонентов
3. Импорт изображений
4. Без импорта CSS

```js
import React from 'react';
import Header from './Header';
import logoPath from '../images/header__logo.svg';
// НЕТ import './Header.css'
```

---

## 3. CSS — файловая структура блоков (`src/blocks/`)

Каждый БЭМ-блок — папка. Элементы и модификаторы — вложенные папки с отдельными CSS-файлами:

```
src/blocks/
├── header/
│   ├── header.css
│   ├── __logo/
│   │   └── header__logo.css
│   └── _mobile/
│       └── header_mobile.css
└── footer/
    ├── footer.css
    └── __copyright/
        └── footer__copyright.css
```

---

## 4. Сборка стилей (`src/index.css`)

`src/index.css` — единственная точка подключения всех стилей через `@import url()`:

```css
@import url('./vendor/normalize.css');
@import url('./vendor/fonts/inter.css');

@import url('./blocks/header/header.css');
@import url('./blocks/header/__logo/header__logo.css');
@import url('./blocks/header/__nav/header__nav.css');

@import url('./blocks/footer/footer.css');
@import url('./blocks/footer/__copyright/footer__copyright.css');
```

`src/index.css` подключается в `src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
```

---

## 5. Изображения (`src/images/`)

- Все изображения — в `src/images/`, не в `public/`.
- Подключение только через ES6 `import`:
  ```js
  import logoPath from '../images/header__logo.svg';
  function Logo() {
    return <img className="header__logo" src={logoPath} alt="Логотип" />;
  }
  ```
- Нельзя прописывать путь строкой в `src=""` без импорта.
- Именование файлов по БЭМ: `header__logo.svg`, `moviesElement__like_active.svg`.

---

## 6. Шрифты (`src/vendor/fonts/`)

- Шрифты хранить в `src/vendor/fonts/`.
- Объявлять через `@font-face` в отдельном CSS-файле (например, `src/vendor/fonts/inter.css`):
  ```css
  @font-face {
    font-family: 'Inter';
    src:
      url('./Inter-Regular.woff2') format('woff2'),
      url('./Inter-Regular.woff') format('woff');
    font-display: swap;
  }
  ```
- Подключать в `src/index.css` вторым (после normalize).

---

## 7. Normalize.css

- Файл `normalize.css` — в `src/vendor/normalize.css`.
- Подключать первым в `src/index.css`:
  ```css
  @import url('./vendor/normalize.css');
  ```
- НЕ класть в `public/`. НЕ подключать через `<link>` в HTML.

---

## 8. Классы в JSX

- Всегда `className`, никогда `class`:
  ```jsx
  <div className="header__title">  // Correct
  <div class="header__title">      // Wrong
  ```
- Именование классов по БЭМ: `header__title`, `card__button_active`.

---

## 9. Строгие запреты

```
ЗАПРЕЩЕНО: CSS-файлы в src/components/ рядом с компонентами
ЗАПРЕЩЕНО: import './Component.css' внутри React-компонентов
ЗАПРЕЩЕНО: Второй HTML-файл (index.html — только один, в public/)
ЗАПРЕЩЕНО: Изображения в public/ (только через src/images/ + import)
ЗАПРЕЩЕНО: normalize.css в public/
ЗАПРЕЩЕНО: Путь к изображению строкой в src="" без import
ЗАПРЕЩЕНО: @import для CSS кроме src/index.css (там — разрешено и обязательно)
ЗАПРЕЩЕНО: class вместо className в JSX
ЗАПРЕЩЕНО: inline-стили style={{}} в JSX
ЗАПРЕЩЕНО: Папки вне схемы без явного согласования
ЗАПРЕЩЕНО: Компонент без export default
```

---

## 10. Чек-лист при добавлении нового компонента

- [ ] Создан файл `src/components/ComponentName.js`
- [ ] Создана папка `src/blocks/component-name/` с `component-name.css`
- [ ] Для каждого элемента — подпапка `src/blocks/component-name/__element/element.css`
- [ ] Все новые CSS-файлы добавлены в `src/index.css` через `@import url()`
- [ ] Компонент экспортируется: `export default ComponentName`
- [ ] БЭМ-классы в JSX через `className`
- [ ] Изображения в `src/images/`, подключены через import

---

# CLAUDE EDIT PROTOCOL — Обязательный протокол перед любыми изменениями

> **Этот файл читается ПЕРВЫМ при каждом открытии проекта и перед каждым изменением.**
> Игнорирование протокола = нарушение структуры проекта.

---

## СТОП. Прежде чем что-либо менять — выполни все шаги ниже.

---

## ШАГ 1 — Прочитай структуру проекта

Перед любым изменением выполни сканирование:

```
Что именно читать:
1. Текущее дерево файлов — убедись, что понимаешь где что лежит
2. src/index.js — текущие импорты и рендер
3. src/index.css — список подключённых блоков
4. public/index.html — структура HTML
```

Только после прочтения переходи к шагу 2.

---

## ШАГ 2 — Классифицируй задачу

Определи тип изменения:

| Тип | Признаки | Что затронет |
|-----|----------|--------------|
| **Новый компонент** | Новый визуальный элемент | `src/components/Name.js` + `src/blocks/name/name.css` |
| **Новая логика** | Новый обработчик, стейт | Существующий компонент |
| **Новое изображение** | Любой графический файл | `src/images/` |
| **Глобальные стили** | Переменные, сброс, шрифты | `src/index.css` или `src/blocks/page/page.css` |
| **Новый CSS-элемент** | Новый БЭМ-элемент | `src/blocks/block/__element/block__element.css` + `src/index.css` |

---

## ШАГ 3 — Проверь, что изменение соответствует правилам

### Для нового компонента:
- [ ] Файл создаётся в `src/components/`, имя в PascalCase
- [ ] CSS-файл блока в `src/blocks/component-name/`
- [ ] CSS НЕ импортируется внутри компонента
- [ ] Новый CSS добавлен в `src/index.css` через `@import url()`
- [ ] Компонент экспортируется через `export default`
- [ ] БЭМ-классы через `className`, не `class`
- [ ] Нет inline-стилей `style={{}}`

### Для изображений:
- [ ] Файл помещается в `src/images/`
- [ ] Имя по БЭМ: `<block>__<element>.svg`
- [ ] Подключение только через `import logoPath from '../images/...'`
- [ ] Атрибут `alt` обязателен

### Для CSS-блока:
- [ ] Папка `src/blocks/block-name/` создана
- [ ] Элементы в подпапках `__element/`
- [ ] Модификаторы в подпапках `_modifier/`
- [ ] Все файлы добавлены в `src/index.css` через `@import url()`

---

## ШАГ 4 — Запрети себе эти действия

```
ЗАПРЕЩЕНО: Создавать CSS-файл в src/components/
ЗАПРЕЩЕНО: Добавлять import './Name.css' в компонент
ЗАПРЕЩЕНО: Класть изображения в public/
ЗАПРЕЩЕНО: Писать class вместо className в JSX
ЗАПРЕЩЕНО: Добавлять style={{}} в JSX
ЗАПРЕЩЕНО: Хардкодить путь к изображению строкой в src=""
ЗАПРЕЩЕНО: Создавать папки вне схемы без явного согласования
```

---

## ШАГ 5 — Сообщи о плане до исполнения

Перед тем как вносить изменения, кратко опиши план:

```
Создам: src/components/Card.js
Создам: src/blocks/card/card.css
Создам: src/blocks/card/__image/card__image.css
Изменю: src/index.css — добавлю @import для новых блоков
```

Если задача не вписывается в структуру — сначала сообщи об этом, предложи решение,
и только после подтверждения действуй.

---

## ШАГ 6 — После изменений: самопроверка

- [ ] Структура папок не нарушена
- [ ] Новые компоненты в `src/components/` без CSS
- [ ] Новые CSS-файлы в `src/blocks/`, добавлены в `src/index.css`
- [ ] Изображения в `src/images/`, подключены через import
- [ ] Нет `class` вместо `className`
- [ ] Нет `style={{}}` в JSX
- [ ] Нет `import './Css.css'` внутри компонентов