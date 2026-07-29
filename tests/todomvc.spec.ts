import path from 'node:path';

import {
  test,
  expect,
} from '../fixtures/todo.fixture';

import { TodoPage } from '../pages/TodoPage';

import {
  editableTodo,
  persistentTodos,
  todoItems,
} from '../test-data/todos';

import { getCurrentDateTime } from '../helpers/random';

const storageStatePath = path.resolve(
  '.auth',
  `todomvc-state-${getCurrentDateTime()}.json`,
);

test.use({
  viewport: {
    width: 1280,
    height: 720,
  },
  locale: 'en-US',
  timezoneId: 'Europe/Vilnius',
  colorScheme: 'light',
});

test.describe('TodoMVC tests with POM', () => {
  test.beforeEach(async ({ todoPage }) => {
    await todoPage.open();
  });

  test('should load TodoMVC page', async ({ todoPage }) => {
    await expect(todoPage.heading).toBeVisible();
    await expect(todoPage.newTodoInput).toBeVisible();

    await expect(todoPage.newTodoInput).toHaveAttribute(
      'placeholder',
      'What needs to be done?',
    );
  });

  test(
    'should add several todo items and update active counter',
    async ({ todoPage }) => {
      await todoPage.addTodos(todoItems);

      await expect(todoPage.todoItems).toHaveCount(
        todoItems.length,
      );

      await expect(todoPage.todoItems).toHaveText([
        ...todoItems,
      ]);

      await expect(todoPage.activeCounter).toContainText(
        `${todoItems.length} items left`,
      );
    },
  );

  test(
    'should complete a todo and filter items',
    async ({ todoPage }) => {
      await todoPage.addTodos(todoItems);

      await todoPage.completeTodo(todoItems[0]);

      await todoPage.filterByActive();

      await expect(
        todoPage.getTodoByText(todoItems[0]),
      ).toBeHidden();

      await expect(todoPage.todoItems).toHaveText([
        todoItems[1],
        todoItems[2],
      ]);

      await todoPage.filterByCompleted();

      await expect(todoPage.todoItems).toHaveCount(1);
      await expect(todoPage.todoItems).toHaveText([
        todoItems[0],
      ]);

      await todoPage.filterByAll();

      await expect(todoPage.todoItems).toHaveCount(
        todoItems.length,
      );

      await expect(todoPage.todoItems).toHaveText([
        ...todoItems,
      ]);
    },
  );

  test('should edit a todo', async ({ todoPage }) => {
    await todoPage.addTodo(editableTodo.oldText);

    await todoPage.editTodo(
      editableTodo.oldText,
      editableTodo.newText,
    );

    await expect(
      todoPage.getTodoByText(editableTodo.oldText),
    ).toHaveCount(0);

    await expect(
      todoPage.getTodoByText(editableTodo.newText),
    ).toBeVisible();
  });

  test(
    'should delete a todo and clear completed items',
    async ({ todoPage }) => {
      await todoPage.addTodos(todoItems);

      await todoPage.deleteTodo(todoItems[0]);

      await expect(todoPage.todoItems).toHaveCount(2);

      await todoPage.completeTodo(todoItems[1]);
      await todoPage.clearCompleted();

      await expect(todoPage.todoItems).toHaveCount(1);

      await expect(todoPage.todoItems).toHaveText([
        todoItems[2],
      ]);

      await expect(todoPage.activeCounter).toContainText(
        '1 item left',
      );
    },
  );

  test(
    'should save and restore application state',
    async ({
      todoPage,
      context,
      browser,
    }) => {
      await todoPage.addTodos(persistentTodos);
      await todoPage.completeTodo(persistentTodos[0]);

      await context.storageState({
        path: storageStatePath,
      });

      const restoredContext = await browser.newContext({
        storageState: storageStatePath,
        baseURL: 'https://demo.playwright.dev/todomvc/',
        viewport: {
          width: 1280,
          height: 720,
        },
        locale: 'en-US',
        timezoneId: 'Europe/Vilnius',
        colorScheme: 'light',
      });

      try {
        const restoredPage = new TodoPage(
          await restoredContext.newPage(),
        );

        await restoredPage.open();

        await expect(restoredPage.todoItems).toHaveText([
          ...persistentTodos,
        ]);

        await expect(
          restoredPage.getTodoByText(persistentTodos[0]),
        ).toHaveClass(/completed/);

        await expect(
          restoredPage.getTodoByText(persistentTodos[1]),
        ).not.toHaveClass(/completed/);

        await expect(
          restoredPage.activeCounter,
        ).toContainText('1 item left');
      } finally {
        await restoredContext.close();
      }
    },
  );

  test(
    'should match TodoMVC visual snapshot',
    async ({ todoPage }) => {
      await todoPage.addTodos(todoItems);
      await todoPage.completeTodo(todoItems[0]);

      await expect(todoPage.todoApp).toHaveScreenshot(
        'todomvc-app.png',
        {
          animations: 'disabled',
          caret: 'hide',
        },
      );
    },
  );
});
