import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AppNavigator from './AppNavigator';
import { ROUTES } from './routeNames';
import type { DrawerParamList } from './types';
import ProfileSettingsScreen from '@features/app/profile/screens/ProfileSettingsScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = (): React.JSX.Element => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen component={AppNavigator} name={ROUTES.APP_DRAWER} />
      <Drawer.Screen component={ProfileSettingsScreen} name={ROUTES.PROFILE_SETTINGS} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
