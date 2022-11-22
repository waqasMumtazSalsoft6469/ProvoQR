const {StyleSheet} = require('react-native');
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5 * vw,
    paddingVertical: 3 * vh,
    width: 40 * vw,
    height: 18 * vh,
    alignItems: 'center',
    borderRadius: 1.5 * vh,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  selectedbox: {
    paddingHorizontal: 7 * vw,
    paddingVertical: 1.7 * vh,
    flexDirection: 'row',
    // width: 40 * vw,
    // height: 18 * vh,
    alignItems: 'center',
    borderRadius: vw * 5,
    backgroundColor: ThemeColors.primary,
  },
  title: {
    fontSize: 2.2 * vh,

    color: ThemeColors.iconColor,
  },
  imgcar: {
    width: 40 * vw,
    height: 18 * vh,

    resizeMode: 'contain',
  },
  bidtext: {
    fontSize: 1.5 * vh,
    color: ThemeColors.white,
  },
  imgicon: {
    width: 4 * vw,
    height: 4 * vw,

    resizeMode: 'contain',
  },
  bidview: {
    paddingHorizontal: 3 * vw,
    paddingVertical: 1 * vh,
    borderRadius: 4 * vw,
    backgroundColor: ThemeColors.primary,
  },
});
export default styles;
