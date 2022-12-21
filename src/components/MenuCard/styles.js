import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  cardimage: {
    resizeMode: 'cover',
    width: 30 * vw,
    backgroundColor: ThemeColors.lightGray,
    borderRadius: 2 * vh,
    height: 22 * vw,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
    fontWeight: '700',
    width: vw * 40,
  },
  imgicon: {
    width: 5 * vw,
    tintColor: '#000000',
    height: 5 * vw,
    resizeMode: 'contain',
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',
    marginTop: vh,
    fontSize: 1.7 * vh,
  },
  card: {
    width: 90 * vw,
    // padding: 2 * vw,
    paddingVertical: vh * 1,
  },
  cus: {
    color: '#7E7E7E',
    marginTop: vh,
    fontSize: 1.7 * vh,
    width: vw * 40,
  },

  imgcard: {
    resizeMode: 'contain',
    width: 80 * vw,

    borderRadius: 0.5 * vh,
    height: 50 * vw,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between', width: vw * 55},
  priceText: {fontWeight: '700', color: ThemeColors.primary},
});
