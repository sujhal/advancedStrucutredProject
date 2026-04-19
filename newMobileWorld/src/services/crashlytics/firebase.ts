import crashlytics from '@react-native-firebase/crashlytics';

import { isFirebaseEnabled } from '@config/env';

export const recordFirebaseError = (error: Error) => {
  if (!isFirebaseEnabled()) {
    return;
  }
  crashlytics().recordError(error);
};
