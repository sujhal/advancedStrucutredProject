import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScreenWrapper from '@components/layout/ScreenWrapper';
import Text from '@components/ui/Text';
import { useI18n } from '@i18n';
import { COLORS } from '@theme/colors';

const MainHomeScreen = () => {
  const { t } = useI18n();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>{t('main.homeTitle')}</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
});

export default MainHomeScreen;
