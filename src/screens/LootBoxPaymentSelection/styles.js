const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw, themeShadow} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    height: 100 * vh,
  },
  txtArea: {
    width: 85 * vw,
    height: vh * 20,
    borderRadius: vw * 3,
    alignItems: 'flex-start',
    paddingTop: vh * 1,
    marginBottom: vh,
    borderColor: '#fff',
  },
  image: {
    height: vh * 30,
    width: vw * 70,
    resizeMode: 'contain',
    marginVertical: vh * 5,
  },

  heading: {fontSize: vh * 3, marginBottom: vh * 5},
  upperBtn: {
    backgroundColor: ThemeColors.primary,
    borderColor: '#E33125',
    width: vw * 40,
  },
  lowerBtn: {
    marginTop: vh * 2,
    borderWidth: 2,
    borderColor: ThemeColors.secondaryColor,
    width: vw * 40,
  },
});
export default styles;
