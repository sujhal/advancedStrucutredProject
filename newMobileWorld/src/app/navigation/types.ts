import type { NavigatorScreenParams } from '@react-navigation/native';

import { ROUTES } from './routeNames';

export type ShopTabParamList = {
  [ROUTES.SHOP_HOME]: undefined;
  [ROUTES.SHOP_CATEGORIES]: undefined;
  [ROUTES.SHOP_FAVOURITES]: undefined;
  [ROUTES.SHOP_PRESCRIPTION]: undefined;
  [ROUTES.SHOP_SELLERS]: undefined;
};

export type HomeTabParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.CALENDAR]: undefined;
  [ROUTES.QUICK_ACTIONS]: undefined;
  [ROUTES.CLIENTS]: undefined;
  [ROUTES.SHOP_TAB_ROOT]: NavigatorScreenParams<ShopTabParamList>;
};

export type AppStackParamList = {
  [ROUTES.PRE_ONBOARDING]: undefined;
  [ROUTES.HOME_TABS]: NavigatorScreenParams<HomeTabParamList>;
  [ROUTES.NOTIFICATIONS]: undefined;
  [ROUTES.WALLET]: undefined;
  [ROUTES.BUSINESS_ONBOARDING]: undefined;
  [ROUTES.CART]: undefined;
};

export type AuthStackParamList = {
  [ROUTES.SPLASH]: undefined;
  [ROUTES.LOGIN]: undefined;
  [ROUTES.SIGNUP]: undefined;
  [ROUTES.FORGOT_PASSWORD]: undefined;
};

export type DrawerParamList = {
  [ROUTES.APP_DRAWER]: NavigatorScreenParams<AppStackParamList>;
  [ROUTES.PROFILE_SETTINGS]: undefined;
};
