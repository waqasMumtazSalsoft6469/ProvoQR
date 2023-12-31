const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
flex:1
  },
  about: {
    fontSize: 2 * vh,
    color: ThemeColors.grayText,
    // lineHeight: 4 * vh,
    marginTop: vh * 2,
  },
  image: {width: vw * 90, height: vh * 30, borderRadius: vh * 3,backgroundColor:ThemeColors.backgroundGray},

});
export default styles;
