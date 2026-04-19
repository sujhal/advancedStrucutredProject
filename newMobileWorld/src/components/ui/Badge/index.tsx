import React, { type PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@components/ui/Text';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = PropsWithChildren<{
  tone?: 'neutral' | 'positive';
}>;

const Badge = ({ children, tone = 'neutral' }: Props) => (
  <View
    style={[
      styles.base,
      tone === 'positive' ? { backgroundColor: COLORS.success } : { backgroundColor: COLORS.surface },
    ]}
  >
    <Text style={styles.label}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    color: COLORS.textPrimary,
  },
});

export default Badge;
