import {
  test as base,
  type BrowserContext,
} from '@playwright/test';

import { TodoPage } from '../pages/TodoPage';

type TodoFixtures = {
  todoPage: TodoPage;

  restoreTodoPage: (
      storageStatePath: string,
  ) => Promise<TodoPage>;
};

export const test = base.extend<TodoFixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },

  restoreTodoPage: async (
      {
        browser,
        baseURL,
      },
      use,
  ) => {
    const createdContexts: BrowserContext[] = [];

    await use(
        async (
            storageStatePath: string,
        ): Promise<TodoPage> => {
          const context = await browser.newContext({
            storageState: storageStatePath,
            baseURL,
          });

          createdContexts.push(context);

          const page = await context.newPage();
          const todoPage = new TodoPage(page);

          await todoPage.open();

          return todoPage;
        },
    );

    for (const context of createdContexts) {
      await context.close();
    }
  },
});

export { expect } from '@playwright/test';