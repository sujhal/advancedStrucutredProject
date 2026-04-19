import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
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
import styles from '@features/auth/screens/ForgotPasswordScreen/styles';
import { useAuthSession } from '@features/auth/hooks';
import type { ForgotPasswordFormValues } from '@features/auth/validators';
import { forgotPasswordSchema } from '@features/auth/validators';
import { useI18n } from '@i18n';
import { recordError } from '@services/crashlytics';
import type { AuthStackParamList } from '@types/navigation';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { t } = useI18n();
  const { requestPasswordReset, isForgotLoading } = useAuthSession();

  const { control, handleSubmit, formState } = useForm<ForgotPasswordFormValues>({
    defaultValues: { email: '' },
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('auth.forgotPasswordTitle') });
  }, [navigation, t]);

  const submitForgot = handleSubmit(async ({ email }) => {
    try {
      await requestPasswordReset(email);
      Toast.show({ type: 'success', text1: t('auth.forgotPasswordCta') });
      navigation.navigate(ROUTE_NAMES.Login);
    } catch (error) {
      recordError(error as Error, {
        screen: 'ForgotPasswordScreen',
        feature: 'auth',
        action: 'forgot_password_submit',
      });
      Toast.show({ type: 'error', text1: t('common.error') });
    }
  });

  return (
    <ScreenWrapper>
      <KeyboardView>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>{t('auth.forgotPasswordTitle')}</Text>
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
          </View>
          <Button
            label={t('auth.forgotPasswordCta')}
            analyticsId="forgot_submit"
            feature="auth"
            screen="ForgotPasswordScreen"
            loading={isForgotLoading}
            disabled={!formState.isValid}
            onPress={() => {
              void submitForgot();
            }}
          />
          <Button
            label={t('auth.backToLogin')}
            analyticsId="back_login"
            feature="auth"
            screen="ForgotPasswordScreen"
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.Login);
            }}
          />
        </ScrollView>
      </KeyboardView>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;
