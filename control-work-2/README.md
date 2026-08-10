# UI Test Automation Framework

End-to-end test automation framework for the Automation Exercise website.

## Website

https://www.automationexercise.com/

## Technology stack

- Playwright
- TypeScript
- Page Object Model
- ESLint
- Prettier
- HTML Reporter

## Test coverage

The project contains 13 end-to-end tests covering four functional areas:

1. Home and navigation
2. Products and search
3. Shopping cart
4. Authentication and registration

Detailed test cases are described in `TEST_CASES.md`.

## Implemented scenarios

### Home and navigation

- Open the Automation Exercise home page
- Navigate to the Products page from the header

### Products and search

- Display the products catalogue
- Search for an existing product
- Search for a non-existing product
- Open product details
- Filter products by category

### Shopping cart

- Add two products from the catalogue
- Add a product with selected quantity
- Verify product price and total
- Remove a product from the cart

### Authentication and registration

- Show an error for invalid login credentials
- Start registration with unique user data

## Project structure

control-work-2/

- tests/ — end-to-end test scenarios and assertions
- pages/ — Page Object classes
- components/ — reusable UI components
- fixtures/ — custom Playwright fixtures
- test-data/ — test data
- helpers/ — data generation and network helpers
- playwright.config.ts — Playwright configuration
- TEST_CASES.md — manual test-case documentation
- README.md — project documentation

## Main Page Objects

- BasePage
- HomePage
- ProductsPage
- ProductDetailsPage
- CartPage
- LoginPage
- SignupPage

## Components

- HeaderComponent
- CookieConsentComponent
- ProductCardComponent
- AddToCartModalComponent
- CartItemComponent

## Prerequisites

Install Node.js version 20 or newer.

Check the installed versions:

node -v
npm -v

## Installation

Install project dependencies:

npm install

Install Playwright browsers:

npx playwright install chromium firefox

## Run all tests

The following command runs tests in Chromium and Firefox:

npm test

## Run tests in Chromium

npm run test:chromium

## Run tests in Firefox

npm run test:firefox

## Run tests in headed mode

npm run test:headed

## Run tests in Playwright UI mode

npm run test:ui

## Open HTML report

Run the tests first:

npm test

Then open the report:

npm run report

## Code quality checks

TypeScript check:

npm run typecheck

ESLint check:

npm run lint

Prettier check:

npm run format:check

Format the project:

npm run format

## Test artifacts

For failed tests, Playwright saves:

- screenshot
- video
- trace

Artifacts are stored in `test-results/`.

The HTML report is stored in `playwright-report/`.

These folders are excluded from Git.

## Browser configuration

The framework runs tests in:

- Chromium
- Firefox

## Architecture

### Test layer

The `tests/` directory contains test scenarios, assertions, and calls to Page Object methods.

### Page Object layer

The `pages/` and `components/` directories contain locators, user actions, and business-level methods.

### Test data layer

The `test-data/` directory contains product information, login data, cart data, and expected messages.

### Helper layer

The `helpers/` directory contains:

- unique user data generation
- unique email generation
- third-party advertisement request blocking

## Important notes

- No real payments or purchases are performed.
- Registration is stopped before account creation.
- Third-party advertisements are blocked to improve test stability.
- The `node_modules/`, `test-results/`, and `playwright-report/` folders must not be committed to Git.
