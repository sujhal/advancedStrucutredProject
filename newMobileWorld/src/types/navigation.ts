import type { NavigatorScreenParams } from '@react-navigation/native';

import { ROUTE_NAMES } from '@app/navigation/routeNames';

export type AuthStackParamList = {
  [ROUTE_NAMES.Login]: undefined;
  [ROUTE_NAMES.Signup]: undefined;
  [ROUTE_NAMES.ForgotPassword]: undefined;
};

export type MainTabParamList = {
  [ROUTE_NAMES.Home]: undefined;
  [ROUTE_NAMES.Profile]: undefined;
};

export type AppDrawerParamList = {
  [ROUTE_NAMES.MainTabs]: NavigatorScreenParams<MainTabParamList> | undefined;
};

export type RootStackParamList = {
  [ROUTE_NAMES.AuthStack]: NavigatorScreenParams<AuthStackParamList> | undefined;
  [ROUTE_NAMES.AppStack]: NavigatorScreenParams<AppDrawerParamList> | undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
