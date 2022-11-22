import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh * 3,
  },
  timerBackfround: {
    height: vh * 8,
    width: vw * 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.iconColor,
    borderRadius: vh * 2,
    margin: vh * 0.7,
  },
  timeLabel: {
    fontSize: vh * 3,
    color: ThemeColors.white,
  },
  timeLabel1: {
    fontSize: vh * 4,
  },
});
