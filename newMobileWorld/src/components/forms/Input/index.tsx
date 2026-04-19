import React from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = TextInputProps;

const Input = ({ style, ...rest }: Props) => (
  <TextInput
    placeholderTextColor={COLORS.textSecondary}
    style={[styles.input, style]}
    {...rest}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,
    color: COLORS.textPrimary,
    fontSize: 16,
  },
});

export default Input;
