import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { ROUTE_NAMES } from '@app/navigation/routeNames';
import MainHomeScreen from '@app/navigation/screens/MainHomeScreen';
import MainProfileScreen from '@app/navigation/screens/MainProfileScreen';
import { useI18n } from '@i18n';
import { COLORS } from '@theme/colors';
import type { MainTabParamList } from '@types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

const BottomTabNavigator = () => {
  const { t } = useI18n();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: { color: COLORS.textPrimary },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Tab.Screen
        name={ROUTE_NAMES.Home}
        component={MainHomeScreen}
        options={{ title: t('main.homeTitle') }}
      />
      <Tab.Screen
        name={ROUTE_NAMES.Profile}
        component={MainProfileScreen}
        options={{ title: t('main.profileTitle') }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
