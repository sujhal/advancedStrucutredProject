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
import SocialLoginRow from '@features/auth/screens/LoginScreen/components/SocialLoginRow';
import LoginSkeleton from '@features/auth/screens/LoginScreen/skeleton';
import styles from '@features/auth/screens/LoginScreen/styles';
import { useAuthSession } from '@features/auth/hooks';
import type { LoginFormValues } from '@features/auth/validators';
import { loginSchema } from '@features/auth/validators';
import { useI18n } from '@i18n';
import { recordError } from '@services/crashlytics';
import type { AuthStackParamList } from '@types/navigation';

const DEBOUNCE_MS = 300;

const LoginScreen = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const abortRef = useRef<AbortController | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { t } = useI18n();
  const { loginWithPassword, isLoginLoading } = useAuthSession();

  const { control, handleSubmit, formState } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('auth.loginTitle') });
  }, [navigation, t]);

  useEffect(() => {
    abortRef.current = new AbortController();
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, DEBOUNCE_MS);
    return () => {
      abortRef.current?.abort();
      clearTimeout(timer);
    };
  }, []);

  const submitLogin = handleSubmit(async ({ email, password }) => {
    try {
      await loginWithPassword(email, password);
      Toast.show({ type: 'success', text1: t('auth.loginTitle') });
    } catch (error) {
      recordError(error as Error, {
        screen: 'LoginScreen',
        feature: 'auth',
        action: 'login_submit',
      });
      Toast.show({ type: 'error', text1: t('common.error') });
    }
  });

  const navigateToForgotPassword = () => {
    navigation.navigate(ROUTE_NAMES.ForgotPassword);
  };

  if (showSkeleton) {
    return <LoginSkeleton />;
  }

  return (
    <ScreenWrapper>
      <KeyboardView>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>{t('auth.loginTitle')}</Text>
          <View style={styles.form}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <FormField label={t('auth.emailLabel')} error={fieldState.error?.message}>
                  <Input
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    textContentType="emailAddress"
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
                    textContentType="password"
                  />
                </FormField>
              )}
            />
          </View>
          <Button
            label={t('auth.loginCta')}
            analyticsId="login_submit"
            feature="auth"
            screen="LoginScreen"
            loading={isLoginLoading}
            disabled={!formState.isValid}
            onPress={() => {
              void submitLogin();
            }}
          />
          <Button
            label={t('auth.forgotPasswordTitle')}
            analyticsId="forgot_password"
            feature="auth"
            screen="LoginScreen"
            onPress={navigateToForgotPassword}
          />
          <View style={styles.footer}>
            <SocialLoginRow />
          </View>
        </ScrollView>
      </KeyboardView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
