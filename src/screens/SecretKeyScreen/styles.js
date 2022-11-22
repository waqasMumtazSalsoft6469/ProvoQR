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
  catname: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  docimg: {
    width: 4 * vw,
    height: 4 * vw,
    tintColor: ThemeColors.iconColor,
    resizeMode: 'contain',
  },
  key: {
    paddingVertical: 2 * vh,
    flexDirection: 'row',
    marginTop: 4 * vh,
    // paddingBottom:15*vh,
    width: 80 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    // justifyContent:'flex-end',
    elevation: 6,
    alignItems: 'center',

    borderRadius: 2 * vh,
    backgroundColor: ThemeColors.white,
    marginTop: vh * 15,
  },
  title: {
    color: '#818080',
    fontSize: 1.8 * vh,
  },
  secText: {
    fontSize: vh * 2.8,
  },
  keytext: {
    color: ThemeColors.iconColor,
    textAlign: 'center',

    fontSize: 3 * vh,
  },
});
export default styles;
