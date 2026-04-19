import * as Sentry from '@sentry/react-native';

export const captureSentryException = (error: Error, context: Record<string, string>) => {
  Sentry.captureException(error, { extra: context });
};
