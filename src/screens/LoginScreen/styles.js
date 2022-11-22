const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  profile: {
    width: 12 * vh,
    height: 12 * vh,
    borderRadius: 6 * vh,
    resizeMode: 'contain',
  },
  imgbg: {
    width: 100 * vw,
    flex: 1,
    alignItems: 'center',
  },
  or: {
    fontSize: 2 * vh,
    marginLeft: 4 * vw,
    color: '#2A2A2A',
  },
  label: {
    fontSize: 2 * vh,
    marginLeft: 4 * vw,
  },
  googlebox: {
    backgroundColor: ThemeColors.white,
    borderWidth: 0.5 * vw,
    borderColor: '#2A2A2A',
  },
  account: {
    // textAlign: 'center',
    color: '#fff',
    fontSize: 1.8 * vh,
  },
  createaccount: {
    color: '#fff',
    marginLeft: vw,
    textDecorationLine: 'underline',
    fontSize: 1.8 * vh,
  },
  forgotText: {
    width: 80 * vw,
    textAlign: 'right',
    color: '#375FB4',
    fontSize: 1.6 * vh,
    textDecorationLine: 'underline',
  },
  forgotButton: {marginTop: 1 * vh},
  options: {
    width: vw * 53,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh * 15,
    backgroundColor: ThemeColors.white,
    height: vh * 7,
    borderRadius: vh * 2.5,
    ...themeShadow,
  },
  darkButton: {
    backgroundColor: ThemeColors.primary,
    // paddingHorizontal: vw * 5,
    paddingVertical: vh * 1.5,
    borderRadius: vh * 2,
    width: vw * 25,
    alignItems: 'center',
  },
  lightButton: {
    paddingVertical: vh * 1,
    borderRadius: vh * 2,
    width: vw * 25,
    alignItems: 'center',
  },
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
    marginLeft: 5 * vw,
    marginTop: 2 * vh,
  },
  signupBtn: {marginTop: vh * 2, backgroundColor: ThemeColors.butonGray},
});
export default styles;
