# UI and API Test Automation Framework

Учебный проект автоматизации тестирования сайта Automation Exercise.

Проект является расширением контрольной работы №2 и включает UI end-to-end тесты, API-тесты, Page Object Model, smoke/regression наборы, GitHub Actions и проверки качества кода.

## Tested website

https://www.automationexercise.com/

## Technology stack

- Playwright
- TypeScript
- Page Object Model
- Playwright APIRequestContext
- ESLint
- Prettier
- GitHub Actions
- Playwright HTML Reporter

## Requirements

- Node.js 20+
- npm

Проверить версии:

node -v
npm -v

## Installation

Установить зависимости:

npm install

Установить браузеры Playwright:

npx playwright install chromium firefox

## Test coverage

Проект содержит:

- 22 UI test scenarios
- 8 API test scenarios
- 30 unique automated scenarios
- Chromium and Firefox support
- smoke test suite
- regression test suite

## Functional areas

Автоматизированы следующие функциональности:

1. Home page
2. Navigation
3. Authentication
4. Registration
5. Products catalogue
6. Product search
7. Product categories
8. Product details
9. Shopping cart
10. Contact form
11. Subscription
12. Recommended items
13. Test Cases page
14. Products API
15. Brands API
16. Login verification API

## Project structure

control-work-2/

- api/ — API client layer
- components/ — reusable page components
- fixtures/ — Playwright fixtures
- helpers/ — helper functions
- pages/ — Page Object classes
- schemas/ — response schemas
- test-data/ — test data
- tests/
  - ui/ — UI end-to-end tests
  - api/ — API tests
- playwright.config.ts — Playwright configuration
- eslint.config.mjs — ESLint configuration
- .prettierrc — Prettier configuration
- TEST_CASES.md — automated test cases
- README.md — project documentation

GitHub Actions workflows are stored in the repository root:

.github/workflows/

- api-tests.yml
- smoke-tests.yml
- regression-tests.yml

## Run UI tests

Run UI tests in Chromium:

npm run test:ui

## Run API tests

npm run test:api

## Run smoke tests

npm run test:smoke

Smoke tests use the tag:

@smoke

## Run regression tests

npm run test:regression

Regression includes all automated UI and API tests.

## Run all tests

npm test

## Run Chromium

npm run test:chromium

## Run Firefox

npm run test:firefox

## Run headed mode

npm run test:headed

## TypeScript check

npm run typecheck

## ESLint

npm run lint

## Prettier

Check formatting:

npm run format:check

Format project:

npm run format

## HTML report

After running tests:

npm run report

The Playwright HTML report is generated in:

playwright-report/

## Test artifacts

On failed UI tests Playwright can save:

- screenshots
- videos
- traces

Artifacts are stored in:

test-results/

Local reports and test artifacts are ignored by Git.

## Tags

### @smoke

Marks critical smoke scenarios.

Smoke suite contains the most important checks such as:

- API availability
- product API availability
- Contact Us page
- cart navigation
- subscription form

### @api

Marks API tests.

All API tests are located separately in:

tests/api/

## API architecture

API requests are isolated from tests using API client classes:

- BaseApiClient
- ProductsApi
- BrandsApi
- AccountApi

API clients execute requests.

Assertions remain in test files.

## UI architecture

UI tests use Page Object Model.

Page Objects contain:

- locators
- user actions
- business methods
- page state access

Reusable UI elements are stored in components.

Examples:

- HeaderComponent
- ProductCardComponent
- CartItemComponent
- CookieConsentComponent
- SubscriptionComponent
- RecommendedItemsComponent

## Fixtures

Custom Playwright fixtures provide:

- Page Objects
- API clients
- common browser setup
- third-party advertisement blocking

## Test data

Reusable test data is stored in:

test-data/

Unique user data and email addresses are created using helper generators.

## GitHub Actions

Three workflows are configured.

### API Tests

Runs:

- on Pull Request
- on push to main
- manually

Performs:

- npm ci
- ESLint
- Prettier check
- API tests
- report artifact upload

### Smoke Tests

Runs:

- on Pull Request
- on push to main
- manually

Performs:

- dependency installation
- browser installation
- ESLint
- Prettier check
- @smoke tests
- report upload
- failure artifacts upload

### Regression Tests

Runs:

- manually
- on schedule

Performs:

- dependency installation
- browser installation
- ESLint
- Prettier check
- full regression
- report upload
- failure artifacts upload

The scheduled regression runs twice per week to reduce unnecessary traffic to the public demo website.

## Environment variables

The current project does not require private credentials for its automated scenarios.

Secrets, passwords, tokens and API keys must not be committed to Git.

If private configuration is added later, it should be provided through environment variables or GitHub Secrets.

A real `.env` file must not be committed.

## Known limitations

Automation Exercise is a public demo website.

Possible limitations:

- response time can vary
- third-party advertisements can interfere with UI interaction
- network delays can affect test duration
- public test data can change

Third-party advertisement requests are blocked by a helper to improve test stability.

Regression uses a limited number of workers to avoid excessive load on the public website.

## Test cases

All automated scenarios are documented in:

TEST_CASES.md

## Important restrictions

The project:

- does not perform real payments
- does not confirm real purchases
- does not bypass CAPTCHA
- does not store secrets in Git
- does not use fixed waitForTimeout delays as the main synchronization method
