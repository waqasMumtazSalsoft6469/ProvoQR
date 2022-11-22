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
    height: vh * 100,
    flex: 1,
  },
  or: {
    fontSize: 2 * vh,
    marginLeft: 4 * vw,
    color: '#2A2A2A',
  },

  googlebox: {
    backgroundColor: ThemeColors.white,
    borderWidth: 0.5 * vw,
    borderColor: '#2A2A2A',
  },
  account: {
    // textAlign: 'center',
    color: '#444444',
    fontSize: 1.8 * vh,
  },
  createaccount: {
    color: ThemeColors.primary,
    marginLeft: vw,
    textDecorationLine: 'underline',
    fontSize: 1.8 * vh,
  },
  forgotText: {
    width: 80 * vw,
    textAlign: 'right',
    color: '#20C3CF',
    fontSize: 1.6 * vh,
    textDecorationLine: 'underline',
  },
  forgotButton: {marginTop: 1 * vh},
  fieldContainer: {
    width: 85 * vw,
    flexDirection: 'row',
    // elevation:0.5*vw,
    marginTop: 0 * vh,
    backgroundColor: ThemeColors.white,

    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3 * vw,
    borderRadius: 4 * vw,
    height: 7 * vh,
    ...themeShadow,
  },
  gender: {
    color: ThemeColors.placeholderGrey,

    width: 68 * vw,

    padding: 0,
    paddingHorizontal: 2 * vw,
    // marginLeft: 1.5 * vw,
    margin: 0,
    fontSize: vh * 1.6,
  },
  down: {
    width: 4 * vw,
    height: 4 * vw,
    resizeMode: 'contain',
  },
  labelview: {
    flexDirection: 'row',
    height: 3 * vh,
    // marginLeft: 5 * vw,
    marginTop: 2 * vh,
  },
  label: {
    fontSize: 2 * vh,
    marginLeft: 9 * vw,
    color: '#2A2A2A',
  },
});
export default styles;
