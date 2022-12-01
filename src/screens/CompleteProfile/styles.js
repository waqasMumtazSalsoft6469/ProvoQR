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
    height: 100 * vh,
    // flex: 1
  },

  label1: {
    fontSize: 2 * vh,
    marginLeft: 4 * vw,
  },
  seachbar: {
    flexDirection: 'row',
    width: vw * 85,
    paddingHorizontal: vw * 4,
    height: vh * 6.5,
    alignItems: 'center',
    borderRadius: 6 * vw,
    alignSelf: 'center',
    borderColor: ThemeColors.white,
    borderWidth: 0.3 * vh,
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    bottom: -3 * vh,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  search: {width: vw * 4, height: vh * 5, marginRight: 0 * vw},
  headertext: {
    color: ThemeColors.primary,
    fontSize: 3 * vh,
  },
  complete: {
    color: ThemeColors.darkpurple,
    marginTop: 2 * vh,
    fontSize: 2 * vh,
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
  label: {
    fontSize: 2 * vh,
    marginLeft: 9 * vw,
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
    padding: 4 * vw,
    shadowColor: '#000',
    borderRadius: 4 * vh,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    backgroundColor: ThemeColors.white,
  },
  recomend: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
  },
  headertextbold: {
    color: ThemeColors.iconColor,
    fontSize: 1.6 * vh,
  },
  count: {
    color: ThemeColors.white,
    fontSize: 1.5 * vh,
  },
  categorybox: {
    width: 100 * vw,
    justifyContent: 'center',

    paddingVertical: 4 * vh,
    backgroundColor: '#FAF7FE',
    // height: 20 * vh
  },
  text: {
    fontSize: vh * 3,
    // width: 65*vw,
    textAlign: 'center',
    marginTop: 1 * vh,
    color: ThemeColors.darkpurple,
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
  radioContainer: {
    flexDirection: 'row',
    width: vw * 85,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: vh * 2,
  },
  selectedLabel: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.white,
    borderColor: ThemeColors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...themeShadow,
  },
  unselectedLabel: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.white,
    ...themeShadow,
  },
  row: {flexDirection: 'row'},
  selectedText: {color: ThemeColors.primary, marginLeft: vw * 2},
  unselectedText: {color: ThemeColors.grayText, marginLeft: vw * 2},
  orangeDot: {
    height: vh * 1.5,
    width: vh * 1.5,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.primary,
  },
});
export default styles;
