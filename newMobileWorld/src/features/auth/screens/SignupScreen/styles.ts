import { StyleSheet } from 'react-native';

import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
    gap: SPACING.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});

export default styles;
