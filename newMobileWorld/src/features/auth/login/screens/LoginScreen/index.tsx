import React from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from '@app/navigation/routeNames';
import type { AuthStackParamList } from '@app/navigation/types';
import { useAppFlow } from '@app/state/AppFlowContext';
import { useLogin, useLoginForm } from '@features/auth/login/hooks';
import SocialLoginButtons from './components/SocialLoginButtons';

const LoginScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { markAuthenticated } = useAppFlow();
  const { isLoading, login } = useLogin();
  const { control, formState, handleSubmit } = useLoginForm();

  const handleLoginSubmit = handleSubmit(async values => {
    await login(values);
    markAuthenticated();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Email"
            style={styles.input}
            value={value}
          />
        )}
      />
      {formState.errors.email ? <Text style={styles.errorText}>{formState.errors.email.message}</Text> : null}
      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={value}
          />
        )}
      />
      {formState.errors.password ? (
        <Text style={styles.errorText}>{formState.errors.password.message}</Text>
      ) : null}

      <Pressable disabled={isLoading} onPress={handleLoginSubmit} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{isLoading ? 'Logging in...' : 'Login'}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)} style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(ROUTES.SIGNUP)} style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Create New Account</Text>
      </Pressable>
      <SocialLoginButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#0f172a',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#cbd5e1',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  errorText: {
    color: '#be123c',
    fontSize: 12,
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    marginTop: 14,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryButton: {
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#0f172a',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LoginScreen;
