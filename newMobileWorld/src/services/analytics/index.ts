import { logFirebaseEvent } from './firebase';
import { addSentryBreadcrumb } from './sentry';
import type { AnalyticsEvent } from './types';

export * from './constants';
export type { AnalyticsEvent } from './types';

export const logEvent = (event: AnalyticsEvent) => {
  void logFirebaseEvent(event.name, {
    screen: event.screen,
    feature: event.feature,
    component: event.component ?? '',
  });
  addSentryBreadcrumb(`${event.name} (${event.feature})`, 'analytics');
};
