import { recordFirebaseError } from './firebase';
import { captureSentryException } from './sentry';

export const recordError = (
  error: Error,
  meta: {
    screen: string;
    feature: string;
    action: string;
  },
) => {
  recordFirebaseError(error);
  captureSentryException(error, {
    screen: meta.screen,
    feature: meta.feature,
    action: meta.action,
  });
};
