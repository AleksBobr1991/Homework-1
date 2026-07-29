import { test as base } from '@playwright/test';

import { TodoPage } from '../pages/TodoPage';

type TodoFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<TodoFixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
});

export { expect } from '@playwright/test';
