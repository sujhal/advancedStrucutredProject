import Config from 'react-native-config';

type EnvShape = {
  API_BASE_URL: string;
  GRAPHQL_URL: string;
  ENV_NAME: string;
  SENTRY_DSN: string;
  FIREBASE_ENABLED: string;
};

const env = Config as unknown as EnvShape;

export const getApiBaseUrl = (): string => env.API_BASE_URL;

export const getGraphqlUrl = (): string => env.GRAPHQL_URL;

export const getEnvName = (): string => env.ENV_NAME;

export const getSentryDsn = (): string => env.SENTRY_DSN ?? '';

export const isFirebaseEnabled = (): boolean =>
  (env.FIREBASE_ENABLED ?? 'true').toLowerCase() === 'true';
