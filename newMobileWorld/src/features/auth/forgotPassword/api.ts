import type { ForgotPasswordPayload, ForgotPasswordResponse } from './types';

export const submitForgotPassword = async (
  payload: ForgotPasswordPayload,
): Promise<ForgotPasswordResponse> => {
  await new Promise(resolve => {
    setTimeout(resolve, 300);
  });

  return {
    message: `Reset password link sent to ${payload.email}`,
  };
};
