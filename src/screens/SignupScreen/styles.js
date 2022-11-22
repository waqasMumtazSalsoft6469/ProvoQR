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
  or: {
    fontSize: 2 * vh,
    marginLeft: 4 * vw,
    color: '#2A2A2A',
  },
  label: {
    // width: 80 * vw,
    flexDirection: 'row',
    marginBottom: 0.5 * vh,
    // alignItems: 'center',
    fontSize: 2 * vh,
    // justifyContent: 'space-between',
    // paddingHorizontal: 3 * vw,

    // height: 5 * vh,
  },
  labelview: {
    flexDirection: 'row',
    height: 3 * vh,
    marginLeft: 7 * vw,
    marginTop: 2 * vh,
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
    backgroundColor: ThemeColors.input,

    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6 * vw,
    borderRadius: 7 * vw,
    height: 7 * vh,
  },
  gender: {
    color: ThemeColors.placeholderGrey,
    fontSize: 2 * vh,
  },
  down: {
    width: 4 * vw,
    height: 4 * vw,
    resizeMode: 'contain',
  },
});
export default styles;
