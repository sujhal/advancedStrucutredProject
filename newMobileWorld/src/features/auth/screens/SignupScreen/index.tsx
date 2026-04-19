import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';

import FormField from '@components/forms/FormField';
import Input from '@components/forms/Input';
import KeyboardView from '@components/layout/KeyboardView';
import ScreenWrapper from '@components/layout/ScreenWrapper';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import { ROUTE_NAMES } from '@app/navigation/routeNames';
import SignupSkeleton from '@features/auth/screens/SignupScreen/skeleton';
import styles from '@features/auth/screens/SignupScreen/styles';
import { useAuthSession } from '@features/auth/hooks';
import type { RegisterFormValues } from '@features/auth/validators';
import { registerSchema } from '@features/auth/validators';
import { useI18n } from '@i18n';
import { recordError } from '@services/crashlytics';
import type { AuthStackParamList } from '@types/navigation';

const PRELOAD_MS = 200;

const SignupScreen = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const abortRef = useRef<AbortController | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { t } = useI18n();
  const { registerWithPassword, isRegisterLoading } = useAuthSession();

  const { control, handleSubmit, formState } = useForm<RegisterFormValues>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('auth.signupTitle') });
  }, [navigation, t]);

  useEffect(() => {
    abortRef.current = new AbortController();
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, PRELOAD_MS);
    return () => {
      abortRef.current?.abort();
      clearTimeout(timer);
    };
  }, []);

  const submitSignup = handleSubmit(async ({ email, password }) => {
    try {
      await registerWithPassword(email, password);
      Toast.show({ type: 'success', text1: t('auth.signupTitle') });
    } catch (error) {
      recordError(error as Error, {
        screen: 'SignupScreen',
        feature: 'auth',
        action: 'signup_submit',
      });
      Toast.show({ type: 'error', text1: t('common.error') });
    }
  });

  if (showSkeleton) {
    return <SignupSkeleton />;
  }

  return (
    <ScreenWrapper>
      <KeyboardView>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>{t('auth.signupTitle')}</Text>
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <FormField label={t('auth.emailLabel')} error={fieldState.error?.message}>
                  <Input
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </FormField>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <FormField label={t('auth.passwordLabel')} error={fieldState.error?.message}>
                  <Input
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </FormField>
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <FormField
                  label={t('auth.confirmPasswordLabel')}
                  error={fieldState.error?.message}
                >
                  <Input
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </FormField>
              )}
            />
          </View>
          <Button
            label={t('auth.signupCta')}
            analyticsId="signup_submit"
            feature="auth"
            screen="SignupScreen"
            loading={isRegisterLoading}
            disabled={!formState.isValid}
            onPress={() => {
              void submitSignup();
            }}
          />
          <Button
            label={t('auth.backToLogin')}
            analyticsId="go_login"
            feature="auth"
            screen="SignupScreen"
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.Login);
            }}
          />
        </ScrollView>
      </KeyboardView>
    </ScreenWrapper>
  );
};

export default SignupScreen;
