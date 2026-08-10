import type { APIRequestContext, APIResponse } from '@playwright/test';

import { BaseApiClient } from './BaseApiClient';

export class ProductsApi extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getAllProducts(): Promise<APIResponse> {
    return this.get('/api/productsList');
  }

  async postToProductsList(): Promise<APIResponse> {
    return this.post('/api/productsList');
  }

  async searchProducts(searchProduct: string): Promise<APIResponse> {
    return this.post('/api/searchProduct', {
      search_product: searchProduct,
    });
  }
}
