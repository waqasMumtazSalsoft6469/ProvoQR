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
  haeding: {fontSize: vh * 3, marginBottom: vh * 5},
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
    paddingVertical: 4 * vh,
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
    paddingBottom: vh * 1.5,
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
});
export default styles;
