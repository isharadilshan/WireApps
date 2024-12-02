import {View, FlatList} from 'react-native';
import React from 'react';
import tw from 'twrnc';
//components
import {EmptyListPlaceholder} from '@components/molecules';
import {CartCard} from '@components/organisms';
//redux
import {useAppDispatch, useAppSelector} from '@redux/store/hooks';
import {updateProductCart} from '@redux/slices/productSlice';
//types
import {IProduct} from '@models/product';
//constants
import {INFO_TEXT} from '@utils/constants';

const ProductCartScreen = () => {
  const dispatch = useAppDispatch();
  const productCartList = useAppSelector(
    state => state.product.productCartList,
  );

  const handleOnPressAddCart = (productId: string) => {
    const updatedProductCart = productCartList.map(item =>
      item.id === productId ? {...item, quantity: item?.quantity + 1} : item,
    );
    dispatch(updateProductCart(updatedProductCart));
  };

  const handleOnPressRemoveCart = (productId: string) => {
    const updatedProductCart = productCartList
      .map(item =>
        item.id === productId ? {...item, quantity: item?.quantity - 1} : item,
      )
      .filter(item => item.quantity > 0);
    dispatch(updateProductCart(updatedProductCart));
  };

  const renderCartItem = ({item}: {item: IProduct}) => {
    return (
      <CartCard
        product={item}
        onPressAddCart={() => handleOnPressAddCart(item?.id)}
        onPressRemoveCart={() => handleOnPressRemoveCart(item?.id)}
      />
    );
  };

  const renderCartEmptyPlaceholder = () => {
    return (
      <EmptyListPlaceholder
        title={INFO_TEXT.EMPTY_CART_LIST_TITLE}
        description={INFO_TEXT.EMPTY_CART_LIST_DESCRIPTION}
      />
    );
  };

  return (
    <View style={tw`flex-1 px-4 bg-[#0E1626]`}>
      <FlatList
        data={productCartList}
        renderItem={renderCartItem}
        ListEmptyComponent={renderCartEmptyPlaceholder}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex-1`}
      />
    </View>
  );
};

export default ProductCartScreen;
