import type { AuthResult } from './types';

export const signInWithManual = async (email: string): Promise<AuthResult> => ({
  accessToken: `manual-token:${email}`,
  provider: 'manual',
});
