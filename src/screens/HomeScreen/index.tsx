import {View, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
//components
import {Loader} from '@components/atoms';
import {ProductCard} from '@components/organisms';
//types
import {AppNavigationProp} from '@navigation/types';
import {IProduct} from '@models/product';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
//services
import {useGetProductListQuery} from '@redux/api/productApi';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const {data: productList, isFetching} = useGetProductListQuery({});

  const renderProductItem = ({item}: {item: IProduct}) => {
    return (
      <ProductCard
        product={item}
        onPressProduct={() => handleOnPressProduct(item)}
      />
    );
  };

  const handleOnPressProduct = (product: IProduct) => {
    navigation.navigate(NAVIGATION_ROUTES.PRODUCT_DETAIL_SCREEN, {
      product: product,
    });
  };

  return (
    <View style={tw`flex-1 px-4 bg-[#0E1626]`}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          data={productList?.data ?? []}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          contentContainerStyle={tw`pb-10`}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;
