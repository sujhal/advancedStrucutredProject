import React, { type PropsWithChildren } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { COLORS } from '@theme/colors';

type Props = PropsWithChildren<RNTextProps>;

const Text = ({ style, children, ...rest }: Props) => (
  <RNText style={[{ color: COLORS.textPrimary }, style]} {...rest}>
    {children}
</RNText>
);

export default Text;
