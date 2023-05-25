const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,
    flex: 1,
    paddingTop: vh*3
    // alignItems: 'center',
  },
  imageStyle: {width: 100 * vw},
  about: {
    fontSize: 2 * vh,
    color: '#818080',
    lineHeight: 4 * vh,
  },
  contentContainerStyle: {alignItems: 'center'},
});
export default styles;
