import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  cardimage: {
    resizeMode: 'contain',
    width: 80 * vw,
    // backgroundColor: 'red',
    borderRadius: 0.5 * vh,
    height: 50 * vw,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
    fontWeight: '700',
  },
  imgicon: {
    width: 5 * vw,
    tintColor: '#000000',
    height: 5 * vw,
    resizeMode: 'contain',
    marginLeft: vw * -1.1,
  },
  viewmap: {
    color: '#365EB1',
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 1.8 * vh,
  },
  cus: {
    color: '#365EB1',
    fontSize: 2 * vh,
    marginRight: vw * 1,
  },

  totalscan: {
    color: '#FFB829',

    fontSize: 2 * vh,
  },

  imgcard: {
    resizeMode: 'cover',
    width: 80 * vw,
    // backgroundColor: ThemeColors.redfboxtext,
    borderRadius: 3 * vh,
    height: 50 * vw,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  moneyBagIcon: {height: vh * 4, width: vh * 4, marginRight: vw * 2},
  boxIcon: {
    height: vh * 3,
    width: vw * 8,
    marginRight: vw * 2,
    // backgroundColor: 'red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    height: vh * 5,
    width: vh * 4,
    resizeMode: 'cover',
    right: vw * 5,
    top: vh * 1,
  },
  indicator: {
    position: 'absolute',
    backgroundColor: ThemeColors.happyHourGreen,
    paddingHorizontal: vh * 1,
    height: vh * 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1,
    top: vh * 3,
    left: vw * 3,
  },
  happyFont: {
    color: ThemeColors.white,
  },
});
