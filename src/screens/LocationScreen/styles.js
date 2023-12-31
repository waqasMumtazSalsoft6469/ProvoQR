const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    flex: 1,
  },
  haeding: {fontSize: vh * 3, marginBottom: vh * 3},
  label: {alignSelf: 'flex-start', marginLeft: vw * 7},
  locationscroll: {
    width: 100 * vw,
    paddingVertical: 1.7 * vh,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    // top: 4 * vh,
    backgroundColor: ThemeColors.white,
    alignSelf: 'center',
  },
  scrolltext: {
    color: ThemeColors.fontBlack,
    fontSize: 1.5 * vh,
  },
  box: {
    paddingVertical: 3 * vh,
    // position: 'absolute',
    alignItems: 'center',
  },
  bottomWrapper: {
    width: vw * 100,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    paddingTop: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: vw * 8,
    borderTopRightRadius: vw * 8,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    // paddingBottom: vh * 1.5,
  },
  backOpacity: {
    width: vw * 92,
    backgroundColor: ThemeColors.white,
    position: 'absolute',
    // bottom: 2,
    top: vh * -1.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: vw * 8,
    borderTopRightRadius: vw * 8,
    height: vh * 5,
    opacity: 0.6,
    // marginBottom: vh * 2,
    zIndex: -1,
  },
  horizontalLine: {
    height: vh * 0.6,
    width: vw * 20,
    backgroundColor: ThemeColors.lightGray,
    borderRadius: vh * 1,
    marginBottom: vh * 2,
  },
  markerIconStyle: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
  },
  addressContainer: {
    width: 85 * vw,
    backgroundColor: ThemeColors.backgroundGray,
    paddingHorizontal: 3 * vw,
    borderRadius: 4 * vw,
    height: 7 * vh,
    marginTop: vh * 1,
    ...themeShadow,
    // alignItems: 'center',
  },
  addressText: {
    color: ThemeColors.fontBlack,
    fontSize: vh * 1.6,
  },
  cuuLocIconStyle: {
    height: vh * 3,
    width: vh * 3,
    // tintColor: themeColors.blue,
    resizeMode: 'contain',
  },
});
export default styles;
