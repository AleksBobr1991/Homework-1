import { test, expect } from '../../fixtures/app.fixture';

type Product = {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: {
    usertype: {
      usertype: string;
    };
    category: string;
  };
};

type ProductsResponse = {
  responseCode: number;
  products: Product[];
};

type ApiMessageResponse = {
  responseCode: number;
  message: string;
};

test.describe('Products API @api', () => {
  test('should return all products @smoke', async ({ productsApi }) => {
    const response = await productsApi.getAllProducts();

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ProductsResponse;

    expect(body.responseCode).toBe(200);

    expect(Array.isArray(body.products)).toBe(true);

    expect(body.products.length).toBeGreaterThan(0);

    expect(body.products[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(String),
        brand: expect.any(String),
      }),
    );
  });

  test('should find Blue Top through product search', async ({
    productsApi,
  }) => {
    const response = await productsApi.searchProducts('Blue Top');

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ProductsResponse;

    expect(body.responseCode).toBe(200);

    expect(body.products.some((product) => product.name === 'Blue Top')).toBe(
      true,
    );
  });

  test('should return empty product list for unknown search', async ({
    productsApi,
  }) => {
    const response = await productsApi.searchProducts('Unknown Product 987654');

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ProductsResponse;

    expect(body.responseCode).toBe(200);
    expect(body.products).toEqual([]);
  });

  test('should reject POST request to products list', async ({
    productsApi,
  }) => {
    const response = await productsApi.postToProductsList();

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ApiMessageResponse;

    expect(body.responseCode).toBe(405);

    expect(body.message).toContain('This request method is not supported');
  });
});
