export const ROUTE_NAMES = {
  AuthStack: 'AuthStack',
  AppStack: 'AppStack',
  MainTabs: 'MainTabs',
  Login: 'Login',
  Signup: 'Signup',
  ForgotPassword: 'ForgotPassword',
  Home: 'Home',
  Profile: 'Profile',
} as const;

export type RouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];
