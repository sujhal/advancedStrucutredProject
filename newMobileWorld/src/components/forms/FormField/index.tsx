import React, { type PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@components/ui/Text';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = PropsWithChildren<{
  label: string;
  error?: string;
}>;

const FormField = ({ label, error, children }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {children}
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  label: {
    marginBottom: SPACING.xs,
    color: COLORS.textSecondary,
  },
  error: {
    marginTop: SPACING.xs,
    color: COLORS.error,
    fontSize: 12,
  },
});

export default FormField;
