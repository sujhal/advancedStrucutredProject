import * as Sentry from '@sentry/react-native';

import { getEnvName, getSentryDsn } from '@config/env';

export const initSentry = () => {
  const dsn = getSentryDsn();
  if (!dsn) {
    return;
  }
  Sentry.init({
    dsn,
    environment: getEnvName(),
    tracesSampleRate: 0.2,
    enableAutoSessionTracking: true,
  });
};
