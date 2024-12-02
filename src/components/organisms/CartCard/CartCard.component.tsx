import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
//types
import ICartCard from './CartCard.interface';

const ProductCard: FC<ICartCard> = ({
  product,
  onPressAddCart,
  onPressRemoveCart,
}) => {
  const {name, mainImage, price, quantity} = product;

  return (
    <View
      style={tw`flex-row items-center p-4 bg-white my-2 rounded-lg shadow-md`}>
      <Image
        source={{uri: mainImage}}
        style={tw`w-16 h-16 rounded-lg object-cover mr-4`}
      />

      <View style={tw`flex-1`}>
        <Text
          numberOfLines={1}
          style={tw`text-lg font-bold text-gray-800 mb-1`}>
          {name}
        </Text>
        <Text style={tw`text-sm font-bold text-cyan-600`}>
          Price: {price?.currency} {price?.amount}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          Quantity:
          <Text style={tw`text-gray-800 font-semibold`}>{quantity}</Text>
        </Text>
      </View>

      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          style={tw`px-3 py-2 bg-green-500 rounded-full mx-1`}
          onPress={onPressAddCart}>
          <Text style={tw`text-white text-xl font-bold`}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-3 py-2 bg-red-500 rounded-full mx-1`}
          onPress={onPressRemoveCart}>
          <Text style={tw`text-white text-xl font-bold`}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
