import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { ROUTE_NAMES } from '@app/navigation/routeNames';
import BottomTabNavigator from '@app/navigation/BottomTabNavigator';
import { useI18n } from '@i18n';
import { COLORS } from '@theme/colors';
import type { AppDrawerParamList } from '@types/navigation';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const DrawerNavigator = () => {
  const { t } = useI18n();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: COLORS.textPrimary,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Drawer.Screen
        name={ROUTE_NAMES.MainTabs}
        component={BottomTabNavigator}
        options={{ title: t('main.homeTitle') }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
