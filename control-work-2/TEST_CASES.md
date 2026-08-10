# Test Cases

## TC-001 — Open Automation Exercise home page

**Feature:** Home

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- Automation Exercise website is available.

**Steps:**

1. Open the Automation Exercise home page.
2. Check the browser page title.
3. Check that the Featured Items section is visible.

**Expected result:**

- The page title contains `Automation Exercise`.
- The Featured Items section is displayed.

---

## TC-002 — Navigate to Products from the header

**Feature:** Navigation

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Automation Exercise home page.

**Steps:**

1. Click the Products link in the header.
2. Wait for navigation to complete.

**Expected result:**

- The Products page is opened.
- The current URL contains `/products`.

---

## TC-003 — Display the products catalogue

**Feature:** Products

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- Automation Exercise website is available.

**Steps:**

1. Open the Products page.
2. Check that the All Products heading is displayed.
3. Count the displayed product cards.

**Expected result:**

- The All Products heading is visible.
- At least one product is displayed.

---

## TC-004 — Search for an existing product

**Feature:** Product search

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Products page.
- Product `Blue Top` exists in the catalogue.

**Steps:**

1. Enter `Blue Top` into the product search field.
2. Click the search button.
3. Check the search results heading.
4. Check the product name and price.

**Expected result:**

- The Searched Products heading is visible.
- Product `Blue Top` is displayed.
- The product price is `Rs. 500`.

---

## TC-005 — Search for a non-existing product

**Feature:** Product search

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Products page.

**Steps:**

1. Enter a product name that does not exist.
2. Click the search button.
3. Check the search results section.
4. Count the displayed product cards.

**Expected result:**

- The Searched Products heading is visible.
- No product cards are displayed.

---

## TC-006 — Open product details from the catalogue

**Feature:** Product details

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Products page.
- Product `Blue Top` exists in the catalogue.

**Steps:**

1. Find the `Blue Top` product card.
2. Click View Product.
3. Check the opened URL.
4. Check the product name.
5. Check the product price.
6. Check the category.
7. Check availability, condition, and brand.

**Expected result:**

- The product details page for product ID `1` is opened.
- Product name is `Blue Top`.
- Product price is `Rs. 500`.
- Category is `Women > Tops`.
- Availability is `In Stock`.
- Condition is `New`.
- Brand is `Polo`.

---

## TC-007 — Filter products by Women Dress category

**Feature:** Product categories

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Products page.

**Steps:**

1. Expand the Women category.
2. Select the Dress subcategory.
3. Check the opened URL.
4. Check the category heading.
5. Count the displayed products.

**Expected result:**

- The Women Dress category page is opened.
- The URL contains `/category_products/1`.
- The heading contains `Women - Dress Products`.
- At least one product is displayed.

---

## TC-008 — Add two products to the cart from the catalogue

**Feature:** Shopping cart

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Products page.
- Products `Blue Top` and `Men Tshirt` exist.

**Steps:**

1. Add `Blue Top` to the cart.
2. Continue shopping.
3. Add `Men Tshirt` to the cart.
4. Open the cart.
5. Check the number of cart rows.
6. Check both product names.

**Expected result:**

- The cart page is opened.
- Two products are displayed in the cart.
- `Blue Top` and `Men Tshirt` are present.

---

## TC-009 — Add a product with selected quantity

**Feature:** Shopping cart

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- Product `Blue Top` exists.
- User is on the product details page.

**Steps:**

1. Open the `Blue Top` details page.
2. Set the quantity to `2`.
3. Add the product to the cart.
4. Open the cart.
5. Check the product name and quantity.

**Expected result:**

- Product `Blue Top` is displayed in the cart.
- Product quantity is `2`.

---

## TC-010 — Display the correct price and total in the cart

**Feature:** Shopping cart

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- Product `Blue Top` exists.
- The price of one item is `Rs. 500`.

**Steps:**

1. Open the `Blue Top` details page.
2. Set the quantity to `2`.
3. Add the product to the cart.
4. Open the cart.
5. Check the item price.
6. Check the total price.

**Expected result:**

- The item price is `Rs. 500`.
- The total price for two items is `Rs. 1000`.

---

## TC-011 — Remove a selected product from the cart

**Feature:** Shopping cart

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- Products `Blue Top` and `Men Tshirt` exist.

**Steps:**

1. Open the Products page.
2. Add `Blue Top` to the cart.
3. Continue shopping.
4. Add `Men Tshirt` to the cart.
5. Open the cart.
6. Verify that two products are displayed.
7. Remove `Blue Top`.
8. Check the remaining cart products.

**Expected result:**

- `Blue Top` is removed from the cart.
- One product remains in the cart.
- `Men Tshirt` is still displayed.

---

## TC-012 — Show an error for invalid login credentials

**Feature:** Authentication

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Signup/Login page.

**Steps:**

1. Enter an invalid email.
2. Enter an incorrect password.
3. Click the Login button.
4. Check the displayed error message.

**Expected result:**

- Login is not completed.
- The message `Your email or password is incorrect!` is displayed.

---

## TC-013 — Start registration with unique user data

**Feature:** Registration

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Signup/Login page.
- A unique email address has been generated.

**Steps:**

1. Enter a generated user name.
2. Enter a generated unique email.
3. Click the Signup button.
4. Check the opened URL.
5. Check the account information heading.
6. Check the prefilled name and email.

