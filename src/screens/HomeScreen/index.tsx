import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
//types
import {AppNavigationProp} from '@navigation/types';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
//services
import {useGetProductListQuery} from '../../redux/api/productApi';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const {isFetching} = useGetProductListQuery({});

  console.log('IS FETCHING ---------------------------', isFetching);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text>HomeScreen</Text>
      <Text
        onPress={() =>
          navigation.navigate(NAVIGATION_ROUTES.PRODUCT_DETAIL_SCREEN)
        }>
        Navigate to Product detail screen
      </Text>
      <Text
        onPress={() =>
          navigation.navigate(NAVIGATION_ROUTES.PRODUCT_CART_SCREEN)
        }>
        Navigate to Product cart screen
      </Text>
    </View>
  );
};

export default HomeScreen;
