import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vw, vh} from '../../Utils/Units';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: vw * 25,
    height: vh * 4,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: ThemeColors.lightGray,
  },
  sign: {
    fontSize: vh * 3,
    borderWidth: 1,
    height: vh * 4,
    textAlign: 'center',
    width: vw * 6,
    borderColor: ThemeColors.lightGray,
  },
});
