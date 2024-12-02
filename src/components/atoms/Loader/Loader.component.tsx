import React, {FC} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import tw from 'twrnc';
//types
import ILoader from './Loader.interface';

const Loader: FC<ILoader> = ({size = 'large'}) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ActivityIndicator animating={true} size={size} />
    </View>
  );
};

export default Loader;
