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
  box: {
    width: 80 * vw,
    paddingVertical: 4 * vh,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    top: 4 * vh,
    backgroundColor: ThemeColors.white,
    borderRadius: 2 * vh,
  },
  boxview: {
    width: 40 * vw,
    borderColor: '#E2E2E2',
    paddingBottom: 2 * vh,
    borderWidth: 0.5 * vw,
    // height:40*vh,
    borderRadius: vh,
    backgroundColor: ThemeColors.white,
  },
  gender: {
    color: ThemeColors.placeholderGrey,
    fontSize: 1.7 * vh,
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 2 * vh,
  },
  cus: {
    color: ThemeColors.primary,

    fontSize: 2 * vh,
  },

  totalscan: {
    color: '#FFB829',

    fontSize: 2 * vh,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 1.2 * vh,
  },
  imgcard: {
    resizeMode: 'cover',
    width: 40 * vw,
    backgroundColor: 'green',
    borderRadius: vh,
    height: 20 * vh,
  },
  down: {
    width: 3 * vw,
    height: 3 * vw,
    resizeMode: 'contain',
  },
  fieldContainer: {
    width: 70 * vw,
    flexDirection: 'row',
    // elevation:0.5*vw,
    marginTop: 0 * vh,
    backgroundColor: ThemeColors.input,

    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6 * vw,
    borderRadius: 7 * vw,
    height: 7 * vh,
  },
  markerIconStyle: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
  },
});
export default styles;
