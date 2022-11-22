import {Dimensions} from 'react-native';
import ThemeColors from './ThemeColors';

export const vh = Dimensions.get('window').height * 0.01;
export const vw = Dimensions.get('window').width * 0.01;

export const themeShadow = {
  shadowColor: ThemeColors.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
};
