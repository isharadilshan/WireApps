import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
//types
import {AppNavigationProp} from '@navigation/types';
//routes
import {NAVIGATION_ROUTES} from '@navigation/navigationRoutes';
//services
import {useGetProductListQuery} from '../../redux/api/productApi';
import {ProductCard} from '@components/organisms';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const {isFetching} = useGetProductListQuery({});

  console.log('IS FETCHING ---------------------------', isFetching);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const handleOnPressProduct = () => {
    navigation.navigate(NAVIGATION_ROUTES.PRODUCT_DETAIL_SCREEN);
  };

  return (
    <View style={tw`flex-1 bg-blue-500`}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ProductCard product={{}} onPressProduct={handleOnPressProduct} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
