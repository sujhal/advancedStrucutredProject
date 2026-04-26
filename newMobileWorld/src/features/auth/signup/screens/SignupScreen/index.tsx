import React from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAppFlow } from '@app/state/AppFlowContext';
import { useSignup, useSignupForm } from '@features/auth/signup/hooks';

const SignupScreen = (): React.JSX.Element => {
  const { markAuthenticated } = useAppFlow();
  const { isLoading, signup } = useSignup();
  const { control, formState, handleSubmit } = useSignupForm();

  const handleSignupSubmit = handleSubmit(async values => {
    await signup(values);
    markAuthenticated();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Full Name"
            style={styles.input}
            value={value}
          />
        )}
      />
      {formState.errors.fullName ? (
        <Text style={styles.errorText}>{formState.errors.fullName.message}</Text>
      ) : null}
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
      <Pressable disabled={isLoading} onPress={handleSignupSubmit} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{isLoading ? 'Creating...' : 'Create Account'}</Text>
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

export default SignupScreen;
