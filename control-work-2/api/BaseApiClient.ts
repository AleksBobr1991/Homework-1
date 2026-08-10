import type { APIRequestContext, APIResponse } from '@playwright/test';

type FormDataPayload = Record<string, string | number | boolean>;

export abstract class BaseApiClient {
  constructor(protected readonly request: APIRequestContext) {}

  protected async get(
    url: string,
    params?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.request.get(url, {
      params,
    });
  }

  protected async post(
    url: string,
    data?: FormDataPayload,
  ): Promise<APIResponse> {
    return this.request.post(url, {
      form: data,
    });
  }

  protected async put(
    url: string,
    data?: FormDataPayload,
  ): Promise<APIResponse> {
    return this.request.put(url, {
      form: data,
    });
  }

  protected async delete(
    url: string,
    data?: FormDataPayload,
  ): Promise<APIResponse> {
    return this.request.delete(url, {
      form: data,
    });
  }
}
