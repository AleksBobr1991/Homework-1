export function getCurrentDateTime(): string {
  return new Date()
    .toISOString()
    .replace(/[:.]/g, '-');
}

export function getRandomTodoText(
  prefix = 'Todo',
): string {
  const randomPart = Math.random()
    .toString(36)
    .slice(2, 10);

  return `${prefix} ${randomPart}`;
}

export function getUniqueTodoText(
  prefix = 'Todo',
): string {
  const randomPart = Math.random()
    .toString(36)
    .slice(2, 6);

  return `${prefix} ${getCurrentDateTime()} ${randomPart}`;
}
