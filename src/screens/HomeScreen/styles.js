const {StyleSheet, Platform} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    // paddingTop: vh * 5,
  },
  imgbg: {
    width: 100 * vw,
    height: 100 * vh,
    // flex: 1
  },
  seachbar: {
    flexDirection: 'row',
    width: vw * 85,
    paddingHorizontal: vw * 4,
    height: vh * 6.5,
    alignItems: 'center',
    borderRadius: 2 * vh,
    alignSelf: 'center',
    borderColor: ThemeColors.white,
    borderWidth: 0.3 * vh,
    backgroundColor: ThemeColors.white,
    // position: 'absolute',
    bottom: -3 * vh,
    ...themeShadow,
  },
  filter: {height: vh * 4, width: vh * 4, resizeMode: 'contain'},
  search: {width: vw * 4, height: vh * 5, marginRight: 0 * vw},
  headertext: {
    color: ThemeColors.iconColor,
    fontSize: 2 * vh,
  },

  catname: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  you: {
    color: ThemeColors.primary,
    fontSize: 2.5 * vh,
  },
  menu: {width: vw * 5, height: vh * 4, marginLeft: 3 * vw},
  viewcon: {
    flexDirection: 'row',
    // padding: 4 * vw,
    borderRadius: 2.5 * vh,
    backgroundColor: '#F2D3D1',
    alignItems: 'center',
    height: vh * 7,
    width: vw * 28,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EBC3C0',
  },
  burgerIcon: {
    height: vh * 3,
    width: vh * 3,
    marginRight: vw * 3,
  },
  recomend: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
  },
  headertextbold: {
    color: ThemeColors.primary,
    fontSize: 3 * vh,
  },
  count: {
    color: ThemeColors.white,
    fontSize: 1.5 * vh,
  },
  categorybox: {
    width: 100 * vw,
    justifyContent: 'center',

    // paddingVertical: 4 * vh,
    // backgroundColor: '#FAF7FE',
    // height: 20 * vh
  },
  profile: {
    width: 6 * vw,
    borderRadius: 3 * vw,
    marginLeft: vw,
    height: 6 * vw,
    tintColor: ThemeColors.iconColor,
  },
  circle: {
    width: 4 * vw,
    height: 4 * vw,
    marginTop: -0.5 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6969',
    borderRadius: 2 * vh,
  },
});
export default styles;
