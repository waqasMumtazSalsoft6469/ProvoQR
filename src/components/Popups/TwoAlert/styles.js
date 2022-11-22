import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw, vh} from '../../../Utils/Units';

export default styles = StyleSheet.create({
  container: {alignItems: 'center', paddingVertical: vh * 3},
  icon: {height: vh * 10, width: vh * 10},
  title: {fontSize: vh * 3, marginTop: vh * 2, color: ThemeColors.iconColor},
  description: {marginTop: vh, color: ThemeColors.iconColor},
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {width: vw * 30, marginTop: vh * 5, marginHorizontal: vw * 1},
  rightButtonStyle: {
    borderColor: ThemeColors.iconColor,
    width: vw * 30,
    marginTop: vh * 5,
    marginHorizontal: vw * 1,
  },
});
