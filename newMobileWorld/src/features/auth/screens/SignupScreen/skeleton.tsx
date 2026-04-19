import React from 'react';
import { View } from 'react-native';

import Skeleton from '@components/feedback/Skeleton';
import ScreenWrapper from '@components/layout/ScreenWrapper';

const SignupSkeleton = () => (
  <ScreenWrapper>
    <View>
      <Skeleton
        analyticsId="signup_title"
        feature="auth"
        screen="SignupScreen"
        height={28}
        width="70%"
      />
      <Skeleton
        analyticsId="signup_field"
        feature="auth"
        screen="SignupScreen"
        height={48}
        width="100%"
      />
    </View>
  </ScreenWrapper>
);

export default SignupSkeleton;
