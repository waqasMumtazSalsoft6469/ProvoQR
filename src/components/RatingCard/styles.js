import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  cardimage: {
    resizeMode: 'cover',
    width: 3 * vh,
    backgroundColor: 'red',
    height: 2.2 * vh,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardimage1: {
    resizeMode: 'cover',
    width: 4 * vh,
    height: 4 * vh,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  name: {
    color: '#FFB829',
    marginLeft: 4 * vw,
    fontSize: 1.7 * vh,
  },
  imgicon: {
    width: 4 * vw,
    tintColor: '#000000',
    height: 4 * vw,
    resizeMode: 'contain',
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 1.7 * vh,
  },
});
