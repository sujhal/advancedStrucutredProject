import analytics from '@react-native-firebase/analytics';

import { isFirebaseEnabled } from '@config/env';

export const logFirebaseEvent = async (name: string, params: Record<string, string | number>) => {
  if (!isFirebaseEnabled()) {
    return;
  }
  await analytics().logEvent(name, params);
};
