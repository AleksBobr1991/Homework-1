export type GeneratedUser = {
  name: string;
  email: string;
  password: string;
};

function generateUniqueSuffix(): string {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).slice(2, 8);

  return `${timestamp}-${randomPart}`;
}

export function generateUniqueEmail(prefix = 'automation.student'): string {
  const suffix = generateUniqueSuffix();

  return `${prefix}.${suffix}@example.com`;
}

export function generateUserData(): GeneratedUser {
  const suffix = generateUniqueSuffix();

  return {
    name: `Automation Student ${suffix}`,
    email: `automation.student.${suffix}@example.com`,
    password: 'TestPassword123!',
  };
}
