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
  des: {
    fontSize: 2.5 * vh,
    marginTop: 2 * vh,
    textAlign: 'center',
    color: ThemeColors.darkpurple,
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
  boxImage: {
    width: vw * 80,
    height: vh * 30,
  },
  openBox: {width: vw * 80, height: vh * 40},

  underlineText: {
    marginTop: vh * 10,
    color: ThemeColors.white,
    textDecorationLine: 'underline',
  },
  underlineTextButton: {
    marginTop: vh * 2,
    color: ThemeColors.white,
    textDecorationLine: 'underline',
  },
  homeBtnText: {marginTop: vh * 3, marginBottom: vh * 5},
  congText: {
    fontSize: vh * 5,
    color: ThemeColors.white,
    marginTop: vh * 2,
  },
  whiteText: {
    color: ThemeColors.white,
    fontSize: vh * 2.5,
  },
  voucherIcon: {
    height: vh * 5,
    width: vw * 15,
  },
  tryagain: {
    height: vh * 20,
    width: vh * 20,
  },
  back: {
    tintColor: ThemeColors.white,
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  boxStyle: {
    height: vw * 12,
    width: vw * 12,
    // borderRadius: vw * 2,
    // marginRight: vw * 1,
    backgroundColor: ThemeColors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  timeStyle: {
    color: ThemeColors.secondaryColor,
    fontSize: vh * 1.8,
  },
  dotContainer: {
    marginRight: vw * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    color: ThemeColors.white,
  },
  headingText: {
    color: ThemeColors.white,
    fontSize: vh * 2,
    marginTop: vh * 2,
  },
  rewardText: {
    color: ThemeColors.white,
    fontSize: vh * 1.7,
    marginTop: vh * 1,
  },
});
export default styles;
