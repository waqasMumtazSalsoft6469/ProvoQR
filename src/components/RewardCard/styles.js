import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  cardimage: {
    resizeMode: 'contain',
    width: 30 * vw,

    borderRadius: 5 * vh,
    height: 30 * vw,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  imgicon: {
    width: 5 * vw,
    tintColor: '#000000',
    height: 5 * vw,
    resizeMode: 'contain',
  },
  viewmap: {
    color: '#365EB1',
    textDecorationLine: 'underline',
    marginTop: vh,
    fontSize: 1.7 * vh,
  },
  card: {
    width: 90 * vw,
    padding: 3 * vw,
    borderColor: '#F3F3F3',
    borderWidth: 0.5 * vw,
    backgroundColor: ThemeColors.white,
    borderRadius: 5 * vh,
    marginBottom: vh * 2,
  },
  cus: {
    color: '#7E7E7E',
    marginTop: vh,
    fontSize: 1.7 * vh,
    paddingRight: vw * 2,
  },

  imgcard: {
    resizeMode: 'contain',
    width: 80 * vw,

    borderRadius: 0.5 * vh,
    height: 50 * vw,
  },
});
