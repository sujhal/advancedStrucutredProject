import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, type GestureResponderEvent } from 'react-native';

import { EVENTS, logEvent } from '@services/analytics';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  analyticsId: string;
  feature: string;
  disabled?: boolean;
  loading?: boolean;
  screen: string;
};

const Button = ({
  label,
  onPress,
  analyticsId,
  feature,
  disabled = false,
  loading = false,
  screen,
}: Props) => {
  const handlePress = (event: GestureResponderEvent) => {
    logEvent({
      name: EVENTS.BUTTON_PRESSED,
      screen,
      feature,
      component: analyticsId,
    });
    onPress(event);
  };

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={handlePress}
      style={({ pressed }) => [styles.base, pressed && styles.pressed, disabled && styles.disabled]}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.background} />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
