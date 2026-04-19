import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '@components/ui/Button';
import ScreenWrapper from '@components/layout/ScreenWrapper';
import Text from '@components/ui/Text';
import { useAuthSession } from '@features/auth/hooks';
import { useI18n } from '@i18n';
import { useCurrentUser } from '@store/useUserStore';
import { COLORS } from '@theme/colors';

const MainProfileScreen = () => {
  const { t } = useI18n();
  const user = useCurrentUser();
  const { logout } = useAuthSession();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>{t('main.profileTitle')}</Text>
        {user ? <Text style={styles.sub}>{user.email}</Text> : null}
        <Button
          analyticsId="logout"
          feature="auth"
          screen="Profile"
          label={t('auth.logout')}
          onPress={() => {
            void logout();
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  sub: {
    color: COLORS.textSecondary,
  },
});

export default MainProfileScreen;
