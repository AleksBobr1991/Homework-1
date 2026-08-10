import { test, expect } from '../fixtures/app.fixture';

import { categories, products, searchData } from '../test-data/testData';

test.describe('Products and search', () => {
  test.beforeEach(async ({ productsPage }) => {
    await productsPage.open();
  });

  test('should display the products catalogue', async ({ productsPage }) => {
    await expect(productsPage.allProductsHeading).toBeVisible();

    expect(await productsPage.getProductsCount()).toBeGreaterThan(0);
  });

  test('should find a product by valid name', async ({ productsPage }) => {
    await productsPage.searchForProduct(searchData.validProductName);

    await expect(productsPage.searchedProductsHeading).toBeVisible();

    const productCard = productsPage.getProductCardByName(
      products.blueTop.name,
    );

    await expect(productCard.name).toHaveText(products.blueTop.name);

    await expect(productCard.price).toHaveText(products.blueTop.price);
  });

  test('should show no product cards for an unknown product', async ({
    productsPage,
  }) => {
    await productsPage.searchForProduct(searchData.missingProductName);

    await expect(productsPage.searchedProductsHeading).toBeVisible();

    await expect(productsPage.productCards).toHaveCount(0);
  });

  test('should open product details from the catalogue', async ({
    productsPage,
    productDetailsPage,
    page,
  }) => {
    const productCard = productsPage.getProductCardByName(
      products.blueTop.name,
    );

    await productCard.openDetails();

    await expect(page).toHaveURL(
      new RegExp(`/product_details/${products.blueTop.id}$`),
    );

    await expect(productDetailsPage.productName).toHaveText(
      products.blueTop.name,
    );

    await expect(productDetailsPage.productPrice).toHaveText(
      products.blueTop.price,
    );

    await expect(productDetailsPage.productCategory).toContainText(
      products.blueTop.category,
    );

    await expect(productDetailsPage.productAvailability).toContainText(
      products.blueTop.availability,
    );

    await expect(productDetailsPage.productCondition).toContainText(
      products.blueTop.condition,
    );

    await expect(productDetailsPage.productBrand).toContainText(
      products.blueTop.brand,
    );
  });

  test('should filter products by Women Dress category', async ({
    productsPage,
    page,
  }) => {
    await productsPage.selectWomenDressCategory();

    await expect(page).toHaveURL(/\/category_products\/1/);

    await expect(productsPage.categoryProductsHeading).toContainText(
      categories.womenDressHeading,
    );

    expect(await productsPage.getProductsCount()).toBeGreaterThan(0);
  });
});
