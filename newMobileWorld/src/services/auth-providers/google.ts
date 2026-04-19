import { logEvent, EVENTS } from '@services/analytics';

import type { AuthResult } from './types';

export const signInWithGoogle = async (): Promise<AuthResult> => {
  logEvent({
    name: EVENTS.LOGIN_SUBMITTED,
    screen: 'LoginScreen',
    feature: 'auth',
    component: 'google_sign_in',
  });
  return { accessToken: 'google-mock-token', provider: 'google' };
};
