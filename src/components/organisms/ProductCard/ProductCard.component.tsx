import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
//types
import IProductCard from './ProductCard.interface';

const ProductCard: FC<IProductCard> = ({product, onPressProduct}) => {
  const {
    name,
    SKU,
    brandName,
    mainImage,
    price,
    sizes,
    stockStatus,
    colour,
    description,
  } = product;

  return (
    <TouchableOpacity
      style={tw`flex-row bg-white rounded-lg my-3 overflow-hidden p-1`}
      onPress={onPressProduct}>
      <View style={tw`p-2 gap-1`}>
        <Image source={{uri: mainImage}} style={tw`w-24 h-24 object-cover`} />
        <Text style={tw`text-lg font-bold text-pink-700 text-center`}>
          {brandName}
        </Text>
        <Text style={tw`text-xs font-bold text-[#414656] text-center`}>
          {SKU} left
        </Text>
      </View>
      <View style={tw`flex-1 p-2 gap-1`}>
        <Text style={tw`text-lg font-bold text-[#414656]`}>{name}</Text>
        <Text style={tw`text-sm font-bold text-cyan-600`}>
          Price: {price?.currency} {price?.amount}
        </Text>
        <Text style={tw`text-sm font-bold text-[#414656]`}>
          Sizes: <Text style={tw`text-cyan-600`}>{sizes.join(', ')}</Text>
        </Text>
        <Text
          style={tw`text-sm font-bold ${
            stockStatus === 'IN STOCK' ? 'text-green-500' : 'text-red-500'
          }`}>
          {stockStatus}
        </Text>
        <Text style={tw`text-sm font-bold text-[#414656]`}>
          Color: <Text>{colour}</Text>
        </Text>
        <Text numberOfLines={3} style={{}}>
          Description: <Text>{description}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
