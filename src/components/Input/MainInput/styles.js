import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw, themeShadow} from '../../../Utils/Units';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  fieldContainer: {
    width: 85 * vw,
    flexDirection: 'row',
    // elevation:0.5*vw,
    marginTop: 0 * vh,
    backgroundColor: ThemeColors.white,

    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 3 * vw,
    borderRadius: 4 * vw,
    height: 7 * vh,
    ...themeShadow,
  },

  labelview: {
    flexDirection: 'row',
    height: 3 * vh,
    marginLeft: 7 * vw,
    marginTop: 2 * vh,
  },
  Icon: {
    marginLeft: 3 * vw,
  },
  rightIcon: {
    marginRight: 4 * vw,
    height: 2.1 * vh,
  },
  label: {
    // width: 80 * vw,
    flexDirection: 'row',
    marginBottom: 0.5 * vh,
    alignItems: 'center',
    fontSize: 2 * vh,
    // justifyContent: 'space-between',
    // paddingHorizontal: 3 * vw,

    // height: 5 * vh,
  },
  field: {
    fontFamily: fonts.Outfit.regular,
    width: 68 * vw,
    color: ThemeColors.fontBlack,
    padding: 0,
    paddingHorizontal: 2 * vw,
    // marginLeft: 1.5 * vw,
    margin: 0,
    fontSize: vh * 1.6,
  },
});
export default styles;
