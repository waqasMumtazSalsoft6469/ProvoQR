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
    height: 100 * vh,
    // flex: 1
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
    color: ThemeColors.white,
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
    color: ThemeColors.white,
    fontSize: 3 * vh,
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
  profile: {
    width: 6 * vw,
    borderRadius: 3 * vw,
    marginLeft: vw,
    height: 6 * vw,
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
  emptyList: {
    height: vh * 50,
  },
});
export default styles;