**Expected result:**

- The signup page is opened.
- The URL contains `/signup`.
- The Enter Account Information heading is displayed.
- The generated name and email are prefilled correctly.

---

## TC-014 — Open Contact Us page

**Feature:** Contact Us

**Type:** UI

**Priority:** Critical

**Tag:** @smoke

**Automation status:** Automated

**Preconditions:**

- Automation Exercise website is available.

**Steps:**

1. Open the Contact Us page.
2. Check that the Get In Touch heading is displayed.
3. Check that the contact form is visible.

**Expected result:**

- Contact Us page is opened.
- Contact form is displayed.

---

## TC-015 — Submit Contact Us form

**Feature:** Contact Us

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Contact Us page.

**Steps:**

1. Enter name.
2. Enter email.
3. Enter subject.
4. Enter message.
5. Submit the form.
6. Accept the confirmation dialog.

**Expected result:**

- Success message is displayed.

---

## TC-016 — Display subscription form

**Feature:** Subscription

**Type:** UI

**Priority:** Critical

**Tag:** @smoke

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Open the Home page.
2. Check the subscription email field.
3. Check the Subscribe button.

**Expected result:**

- Subscription form is displayed.

---

## TC-017 — Subscribe with valid email

**Feature:** Subscription

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Generate a unique email.
2. Enter the email into the subscription form.
3. Click Subscribe.

**Expected result:**

- Subscription success message is displayed.

---

## TC-018 — Display Recommended Items section

**Feature:** Recommended Items

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Open the Home page.
2. Locate the Recommended Items section.
3. Verify the heading.

**Expected result:**

- Recommended Items section is visible.

---

## TC-019 — Display recommended products

**Feature:** Recommended Items

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Open the Home page.
2. Locate Recommended Items.
3. Count displayed products.

**Expected result:**

- At least one recommended product is displayed.

---

## TC-020 — Navigate to Cart from header

**Feature:** Navigation

**Type:** UI

**Priority:** Critical

**Tag:** @smoke

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Click the Cart link in the header.

**Expected result:**

- Cart page is opened.
- URL contains `/view_cart`.

---

## TC-021 — Open Test Cases page

**Feature:** Test Cases

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Click Test Cases.

**Expected result:**

- Test Cases page is opened.
- URL contains `/test_cases`.

---

## TC-022 — Display Test Cases heading

**Feature:** Test Cases

**Type:** UI

**Priority:** High

**Tag:** @regression

**Automation status:** Automated

**Preconditions:**

- User is on the Home page.

**Steps:**

1. Open the Test Cases page.
2. Verify the page heading.

**Expected result:**

- Test Cases heading is displayed.

---

## TC-023 — Get all products API

**Feature:** Products API

**Type:** API

**Priority:** Critical

**Tag:** @api @smoke

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send GET request to `/api/productsList`.
2. Validate the response body.

**Expected result:**

- HTTP status is 200.
- API response code is 200.
- Product list is not empty.
- Product objects contain expected fields.

---

## TC-024 — Search product by name API

**Feature:** Products API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send POST request to `/api/searchProduct`.
2. Pass `Blue Top` as the search value.

**Expected result:**

- HTTP status is 200.
- Product `Blue Top` is returned.

---

## TC-025 — Search unknown product API

**Feature:** Products API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send POST request to `/api/searchProduct`.
2. Pass a non-existing product name.

**Expected result:**

- HTTP status is 200.
- Returned product list is empty.

---

## TC-026 — Get all brands API

**Feature:** Brands API

**Type:** API

**Priority:** Critical

**Tag:** @api @smoke

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send GET request to `/api/brandsList`.
2. Validate the response body.

**Expected result:**

- HTTP status is 200.
- API response code is 200.
- Brand list is not empty.

---

## TC-027 — Verify invalid login API

**Feature:** Login API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send POST request to `/api/verifyLogin`.
2. Pass invalid email and password.

**Expected result:**

- HTTP status is 200.
- API response code is 404.
- Message indicates that the user was not found.

---

## TC-028 — Verify login without email API

**Feature:** Login API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send POST request to `/api/verifyLogin`.
2. Do not provide an email.

**Expected result:**

- HTTP status is 200.
- API response code is 400.
- Bad Request message is returned.

---

## TC-029 — Reject POST request to Products List

**Feature:** Products API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send POST request to `/api/productsList`.

**Expected result:**

- HTTP status is 200.
- API response code is 405.
- Message indicates that the request method is not supported.

---

## TC-030 — Reject PUT request to Brands List

**Feature:** Brands API

**Type:** API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- API is available.

**Steps:**

1. Send PUT request to `/api/brandsList`.

**Expected result:**

- HTTP status is 200.
- API response code is 405.
- Message indicates that the request method is not supported.

---

## TC-031 — Get product through API and verify it in UI

**Feature:** UI and API integration

**Type:** UI + API

**Priority:** High

**Tag:** @api @regression

**Automation status:** Automated

**Preconditions:**

- Automation Exercise website and API are available.

**Steps:**

1. Get the products list through API.
2. Take the name of the first returned product.
3. Open the Products page in UI.
4. Search for the product using its API value.
5. Verify the product in the UI search results.

**Expected result:**

- API returns products successfully.
- The product obtained through API is found in the UI.
- The displayed product name matches the API value.
