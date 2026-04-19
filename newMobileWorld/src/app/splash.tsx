import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import Text from '@components/ui/Text';
import { useI18n } from '@i18n';

const Splash = () => {
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common.loading')}</Text>
      <ActivityIndicator accessibilityLabel={t('common.loading')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 12,
    fontSize: 16,
  },
});

export default Splash;
