import React, { type PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  type KeyboardAvoidingViewProps,
} from 'react-native';

type Props = PropsWithChildren<KeyboardAvoidingViewProps>;

const KeyboardView = ({ children, ...rest }: Props) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    {...rest}
  >
    {children}
  </KeyboardAvoidingView>
);

export default KeyboardView;
