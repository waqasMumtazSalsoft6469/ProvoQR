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
    height: vh * 90,
    paddingBottom: vh * 7,
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
  imageContainer: {
    margin: vh * 0.2,
    width: vw*42,
    height: vh*20,
    backgroundColor: 'red',
    margin: vw*2
  },
  image: {
    resizeMode: 'cover',
    // width: '100%',
    // height: '100%',
    width: vw*42,
    height: vh*20,
  },
  contentContainerStyle: {
    paddingHorizontal: vw * 4,
    // alignItems: 'center',
  },
  emptyContainer:{
    alignItems: 'center',
  },
  emptyText:{
    color: ThemeColors.iconColor,
    fontSize: vh*1.8
  }
  // contentContainerStyle: {backgroundColor: 'transparent'},
});
export default styles;
