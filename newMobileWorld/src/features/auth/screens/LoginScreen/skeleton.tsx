import React from 'react';
import { View } from 'react-native';

import Skeleton from '@components/feedback/Skeleton';
import ScreenWrapper from '@components/layout/ScreenWrapper';

const LoginSkeleton = () => (
  <ScreenWrapper>
    <View>
      <Skeleton
        analyticsId="login_title"
        feature="auth"
        screen="LoginScreen"
        height={28}
        width="70%"
      />
      <Skeleton
        analyticsId="login_field"
        feature="auth"
        screen="LoginScreen"
        height={48}
        width="100%"
      />
      <Skeleton
        analyticsId="login_field"
        feature="auth"
        screen="LoginScreen"
        height={48}
        width="100%"
      />
    </View>
  </ScreenWrapper>
);

export default LoginSkeleton;
