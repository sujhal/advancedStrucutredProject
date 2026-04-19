import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import * as Keychain from 'react-native-keychain';

import { GET_CURRENT_USER } from '@features/auth/graphql/queries/GetCurrentUser.gql';
import {
  authApi,
  normaliseUser,
  useForgotPasswordMutation,
  useLoginMutation,
  useRegisterMutation,
} from '@features/auth/api';
import type { User } from '@features/auth/types';
import { AUTH_KEYCHAIN_SERVICE } from '@constants/auth';
import { logout as logoutAction, setCredentials } from '@store/userSlice';
import { useAppDispatch } from '@store/useAppStore';
import { useIsAuthenticated } from '@store/useUserStore';

export const useCurrentUserQuery = () => {
  const isAuthenticated = useIsAuthenticated();
  const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    skip: !isAuthenticated,
  });
  const user: User | null = data?.me
    ? normaliseUser({
        id: data.me.id,
        email: data.me.email,
        firstName: data.me.firstName,
        createdAt: data.me.createdAt,
      })
    : null;
  return { user, loading, error, refetch };
};

export const useAuthSession = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [forgotPassword, { isLoading: isForgotLoading }] = useForgotPasswordMutation();

  const persistSession = useCallback(
    async (email: string, accessToken: string, user: ReturnType<typeof normaliseUser>) => {
      await Keychain.setGenericPassword(email, accessToken, {
        service: AUTH_KEYCHAIN_SERVICE,
      });
      dispatch(setCredentials({ accessToken, user }));
    },
    [dispatch],
  );

  const loginWithPassword = useCallback(
    async (email: string, password: string) => {
      const result = await login({ email, password }).unwrap();
      const user = normaliseUser(result.user);
      await persistSession(email, result.accessToken, user);
    },
    [login, persistSession],
  );

  const registerWithPassword = useCallback(
    async (email: string, password: string) => {
      const result = await register({ email, password }).unwrap();
      const user = normaliseUser(result.user);
      await persistSession(email, result.accessToken, user);
    },
    [persistSession, register],
  );

  const requestPasswordReset = useCallback(
    async (email: string) => {
      await forgotPassword({ email }).unwrap();
    },
    [forgotPassword],
  );

  const logout = useCallback(async () => {
    await Keychain.resetGenericPassword({ service: AUTH_KEYCHAIN_SERVICE });
    dispatch(logoutAction());
    dispatch(authApi.util.resetApiState());
  }, [dispatch]);

  return {
    loginWithPassword,
    registerWithPassword,
    requestPasswordReset,
    logout,
    isLoginLoading,
    isRegisterLoading,
    isForgotLoading,
  };
};
