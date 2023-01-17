import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  date: {
    color: ThemeColors.fontBlack,
    textAlign: 'right',
    fontSize: 1.7 * vh,
  },
  card: {
    width: 90 * vw,
    paddingVertical: 3 * vh,
    paddingHorizontal: 4 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
    borderColor: ThemeColors.notificationBorder,
    borderWidth: 0.5 * vw,
    backgroundColor: ThemeColors.white,
    borderRadius: 2 * vh,
  },
  innerContainer: {flexDirection: 'row', alignItems: 'center'},
  textContainer: {marginLeft: 2.5 * vw},
  cardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.notificationCard,
    borderRadius: 1 * vh,
    width: 15 * vw,
    height: 15 * vw,
  },
  name: {
    color: ThemeColors.fontBlack,
    fontSize: 2 * vh,
  },
  notificationIconStyle: {
    width: 8 * vw,
    tintColor: ThemeColors.primary,
    height: 8 * vw,
    resizeMode: 'contain',
  },
  cus: {
    color: ThemeColors.fontDarkGrey,
    width: 60 * vw,
    marginTop: 0.5 * vh,
    fontSize: 1.7 * vh,
  },
});
