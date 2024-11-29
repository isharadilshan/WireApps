import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//screens
import HomeScreen from '@screens/HomeScreen';
import ProductDetailScreen from '@screens/ProductDetailScreen';
import ProductCartScreen from '@screens/ProductCartScreen';
//routes
import {NAVIGATION_ROUTES} from './navigationRoutes';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName={NAVIGATION_ROUTES.HOME_SCREEN}>
    <Stack.Screen
      options={{header: () => null}}
      name={NAVIGATION_ROUTES.HOME_SCREEN}
      component={HomeScreen}
    />
    <Stack.Screen
      name={NAVIGATION_ROUTES.PRODUCT_DETAIL_SCREEN}
      component={ProductDetailScreen}
    />
    <Stack.Screen
      name={NAVIGATION_ROUTES.PRODUCT_CART_SCREEN}
      component={ProductCartScreen}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;
