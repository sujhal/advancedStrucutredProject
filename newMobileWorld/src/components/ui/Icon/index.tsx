import React from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';

import { COLORS } from '@theme/colors';

type Props = {
  name: 'check' | 'close' | 'chevron';
  size?: number;
  color?: string;
  style?: TextStyle;
};

const GLYPH: Record<Props['name'], string> = {
  check: '✓',
  close: '×',
  chevron: '›',
};

const Icon = ({ name, size = 18, color = COLORS.textPrimary, style }: Props) => (
  <Text style={[styles.base, { fontSize: size, color }, style]} accessibilityLabel={name}>
    {GLYPH[name]}
  </Text>
);

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});

export default Icon;
