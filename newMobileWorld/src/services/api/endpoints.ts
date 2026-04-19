export const ENDPOINTS = {
  auth: {
    login: '/v1/auth/login',
    register: '/v1/auth/register',
    refresh: '/v1/auth/refresh',
    forgotPassword: '/v1/auth/forgot-password',
  },
} as const;
