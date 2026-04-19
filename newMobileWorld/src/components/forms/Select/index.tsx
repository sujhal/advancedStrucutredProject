import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Text from '@components/ui/Text';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ options, value, onChange }: Props) => {
  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? value;
  return (
    <View style={styles.wrapper}>
      <Pressable
        accessibilityRole="button"
        style={styles.select}
        onPress={() => {
          const index = options.findIndex((opt) => opt.value === value);
          const next = options[(index + 1) % options.length];
          if (next) {
            onChange(next.value);
          }
        }}
      >
        <Text>{selectedLabel}</Text>
      </Pressable>
      <View style={styles.caption}>
        <Text style={styles.captionText}>Tap to cycle options</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: SPACING.sm,
  },
  select: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,
  },
  caption: {
    marginTop: SPACING.xs,
  },
  captionText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
});

export default Select;
