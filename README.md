# Playwright POM Homework

Автоматизированные тесты TodoMVC на Playwright с использованием Page Object Model.

## Что реализовано

- 7 тестовых сценариев
- Page Object TodoPage
- компонент TodoListComponent
- кастомная fixture
- отдельные тестовые данные
- helper-функции
- storage state
- screenshot testing
- HTML report
- trace и screenshot при падении теста

## Установка

npm install
npx playwright install chromium

## Запуск всех тестов

npm test

## Запуск с открытым браузером

npm run test:headed

## Запуск в Playwright UI

npm run test:ui

## Проверка TypeScript

npm run typecheck

## Открытие HTML-отчёта

npm run report

## Обновление screenshot snapshots

npm run test:update-snapshots

## Структура проекта

Homework-1/
- components/TodoListComponent.ts
- fixtures/todo.fixture.ts
- helpers/random.ts
- pages/TodoPage.ts
- test-data/todos.ts
- tests/todomvc.spec.ts
- tests/todomvc.spec.ts-snapshots/
- playwright.config.ts
- tsconfig.json
- package.json
- README.md

## Тестируемый сайт

https://demo.playwright.dev/todomvc/
