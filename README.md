# Домашнее задание: Практика по UI-локаторам (Wikipedia)

## 1. Сравнительная таблица стратегий поиска элементов

| № | Element | CSS Locator | XPath Locator | Playwright Locator | Is stable? | Explanation |
| - | -------------- | ----------- | ------------- | ------------------ | ------------------ | ----------- |
| 1 | Wikipedia Logo | `img.central-featured-logo` | `//img[@alt='Wikipedia']` | `page.getByRole('img', { name: 'Wikipedia' })` | **Yes** | Логотип имеет фиксированный alt-текст и семантическую роль изображения. |
| 2 | Search Input | `input#searchInput` | `//input[@id='searchInput']` | `page.getByRole('searchbox')` | **Yes** | Технический `id` уникален и зашит в структуру формы поиска. |
| 3 | Search Button | `button.pure-button` | `//button[@type='submit']` | `page.getByRole('button', { name: 'Search' })` | **Yes** | Сочетает стабильный тип сабмита формы и текстовое имя кнопки. |
| 4 | English Link | `a#js-link-box-en` | `//a[@id='js-link-box-en']` | `page.getByRole('link', { name: /English/i })` | **Yes** | Языковой блок имеет уникальный ID для локали `en`. |
| 5 | Lang Select | `select#searchLanguage` | `//select[@id='searchLanguage']` | `page.locator('select#searchLanguage')` | **Yes** | Элемент выбора языка привязан к нативному тегу с уникальным ID. |

## 2. Сравнение локаторов (Какой лучше и почему)
1. **Поле ввода:** Лучше использовать `page.locator("input#searchInput")`, так как ID элемента уникален на всей странице и никогда не изменится при смене дизайна.
2. **Логотип:** Лучше использовать `page.getByRole('img', { name: 'Wikipedia' })`, так как это подход, основанный на Accessibility. Он не зависит от верстки и проверяет картинку так, как её видит скринридер.

## 3. Нестабильный локатор
* **Плохой локатор (XPath):** `/html/body/div[3]/form/fieldset/div/button`
* **Почему:** Он сломается, если форму поиска обернут в любой другой тег `<div>` или изменят иерархию элементов на главной странице.

## 4. Краткие выводы
* **Самые стабильные локаторы:** Опирающиеся на явные уникальные ID элементов (`#searchInput`) и роли (`getByRole`) [INDEX].
* **Что лучше не использовать:** Абсолютные пути (`/html/body/...`) и индексы (`nth-child`).
