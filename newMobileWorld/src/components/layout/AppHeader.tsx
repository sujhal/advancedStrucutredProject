import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type AppHeaderProps = {
  isShopContext?: boolean;
  showShopBack?: boolean;
  notificationCount?: number;
  cartCount?: number;
  onProfilePress: () => void;
  onNotificationPress: () => void;
  onWalletPress?: () => void;
  onBusinessOnboardingPress?: () => void;
  onCartPress?: () => void;
  onSearchPress?: () => void;
  onShopBackPress?: () => void;
};

const renderBadge = (count: number): React.JSX.Element | null => {
  if (count <= 0) {
    return null;
  }

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count > 99 ? '99+' : `${count}`}</Text>
    </View>
  );
};

const AppHeader = ({
  isShopContext = false,
  showShopBack = false,
  notificationCount = 0,
  cartCount = 0,
  onProfilePress,
  onNotificationPress,
  onWalletPress,
  onBusinessOnboardingPress,
  onCartPress,
  onSearchPress,
  onShopBackPress,
}: AppHeaderProps): React.JSX.Element => {
  const handleShopBackPress = (): void => {
    onShopBackPress?.();
  };

  const handleSearchPress = (): void => {
    onSearchPress?.();
  };

  const handleBusinessOnboardingPress = (): void => {
    onBusinessOnboardingPress?.();
  };

  const handleWalletPress = (): void => {
    onWalletPress?.();
  };

  const handleCartPress = (): void => {
    onCartPress?.();
  };

  return (
    <View style={styles.root}>
      <View style={styles.leftSection}>
        {isShopContext ? (
          <>
            {showShopBack ? (
              <Pressable onPress={handleShopBackPress} style={styles.iconButton}>
                <Text style={styles.buttonText}>Shop</Text>
              </Pressable>
            ) : null}
            <Pressable onPress={handleSearchPress} style={styles.iconButton}>
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={onProfilePress} style={styles.iconButton}>
            <Text style={styles.buttonText}>Profile</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.rightSection}>
        {!isShopContext ? (
          <>
            <Pressable onPress={handleBusinessOnboardingPress} style={styles.iconButton}>
              <Text style={styles.buttonText}>Business 7-Step</Text>
            </Pressable>
            <Pressable onPress={handleWalletPress} style={styles.iconButton}>
              <Text style={styles.buttonText}>Wallet</Text>
            </Pressable>
          </>
        ) : null}
        <Pressable onPress={onNotificationPress} style={styles.iconButton}>
          <Text style={styles.buttonText}>Notif</Text>
          {renderBadge(notificationCount)}
        </Pressable>
        {isShopContext ? (
          <Pressable onPress={handleCartPress} style={styles.iconButton}>
            <Text style={styles.buttonText}>Cart</Text>
            {renderBadge(cartCount)}
          </Pressable>
        ) : null}
        <Pressable onPress={onProfilePress} style={styles.iconButton}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 54,
    paddingHorizontal: 12,
  },
  leftSection: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightSection: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
    position: 'relative',
  },
  buttonText: {
    color: '#0d1b2a',
    fontSize: 13,
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#d90429',
    borderRadius: 10,
    marginLeft: 4,
    minWidth: 18,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default AppHeader;