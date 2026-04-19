import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, type ViewProps } from 'react-native';

import { COLORS } from '@theme/colors';

type Props = PropsWithChildren<ViewProps>;

const ScreenWrapper = ({ children, style, ...rest }: Props) => (
  <SafeAreaView style={[styles.safe, style]} {...rest}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default ScreenWrapper;
