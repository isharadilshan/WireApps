import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
//types
import {AppNavigationProp} from '@navigation/types';

const Loader = ({}) => {
  const navigation = useNavigation<AppNavigationProp>();

  const mainImage = require('../../../assets/icons/cartpng.webp');
  const cartCount = 1;

  const handleOnPressCart = () => {
    navigation.navigate(NAVIGATION_ROUTES.PRODUCT_CART_SCREEN);
  };

  return (
    <TouchableOpacity
      style={tw`justify-center items-center`}
      onPress={handleOnPressCart}>
      <Image source={{uri: mainImage}} style={tw`w-4 h-4 object-cover`} />
      {cartCount > 0 && (
        <View
          style={tw`absolute -top-2 right-5 bg-red-500 rounded-full w-5 h-5 justify-center items-center`}>
          <Text style={tw`text-white text-xs font-bold`}>{cartCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Loader;
