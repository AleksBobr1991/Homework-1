export const todoItems = [
  'Learn Playwright',
  'Write API tests',
  'Review homework',
] as const;

export const editableTodo = {
  oldText: 'Old task name',
  newText: 'Updated task name',
} as const;

export const persistentTodos = [
  'Persistent task 1',
  'Persistent task 2',
] as const;
