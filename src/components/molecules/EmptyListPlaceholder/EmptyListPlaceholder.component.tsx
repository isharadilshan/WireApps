import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
//types
import IEmptyListPlaceholder from './EmptyListPlaceholder.interface';

const EmptyPlaceholder: FC<IEmptyListPlaceholder> = ({title, description}) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`items-center gap-10`}>
        {title && (
          <Text style={tw`text-lg text-center font-bold text-gray-400`}>
            {title}
          </Text>
        )}
        <Text style={tw`text-base text-center font-bold text-gray-400`}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default EmptyPlaceholder;
