import { logEvent, EVENTS } from '@services/analytics';

import type { AuthResult } from './types';

export const signInWithApple = async (): Promise<AuthResult> => {
  logEvent({
    name: EVENTS.LOGIN_SUBMITTED,
    screen: 'LoginScreen',
    feature: 'auth',
    component: 'apple_sign_in',
  });
  return { accessToken: 'apple-mock-token', provider: 'apple' };
};
