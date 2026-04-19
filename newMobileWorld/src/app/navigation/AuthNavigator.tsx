import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTE_NAMES } from '@app/navigation/routeNames';
import ForgotPasswordScreen from '@features/auth/screens/ForgotPasswordScreen';
import LoginScreen from '@features/auth/screens/LoginScreen';
import SignupScreen from '@features/auth/screens/SignupScreen';
import type { AuthStackParamList } from '@types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTE_NAMES.Login} component={LoginScreen} />
    <Stack.Screen name={ROUTE_NAMES.Signup} component={SignupScreen} />
    <Stack.Screen name={ROUTE_NAMES.ForgotPassword} component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
