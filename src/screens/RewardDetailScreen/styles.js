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
  label: {
    color: '#C6C5C5',
    fontSize: 1.7 * vh,
  },
  you: {
    color: ThemeColors.primary,
    fontSize: 2.5 * vh,
  },
  redeem: {
    color: '#FF1919',
    marginTop: vh,
    fontSize: 1.6 * vh,
  },
  rewtext: {
    color: '#818080',
    marginTop: vh,
    lineHeight: 3 * vh,
    fontSize: 2 * vh,
  },
  midHeadingStyle: {
    marginTop: vh * 2,
    color: ThemeColors.secondaryColor,
    fontSize: vh * 2.3,
  },
  midTextStyle: {
    marginTop: vh * 1,
    color: ThemeColors.rewardText,
    fontSize: vh * 2,
  },
  imgicon: {
    width: 5 * vw,
    tintColor: '#000000',
    height: 5 * vw,
    resizeMode: 'contain',
  },
  recomend: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
  },
  cus: {
    color: ThemeColors.primary,

    fontSize: 2 * vh,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 2.2 * vh,
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',

    fontSize: 1.7 * vh,
  },
  butCon: {
    marginTop: 2 * vh,
    backgroundColor: '#E5E5E5',
    width: 40 * vw,
    paddingHorizontal: 4 * vw,
    borderColor: '#E5E5E5',
  },
  cardimg: {
    width: 90 * vw,
    height: 50 * vw,

    borderRadius: 2 * vh,
    resizeMode: 'cover',
  },
  rewardIcon: {
    height: vh * 15,
    width: vh * 15,
    alignSelf: 'center',
    marginVertical: vh * 3,
  },
});
export default styles;
