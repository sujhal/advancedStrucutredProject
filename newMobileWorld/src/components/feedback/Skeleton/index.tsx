import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

import { EVENTS, logEvent } from '@services/analytics';
import { COLORS } from '@theme/colors';
import { SPACING } from '@theme/spacing';

type Props = {
  width?: number | `${number}%`;
  height?: number;
  analyticsId: string;
  screen: string;
  feature: string;
};

const Skeleton = ({
  width = '100%',
  height = 14,
  analyticsId,
  screen,
  feature,
}: Props) => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    logEvent({
      name: EVENTS.SKELETON_VISIBLE,
      screen,
      feature,
      component: analyticsId,
    });
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => {
      loop.stop();
    };
  }, [analyticsId, feature, opacity, screen]);

  return (
    <Animated.View
      style={[
        styles.bar,
        { width, height, opacity },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  bar: {
    borderRadius: 6,
    backgroundColor: COLORS.surface,
    marginBottom: SPACING.sm,
  },
});

export default Skeleton;
