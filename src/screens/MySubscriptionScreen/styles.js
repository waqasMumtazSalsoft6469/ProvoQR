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
  viewmap: {
    color: '#365EB1',
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontSize: 1.7 * vh,
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
  title: {
    // color: ThemeColors.white,
    width: 60 * vw,
    marginTop: 3 * vh,
    textAlign: 'center',
    fontSize: 3 * vh,
  },
  amount: {
    color: ThemeColors.primary,
    marginTop: 1 * vh,
    fontSize: 3 * vh,
  },
  symbol: {
    color: ThemeColors.primary,
    marginTop: 1 * vh,
  },
  current: {
    color: '#365EB1',
  },
  locationscroll: {
    width: 60 * vw,
    paddingVertical: 1.7 * vh,
    justifyContent: 'center',
    marginTop: 2 * vh,
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrolltext: {
    color: ThemeColors.primary,
    fontSize: 1.7 * vh,
  },
  dollar: {
    color: '#0F0F3A',
    marginTop: 10 * vh,
    fontSize: 2 * vh,
  },
  tickicon: {
    width: 5 * vw,
    height: 5 * vw,
  },
  month: {
    color: '#0F0F3A',
    // marginTop: 10 * vh,
    textAlign: 'center',
    fontSize: 1.7 * vh,
  },
  footerimagebg: {
    width: 45 * vh,
    height: 45 * vh,

    tintColor: ThemeColors.primary,
    // marginTop:10*vh,
    top: -30 * vh,
  },
  footerimage: {
    width: 45 * vh,
    height: 45 * vh,
    // marginTop:10*vh,
    alignItems: 'center',

    position: 'absolute',
    resizeMode: 'contain',
  },
  containerclick: {
    //    paddingHorizontal:2.5*vw,
    // paddingVertical: 4 * vh,
    paddingVertical: 2 * vh,
    paddingBottom: 4 * vh,
    width: 80 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    borderColor: '#D5D5D5',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    shadowRadius: 4.65,
    overflow: 'hidden',
    elevation: 4,
    // alignItems: 'center',
    // height:38*vh,
    borderRadius: 4 * vh,
    backgroundColor: ThemeColors.white,
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
});
export default styles;
