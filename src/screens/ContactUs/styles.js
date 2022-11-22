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
  },
  txtArea: {
    width: 85 * vw,
    height: vh * 20,
    borderRadius: vw * 3,
    alignItems: 'flex-start',
    paddingTop: vh * 1,
    marginBottom: vh,
    borderColor: '#fff',
  },
  image: {
    height: vw * 25,
    width: vh * 25,
    resizeMode: 'contain',
  },
});
export default styles;
