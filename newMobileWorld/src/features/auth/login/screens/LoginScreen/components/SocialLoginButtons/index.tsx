import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppFlow } from '@app/state/AppFlowContext';
import { useAppleLogin } from '@features/auth/appleLogin';
import { useFacebookLogin } from '@features/auth/facebookLogin';
import { useGoogleLogin } from '@features/auth/googleLogin';
import { useInstagramLogin } from '@features/auth/instagramLogin';

const SocialLoginButtons = (): React.JSX.Element => {
  const { markAuthenticated } = useAppFlow();
  const { loginWithApple } = useAppleLogin();
  const { loginWithFacebook } = useFacebookLogin();
  const { loginWithGoogle } = useGoogleLogin();
  const { loginWithInstagram } = useInstagramLogin();

  const handleGoogleLogin = async (): Promise<void> => {
    await loginWithGoogle();
    markAuthenticated();
  };

  const handleFacebookLogin = async (): Promise<void> => {
    await loginWithFacebook();
    markAuthenticated();
  };

  const handleAppleLogin = async (): Promise<void> => {
    await loginWithApple();
    markAuthenticated();
  };

  const handleInstagramLogin = async (): Promise<void> => {
    await loginWithInstagram();
    markAuthenticated();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleGoogleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </Pressable>
      <Pressable onPress={handleFacebookLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Pressable>
      <Pressable onPress={handleAppleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login with Apple</Text>
      </Pressable>
      <Pressable onPress={handleInstagramLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login with Insta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    rowGap: 10,
  },
  button: {
    borderColor: '#0f172a',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SocialLoginButtons;
