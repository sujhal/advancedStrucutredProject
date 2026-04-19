import { getEnvName } from './env';

export const APP_CONFIG = {
  envName: getEnvName(),
  minPasswordLength: 8,
  pageSize: 20,
} as const;
