import * as Sentry from '@sentry/react-native';

export const addSentryBreadcrumb = (message: string, category: string) => {
  Sentry.addBreadcrumb({
    message,
    category,
    level: 'info',
  });
};
