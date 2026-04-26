import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from './routeNames';
import type { AppStackParamList, HomeTabParamList } from './types';
import { useAppFlow } from '@app/state/AppFlowContext';
import AppHeader from '@components/layout/AppHeader';
import CalendarScreen from '@features/app/calendar/screens/CalendarScreen';
import ClientsScreen from '@features/app/clients/screens/ClientsScreen';
import HomeScreen from '@features/app/dashboard/screens/HomeScreen';
import QuickActionsScreen from '@features/app/dashboard/screens/QuickActionsScreen';
import ShopTabNavigator from './ShopTabNavigator';

const Tab = createBottomTabNavigator<HomeTabParamList>();

type HomeTabNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList>,
  NativeStackNavigationProp<AppStackParamList>
>;

const BottomTabNavigator = (): React.JSX.Element => {
  const navigation = useNavigation<HomeTabNavigation>();
  const [isQuickActionsSheetOpen, setIsQuickActionsSheetOpen] = React.useState(false);
  const { cartCount, notificationCount } = useAppFlow();

  const closeQuickActionsSheet = (): void => {
    setIsQuickActionsSheetOpen(false);
  };

  const openQuickActionsSheet = (): void => {
    setIsQuickActionsSheetOpen(true);
  };

  const renderQuickActions = (): React.JSX.Element => {
    const actions = ['New Booking', 'New Invoice', 'Create Reminder', 'Add Client', 'Create Offer'];

    return (
      <Modal animationType="slide" onRequestClose={closeQuickActionsSheet} transparent visible={isQuickActionsSheetOpen}>
        <Pressable onPress={closeQuickActionsSheet} style={styles.sheetBackdrop}>
          <Pressable style={styles.sheetContainer}>
            <Text style={styles.sheetTitle}>Quick Actions</Text>
            {actions.map(action => (
              <Pressable key={action} onPress={closeQuickActionsSheet} style={styles.sheetActionButton}>
                <Text style={styles.sheetActionText}>{action}</Text>
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    );
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => {
          const currentShopRouteName = getFocusedRouteNameFromRoute(route) ?? ROUTES.SHOP_HOME;
          const shouldShowShopBack =
            route.name === ROUTES.SHOP_TAB_ROOT && currentShopRouteName !== ROUTES.SHOP_HOME;

          return ({
        header: () => (
          <AppHeader
            cartCount={cartCount}
            isShopContext={route.name === ROUTES.SHOP_TAB_ROOT}
            notificationCount={notificationCount}
            onBusinessOnboardingPress={() => navigation.navigate(ROUTES.BUSINESS_ONBOARDING)}
            onCartPress={() => navigation.navigate(ROUTES.CART)}
            onNotificationPress={() => navigation.navigate(ROUTES.NOTIFICATIONS)}
            onProfilePress={() => navigation.getParent()?.dispatch(DrawerActions.openDrawer())}
            onSearchPress={() => navigation.navigate(ROUTES.SHOP_TAB_ROOT, { screen: ROUTES.SHOP_HOME })}
            onShopBackPress={() => navigation.navigate(ROUTES.SHOP_TAB_ROOT, { screen: ROUTES.SHOP_HOME })}
            onWalletPress={() => navigation.navigate(ROUTES.WALLET)}
            showShopBack={shouldShowShopBack}
          />
        ),
          });
        }}
      >
        <Tab.Screen component={HomeScreen} name={ROUTES.HOME} />
        <Tab.Screen component={CalendarScreen} name={ROUTES.CALENDAR} />
        <Tab.Screen
          component={QuickActionsScreen}
          name={ROUTES.QUICK_ACTIONS}
          options={{
            tabBarButton: () => (
              <Pressable onPress={openQuickActionsSheet} style={styles.quickActionTabButton}>
                <Text style={styles.quickActionTabButtonText}>+</Text>
              </Pressable>
            ),
          }}
        />
        <Tab.Screen component={ClientsScreen} name={ROUTES.CLIENTS} />
        <Tab.Screen component={ShopTabNavigator} name={ROUTES.SHOP_TAB_ROOT} />
      </Tab.Navigator>
      {renderQuickActions()}
    </>
  );
};

const styles = StyleSheet.create({
  quickActionTabButton: {
    alignItems: 'center',
    backgroundColor: '#101f3c',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 40,
    minWidth: 40,
  },
  quickActionTabButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  sheetBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 30,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sheetTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  sheetActionButton: {
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  sheetActionText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BottomTabNavigator;
