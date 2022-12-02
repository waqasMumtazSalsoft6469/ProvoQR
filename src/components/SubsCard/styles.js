const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    // width: 80 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    overflow: 'hidden',
    elevation: 6,
    // alignItems: 'center',

    borderRadius: 6 * vh,
    backgroundColor: ThemeColors.white,
  },

  containerclick: {
    //    paddingHorizontal:2.5*vw,
    // paddingVertical: 4 * vh,
    paddingVertical: 4 * vh,
    paddingBottom: 15 * vh,
    width: 80 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    overflow: 'hidden',
    elevation: 6,
    // alignItems: 'center',

    borderRadius: 4 * vh,
    backgroundColor: ThemeColors.white,
  },
  title: {
    color: ThemeColors.fontBlack,
    width: 60 * vw,
    marginTop: 3 * vh,
    textAlign: 'center',
    fontSize: 2.4 * vh,
    alignSelf: 'center',
  },
  amount: {
    color: ThemeColors.white,
    marginTop: 2 * vh,
    fontSize: 4.5 * vh,
    fontSize: vh * 6,
  },
  amount1: {
    color: ThemeColors.white,
    marginTop: 2 * vh,
    fontSize: 4.5 * vh,
    fontSize: vh * 3,
  },
  dollar: {
    color: ThemeColors.white,
    marginTop: 2 * vh,
    fontSize: 2 * vh,
  },
  tickicon: {
    width: 5 * vw,
    height: 5 * vw,
  },
  month: {
    color: ThemeColors.white,
    width: 60 * vw,
    textAlign: 'center',
    fontSize: 1.7 * vh,
  },
  labeltext: {
    color: '#0F0F3A',
    marginLeft: vw,
    textAlign: 'center',
    fontSize: 2 * vh,
  },
  footerimage: {
    width: 80 * vw,
    paddingVertical: vh * 2,
    // marginTop:10*vh,
    alignItems: 'center',

    // position: 'absolute',
    resizeMode: 'cover',
  },
  footerbottom: {
    width: 45 * vh,
    height: 45 * vh,
    // marginTop:10*vh,
    // top:0,
    // bottom:-40* vh,
    bottom: -40 * vh,
    resizeMode: 'contain',
    position: 'absolute',
    //    resizeMode:'contain'
  },
  footerbottomclick: {
    width: 40 * vh,
    height: 40 * vh,
    // marginTop:10*vh,
    // top:0,
    // bottom:-40* vh,
    bottom: -25 * vh,
    alignItems: 'center',

    resizeMode: 'contain',
    position: 'absolute',
    //    resizeMode:'contain'
  },
  footerimagebg: {
    width: 80 * vw,
  },
  innerCard: {
    backgroundColor: '#FFF6F7',
    borderRadius: 6 * vh,
    width: vw * 70,
    marginVertical: vh * 2,
    paddingVertical: vh * 3,
  },
  btnContainer: {width: vw * 40, alignSelf: 'center'},
  dash: {
    width: 30 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
    marginBottom: vh * 2,
    paddingHorizontal: vw * 2,
  },
});
export default styles;
