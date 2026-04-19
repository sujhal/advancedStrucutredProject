import { Platform } from 'react-native';

const base = Platform.select({
  ios: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
  },
  android: {
    elevation: 3,
  },
  default: {},
});

export const SHADOWS = {
  card: base ?? {},
} as const;
