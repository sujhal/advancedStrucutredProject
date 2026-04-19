import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';

import AppNavigator from '@app/navigation/AppNavigator';
import AuthNavigator from '@app/navigation/AuthNavigator';
import { navigationRef } from '@app/navigation/NavigationService';
import { ROUTE_NAMES } from '@app/navigation/routeNames';
import { useIsAuthenticated } from '@store/useUserStore';
import type { RootStackParamList } from '@types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigationShell = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const previousAuth = useRef(isAuthenticated);

  useEffect(() => {
    if (previousAuth.current === isAuthenticated) {
      return;
    }
    previousAuth.current = isAuthenticated;
    navigation.reset({
      index: 0,
      routes: [
        {
          name: isAuthenticated ? ROUTE_NAMES.AppStack : ROUTE_NAMES.AuthStack,
        },
      ],
    });
  }, [isAuthenticated, navigation]);

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? ROUTE_NAMES.AppStack : ROUTE_NAMES.AuthStack}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTE_NAMES.AuthStack} component={AuthNavigator} />
      <Stack.Screen name={ROUTE_NAMES.AppStack} component={AppNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <RootNavigationShell />
  </NavigationContainer>
);

export default RootNavigator;
