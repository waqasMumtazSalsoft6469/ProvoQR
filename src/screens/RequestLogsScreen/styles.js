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
    paddingTop: vh * 2,
    flex: 1,
  },
  catname: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  notselectview: {
    borderRadius: 3 * vh,
    width: 25 * vw,
    justifyContent: 'center',
    height: 5 * vh,
    paddingHorizontal: 3 * vw,
    backgroundColor: ThemeColors.white,
    alignItems: 'center',
  },
  kgs: {
    borderRadius: 3 * vh,
    marginTop: 1 * vh,
    elevation: vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: 50 * vw,
    height: 5 * vh,
    flexDirection: 'row',
    backgroundColor: ThemeColors.white,
  },
  poundtext: {
    color: ThemeColors.white,
    fontSize: 1.7 * vh,
  },
  select: {
    color: ThemeColors.darkpurple,

    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 2 * vh,
  },
  pounds: {
    borderRadius: 3 * vh,
    width: 25 * vw,
    justifyContent: 'center',
    height: 5 * vh,
    paddingHorizontal: 3 * vw,
    backgroundColor: ThemeColors.primary,
    alignItems: 'center',
  },
  viewmap: {
    color: ThemeColors.primary,
    textDecorationLine: 'underline',
    marginTop: vh,
    fontSize: 1.7 * vh,
  },
  reward: {
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
  emptyList: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: vh * 50,
  },
  emptyText: {
    fontSize: vh * 2.4,
  },
});
export default styles;
