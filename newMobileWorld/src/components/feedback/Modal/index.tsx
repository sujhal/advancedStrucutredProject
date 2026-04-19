import React, { type PropsWithChildren } from 'react';
import {
  Modal as RNModal,
  Pressable,
  StyleSheet,
  View,
  type ModalProps,
} from 'react-native';

import Text from '@components/ui/Text';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = PropsWithChildren<
  ModalProps & {
    title: string;
    onClose: () => void;
  }
>;

const Modal = ({ title, onClose, children, ...rest }: Props) => (
  <RNModal transparent animationType="fade" {...rest}>
    <View style={styles.backdrop}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close modal backdrop" />
      <View style={styles.sheet}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onClose} accessibilityLabel="Close modal">
            <Text>×</Text>
          </Pressable>
        </View>
        {children}
      </View>
    </View>
  </RNModal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  sheet: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Modal;
