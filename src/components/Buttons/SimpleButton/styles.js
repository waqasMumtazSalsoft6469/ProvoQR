import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
const {vw, vh} = require('../../../Utils/Units');

export default style = StyleSheet.create({
  container: {
    width: 35 * vw,
    borderColor: ThemeColors.primary,
    paddingHorizontal: 4 * vw,
    paddingVertical: 1.5 * vh,
    borderWidth: 0.5 * vw,
    // height: vh * 6.5,
    borderRadius: vh * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {fontSize: vw * 3.5, color: ThemeColors.primary},
});
