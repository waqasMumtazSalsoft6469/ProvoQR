import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh} from '../../Utils/Units';

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: ThemeColors.iconColor,
    fontSize: vh * 1.9,
  },
});

export default styles;
