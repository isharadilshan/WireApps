import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
//types
import {AppParamList} from '@navigation/types/ParamList';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
import {AppNavigationProp} from '@navigation/types';

type ProductDetailScreenProps = RouteProp<
  AppParamList,
  NAVIGATION_ROUTES.PRODUCT_DETAIL_SCREEN
>;
type Props = {
  route?: ProductDetailScreenProps;
};

const ProductDetailScreen = ({route}: Props) => {
  const {
    SKU,
    name,
    brandName,
    mainImage,
    price,
    sizes,
    stockStatus,
    colour,
    description,
  } = route?.params?.product ?? {};

  const navigation = useNavigation<AppNavigationProp>();

  useEffect(() => {
    navigation.setOptions({title: name ?? ''});
  }, [name, navigation]);

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <Image source={{uri: mainImage}} style={tw`w-full h-75 object-cover`} />
      <View style={tw`p-2 gap-1`}>
        <Text style={tw`text-xl font-bold text-gray-800`}>{name}</Text>
        <Text style={tw`text-lg text-gray-600`}>Brand: {brandName}</Text>
        <Text style={tw`text-lg font-bold text-[#414656]`}>{SKU} left</Text>
        <Text style={tw`text-lg font-bold text-cyan-600`}>
          Price: {price?.currency} {price?.amount}
        </Text>
        <Text style={tw`text-lg font-bold text-[#414656]`}>
          Sizes: <Text style={tw`text-cyan-600`}>{sizes.join(', ')}</Text>
        </Text>
        <Text
          style={tw`text-lg font-bold ${
            stockStatus === 'IN STOCK' ? 'text-green-500' : 'text-red-500'
          }`}>
          {stockStatus}
        </Text>
        <Text style={tw`text-lg font-bold text-[#414656]`}>
          Color: <Text>{colour}</Text>
        </Text>
        <Text>
          Description: <Text>{description}</Text>
        </Text>
        <View>
          <Button title="Add to Cart" color="#007BFF" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
