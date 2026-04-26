import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './routeNames';
import type { AuthStackParamList } from './types';
import ForgotPasswordScreen from '@features/auth/forgotPassword/screens/ForgotPasswordScreen';
import LoginScreen from '@features/auth/login/screens/LoginScreen';
import SplashScreen from '@features/auth/splash/screens/SplashScreen';
import SignupScreen from '@features/auth/signup/screens/SignupScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH} screenOptions={{ headerShown: false }}>
      <Stack.Screen component={SplashScreen} name={ROUTES.SPLASH} />
      <Stack.Screen component={LoginScreen} name={ROUTES.LOGIN} />
      <Stack.Screen component={SignupScreen} name={ROUTES.SIGNUP} />
      <Stack.Screen component={ForgotPasswordScreen} name={ROUTES.FORGOT_PASSWORD} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
