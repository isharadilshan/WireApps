import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
//redux
import {useAppSelector} from '../../../reduxstore/store/hooks';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
//types
import {AppNavigationProp} from '@navigation/types';
//utils
import {getTotalCartQuantity} from '@utils/func';

const CartButton = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const productCartList = useAppSelector(
    state => state.product.productCartList,
  );
  const [itemCount, setItemCount] = useState(0);

  const mainImage = require('../../../assets/icons/cart.jpg');

  const handleCartCount = useCallback(() => {
    setItemCount(getTotalCartQuantity(productCartList));
  }, [productCartList]);

  useEffect(() => {
    handleCartCount();
  }, [handleCartCount]);

  const handleOnPressCart = () => {
    navigation.navigate(NAVIGATION_ROUTES.PRODUCT_CART_SCREEN);
  };

  return (
    <TouchableOpacity
      style={tw`justify-center items-center`}
      onPress={handleOnPressCart}>
      <Image
        source={mainImage}
        style={tw`w-10 h-10 rounded-lg mr-4 mb-2 object-cover`}
      />
      {itemCount > 0 && (
        <View
          style={tw`absolute -top-2 right-3 bg-red-500 rounded-full w-5 h-5 justify-center items-center`}>
          <Text style={tw`text-white text-xs font-bold`}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
