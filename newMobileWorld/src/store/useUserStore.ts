import type { User } from '@features/auth/types';

import { useAppSelector } from './useAppStore';

export const useCurrentUser = (): User | null => useAppSelector((state) => state.user.user);

export const useIsAuthenticated = (): boolean =>
  useAppSelector((state) => state.user.isAuthenticated);

export const useAccessToken = (): string | null =>
  useAppSelector((state) => state.user.accessToken);
