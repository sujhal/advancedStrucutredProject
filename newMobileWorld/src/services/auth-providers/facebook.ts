import { logEvent, EVENTS } from '@services/analytics';

import type { AuthResult } from './types';

export const signInWithFacebook = async (): Promise<AuthResult> => {
  logEvent({
    name: EVENTS.LOGIN_SUBMITTED,
    screen: 'LoginScreen',
    feature: 'auth',
    component: 'facebook_sign_in',
  });
  return { accessToken: 'facebook-mock-token', provider: 'facebook' };
};
