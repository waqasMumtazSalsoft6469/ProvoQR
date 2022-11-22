const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    flex: 1,
  },
  imgicon: {
    width: 15 * vh,
    height: 15 * vh,
    resizeMode: 'contain',
  },
  openBox: {width: vw * 80, height: vh * 40},

  des: {
    fontSize: 2.5 * vh,
    marginTop: 2 * vh,
    textAlign: 'center',
    color: ThemeColors.darkpurple,
  },
  whiteText: {
    color: ThemeColors.white,
    fontSize: vh * 2,
    marginBottom: vh * 4,
  },
  congText: {
    fontSize: vh * 3,
    color: ThemeColors.white,
  },
  thankscode: {
    fontSize: 2.2 * vh,
    width: 80 * vw,
    marginTop: 3 * vh,
    lineHeight: 4 * vh,
    textAlign: 'center',
    color: ThemeColors.darkpurple,
  },
  gotoreward: {
    fontSize: 2 * vh,

    marginTop: 5 * vh,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#20C3CF',
  },
  title: {
    fontSize: 4 * vh,
    marginTop: 2 * vh,
    color: '#FF0D0D',
  },
});
export default styles;
