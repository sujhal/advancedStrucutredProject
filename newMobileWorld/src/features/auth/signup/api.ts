import type { SignupPayload, SignupResponse } from './types';

export const submitSignup = async (payload: SignupPayload): Promise<SignupResponse> => {
  await new Promise(resolve => {
    setTimeout(resolve, 300);
  });

  return {
    isFirstLogin: true,
    userId: `mock-user-${payload.email}`,
  };
};
