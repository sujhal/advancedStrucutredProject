import type { LoginPayload, LoginResponse } from './types';

export const submitLogin = async (payload: LoginPayload): Promise<LoginResponse> => {
  await new Promise(resolve => {
    setTimeout(resolve, 300);
  });

  return {
    accessToken: `mock-access-token-${payload.email}`,
    refreshToken: 'mock-refresh-token',
    userId: 'user-1',
  };
};
