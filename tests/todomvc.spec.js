const { test, expect } = require('@playwright/test');
const path = require('path');

const statePath = path.join(__dirname, '../storageState.json');

test.describe("Playwright Homework - TodoMVC Suite", () => {

    test.use({ baseURL: 'https://demo.playwright.dev/todomvc' });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc', { waitUntil: 'domcontentloaded' });
    });

    // ========================================================
    // Task 1. Проверка загрузки TodoMVC
    // ========================================================
    test("Task 1: should load TodoMVC application correctly and display core elements", async ({ page }) => {
        const mainHeader = page.locator('h1');
        await expect(mainHeader).toHaveText('todos');

        const todoInput = page.getByPlaceholder('What needs to be done?');
        await expect(todoInput).toBeVisible();
        await expect(todoInput).toHaveAttribute('placeholder', 'What needs to be done?');
    });

    // ========================================================
    // Task 2. Добавление нескольких задач
    // ========================================================
    test("Task 2: should add multiple todo items to the list", async ({ page }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        const tasks = ['Learn Playwright', 'Write API tests', 'Review homework'];
        for (const task of tasks) {
            await todoInput.fill(task);
            await page.keyboard.press('Enter');
        }

        const todoItems = page.getByTestId('todo-item');
        await expect(todoItems).toHaveCount(3);
        await expect(todoItems).toHaveText(tasks);

        const todoCount = page.getByTestId('todo-count');
        await expect(todoCount).toContainText('3 items left');
    });

    // ========================================================
    // Task 3. Отметка задачи как выполненной и фильтрация
    // ========================================================
    test("Task 3: should complete todo item and filter lists", async ({ page }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        const tasks = ['Task 1', 'Task 2', 'Task 3'];
        for (const task of tasks) {
            await todoInput.fill(task);
            await page.keyboard.press('Enter');
        }

        const firstTodo = page.getByTestId('todo-item').nth(0);
        await firstTodo.locator('.toggle').click();
        await expect(firstTodo).toHaveClass(/completed/);

        await page.getByRole('link', { name: 'Active' }).click();
        await expect(page.getByText('Task 1')).not.toBeVisible();
        await expect(page.getByTestId('todo-item')).toHaveCount(2);

        await page.getByRole('link', { name: 'Completed' }).click();
        await expect(page.getByText('Task 1')).toBeVisible();
        await expect(page.getByTestId('todo-item')).toHaveCount(1);

        await page.getByRole('link', { name: 'All' }).click();
        await expect(page.getByTestId('todo-item')).toHaveCount(3);
    });

    // ========================================================
    // Task 4. Редактирование задачи
    // ========================================================
    test("Task 4: should edit an existing todo item text", async ({ page }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        await todoInput.fill('Old task name');
        await page.keyboard.press('Enter');

        const todoItem = page.getByTestId('todo-item').first();
        await todoItem.dblclick();

        const editInput = todoItem.locator('.edit');
        await editInput.fill('Updated task name');
        await page.keyboard.press('Enter');

        await expect(todoItem).not.toHaveText('Old task name');
        await expect(todoItem).toHaveText('Updated task name');
    });

    // ========================================================
    // Task 5. Удаление задачи и очистка выполненных задач
    // ========================================================
    test("Task 5: should delete single item and clear all completed tasks from list", async ({ page }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        const tasks = ['Task A', 'Task B', 'Task C'];
        for (const task of tasks) {
            await todoInput.fill(task);
            await page.keyboard.press('Enter');
        }

        const itemToDelete = page.getByTestId('todo-item').nth(0);
        await itemToDelete.hover();
        await itemToDelete.locator('.destroy').click();

        const todoItems = page.getByTestId('todo-item');
        await expect(todoItems).toHaveCount(2);

        await todoItems.nth(0).locator('.toggle').click();
        await page.getByRole('button', { name: 'Clear completed' }).click();

        await expect(page.getByText('Task B')).not.toBeVisible();
        await expect(todoItems).toHaveCount(1);
    });

    // ========================================================
    // Task 6. Сохранение состояния приложения
    // ========================================================
    test("Task 6: should persist application state after manual page reload", async ({ page, context }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        await todoInput.fill('Persistent task 1');
        await page.keyboard.press('Enter');
        await todoInput.fill('Persistent task 2');
        await page.keyboard.press('Enter');

        const todoItems = page.getByTestId('todo-item');
        await todoItems.nth(0).locator('.toggle').click();

        await context.storageState({ path: statePath });
        await page.reload();

        await expect(todoItems).toHaveCount(2);
        await expect(todoItems.nth(0)).toHaveClass(/completed/);
    });

    // ========================================================
    // Task 7. Screenshot testing
    // ========================================================
    test("Task 7: should perform screenshot comparison for TodoMVC section", async ({ page }) => {
        const todoInput = page.getByPlaceholder('What needs to be done?');

        const tasks = ['Visual 1', 'Visual 2', 'Visual 3'];
        for (const task of tasks) {
            await todoInput.fill(task);
            await page.keyboard.press('Enter');
        }

        await page.getByTestId('todo-item').nth(1).locator('.toggle').click();
        await page.getByRole('link', { name: 'All' }).click();

        const todoAppBlock = page.locator('.todoapp');
        await expect(todoAppBlock).toHaveScreenshot('todomvc-layout-snapshot.png');
    });
});

// ========================================================
// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ СО ЗВЕЗДОЧКОЙ
// ========================================================
test.describe("TodoMVC Mobile Viewport Tests", () => {

    test.use({
        viewport: { width: 390, height: 844 } // Размеры под мобильный экран
    });

    test("should render and add items correctly on mobile viewport size", async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/', { waitUntil: 'domcontentloaded' });

        const todoInput = page.getByPlaceholder('What needs to be done?');
        await todoInput.waitFor({ state: 'visible', timeout: 5000 });

        await todoInput.fill('Mobile task 1');
        await page.keyboard.press('Enter');

        const todoItems = page.getByTestId('todo-item');
        await expect(todoItems).toHaveCount(1);

        const todoAppBlock = page.locator('.todoapp');
        await expect(todoAppBlock).toHaveScreenshot('todomvc-mobile-layout-snapshot.png');
    });
});
