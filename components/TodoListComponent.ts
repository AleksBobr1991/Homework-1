import type { Locator, Page } from '@playwright/test';

export class TodoListComponent {
  readonly items: Locator;

  constructor(private readonly page: Page) {
    this.items = page.locator('.todo-list li');
  }

  getByText(todoText: string): Locator {
    return this.items.filter({
      has: this.page.getByText(todoText, {
        exact: true,
      }),
    });
  }

  async complete(todoText: string): Promise<void> {
    await this
      .getByText(todoText)
      .locator('.toggle')
      .check();
  }

  async delete(todoText: string): Promise<void> {
    const todo = this.getByText(todoText);

    await todo.hover();
    await todo.locator('.destroy').click();
  }

  async edit(
    oldText: string,
    newText: string,
  ): Promise<void> {
    const todo = this.getByText(oldText);

    await todo
      .getByText(oldText, {
        exact: true,
      })
      .dblclick();

    const editInput = todo.locator('.edit');

    await editInput.fill(newText);
    await editInput.press('Enter');
  }
}
