import type { Locator, Page } from '@playwright/test';

import { TodoListComponent } from '../components/TodoListComponent';

export class TodoPage {
  readonly heading: Locator;
  readonly newTodoInput: Locator;
  readonly todoApp: Locator;
  readonly todoItems: Locator;
  readonly activeCounter: Locator;
  readonly clearCompletedButton: Locator;
  readonly todoList: TodoListComponent;

  constructor(readonly page: Page) {
    this.heading = page.getByRole('heading', {
      name: 'todos',
    });

    this.newTodoInput = page.getByPlaceholder(
      'What needs to be done?',
    );

    this.todoApp = page.locator('.todoapp');
    this.activeCounter = page.locator('.todo-count');

    this.clearCompletedButton = page.getByRole(
      'button',
      {
        name: 'Clear completed',
      },
    );

    this.todoList = new TodoListComponent(page);
    this.todoItems = this.todoList.items;
  }

  async open(): Promise<void> {
    await this.page.goto('./');
  }

  async addTodo(todoText: string): Promise<void> {
    await this.newTodoInput.fill(todoText);
    await this.newTodoInput.press('Enter');
  }

  async addTodos(
    todoList: readonly string[],
  ): Promise<void> {
    for (const todoText of todoList) {
      await this.addTodo(todoText);
    }
  }

  async completeTodo(todoText: string): Promise<void> {
    await this.todoList.complete(todoText);
  }

  async deleteTodo(todoText: string): Promise<void> {
    await this.todoList.delete(todoText);
  }

  async editTodo(
    oldText: string,
    newText: string,
  ): Promise<void> {
    await this.todoList.edit(oldText, newText);
  }

  async filterByAll(): Promise<void> {
    await this.page
      .getByRole('link', {
        name: 'All',
        exact: true,
      })
      .click();
  }

  async filterByActive(): Promise<void> {
    await this.page
      .getByRole('link', {
        name: 'Active',
        exact: true,
      })
      .click();
  }

  async filterByCompleted(): Promise<void> {
    await this.page
      .getByRole('link', {
        name: 'Completed',
        exact: true,
      })
      .click();
  }

  async clearCompleted(): Promise<void> {
    await this.clearCompletedButton.click();
  }

  getTodoItems(): Locator {
    return this.todoItems;
  }

  getTodoByText(todoText: string): Locator {
    return this.todoList.getByText(todoText);
  }

  async getTodosCount(): Promise<number> {
    return this.todoItems.count();
  }
}
