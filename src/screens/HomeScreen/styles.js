const {StyleSheet, Platform} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imageContainer: {width: 100 * vw, flex: 1, resizeMode: 'cover'},
  imageStyle: {width: 100 * vw, height: 100 * vh},
  headerContainer: {
    marginTop: vh * 2,
  },
  bannerContainer: {
    paddingHorizontal: 5 * vw,
    marginTop: 2 * vh,
    justifyContent: 'space-between',
  },
  subHeadingText: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
  },
  viewAllBtnContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5 * vw,
    marginTop: 3 * vh,
    justifyContent: 'space-between',
  },
  bottomViewAllBtn: {
    marginBottom: vh * 1,
  },
  dashBorderStyle: {
    width: 100 * vw,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: ThemeColors.iconColor,
    fontSize: vh * 1.9,
  },
  categoryStyle: {width: '100%', marginTop: vh, marginBottom: vh * 3, paddingLeft: vw * 3},
  bottomFlatListStyle: {
    marginTop: vh,
    marginBottom: 10 * vh,
  },
  recommendedStyle: {marginTop: vh},
  homeCardContainer: {paddingHorizontal: 5 * vw},
  emptyContainer: {
    marginBottom: vh*3
  },
  recommendedContentContainerStyle: {
    // alignItems: 'center',
    // width: '100%',
    // justifyContent: 'center',
  },
});
export default styles;
