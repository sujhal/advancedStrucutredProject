import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTES } from './routeNames';
import type { ShopTabParamList } from './types';
import CategoriesScreen from '@features/app/shop/screens/CategoriesScreen';
import FavouritesScreen from '@features/app/shop/screens/FavouritesScreen';
import PrescriptionScreen from '@features/app/shop/screens/PrescriptionScreen';
import SellersScreen from '@features/app/shop/screens/SellersScreen';
import ShopHomeScreen from '@features/app/shop/screens/ShopHomeScreen';

const Tab = createBottomTabNavigator<ShopTabParamList>();

const ShopTabNavigator = (): React.JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen component={ShopHomeScreen} name={ROUTES.SHOP_HOME} />
      <Tab.Screen component={CategoriesScreen} name={ROUTES.SHOP_CATEGORIES} />
      <Tab.Screen component={FavouritesScreen} name={ROUTES.SHOP_FAVOURITES} />
      <Tab.Screen component={PrescriptionScreen} name={ROUTES.SHOP_PRESCRIPTION} />
      <Tab.Screen component={SellersScreen} name={ROUTES.SHOP_SELLERS} />
    </Tab.Navigator>
  );
};

export default ShopTabNavigator;
