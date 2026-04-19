export type AuthProviderId = 'manual' | 'google' | 'apple' | 'facebook';

export type AuthResult = {
  accessToken: string;
  provider: AuthProviderId;
};
