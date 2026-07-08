const { test, expect } = require('@playwright/test');

test.describe("UI Locators Practice - Wikipedia", () => {

    test("should find and verify main page elements using stable locators", async ({ page }) => {
        // Увеличиваем таймаут ожидания элементов, если сеть медленная
        test.setTimeout(45000);

        // 1. Открываем сайт Wikipedia
        await page.goto("https://www.wikipedia.org");

        // ==========================================
        // ПРОВЕРКИ ВИДИМОСТИ (Минимум 5 элементов)
        // ==========================================

        // 1. Логотип (Исправлено: привязка к надежному CSS классу элемента логотипа)
        const logo = page.locator('.central-featured-logo');
        await expect(logo).toBeVisible();

        // 2. Поле ввода поиска (CSS selector по уникальному ID)
        const searchInput = page.locator("input#searchInput");
        await expect(searchInput).toBeVisible();

        // 3. Кнопка отправки поиска (XPath селектор по типу кнопки)
        const searchButton = page.locator("//button[@type='submit']");
        await expect(searchButton).toBeVisible();

        // 4. Ссылка на английскую версию (getByRole для роли ссылки)
        const englishLink = page.getByRole("link", { name: /English/i }).first();
        await expect(englishLink).toBeVisible();

        // 5. Выпадающий список выбора языка (CSS по ID селекта)
        const languageSelect = page.locator("select#searchLanguage");
        await expect(languageSelect).toBeVisible();

        // ==========================================
        // ПРОВЕРКИ ТЕКСТА (Минимум 2 элемента)
        // ==========================================

        // 1. Проверяем слоган под логотипом
        const slogan = page.locator(".localized-slogan");
        await expect(slogan).toContainText("The Free Encyclopedia");

        // 2. Проверяем текст внутри кнопки поиска
        await expect(searchButton).toContainText("Search");
    });
});
