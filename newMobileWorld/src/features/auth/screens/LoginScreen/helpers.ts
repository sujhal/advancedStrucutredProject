export const getEmailFieldError = (error?: { message?: string }): string | undefined =>
  error?.message;
