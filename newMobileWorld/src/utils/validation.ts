export const isValidEmail = (value: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  return emailPattern.test(value.trim());
};
