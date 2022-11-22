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
  bg: {
    width: 100 * vw,
  },
  BGimage: {
    width: 100 * vw,
    height: 100 * vh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxinput: {
    textAlign: 'center',
    fontSize: 5 * vh,
  },
  box: {
    width: 20 * vw,
    height: 20 * vw,
    borderRadius: 3 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.white,
  },
  fotimage: {
    width: 50 * vw,
    height: 50 * vw,
  },
  footerimage: {
    width: 100 * vw,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  label: {
    fontSize: 1.7 * vh,
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
    color: '#3B3B3B',
    marginTop: 4 * vh,
    textDecorationLine: 'underline',
    fontSize: 1.8 * vh,
  },
  forgotText: {
    textAlign: 'right',
    color: '#000',
    fontSize: 3 * vh,
  },
  subTitle: {
    fontSize: vh * 1.6,
    marginBottom: vh * 5,
  },
  forgotButton: {marginTop: 1 * vh},
  resetButton: {
    fontSize: vh * 1.8,
    alignSelf: 'flex-end',
    color: '#0ACDFF',
    textDecorationLine: 'underline',
    width: vw * 90,
    alignItems: 'flex-end',
    textAlign: 'right',
  },
});
export default styles;
