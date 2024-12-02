import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
//types
import IContainedButton from './ContainedButton.interface';

const ContainedButton: FC<IContainedButton> = ({
  buttonText,
  customContainerStyle,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[tw`bg-[#414656] py-2 px-4 rounded-lg`, customContainerStyle]}>
      <Text style={tw`text-xl text-white text-center font-bold`}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;
