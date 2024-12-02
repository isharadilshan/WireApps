import {StyleProp, ViewStyle} from 'react-native';

interface IContainedButton {
  buttonText: string;
  customContainerStyle: StyleProp<ViewStyle>;
  onPressButton: () => void;
}

export default IContainedButton;
