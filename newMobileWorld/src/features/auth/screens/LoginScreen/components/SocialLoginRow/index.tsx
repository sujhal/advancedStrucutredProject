import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '@components/ui/Button';
import { ROUTE_NAMES } from '@app/navigation/routeNames';
import { useI18n } from '@i18n';
import { signInWithApple, signInWithFacebook, signInWithGoogle } from '@services/auth-providers';
import type { AuthStackParamList } from '@types/navigation';

const SocialLoginRow = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { t } = useI18n();

  return (
    <View style={styles.row}>
      <Button
        label={t('auth.socialGoogle')}
        analyticsId="social_google"
        feature="auth"
        screen="LoginScreen"
        onPress={() => {
          void signInWithGoogle();
        }}
      />
      <Button
        label={t('auth.socialApple')}
        analyticsId="social_apple"
        feature="auth"
        screen="LoginScreen"
        onPress={() => {
          void signInWithApple();
        }}
      />
      <Button
        label={t('auth.socialFacebook')}
        analyticsId="social_facebook"
        feature="auth"
        screen="LoginScreen"
        onPress={() => {
          void signInWithFacebook();
        }}
      />
      <Button
        label={t('auth.goSignup')}
        analyticsId="go_signup"
        feature="auth"
        screen="LoginScreen"
        onPress={() => {
          navigation.navigate(ROUTE_NAMES.Signup);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    gap: 8,
  },
});

export default SocialLoginRow;
