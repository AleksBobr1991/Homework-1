import { test, expect } from '../../fixtures/app.fixture';

type ProductsResponse = {
  responseCode: number;
  products: {
    id: number;
    name: string;
  }[];
};

test.describe('UI and API integration', () => {
  test('should get product through API and find it in UI @api', async ({
    productsApi,
    productsPage,
  }) => {
    const response = await productsApi.getAllProducts();

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ProductsResponse;

    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);

    const productName = body.products[0].name;

    await productsPage.open();
    await productsPage.searchForProduct(productName);

    const productCard = productsPage.getProductCardByName(productName);

    await expect(productCard.name).toHaveText(productName);
  });
});
