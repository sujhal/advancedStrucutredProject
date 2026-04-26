import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppFlow } from '@app/state/AppFlowContext';
import { ROUTES } from './routeNames';
import type { AppStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import BusinessOnboardingScreen from '@features/app/businessOnboarding/screens/BusinessOnboardingScreen';
import CartScreen from '@features/app/cart/screens/CartScreen';
import NotificationsScreen from '@features/app/notifications/screens/NotificationsScreen';
import PreOnboardingScreen from '@features/app/preOnboarding/screens/PreOnboardingScreen';
import WalletScreen from '@features/app/wallet/screens/WalletScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = (): React.JSX.Element => {
  const { isPreOnboardingComplete } = useAppFlow();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isPreOnboardingComplete ? (
        <Stack.Screen component={PreOnboardingScreen} name={ROUTES.PRE_ONBOARDING} />
      ) : (
        <Stack.Screen component={BottomTabNavigator} name={ROUTES.HOME_TABS} />
      )}
      <Stack.Screen component={NotificationsScreen} name={ROUTES.NOTIFICATIONS} />
      <Stack.Screen component={WalletScreen} name={ROUTES.WALLET} />
      <Stack.Screen component={BusinessOnboardingScreen} name={ROUTES.BUSINESS_ONBOARDING} />
      <Stack.Screen component={CartScreen} name={ROUTES.CART} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
