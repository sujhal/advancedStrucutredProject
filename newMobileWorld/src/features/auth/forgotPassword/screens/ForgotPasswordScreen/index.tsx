import React from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from '@app/navigation/routeNames';
import type { AuthStackParamList } from '@app/navigation/types';
import { useForgotPassword, useForgotPasswordForm } from '@features/auth/forgotPassword/hooks';

const ForgotPasswordScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { forgotPassword, isLoading } = useForgotPassword();
  const { control, formState, handleSubmit } = useForgotPasswordForm();

  const handleResetSubmit = handleSubmit(async values => {
    await forgotPassword(values);
    navigation.navigate(ROUTES.LOGIN);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
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
      <Pressable disabled={isLoading} onPress={handleResetSubmit} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{isLoading ? 'Sending...' : 'Send Reset Link'}</Text>
      </Pressable>
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
});

export default ForgotPasswordScreen;
